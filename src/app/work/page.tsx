import type { Metadata } from "next"
import { WorkContent } from "./work-content"

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected design engineering work — Bulk Image Upload and Image Manager.",
}

export default function WorkPage() {
  return <WorkContent />
}
