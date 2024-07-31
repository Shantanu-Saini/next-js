import Link from "next/link"

export default function AdSettings() {
  return (
    <div className="flex flex-col items-center justify-center py-4 space-y-3">
        <h1 className="text-5xl font-bold">Ads Setting Page</h1>
        <Link href="/ads" className="underline text-blue-700">Go To Ads page</Link>
    </div>
  )
}
