import { delay } from "@/utils/fetch";

export interface Comment {
  created_at: number;
  content: string;
}

export interface PostComment {
  postId: string;
  comments: Comment[];
}

export interface DB {
  getComments: (postId: string) => Promise<Comment[] | undefined>;
  insertComment: (postId: string, content: string) => Promise<boolean>;
}

const db: DB = {
  async getComments(postId: string) {
    const response = await (
      await fetch(`http://localhost:3001/db/get-comment?id=${postId}`)
    ).json();
    return response.comments;
  },

  async insertComment(postId: string, content: string) {
    console.log("inserting comment", {
      postId,
    });
    await (
      await fetch(
        `http://localhost:3001/db/add-comment?id=${postId}&content=${content}`
      )
    ).json();
    return true;
  },
};

export default db;
