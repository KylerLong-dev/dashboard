"use client";

import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';

const ChatLayout = () => {
  // State for messages
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  // Fetch messages from Supabase on mount
  useEffect(() => {
    async function getMessages () {
      setLoading(true);
      setError(""); //clears previous error message
      const { data: { user } } = await supabase.auth.getUser();
      const { data, error } = await supabase.from("messages").select("*").eq("user_id", user.id); 
      if (error) {
        setError(error.message); 
      }
      else {
        setMessages(data);
      }
      setLoading(false);
    }
    getMessages();
  }, []);
  // Function to handle sending new messages
  async function sendMessages () {
    const { data: { user } } = await supabase.auth.getUser();
    const { data, error } = await supabase.from("messages").insert([
      {
        user_id: user.id, 
        sender_role: "user",
        content: newMessage, 
      }
    ])
    if (error) {
      setError(error.message);
    }
    else {
      //Need to update messages with setMessages and then clear input 
    }
  }

  if (error) return <div className="text-red-500">{error}</div>;
  if (loading) return <div>{loading}</div>;

  return (
    <div className="flex flex-col justify-between min-h-155 w-full bg-white rounded-2xl shadow-md">
      <div className="absolute top-0 left-0 w-full h-2 pointer-events-none rounded-t-2xl shadow-[0_-6px_12px_-6px_rgba(0,0,0,0.08)] z-10" />
      <div className="flex flex-col">
        <ChatHeader />
        <div className="border-b border-gray-200 w-full" />
        <MessageList messages={messages} />
      </div>
      <div className="flex flex-col">
        <div className="border-b border-gray-200 w-full" />
        <MessageInput />
      </div>
    </div>
  );
};

export default ChatLayout; 