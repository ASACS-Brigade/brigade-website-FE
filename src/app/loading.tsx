export default function Loading() {
  return (
    <main className="grid min-h-[70vh] place-items-center bg-background">
      <div className="flex flex-col items-center gap-4 text-primary">
        <span className="h-14 w-14 animate-spin rounded-full border-4 border-primary/15 border-t-secondary" />
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted">
          Loading
        </p>
      </div>
    </main>
  );
}
