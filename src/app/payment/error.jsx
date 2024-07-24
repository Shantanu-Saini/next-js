"use client";
import { useState } from "react";

function ErrorBoundary({ children }) {
    const [error, setError] = useState(null);

    const resetErrorBoundary = () => {
        setError(null);
    };

    const onError = (error) => {
        setError(error);
    };

    return (
        <div>
            {error ? (
                <div>
                    <p>{error.message}</p>
                    <button onClick={resetErrorBoundary}>Try again</button>
                </div>
            ) : (
                children(onError)
            )}
        </div>
    );
}

export default ErrorBoundary;
