// app/blog/[id]/page.tsx

import { FC, Suspense } from "react";
import TimeAgo from "./TimeAgo";
import BlogContent from "./BlogContent";
import Collapsible from "./Collapsible";
import { Comments } from "./Comments";
import Form from "./Form";

interface BlogPost {
  title: string;
  content: string;
}

interface BlogPageProps {
  params: {
    id: string;
  };
}

const BlogPage: FC<BlogPageProps> = async ({ params }) => {
  const { id } = await params;
  console.log("Rendering Blog Page ID", id);
  // Fetch data from the API route
  const res = await fetch(`http://localhost:3001/api/blog/${id}`, {
    next: {
      revalidate: parseInt(id) * 30,
      tags: ["blog"],
    },
  });
  const blogPost: BlogPost = await res.json();

  return (
    <div>
      <h1>
        {blogPost.title} - {new Date().toLocaleString()}
      </h1>
      <TimeAgo time={Date.now()}></TimeAgo>
      <Collapsible title="Blog content">
        <BlogContent content={blogPost.content}></BlogContent>
      </Collapsible>
      <Suspense fallback={Loading("comment")}>
        <Comments postId={id}></Comments>
      </Suspense>
      <Form postId={id}></Form>
    </div>
  );
};

export async function generateStaticParams() {
  // Generate static paths for the first 5 blog posts
  const blogIds = [1, 2, 3, 4, 5]; // Assuming the first 5 blog IDs
  return blogIds.map((id) => ({
    id: id.toString(),
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = await params;

  // Fetch data from the API route for metadata (optional)
  const res = await fetch(`http://localhost:3001/api/blog/${id}`);
  const blogPost: BlogPost = await res.json();

  return {
    title: blogPost.title,
  };
}

export const revalidate = 60; // Set revalidation to 60 seconds

export default BlogPage;

function Loading(text: string) {
  return (
    <div
      style={{
        padding: "2em",
      }}
    >
      Loading {text}...
    </div>
  );
}
