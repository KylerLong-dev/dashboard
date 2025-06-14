"use client"
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";


export function useUserTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchTasks() {
      setLoading(true);
      setError("");
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        setError("No current user logged in");
        setLoading(false);
        return;
      }
      const { data, error } = await supabase
        .from("task_list")
        .select("*")
        .eq("user_id", user.id);
      if (error) {
        setError(error.message);
      } else {
        setTasks(data);
      }
      setLoading(false);
    }
    fetchTasks();
  }, []);

  return { tasks, loading, error };
}