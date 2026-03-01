import { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import UsersLoadingSkeleton from "./UsersLoadingSkeleton";
import NoChatsFound from "./NoChatsFound";
import { useAuthStore } from "../store/useAuthStore";

function ChatsList() {
  const {
    getMyChatPartners,
    chats,
    isUsersLoading,
    setSelectedUser,
    selectedUser,
  } = useChatStore();

  const { onlineUsers } = useAuthStore();

  useEffect(() => {
    getMyChatPartners();
  }, [getMyChatPartners]);

  if (isUsersLoading) return <UsersLoadingSkeleton />;
  if (chats.length === 0) return <NoChatsFound />;

  return (
    <div className="space-y-2">
      {chats.map((chat) => {
        const isOnline = onlineUsers.includes(chat._id);
        const isActive = selectedUser?._id === chat._id;

        return (
          <div
            key={chat._id}
            onClick={() => setSelectedUser(chat)}
            className={`p-4 rounded-xl cursor-pointer transition-all border ${
              isActive
                ? "bg-yellow-50 border-yellow-300"
                : "bg-white border-gray-200 hover:bg-gray-50"
            }`}
          >
            <div className="flex items-center gap-3">

              {/* Avatar */}
              <div className="relative">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200">
                  <img
                    src={chat.profilePic || "/avatar.png"}
                    alt={chat.fullName}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Online indicator */}
                {isOnline && (
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                )}
              </div>

              {/* Name */}
              <h4 className="text-gray-900 font-medium truncate">
                {chat.fullName}
              </h4>

            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ChatsList;