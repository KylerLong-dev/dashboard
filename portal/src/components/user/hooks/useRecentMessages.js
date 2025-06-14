"use client"

import { useState, useEffect } from "react";
import { supabase } from '@/lib/supabaseClient';

export function useRecentMessages(limit = 3) {
  const [recentMessages, setRecentMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getRecentMessages() {
      setLoading(true);
      setError("");
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        setError("Not logged in");
        setLoading(false);
        return;
      }
      const { data, error } = await supabase
        .from("messages")
        .select("*")
        .eq("user_id", user.id)
        .eq("sender_role", "admin")
        .order("created_at", { ascending: false })
        .limit(limit);
      if (error) setError(error.message);
      else setRecentMessages(data);
      setLoading(false);
    }
    getRecentMessages();
  }, [limit]);

  return { recentMessages, loading, error };
}
