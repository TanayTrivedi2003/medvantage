import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-lg mb-6">Oops! Page not found</p>

            <Link
                to="/"
                className="px-6 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default NotFound;
