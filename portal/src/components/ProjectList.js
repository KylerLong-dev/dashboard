"use client";
import ProjectCard from "@components/ProjectCard";
import { supabase } from "@/lib/supabaseClient";
import { useState, useEffect } from "react";



export default function ProjectList() {

    const [ projects, setProjects ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState("");

    useEffect(() => {
        async function fetchProjects() {
            //Logic for retrieving project(s) data from Supabase

        }
        fetchProjects();
    }, []);

    return (
        <div>
            <ProjectCard />
        </div>
    );
}