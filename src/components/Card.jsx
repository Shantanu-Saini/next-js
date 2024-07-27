function Card({ children }) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4 hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="px-6 py-4">
                {children}
            </div>
        </div>
    )
}

export default Card
