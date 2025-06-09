"use client";
import { Send, Paperclip, Image } from "lucide-react";
import { useRef } from "react";

const MessageInput = ( { value, sendMessage, onTextChange, onAttachmentChange, onImageChange }) => {

  const imageInputRef = useRef(null);
  const attachmentInputRef = useRef(null);

  return (
    <form 
      className="border-t border-gray-200 p-4"
      onSubmit={e => {
        e.preventDefault();
        sendMessage();
      }}
    >
      <div className="flex items-center gap-2">
        <input 
          ref={attachmentInputRef}
          onChange={onAttachmentChange}
          type="file"
          className="hidden"
        />
        <button
          type="button"
          className="rounded-full p-2 text-gray-500 hover:bg-gray-100 cursor-pointer"
          onClick={() => attachmentInputRef.current.click()}
        >
          <Paperclip className="h-5 w-5" />
        </button>
        <input 
          ref={imageInputRef}
          onChange={onImageChange}
          type="file"
          className="hidden"
        />
        <button
          type="button"
          className="rounded-full p-2 text-gray-500 hover:bg-gray-100 cursor-pointer"
          onClick={() => imageInputRef.current.click()}
        >
          <Image className="h-5 w-5" />
        </button>
        <input
          type="text"
          value={value}
          onChange={onTextChange}
          placeholder="Type your message..."
          className="flex-1 rounded-full border border-gray-200 px-4 py-2 focus:border-blue-500 focus:outline-none"
        />
        <button
          type="submit"
          className="rounded-full bg-blue-500 p-2 text-white transition hover:bg-blue-600 disabled:opacity-50 cursor-pointer"
          disabled={!value.trim()} //disables if input is empty or only spaces
        >
          <Send className="h-5 w-5" />
        </button>
      </div>
    </form>
  );
};

export default MessageInput; 