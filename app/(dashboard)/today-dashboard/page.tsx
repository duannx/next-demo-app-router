import { fetchFast } from "@/utils/fetch";
import { connection } from "next/server";

export default async function TodayDashboard() {
    await connection();
    await fetchFast()
    return <h1>This is Today Dashboard</h1>
}