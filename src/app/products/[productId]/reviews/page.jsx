import Link from "next/link";

export default function Reviews({ params }) {
    return (
        <>
            <h1 className="text-3xl">Reviews Of Products</h1>
            
            <Link href={`/products/${params.productId}/reviews/Rohan`} className="text-2xl mx-4">Rohan</Link>
            <Link href={`/products/${params.productId}/reviews/Amit`} className="text-2xl mx-4">Amit</Link>
            <Link href={`/products/${params.productId}/reviews/Shyam`} className="text-2xl mx-4">Shyam</Link>
        </>
    )
}