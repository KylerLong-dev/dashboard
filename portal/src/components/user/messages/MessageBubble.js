const MessageBubble = ({ message, timestamp, isUser }) => {
  return (
    <div className={isUser ? "flex justify-end mb-2" : "flex justify-start mb-2"}>
      <div className={
        isUser
          ? "bg-blue-500 text-white rounded-2xl px-6 py-3 max-w-xl text-right"
          : "bg-gray-100 text-black rounded-2xl px-6 py-3 max-w-xl text-left"
      }>
        <div>{message}</div>
        <div className={
          isUser
          ? "text-xs text-white/70 mt-1"
          : "text-xs text-gray-400 mt-1"
        }>
          {timestamp}</div>
      </div>
    </div>
  );
};

export default MessageBubble; 