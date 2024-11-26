// app/blog/[id]/page.tsx

import { FC, Suspense } from "react";

interface BlogPost {
  title: string;
  content: string;
}

interface BlogPageProps {
  params: {
    id: string;
  };
}

const BlogPage: FC<BlogPageProps> = async () => {
  const id = 'no-cache-2'
  console.log("Rendering Blog Page", id);
  // Fetch data from the API route
  const res = await fetch(`http://localhost:3001/api/blog/${id}`, {
    next: {
      revalidate: 60
    }
  });
  const blogPost: BlogPost = await res.json();

  return (
    <div>
      <h1>
        {blogPost.title} - {new Date().toLocaleString()}
      </h1>
    </div>
  );
};

export const revalidate = 0; // Set revalidation to 60 seconds

export default BlogPage;
