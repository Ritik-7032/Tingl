import { LoaderIcon } from "lucide-react";

function PageLoader() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
      
      {/* Grid Background */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 flex flex-col items-center gap-4">
        <LoaderIcon className="w-12 h-12 text-yellow-600 animate-spin" />
        <p className="text-gray-600 text-sm">Loading Tingl...</p>
      </div>

    </div>
  );
}

export default PageLoader;