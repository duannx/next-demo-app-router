import { fetchFast } from "@/utils/fetch";
import { connection } from "next/server";

export default async function Page({ params }: { params: { slug: string[] } }) {
  await connection();
  await fetchFast();
  const { slug } = await params;
  console.log("slug", slug);
  return <h1>This is admin page {slug.join("/")}</h1>;
}
