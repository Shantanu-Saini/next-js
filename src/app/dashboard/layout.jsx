export default function DashboardLayout({
    children,
    user,
    business,
    notification,
    login
}) {

    // const isLoggedIn = false;
    const isLoggedIn = true;

    return isLoggedIn ? (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="bg-white shadow rounded-lg p-6 mb-6">
                {children}
            </div>
            <div className="flex space-x-6">
                <div className="flex-1 flex flex-col space-y-6">
                    <div className="bg-white shadow rounded-lg p-6">
                        {user}
                    </div>
                    <div className="bg-white shadow rounded-lg p-6">
                        {business}
                    </div>
                </div>
                <div className="flex-1 bg-white shadow rounded-lg p-6">
                    {notification}
                </div>
            </div>
        </div>
    ) : (
        login
    )
}
