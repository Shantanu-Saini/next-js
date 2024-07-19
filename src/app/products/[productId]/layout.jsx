export default function ProductDetailsLayout({ children }){
    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <h1 className="font-semibold text-4xl">Product Details</h1>
            </div>
            {children}
        </>
    )
}