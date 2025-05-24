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

    //handleSubmit async function

    return (
        <div>
            <h1>{isLoginMode ? "Login" : "Sign Up"}</h1>
            <p>Let's get started on your project today</p>
            <form>
                {!isLoginMode && (
                    <TextInput
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />
                )}
                <TextInput 
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                />
                <TextInput 
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
                <Button type="submit">{isLoginMode ? "Login" : "Sign Up"}</Button>
                <p>
                    {isLoginMode ? "Need an account?" : "Already have an account?"}
                
                    <a onClick={() => setIsLoginMode(!isLoginMode)}
                    >
                        {isLoginMode ? "Register Now" : "Login Now"}
                    </a>
                </p>
            </form>
            <p>By signing up to create an account I accept Company's <a>Terms of Use and Privacy Policy</a>.</p>
        </div>
    );

}