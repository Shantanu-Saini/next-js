import Link from "next/link"

export default function AdsPage() {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold my-4">Ads page</h1>
            <Link href="/ads/ad-settings" className="underline text-blue-700">Ad Settings</Link>
            <Link href="/ads/additional-settings" className="underline text-blue-700">Additional Settings</Link>
        </div>
    )
}
