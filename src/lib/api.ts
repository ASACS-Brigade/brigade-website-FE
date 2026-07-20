const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") ??
  "http://localhost:4000/api/v1";

type ApiResponse<T> = {
  success?: boolean;
  data?: T;
  message?: string;
  error?:
    | string
    | {
        message?: string | string[];
      };
};

export class ApiError extends Error {
  constructor(
    message: string,
    public readonly status: number,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export async function apiRequest<T>(
  path: string,
  init?: RequestInit & { next?: { revalidate?: number } },
): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...init?.headers,
    },
  });

  const payload = (await response.json().catch(() => null)) as ApiResponse<T> | null;

  if (!response.ok) {
    const errorMessage =
      typeof payload?.error === "object"
        ? Array.isArray(payload.error.message)
          ? payload.error.message.join(", ")
          : payload.error.message
        : payload?.error;

    throw new ApiError(
      payload?.message ?? errorMessage ?? "The request could not be completed.",
      response.status,
    );
  }

  return (payload?.data ?? payload) as T;
}

export function submitContactMessage(input: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}) {
  return apiRequest("/contact", {
    method: "POST",
    body: JSON.stringify(input),
  });
}
