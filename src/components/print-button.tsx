export function PrintButton() {
  return (
    <a
      href="/resume.pdf"
      download
      className="inline-flex items-center gap-2 border border-foreground px-5 py-2.5 text-sm font-medium hover:bg-muted transition-colors"
    >
      Download PDF ↓
    </a>
  )
}
