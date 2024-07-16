import { notFound } from "next/navigation";

export default function ReviewDetails({ params }) {
    if (parseInt(params.reviewDetail) > 400) {
        notFound();
    }
    return (
        <>
            <h1>this is the review of product {params.productId} and review no. is {params.reviewDetail}</h1>
        </>
    )
}