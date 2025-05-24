"use client"; 
import { useState } from "react";
import { supabase } from "../../lib/supabaseClient"
import TextInput from "@/components/TextInput";
import Button from "@components/Button";

export default function AuthForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoginMode, setIsLoginMode] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState("");

    //handleSubmit async function
    async function handleSubmit(e) {
        e.preventDefault(); //Prevent browser from reloading
        setError(""); //Clear previous errors
        setLoading(true); //Start loading

        if (isLoginMode) {
            //Call supabase to login with PW
        } else {
            //Call supabase to sign up
        }

        setLoading(false); //End loading
    }
    //use setError in handeSubmit function
    //use setLoading to manage loading state

    return (
        <div>
            <h1>{isLoginMode ? "Login" : "Sign Up"}</h1>
            <p>Let's get started on your project today</p>
            <form submit={handleSubmit}>
                {!isLoginMode && (
                    <TextInput
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className={error ? "input-error" : ""}
                    />
                )}
                {error && <p className="text-red-500 mb-2">{error}</p>}
                <TextInput 
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className={error ? "input-error" : ""}
                />
                <TextInput 
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className={error ? "input-error" : ""}
                />
                <Button type="submit" disabled={loading}>
                    {loading ? (
                        <>
                            <span className="loading loading-ring loading-sm"></span>
                            Loading...
                        </>
                    ) : (
                        isLoginMode ? "Login" : "Sign Up"
                    )}
                </Button>
                <p>
                    {isLoginMode ? "Need an account?" : "Already have an account?"}
                    <a onClick={() => setIsLoginMode(!isLoginMode)}>
                        {isLoginMode ? "Register Now" : "Login Now"}
                    </a>
                </p>
            </form>
            <p>By signing up to create an account I accept Company's <a>Terms of Use and Privacy Policy</a>.</p>
        </div>
    );

}