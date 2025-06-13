"use client"

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { SupabaseAuthClient } from "@supabase/supabase-js/dist/module/lib/SupabaseAuthClient";

const RecentMessages = () => {

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [recentMessages, setRecentMessages] = useState([]);

    useEffect(() => {
      async function getRecentMessages () {
        setLoading(true);
        setError("");
        const { data: { user } } = await supabase.auth.getUser();
        const { data, error } = await supabase
          .from("messages")
          .select("*")
          .eq("user_id", user.id)
          .eq("sender_role", "admin")
          .order("created_at", { ascending: false } )
          .limit(3);
        if (error) {
          setError(error.message);
        }
        else {
          setRecentMessages(data);
          }
        setLoading(false);
      }

      getRecentMessages();
    }, []);

    //Function to prevent max length of preview message beyond 5 words
    function limitMessageLength (msg, maxWords = 5) {
      const words = msg.split(" ");
      if (words.length > maxWords) {
        return words.slice(0, maxWords).join(" ") + "...";
      }
      else {
        return msg;
      }
    }

    function formatMessageDate(dateString) {
      const date = new Date(dateString);
      const now = new Date();

      // Check if it's today
      if (
        date.getDate() === now.getDate() &&
        date.getMonth() === now.getMonth() &&
        date.getFullYear() === now.getFullYear()
      ) {
        // Show time (e.g., 10:30 AM)
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      }

      // Check if it's yesterday
      const yesterday = new Date(now);
      yesterday.setDate(now.getDate() - 1);
      if (
        date.getDate() === yesterday.getDate() &&
        date.getMonth() === yesterday.getMonth() &&
        date.getFullYear() === yesterday.getFullYear()
      ) {
        return "Yesterday";
      }

      // Otherwise, show days ago
      const diffTime = Math.abs(now - date);
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
    }

    if (error) return <div className="text-red-500">{error}</div>;
    if (loading) return <div>Loading...</div>;

    return (
      <div>
        <ul>
          {recentMessages.map((msg, idx) => (
            <li key={msg.id} className={`mb-4 pb-2 flex justify-between ${idx !== recentMessages.length - 1 ? "border-b border-gray-200" : ""}`}>
              <div>
                <p className="font-semibold text-blue-700">Kyler Long</p>
                <p className="text-gray-700">{limitMessageLength(msg.content)}</p>
              </div>
              <p className="text-xs text-gray-400">
                {formatMessageDate(msg.created_at)}
              </p>
            </li>
          ))}
        </ul>
        <div className="flex justify-center">
          <a
            href="/user/messages"
            className="px-4 py-2 bg-blue-500 text-white rounded font-semibold hover:bg-blue-600 transition duration-300 text-center"
          >
            View all messages
          </a>
        </div>
      </div>
    );
  };
  
  export default RecentMessages;