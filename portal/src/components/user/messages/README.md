User/messages: 
-page.js importing from ChatLayout

Components/user/messages:
-ChatLayout.js (overall structure of the chat window - fetches messages from Supabase, holds messages in state, passes messages to MessageList, handeles sending new messages)
-ChatHeader.js (Header section)
-MessageList.js (Receives messages as a prop and renders a list of MessageBubble.js)
-MessageBubble.js (Where messages received and sent will be rendered)
-MessageInput.js (Calls a function from ChatLayout.js to send a new message)

Database Structure: 
-id, user_id, sender_role, content