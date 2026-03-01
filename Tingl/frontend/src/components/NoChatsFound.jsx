import { MessageCircleIcon } from "lucide-react";
import { useChatStore } from "../store/useChatStore";

function NoChatsFound() {
  const { setActiveTab } = useChatStore();

  return (
    <div className="flex flex-col items-center justify-center py-12 text-center space-y-5 bg-gradient-to-b from-gray-50 to-white">

      {/* Icon Circle */}
      <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
        <MessageCircleIcon className="w-8 h-8 text-yellow-600" />
      </div>

      {/* Text */}
      <div>
        <h4 className="text-gray-900 font-semibold mb-1">
          No Conversations Yet
        </h4>
        <p className="text-gray-600 text-sm px-6 max-w-xs mx-auto">
          Start a new chat by selecting a contact from the contacts tab.
        </p>
      </div>

      {/* Button */}
      <button
        onClick={() => setActiveTab("contacts")}
        className="px-5 py-2 text-sm font-medium text-white bg-yellow-600 rounded-lg hover:bg-yellow-700 transition"
      >
        Find Contacts
      </button>

    </div>
  );
}

export default NoChatsFound;