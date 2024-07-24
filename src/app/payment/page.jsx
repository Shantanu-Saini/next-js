"use client";
import { useRouter } from "next/navigation";
import ErrorBoundary from "./error";

function PaymentComponent({ onError }) {
    const router = useRouter();

    const handleClick = () => {
        console.log("clicked");
        router.push("/");
        // router.push('/products')
        // router.replace('/products')
        // router.back();   // move back to the last page
    };

    const handleCancel = () => {
        try {
            throw new Error("Error: Payment Failed");
        } catch (error) {
            onError(error);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center mx-4 py-4 space-y-4">
            <h1 className="text-4xl font-semibold">Payment Page</h1>
            <button
                className="bg-violet-800 text-white p-4 rounded-lg shadow-lg hover:bg-violet-700"
                onClick={handleClick}
            >
                Pay Now
            </button>
            <button
                className="bg-violet-800 text-white p-4 rounded-lg shadow-lg hover:bg-violet-700"
                onClick={handleCancel}
            >
                Cancel Payment
            </button>
        </div>
    );
}

export default function Payment() {
    return (
        <ErrorBoundary>
            {(onError) => <PaymentComponent onError={onError} />}
        </ErrorBoundary>
    );
}
