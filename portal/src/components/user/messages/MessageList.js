import MessageBubble from './MessageBubble';

const MessageList = () => {
  return (
    <div className="p-4">
      <MessageBubble message="Hello! How can we assist you today?" timestamp="21:23" isUser={false} />
      <MessageBubble message="I need help with my subscription" timestamp="21:25" isUser={true} />
      <MessageBubble message="I'll be happy to help you with that. Could you please provide your account details?" timestamp="21:27" isUser={false} />
    </div>
  );
};

export default MessageList; 