import { connection } from "next/server"

export default async function Page() {
    await connection()
    await Promise.reject('Error occured on Error 2')
    return <h1>This is error 2 page</h1>
}