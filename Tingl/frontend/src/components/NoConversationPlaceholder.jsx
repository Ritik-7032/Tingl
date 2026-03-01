import { MessageCircleIcon } from "lucide-react";

const NoConversationPlaceholder = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-6 bg-gradient-to-b from-gray-50 to-white">

      <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
        <MessageCircleIcon className="w-10 h-10 text-yellow-600" />
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        Select a Conversation
      </h3>

      <p className="text-gray-600 max-w-md">
        Choose a contact from the sidebar to start chatting or continue a previous conversation.
      </p>

    </div>
  );
};

export default NoConversationPlaceholder;