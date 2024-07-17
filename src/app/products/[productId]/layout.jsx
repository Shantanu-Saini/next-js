export default function ProductDetailsLayout({ children }){
    return (
        <>
            {children}
            <div className="flex flex-col items-center justify-center">
                <h1 className="font-semibold">Product Details</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, commodi?</p>
            </div>
        </>
    )
}