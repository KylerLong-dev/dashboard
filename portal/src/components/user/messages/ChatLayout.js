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
  const [attachment, setAttachment] = useState(null);
  const [image, setImage] = useState(null);

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
  async function sendMessage () {
    const { data: { user } } = await supabase.auth.getUser();

    //Upload attachment if present
    let attachmentUrl = null;
    if (attachment) {
      attachmentUrl = await uploadFile(attachment, user.id);
    }

    //Upload image is present
    let imageUrl = null;
    if (image) {
      imageUrl = await uploadFile(image, user.id);
    }

    //Insert message 
    const { data, error } = await supabase
    .from("messages")
    .insert([
      {
        user_id: user.id, 
        sender_role: "user",
        content: newMessage,
        attachment_url: attachment,
        image_url: image,
      }
    ])
    .select();
    if (error) {
      setError(error.message);
    }
    else {
      setMessages(prev => [...prev, ...data]); 
      setNewMessage("");  
      setAttachment(null);
      setImage(null);   
    }
  }

  // Functions to handle attachment and image changes within chat
  function handleAttachmentChange(e) {
    const file = e.target.files[0];
    setAttachment(file);
  }

  function handleImageChange(e) {
    const file = e.target.files[0];
    setImage(file);
  }

  // Function to upload files, which is then used in sendMessage function
  async function uploadFile(file, userId) {
    if (!file) return null;

    // Create a unique file path (e.g., userId/timestamp_filename)
    const filePath = `${userId}/${Date.now()}_${file.name}`;

    // Upload the file
    const { data, error } = await supabase.storage
      .from('chat-files')
      .upload(filePath, file);

    if (error) {
      console.error('File upload error:', error);
      return null;
    }

    // Get the public URL
    const { data: publicUrlData } = supabase.storage
      .from('chat-files')
      .getPublicUrl(filePath);

    return publicUrlData?.publicUrl || null;
  }

  if (error) return <div className="text-red-500">{error}</div>;
  if (loading) return <div>Loading...</div>;

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
        <MessageInput
          value={newMessage}
          onTextChange={e => {setNewMessage(e.target.value)}}
          onAttachmentChange={handleAttachmentChange}
          onImageChange={handleImageChange}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};

export default ChatLayout; 