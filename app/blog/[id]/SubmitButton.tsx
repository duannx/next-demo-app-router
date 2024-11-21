'use client'

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const status = useFormStatus();
  return (
    <button type="submit" disabled={status.pending}>
      {" "}
      {status.pending ? "Submitting..." : "Submit"}
    </button>
  );
}
