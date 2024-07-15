export default function Books({ params }) {
    if (params.slug?.length === 2) {
        return (
            <h1>This books name is {params.slug[0]} and the writer of this book is {params.slug[1]}.</h1>
        )
    } else if (params.slug?.length === 1) {
        return (
            <h1>This book's name is {params.slug[0]}.</h1>
        )
    }
    return <h1>This is books display page</h1>
}