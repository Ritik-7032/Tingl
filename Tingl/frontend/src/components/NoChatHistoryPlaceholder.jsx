import { MessageCircleIcon } from "lucide-react";

const NoChatHistoryPlaceholder = ({ name }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-8 bg-gradient-to-b from-gray-50 to-white">

      {/* Icon */}
      <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
        <MessageCircleIcon className="w-8 h-8 text-yellow-600" />
      </div>

      {/* Heading */}
      <h3 className="text-lg font-semibold text-gray-900 mb-3">
        Start your conversation with {name}
      </h3>

      {/* Description */}
      <div className="flex flex-col space-y-4 max-w-md mb-6">
        <p className="text-gray-600 text-sm">
          This is the beginning of your conversation. Send a message to start chatting!
        </p>

        <div className="h-px w-32 bg-gradient-to-r from-transparent via-yellow-300 to-transparent mx-auto"></div>
      </div>

      {/* Quick Action Buttons */}
      <div className="flex flex-wrap gap-3 justify-center">
        <button className="px-4 py-2 text-xs font-medium text-yellow-700 bg-yellow-100 rounded-full hover:bg-yellow-200 transition">
          👋 Say Hello
        </button>

        <button className="px-4 py-2 text-xs font-medium text-yellow-700 bg-yellow-100 rounded-full hover:bg-yellow-200 transition">
          🤝 How are you?
        </button>

        <button className="px-4 py-2 text-xs font-medium text-yellow-700 bg-yellow-100 rounded-full hover:bg-yellow-200 transition">
          📅 Meet up soon?
        </button>
      </div>

    </div>
  );
};

export default NoChatHistoryPlaceholder;