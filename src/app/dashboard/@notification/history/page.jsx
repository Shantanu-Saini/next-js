import Card from "@/components/Card"
import Link from "next/link"

export default function NotificationHistory() {
    return (
        <>
            <div className="h-full flex flex-col justify-between items-center">
                <Card>Notification History</Card>
                <Link href="/dashboard">Notification</Link>
            </div>
        </>

    )
}
