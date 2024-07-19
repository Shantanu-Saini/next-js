import { notFound } from "next/navigation";

export default function ReviewDetails({ params }) {
    if (parseInt(params.reviewDetail) > 400) {
        notFound();
    }
    return (
        <>
            <h1>this is the review of product <em>{params.productId}</em> and review no. is <b>{params.reviewDetail}</b></h1>
        </>
    )
}