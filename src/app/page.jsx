import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex items-center justify-center my-10">
        <h1>Hello World</h1>
        <p>This is Home page</p>
        <Link href="/about" className="text-2xl mx-4">about</Link>
        <Link href="/profile" className="text-2xl mx-4">profile</Link>
        <Link href="/products" className="text-2xl mx-4">products</Link>
      </div>
    </main>
  );
}
