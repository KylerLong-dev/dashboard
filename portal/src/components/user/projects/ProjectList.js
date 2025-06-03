"use client";
import ProjectCard from "@/components/user/projects/ProjectCard";
import { supabase } from "@/lib/supabaseClient";
import { useState, useEffect } from "react";

export default function ProjectList() {

    const [ projects, setProjects ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState("");

    useEffect(() => {
        async function fetchProjects() {
            setLoading(true); 
            setError("");
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                setLoading(false);
                setError("Not logged in");
                return;
            }
            const { data, error } = await supabase.from("project_list").select("*").eq("user_id", user.id)
            if (error) {
                setError(error.message)
            }
            else {
                setProjects(data);
            }
            setLoading(false);
        }
        fetchProjects();
    }, []);

    if (loading) return <div>Loading projects...</div>;
    if (error) return <div className="text-red-500">{error}</div>;
    if (projects.length === 0) return <div>No projects found.</div>;

    return (
        <div>
            {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
    );
}