import { XIcon } from "lucide-react";
import { useChatStore } from "../store/useChatStore";
import { useEffect } from "react";
import { useAuthStore } from "../store/useAuthStore";

function ChatHeader() {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  const isOnline = onlineUsers.includes(selectedUser._id);

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") setSelectedUser(null);
    };

    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [setSelectedUser]);

  return (
    <div className="flex justify-between items-center bg-white border-b border-gray-200 px-6 py-4">

      {/* LEFT SIDE */}
      <div className="flex items-center gap-3">

        {/* Avatar */}
        <div className="relative">
          <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200">
            <img
              src={selectedUser.profilePic || "/avatar.png"}
              alt={selectedUser.fullName}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Online Indicator */}
          {isOnline && (
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
          )}
        </div>

        {/* Name + Status */}
        <div>
          <h3 className="text-gray-900 font-semibold">
            {selectedUser.fullName}
          </h3>
          <p className="text-sm text-gray-500">
            {isOnline ? "Online" : "Offline"}
          </p>
        </div>

      </div>

      {/* CLOSE BUTTON */}
      <button
        onClick={() => setSelectedUser(null)}
        className="text-gray-500 hover:text-red-500 transition-colors"
      >
        <XIcon className="w-5 h-5" />
      </button>

    </div>
  );
}

export default ChatHeader;