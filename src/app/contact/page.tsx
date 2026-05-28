import type { Metadata } from "next"
import { ContactContent } from "./contact-content"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about design engineering roles.",
}

export default function ContactPage() {
  return <ContactContent />
}
