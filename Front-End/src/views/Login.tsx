import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom"

function login(){

    const navigate = useNavigate();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        navigate("/memberships");
    };

    return(
        <div className="bg-black text-gray-100 min-h-screen">
            <main className="container mx-auto px-4 py-12 max-w-md">
                <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
                        <p className="text-gray-400">Sign in to access your premium content</p>
                    </div>

                    <form id="login-form" className="space-y-6">
                        <div>
                            <label className="block mb-2 font-medium">Email</label>
                            <input type="email" id="login-email" className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" required></input>
                        </div>

                        <div>
                            <label className="block mb-2 font-medium">Password</label>
                            <input type="password" id="login-password" className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" required></input>
                            <div className="mt-2 flex justify-end">
                                <a href="/forgot-password" className="text-sm text-primary-500 hover:underline">Forgot password?</a>
                            </div>
                        </div>

                        <div className="pt-2">
                            <button type="submit" onClick={handleSubmit} className="w-full py-3 px-4 bg-primary-500 hover:bg-primary-600 rounded-lg font-medium transition-colors">
                                Sign In
                            </button>
                        </div>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-gray-400">
                            Don't have an account? 
                            <Link to="/signup" className="text-primary-500 hover:underline">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default login