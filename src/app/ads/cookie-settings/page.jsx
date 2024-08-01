import Link from "next/link"

export default function CookieSettings() {
  return (
    <div className="flex flex-col items-center justify-center space-y-3 py-4">
      <h1 className="text-5xl font-bold">Cookie Settings page</h1>
      <Link href="/ads/additional-settings" className="text-blue-700 underline">additional Settings</Link>
    </div>
  )
}
