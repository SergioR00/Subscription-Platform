import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"

function Signup(){

    const navigate = useNavigate();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const email = formData.get("email");
        const username = formData.get("firstname") + " " + formData.get("lastname");
        const password = formData.get("password");

        axios.post("http://localhost:8080/register", {
            email,
            username,
            password
        })
        .then((response) => {
            console.log("Registro exitoso:", response.data);
            navigate("/memberships");
        })
        .catch((error) => {
            console.error("Error en la petición:", error.message);
            if (error.response) {
                console.error("Detalles del servidor:", error.response.data);
            }
        });
    };
    
    return(
        <div className="bg-black text-gray-100 min-h-screen">
            
            <main className="container mx-auto px-4 py-12 max-w-2xl">
                <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold mb-2">Create Your Account "TEST"</h1>
                        <p className="text-gray-400">Join thousands of users enjoying premium content</p>
                    </div>

                    <form id="signup-form" className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block mb-2 font-medium">First Name</label>
                                <input type="text" id="first-name" name="firstname" className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" required></input>
                            </div>
                            <div>
                                <label className="block mb-2 font-medium">Last Name</label>
                                <input type="text" id="last-name" name="lastname" className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" required></input>
                            </div>
                        </div>

                        <div>
                            <label className="block mb-2 font-medium">Email</label>
                            <input type="email" id="email" name="email" className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" required></input>
                        </div>

                        <div>
                            <label className="block mb-2 font-medium">Password</label>
                            <input type="password" id="password" name="password" className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" required></input>
                            <p className="mt-2 text-sm text-gray-400">Minimum 8 characters</p>
                        </div>

                        <div>
                            <label className="block mb-2 font-medium">Confirm Password</label>
                            <input type="password" id="confirm-password" name="confirm-password" className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" required></input>
                        </div>

                        <div className="pt-2">
                            <button type="submit" className="w-full py-3 px-4 bg-primary-500 hover:bg-primary-600 rounded-lg font-medium transition-colors">
                                Continue to Payment
                            </button>
                        </div>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-gray-400">
                            Already have an account? 
                            <a href="/login" className="text-primary-500 hover:underline">Log in</a>
                        </p>
                    </div>
                </div>
            </main>

        </div>
    )
}
export default Signup