"use client";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import FadeIn from "../../layout/fade-in";
import { submitContactMessage } from "../../../lib/api";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  title: string;
  inquiryType: string;
  preferredContactMethod: string;
  subject: string;
  message: string;
};

type Errors = Partial<FormState>;

function validate(form: FormState): Errors {
  const errs: Errors = {};
  if (!form.fullName.trim()) errs.fullName = "Full name is required.";
  if (!form.email.trim()) errs.email = "Email is required.";
  else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Enter a valid email.";
  if (!form.message.trim()) errs.message = "Message is required.";
  return errs;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    fullName: "",
  email: "",
  phone: "",
  title: "",
  inquiryType: "General enquiry",
  preferredContactMethod: "Email",
  subject: "",
  message: "",
});
  const [errors, setErrors] = useState<Errors>({});
  const [submitError, setSubmitError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    setErrors(err => ({ ...err, [e.target.name]: undefined }));
    setSubmitError("");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    setSubmitError("");

    try {
      await submitContactMessage({
        name: form.fullName,
        email: form.email,
        phone: form.phone || undefined,
        title: form.title || undefined,
        inquiryType: form.inquiryType,
        preferredContactMethod: form.preferredContactMethod,
        subject: form.subject || form.inquiryType,
        message: form.message,
      });
      setSubmitted(true);
    } catch {
      setSubmitError("We couldn't send your message right now. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <FadeIn>
        <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
          <CheckCircle size={48} style={{ color: "#D4A017" }} />
          <h3 className="text-lg font-bold text-foreground">Message Sent!</h3>
          <p className="text-sm text-muted max-w-xs">
            Thank you for reaching out. We'll get back to you as soon as possible.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setForm({
                fullName: "",
                email: "",
                phone: "",
                title: "",
                inquiryType: "General enquiry",
                preferredContactMethod: "Email",
                subject: "",
                message: "",
              });
            }}
            className="mt-2 text-sm font-medium underline"
            style={{ color: "#D4A017" }}
          >
            Send another message
          </button>
        </div>
      </FadeIn>
    );
  }

  const inputBase =
    "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted/60 outline-none transition focus:border-[#D4A017] focus:ring-1 focus:ring-[#D4A017]";

  return (
    <FadeIn>
      <div className="rounded-xl border border-border bg-background p-6 sm:p-8 shadow-sm">
        <h2 className="text-lg font-bold text-heading mb-6">Get In Touch</h2>

        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
          {/* Full Name */}
          <div>
            <label className="block text-xs font-medium text-muted mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your name"
              value={form.fullName}
              onChange={handleChange}
              className={inputBase}
            />
            {errors.fullName && (
              <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-medium text-muted mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={form.email}
              onChange={handleChange}
              className={inputBase}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs font-medium text-muted mb-1.5">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={form.phone}
              onChange={handleChange}
              className={inputBase}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-medium text-muted">
                Message Title
              </label>
              <input
                type="text"
                name="title"
                placeholder="Short title for your message"
                value={form.title}
                onChange={handleChange}
                className={inputBase}
              />
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-medium text-muted">
                Preferred Reply
              </label>
              <select
                name="preferredContactMethod"
                value={form.preferredContactMethod}
                onChange={handleChange}
                className={inputBase}
              >
                <option>Email</option>
                <option>Phone call</option>
                <option>WhatsApp</option>
              </select>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-medium text-muted">
                Enquiry Type
              </label>
              <select
                name="inquiryType"
                value={form.inquiryType}
                onChange={handleChange}
                className={inputBase}
              >
                <option>General enquiry</option>
                <option>Membership and registration</option>
                <option>Events and parade</option>
                <option>Partnership or sponsorship</option>
                <option>Pastoral or prayer request</option>
              </select>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-medium text-muted">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                placeholder="What should we help with?"
                value={form.subject}
                onChange={handleChange}
                className={inputBase}
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-medium text-muted mb-1.5">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              placeholder="Type your message here..."
              value={form.message}
              onChange={handleChange}
              className={`${inputBase} resize-none`}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-500">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
            style={{ background: "#173B61" }}
          >
            {loading ? (
              <>
                <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                Sending…
              </>
            ) : (
              <>
                <Send size={15} />
                Send Message
              </>
            )}
          </button>

          {submitError && (
            <p className="text-sm font-medium text-red-500">{submitError}</p>
          )}
        </form>
      </div>
    </FadeIn>
  );
}
