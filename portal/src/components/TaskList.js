"use client";

import TaskItem from "@/components/TaskItem";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function TaskList( ) {

    const [tasks, setTasks] = useState([]); //We want an empty array so that when we fetch from supabase, we'll get an array of objects with title, description, status, and link
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchTasks() {
            setLoading(true);
            setError(""); //clears previous error
            const { data, error } = await supabase.from("task_list").select("*"); //This code currently fetches all data from task_list table, need to filter by user
            if (error) {
                setError(error.message);
            }
            else {
                setTasks(data);
            }
            setLoading(false);
        }
        fetchTasks();
    }, []);

    //

    return (
        <div>
            <TaskItem
            title="Sample Task"
            description="This is a sample task description."
            status="to_do"
            link="#"
            />
        </div>
    );    
}   