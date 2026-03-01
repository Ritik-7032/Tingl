import { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import UsersLoadingSkeleton from "./UsersLoadingSkeleton";
import { useAuthStore } from "../store/useAuthStore";

function ContactList() {
  const {
    getAllContacts,
    allContacts,
    setSelectedUser,
    isUsersLoading,
    selectedUser,
  } = useChatStore();

  const { onlineUsers } = useAuthStore();

  useEffect(() => {
    getAllContacts();
  }, [getAllContacts]);

  if (isUsersLoading) return <UsersLoadingSkeleton />;

  return (
    <div className="space-y-2">
      {allContacts.map((contact) => {
        const isOnline = onlineUsers.includes(contact._id);
        const isActive = selectedUser?._id === contact._id;

        return (
          <div
            key={contact._id}
            onClick={() => setSelectedUser(contact)}
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
                    src={contact.profilePic || "/avatar.png"}
                    alt={contact.fullName}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Online Indicator */}
                {isOnline && (
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                )}
              </div>

              {/* Name */}
              <h4 className="text-gray-900 font-medium truncate">
                {contact.fullName}
              </h4>

            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ContactList;