"use client";

import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const ChatLayout = () => {
  // State for messages
  // Fetch messages from Supabase on mount
  // Function to handle sending new messages

  return (
    <div className="flex flex-col justify-between min-h-155 w-full bg-white rounded-2xl shadow-md">
      <div className="absolute top-0 left-0 w-full h-2 pointer-events-none rounded-t-2xl shadow-[0_-6px_12px_-6px_rgba(0,0,0,0.08)] z-10" />
      <div className="flex flex-col">
        <ChatHeader />
        <div className="border-b border-gray-200 w-full" />
        <MessageList />
      </div>
      <div className="flex flex-col">
        <div className="border-b border-gray-200 w-full" />
        <MessageInput />
      </div>
    </div>
  );
};

export default ChatLayout; 