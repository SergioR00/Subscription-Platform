import { useState } from "react";
import { Link, useLocation } from "react-router-dom"

function Memberships(){

    const location = useLocation();
    const email = location.state?.email;
    const [isStudent, setIsStudent] = useState<Boolean>(false);

    return(
        <div className="bg-black text-gray-100 min-h-screen">
            <main className="container mx-auto px-4 py-8">
                <section className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                        Pride Video Membership
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Enjoy fast delivery, unlimited streaming, and exclusive deals with your Pride Video membership.
                    </p>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {/* Monthly Plan */}
                    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-primary-500 transition-all">
                        <div className="text-center mb-6">
                            <h3 className="text-2xl font-semibold mb-2">Monthly</h3>
                            <p className="text-gray-400">Flexible membership</p>
                        </div>
                        <div className="text-center mb-8">
                            <span className="text-4xl font-bold">$4.99</span>
                            <span className="text-gray-400">/month</span>
                        </div>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center">
                                <i data-feather="check" className="text-blue-500 mr-2"></i>
                                <span>Fast, free delivery</span>
                            </li>
                            <li className="flex items-center">
                                <i data-feather="check" className="text-blue-500 mr-2"></i>
                                <span>Streaming of movies & TV</span>
                            </li>
                            <li className="flex items-center text-gray-500">
                                <i data-feather="x" className="mr-2"></i>
                                <span>No exclusive deals</span>
                            </li>
                        </ul>
                        <Link to="/payment" state={{ email: email, SubLength: "monthly", SubType: isStudent ? "student" : "normal" }} className="block w-full py-3 px-4 text-center bg-gray-700 hover:bg-blue-600 rounded-lg font-medium transition-colors">
                        Get Started
                        </Link>
                    </div>

                    {/* Annual Plan */}
                    <div className="bg-gray-800 rounded-xl p-6 border-2 border-primary-500 transform scale-105 relative">
                        <div className="absolute top-0 right-0 bg-primary-500 text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
                            Most Popular
                        </div>
                        <div className="text-center mb-6">
                            <h3 className="text-2xl font-semibold mb-2">Annual</h3>
                            <p className="text-gray-400">Best value</p>
                        </div>
                        <div className="text-center mb-8">
                            <span className="text-4xl font-bold">$49.95</span>
                            <span className="text-gray-400">/year</span>
                            <p className="text-sm text-gray-400 mt-1">2 months free</p>
                        </div>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center">
                                <i data-feather="check" className="text-blue-500 mr-2"></i>
                                <span>All Monthly benefits</span>
                            </li>
                            <li className="flex items-center">
                                <i data-feather="check" className="text-blue-500 mr-2"></i>
                                <span>Exclusive member deals</span>
                            </li>
                            <li className="flex items-center">
                                <i data-feather="check" className="text-blue-500 mr-2"></i>
                                <span>Free games & content</span>
                            </li>
                        </ul>
                        <Link to="/payment" state={{ email: email, SubLength: "annual", SubType: isStudent ? "student" : "normal" }} className="block w-full py-3 px-4 text-center bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors">
                        Get Started
                        </Link>
                    </div>
                </section>
                <input type="checkbox" id="estudiante" name="estudiante" onChange={(e) => setIsStudent(e.target.checked)}></input>
                <label>I'm a student</label>
            </main>
        </div>
    )
}

export default Memberships