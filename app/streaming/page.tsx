import Counter from "@/components/Counter";
import { connection } from "next/server";
import { Suspense } from "react";

// API Fetch functions
const fetchFast = async () => {
  const res = await fetch("http://localhost:3001/api/fast");
  return res.json();
};

const fetchMedium = async () => {
  const res = await fetch("http://localhost:3001/api/medium");
  return res.json();
};

const fetchSlow = async () => {
  const res = await fetch("http://localhost:3001/api/slow");
  return res.json();
};

// Skeleton Loader
const Skeleton = () => (
  <div
    style={{ backgroundColor: "#ddd", height: "20px", marginBottom: "10px" }}
  />
);

const Section = async ({
  title,
  fetchData,
}: {
  title: string;
  fetchData: () => Promise<boolean>;
}) => {
  await fetchData();

  return (
    <div style={{ padding: "1em" }}>
      <h2>{title}</h2>
      <div>Loaded</div>
      <Counter></Counter>
    </div>
  );
};

export default async function StreamingPage() {
  await connection();

  return (
    <div>
      <h1>Streaming Demo</h1>
      <Suspense fallback={<Skeleton />}>
        <Section title="Slow API" fetchData={fetchSlow} />
      </Suspense>
      <Suspense fallback={<Skeleton />}>
        <Section title="Fast API" fetchData={fetchFast} />
      </Suspense>
      <Suspense fallback={<Skeleton />}>
        <Section title="Medium API" fetchData={fetchMedium} />
      </Suspense>
    </div>
  );
}
