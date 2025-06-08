import MessageBubble from './MessageBubble';

const MessageList = ( {messages} ) => {
  return (
    <div className="p-4">
      <MessageBubble message="Hello! How can we assist you today?" timestamp="21:23" isUser={false} />
    </div>
  );
};

export default MessageList; 