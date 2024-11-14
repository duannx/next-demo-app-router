import { connection } from "next/server"

export default async function Page() {
    await connection()
    await Promise.reject('Error occured on Error 1')
    return <h1>This is error 1 page</h1>
}