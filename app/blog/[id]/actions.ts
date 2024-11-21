"use server";
import db from "@/app/lib/db";
import { revalidatePath } from "next/cache";

export async function addComment(prevState: string, formData: FormData) {
  const { postId, content } = {
    postId: formData.get("postId") as string,
    content: formData.get("content") as string,
  };
  if (!postId || !content) return "error";
  await db.insertComment(postId, content);
  revalidatePath(`/blog/${postId}`)

  return "success";
}
