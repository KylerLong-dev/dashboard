import Image from "next/image";

const MessageBubble = ({ message, timestamp, isUser, image_url, attachment_url }) => (
  <div className={isUser ? "flex justify-end mb-2" : "flex justify-start mb-2"}>
    <div className="flex flex-col items-end">
      {/* Render image without bubble */}
      {image_url && (
        <div className="mb-1">
          <Image
            src={image_url}
            alt="attachment"
            width={200}
            height={200}
            className="rounded-lg shadow max-h-60 object-cover bg-white"
          />
        </div>
      )}
      {/* Render text bubble only if message exists */}
      {message && message.trim() && (
        <div className={
          isUser
            ? "bg-blue-500 text-white rounded-2xl px-6 py-3 max-w-xl text-right"
            : "bg-gray-100 text-black rounded-2xl px-6 py-3 max-w-xl text-left"
        }>
          {message}
        </div>
      )}
      {/* Render attachment link if present and not an image */}
      {attachment_url && !image_url && (
        <div className="mt-2">
          <a
            href={attachment_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Download attachment
          </a>
        </div>
      )}
      {/* Timestamp always at the bottom */}
      <div className={isUser ? "text-xs text-white/70 mt-1" : "text-xs text-gray-400 mt-1"}>
        {timestamp}
      </div>
    </div>
  </div>
);

export default MessageBubble; 