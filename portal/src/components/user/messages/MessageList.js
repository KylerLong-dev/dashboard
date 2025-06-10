import { imageConfigDefault } from 'next/dist/shared/lib/image-config';
import MessageBubble from './MessageBubble';

const MessageList = ( {messages} ) => {
  return (
    <div className="p-4 max-h-130 overflow-y-auto">
      {messages.map(msg => {
        const formattedDate = new Date(msg.created_at).toLocaleDateString();
        const formattedTime = new Date(msg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const formattedTimestamp = `${formattedDate} ${formattedTime}`;
        return (
          <MessageBubble
            key={msg.id}
            message={msg.content}
            isUser={msg.sender_role === "user"}
            timestamp={formattedTimestamp}
            image_url={msg.image_url}
            attachment_url={msg.attachment_url}
          />
        );
      })}
    </div>
  );
};

export default MessageList; 