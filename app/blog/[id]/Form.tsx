"use client";

import { useActionState } from "react";
import { addComment } from "./actions";

export default function Form({ postId }: { postId: string }) {
  const [state, formAction, isPending] = useActionState(addComment, "");
  return (
    <>
      <h2 style={{ marginTop: "2em" }}>Add a comment</h2>
      <form action={formAction}>
        <input type="hidden" name="postId" value={postId} />
        <input type="textarea" name="content" />
        <button type="submit" disabled={isPending}>
          {" "}
          {isPending ? "Submitting..." : "Submit"}
        </button>
      </form>
      <p>{state}</p>
    </>
  );
}
