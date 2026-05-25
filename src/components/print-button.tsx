"use client";

export function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 border border-foreground px-5 py-2.5 text-sm font-medium hover:bg-muted transition-colors"
    >
      Download PDF ↓
    </button>
  );
}
