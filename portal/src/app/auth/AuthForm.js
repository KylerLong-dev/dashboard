"use client"; 
import { useState } from "react";
import { supabase } from "../../lib/supabaseClient"
import TextInput from "@/components/TextInput";
import Button from "@components/Button";

export default function AuthForm() {

    return (
        <div>
            <h1>Sign Up</h1>
            <p>Let's get started on your project today</p>
            <form>
                <TextInput
                type="text"
                placeholder="Name"
                />
                <TextInput 
                type="email"
                placeholder="Email"
                />
                <TextInput 
                type="password"
                placeholder="Password"
                />
                <Button type="submit">Sign Up</Button>
                <p>Already have an account? <a>Log in</a></p>
            </form>
            <p>By signing up to create an account I accept Company's <a>Terms of Use and Privacy Policy</a>.</p>
        </div>
    );

}