import Link from "next/link";

export default function ProductDetails({ params }) {
    return (
        <>
            <h1 className="text-3xl">
                This is product detail page of product <b>{params.productId}</b>
            </h1>
            
            <h1 className="my-4 text-xl">
                <Link href={`/products/${params.productId}/reviews`}>
                    Reviews for {params.productId}
                </Link>
            </h1>
        </>
    );
}
