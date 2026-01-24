import axios from "axios";
import type { FormEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Payment() {

    const navigate = useNavigate();
    const location = useLocation();
    const email = location.state?.email;
    const subLength = location.state?.subLength;
    const subType = location.state?.subType;

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        
        axios.post("http://localhost:8082/addpayment", {
            email,
            subLength,
            subType
        })
        .then((response) => {
            if (response.status === 200) {
                console.log("¡Suscripción añadida con éxito!");
                navigate("/");
            }
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
            
            <main className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-gray-800 rounded-xl p-6">
                        <h2 className="text-2xl font-bold mb-6">Payment Details</h2>
                        
                        <form id="payment-form" className="space-y-6">
                            <div>
                                <label className="block mb-2 font-medium">Name on Card</label>
                                <input type="text" id="card-name" className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" required></input>
                            </div>
                            
                            <div>
                                <label className="block mb-2 font-medium">Card Number</label>
                                <div className="relative">
                                    <input type="text" id="card-number" className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="1234 5678 9012 3456" required></input>
                                    <div className="absolute right-3 top-3 flex space-x-2">
                                        <i data-feather="credit-card" className="text-gray-400"></i>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block mb-2 font-medium">Expiry Date</label>
                                    <input type="text" id="card-expiry" className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="MM/YY" required></input>
                                </div>
                                
                                <div>
                                    <label className="block mb-2 font-medium">CVC</label>
                                    <input type="text" id="card-cvc" className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="123" required></input>
                                </div>
                            </div>
                            
                            <div>
                                <label className="block mb-2 font-medium">Coupon Code (Optional)</label>
                                <div className="flex">
                                    <input type="text" id="coupon" className="grow px-4 py-3 bg-gray-700 border border-gray-600 rounded-l-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"></input>
                                    <button type="button" className="px-4 bg-primary-500 hover:bg-primary-600 rounded-r-lg font-medium transition-colors">
                                        Apply
                                    </button>
                                </div>
                            </div>
                            
                            <div className="pt-4">
                                <button type="submit" onClick={handleSubmit} className="w-full py-3 px-4 bg-primary-500 hover:bg-primary-600 rounded-lg font-medium transition-colors">
                                    Complete Payment
                                </button>
                            </div>
                        </form>
                    </div>
                    
                    <div className="bg-gray-800 rounded-xl p-6">
                        <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                        
                        <div className="mb-6 p-4 bg-gray-700 rounded-lg">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-semibold">Medium Plan</h3>
                                <span className="text-primary-500 font-medium">$19/month</span>
                            </div>
                            
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Billing Cycle</span>
                                    <span>Monthly</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Next Billing Date</span>
                                    <span>Jun 15, 2023</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="space-y-4">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>$19.00</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Tax</span>
                                <span>$1.43</span>
                            </div>
                            <div className="border-t border-gray-700 pt-4 mt-2 flex justify-between text-lg font-semibold">
                                <span>Total</span>
                                <span>$20.43</span>
                            </div>
                        </div>
                        
                        <div className="mt-8 p-4 bg-gray-700 rounded-lg">
                            <div className="flex items-start">
                                <i data-feather="lock" className="text-primary-500 mt-1 mr-3"></i>
                                <p className="text-sm text-gray-300">
                                    Your payment is secure and encrypted. We never store your credit card details.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}

export default Payment