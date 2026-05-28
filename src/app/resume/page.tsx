import type { Metadata } from "next"
import { ResumeContent } from "./resume-content"

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Design engineer resume. Experience at Amazon, AWS, InVision, and Expedia.",
}

export default function ResumePage() {
  return <ResumeContent />
}
