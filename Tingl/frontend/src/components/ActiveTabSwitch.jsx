import { useChatStore } from "../store/useChatStore";

function ActiveTabSwitch() {
  const { activeTab, setActiveTab } = useChatStore();

  return (
    <div className="flex bg-gray-100 p-1 rounded-full w-fit mx-2 my-3">
      <button
        onClick={() => setActiveTab("chats")}
        className={`px-5 py-2 text-sm font-medium rounded-full transition-all ${
          activeTab === "chats"
            ? "bg-yellow-600 text-white shadow-sm"
            : "text-gray-600 hover:text-yellow-600"
        }`}
      >
        Chats
      </button>
      <button
        onClick={() => setActiveTab("contacts")}
        className={`px-5 py-2 text-sm font-medium rounded-full transition-all ${
          activeTab === "contacts"
            ? "bg-yellow-600 text-white shadow-sm"
            : "text-gray-600 hover:text-yellow-600"
        }`}
      >
        Contacts
      </button>

    </div>
  );
}

export default ActiveTabSwitch;