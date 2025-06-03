"use client";

import TaskItem from "@/components/user/tasks/TaskItem";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function TaskList( ) {

    const [tasks, setTasks] = useState([]); //We want an empty array so that when we fetch from supabase, we'll get an array of objects with title, description, status, and link
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchTasks() {
            setLoading(true);
            setError("");
            // Get the current user
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                setError("No current user logged in");
                setLoading(false);
                return;
            }
            // Fetch only tasks for this user
            const { data, error } = await supabase.from("task_list").select("*").eq("user_id", user.id);
            if (error) {
                setError(error.message);
            } else {
                setTasks(data);
            }
            setLoading(false);
        }
        fetchTasks();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (tasks.length === 0) return <div>No tasks found.</div>;

    return (
        <div>
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    title={task.title}
                    description={task.description}
                    status={task.completed ? "Completed" : "To Do"}
                    link={task.link}
                />
             ))}
        </div>
    );    
}   