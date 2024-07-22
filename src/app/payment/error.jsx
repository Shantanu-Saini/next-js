"use client";

function ErrorBoundry({ error }) {
    return (
        <div>{error.message}</div>
    )
}

export default ErrorBoundry;