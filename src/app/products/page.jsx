import Link from "next/link";

export default function Products() {
    return (
        <>
            <Link href="/" className="text-2xl mx-4">Home</Link>
            <h1 className="text-3xl">This is Products page</h1>
            <Link href="/products/laptop"className="text-2xl mx-4">Laptop</Link>
            <Link href="/products/bag"className="text-2xl mx-4">Bag</Link>
            <Link href="/products/shirt"className="text-2xl mx-4">Shirt</Link>
        </>
    )
}