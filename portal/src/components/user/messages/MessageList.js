import MessageBubble from './MessageBubble';

const MessageList = ( {messages} ) => {
  return (
    <div className="p-4">
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
          />
        );
      })}
    </div>
  );
};

export default MessageList; 