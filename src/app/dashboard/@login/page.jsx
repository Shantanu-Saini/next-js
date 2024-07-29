import Card from "@/components/Card"
import Link from "next/link"

export default function Login() {
    return (
        <Card>
            <h1 className="font-bold text-5xl">Please Login First</h1>
            <Link href="/login" className="text-blue-700 underline text-xl">Login</Link>
        </Card>
    )
}
