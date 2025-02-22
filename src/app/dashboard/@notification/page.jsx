import Card from "@/components/Card"
import Link from "next/link"

export default function Notification() {
    return (
        <>
            <div className="h-full flex flex-col justify-between items-center">
                <Card>Notification</Card>
                <Link href="/dashboard/history">Notification history</Link>
            </div>
        </>

    )
}
