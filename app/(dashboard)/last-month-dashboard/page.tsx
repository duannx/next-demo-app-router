import { fetchMedium } from "@/utils/fetch";
import { connection } from "next/server";

export default async function TodayDashboard() {
  await connection();
  await fetchMedium();
  return <h1>This is Last Month Dashboard</h1>;
}
