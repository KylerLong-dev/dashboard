"use client"; 
import { useState } from "react";
import { supabase } from "../../lib/supabaseClient"
import TextInput from "@/components/common/TextInput";
import Button from "@/components/common/Button";
import { useRouter } from "next/navigation";

export default function AuthForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoginMode, setIsLoginMode] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState("");
    const router = useRouter();

    //handleSubmit async function
    async function handleSubmit(e) {
        e.preventDefault(); //Prevent browser from reloading
        setError(""); //Clear previous errors
        setLoading(true); //Start loading

        if (isLoginMode) {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
              });
              if (error) {
                setError(error.message);
                setLoading(false);
                return;
              }
              //Logic to handle successful login (Redirect to user dashboard)
              router.push("/user");
        } else {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                  data: { name }, // This stores the name as user metadata
                },
              });
              if (error) {
                setError(error.message);
                setLoading(false);
                return
              }
              // After successful signup, redirect to user dashboard
              router.push("/user");
        }

        setLoading(false); //End loading
    }


    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full bg-white rounded-lg shadow-2xl p-8">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">
                        {isLoginMode ? "Login" : "Sign Up"}
                    </h1>
                    <p className="text-gray-600 text-sm">
                        Let's get started on your project today
                    </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    {!isLoginMode && (
                        <div>
                            <TextInput
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                className={`w-full max-w-sm mx-auto block px-4 py-3 border-2 border-gray-300 rounded-md focus:border-blue-500 focus:outline-none text-gray-900 placeholder-gray-500 ${error ? "border-red-500" : ""}`}
                            />
                        </div>
                    )}
                    
                    {error && (
                        <div className="bg-red-50 border border-red-200 rounded-md p-3 max-w-sm mx-auto">
                            <p className="text-red-600 text-sm">{error}</p>
                        </div>
                    )}
                    
                    <div>
                        <TextInput 
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className={`w-full max-w-sm mx-auto block px-4 py-3 border-2 border-gray-300 rounded-md focus:border-blue-500 focus:outline-none text-gray-900 placeholder-gray-500 ${error ? "focus:border-red-500" : ""}`}
                        />
                    </div>
                    
                    <div>
                        <TextInput 
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className={`w-full max-w-sm mx-auto block px-4 py-3 border-2 border-gray-300 rounded-md focus:border-blue-500 focus:outline-none text-gray-900 placeholder-gray-500 ${error ? "border-red-500" : ""}`}
                        />
                    </div>
                    
                    <div className="pt-4">
                        <Button 
                            type="submit" 
                            disabled={loading}
                            className="w-full max-w-sm mx-auto block px-4 py-3 bg-slate-700 hover:bg-slate-800 disabled:bg-slate-400 text-white font-medium rounded-md transition-colors cursor-pointer"
                        >
                            {loading ? (
                                <>
                                    <span className="loading loading-ring loading-sm mr-2"></span>
                                    Loading...
                                </>
                            ) : (
                                isLoginMode ? "Login" : "Sign Up"
                            )}
                        </Button>
                    </div>
                    
                    <div className="text-center pt-6">
                        <p className="text-gray-600 text-sm">
                            {isLoginMode ? "Need an account? " : "Already have an account? "}
                            <a 
                                onClick={() => setIsLoginMode(!isLoginMode)}
                                className="text-blue-600 hover:text-blue-800 cursor-pointer font-medium"
                            >
                                {isLoginMode ? "Register Now" : "Log In"}
                            </a>
                        </p>
                    </div>
                </form>
                
                <div className="border-t border-gray-200 mt-6 pt-6">
                    <div className="text-center">
                        <p className="text-xs text-gray-500">
                            By signing up to create an account I accept Company's{" "}
                            <a className="text-blue-600 hover:text-blue-800 cursor-pointer">
                                Terms of Use and Privacy Policy
                            </a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

}