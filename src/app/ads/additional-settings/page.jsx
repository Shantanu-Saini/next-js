import Link from "next/link"

export default function AdditionalSettings() {
  return (
    <div className="flex flex-col items-center justify-center space-y-3 py-4">
      <h1 className="text-5xl font-bold">Additional Settings page</h1>
      <Link href="/ads/cookie-settings" className="text-blue-700 underline">Cookie Settings</Link>
    </div>
  )
}
