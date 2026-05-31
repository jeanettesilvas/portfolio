import type { Metadata } from "next"
import { BulkUploadContent } from "./bulk-upload-content"

export const metadata: Metadata = {
  title: "Bulk Image Upload",
  description:
    "How I redesigned Amazon's bulk image upload flow — reducing errors by 34% and doubling completion rate.",
}

export default function BulkUploadPage() {
  return <BulkUploadContent />
}
