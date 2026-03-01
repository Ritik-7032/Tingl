import { useState, useRef } from "react";
import { LogOutIcon, VolumeOffIcon, Volume2Icon } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

const mouseClickSound = new Audio("/sounds/mouse-click.mp3");

function ProfileHeader() {
  const { logout, authUser, updateProfile } = useAuthStore();
  const { isSoundEnabled, toggleSound } = useChatStore();
  const [selectedImg, setSelectedImg] = useState(null);

  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  return (
    <div className="p-6 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-3">

          {/* AVATAR */}
          <div className="relative">
            <button
              className="w-14 h-14 rounded-full overflow-hidden relative group border border-gray-200"
              onClick={() => fileInputRef.current.click()}
            >
              <img
                src={selectedImg || authUser.profilePic || "/avatar.png"}
                alt="User image"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <span className="text-white text-xs">Change</span>
              </div>
            </button>

            {/* ONLINE DOT */}
            <span className="absolute bottom-1 right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>

            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>

          {/* USER INFO */}
          <div>
            <h3 className="text-gray-900 font-semibold text-base max-w-[180px] truncate">
              {authUser.fullName}
            </h3>
            <p className="text-gray-500 text-xs">Online</p>
          </div>

        </div>

        {/* RIGHT SIDE BUTTONS */}
        <div className="flex gap-4 items-center">

          {/* SOUND TOGGLE */}
          <button
            className="text-gray-500 hover:text-yellow-600 transition-colors"
            onClick={() => {
              mouseClickSound.currentTime = 0;
              mouseClickSound.play().catch((error) =>
                console.log("Audio play failed:", error)
              );
              toggleSound();
            }}
          >
            {isSoundEnabled ? (
              <Volume2Icon className="w-5 h-5" />
            ) : (
              <VolumeOffIcon className="w-5 h-5" />
            )}
          </button>

          {/* LOGOUT */}
          <button
            className="text-gray-500 hover:text-red-500 transition-colors"
            onClick={logout}
          >
            <LogOutIcon className="w-5 h-5" />
          </button>

        </div>

      </div>
    </div>
  );
}

export default ProfileHeader;