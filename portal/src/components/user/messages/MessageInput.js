"use client";
import { Send, Paperclip, Image, Trash2, Plus } from "lucide-react";
import { useRef, useState } from "react";

const MessageInput = ( { value, sendMessage, onTextChange, onAttachmentChange, onImageChange, attachment, image, removeImage, removeAttachment }) => {

  const imageInputRef = useRef(null);
  const attachmentInputRef = useRef(null);
  const [showActions, setShowActions] = useState(false);

  return (
    <form 
      className="border-t border-gray-200 p-4"
      onSubmit={e => {
        e.preventDefault();
        sendMessage();
      }}
    >
      {/* Always present: hidden file inputs */}
      <input
        ref={attachmentInputRef}
        onChange={onAttachmentChange}
        type="file"
        className="hidden"
      />
      <input
        ref={imageInputRef}
        onChange={onImageChange}
        type="file"
        className="hidden"
      />

      {/* PREVIEW AREA - at the top of the form */}
      {image && (
        <div className="mb-2 flex items-center gap-2">
          <img
            src={URL.createObjectURL(image)}
            alt="Preview"
            className="h-16 w-16 object-cover rounded"
            onLoad={e => URL.revokeObjectURL(e.target.src)}
          />
          <button
            type="button"
            onClick={removeImage}
            className="ml-2 text-gray-400 hover:text-red-500 p-1"
            aria-label="Remove image"
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
      )}
      {attachment && !attachment.type.startsWith("image/") && (
        <div className="mb-2 flex items-center gap-2">
          <span className="text-sm text-gray-600">{attachment.name}</span>
          <button
            type="button"
            onClick={removeAttachment}
            className="ml-2 text-gray-400 hover:text-red-500 p-1"
            aria-label="Remove attachment"
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
      )}
      {/* END PREVIEW AREA - at the top of the form */}

      {/* START CHAT FORM */}
      <div className="flex items-center gap-2 w-full relative">
        {/* Plus button for mobile */}
        <div className="relative flex items-center">
          <button
            type="button"
            className="sm:hidden rounded-full py-2 text-gray-500 hover:bg-gray-100"
            onClick={() => setShowActions((prev) => !prev)}
          >
            <Plus className="h-5 w-5" />
          </button>
          {/* Animated Action Bar */}
          <div
            className={`
              absolute bottom-12 left-1/2 transform -translate-x-1/2
              flex flex-col gap-2 p-2 rounded-xl shadow-lg
              bg-blue-100 dark:bg-blue-900/80
              transition-all duration-300
              ${showActions ? "translate-y-0 opacity-100 pointer-events-auto" : "translate-y-8 opacity-0 pointer-events-none"}
            `}
            style={{ minWidth: 56 }} // optional: ensures width for two buttons
          >
            <button
              type="button"
              className="rounded-full p-2 text-gray-500 hover:bg-gray-100 bg-white shadow"
              onClick={() => {
                attachmentInputRef.current.click();
                setShowActions(false);
              }}
            >
              <Paperclip className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="rounded-full p-2 text-gray-500 hover:bg-gray-100 bg-white shadow"
              onClick={() => {
                imageInputRef.current.click();
                setShowActions(false);
              }}
            >
              <Image className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Paperclip and image buttons for desktop */}
        <button
          type="button"
          className="hidden sm:inline-flex rounded-full p-2 text-gray-500 hover:bg-gray-100"
          onClick={() => attachmentInputRef.current.click()}
        >
          <Paperclip className="h-5 w-5" />
        </button>
        <button
          type="button"
          className="hidden sm:inline-flex rounded-full p-2 text-gray-500 hover:bg-gray-100"
          onClick={() => imageInputRef.current.click()}
        >
          <Image className="h-5 w-5" />
        </button>
        <div className="relative flex-1">
          <input
            type="text"
            value={value}
            onChange={onTextChange}
            placeholder="Type your message..."
            className="w-full rounded-full border border-gray-200 px-4 py-2 pr-10 focus:border-blue-500 focus:outline-none min-w-0"
          />
          {/* Send button inside input on mobile */}
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-500 text-white rounded-full p-2 transition hover:bg-blue-600 disabled:opacity-50 cursor-pointer sm:hidden"
            disabled={!value.trim() && !image && !attachment}
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
        <button
          type="submit"
          className="hidden sm:inline-flex rounded-full bg-blue-500 p-2 text-white transition hover:bg-blue-600 disabled:opacity-50 cursor-pointer"
          disabled={!value.trim() && !image && !attachment}
        >
          <Send className="h-5 w-5" />
        </button>
      </div>
      {/* END CHAT FORM */}

    </form>
  );
};

export default MessageInput; 