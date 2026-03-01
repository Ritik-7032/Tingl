function UsersLoadingSkeleton() {
  return (
    <div className="space-y-3">
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm animate-pulse"
        >
          <div className="flex items-center space-x-3">
            
            {/* Avatar */}
            <div className="w-12 h-12 bg-gray-200 rounded-full"></div>

            {/* Text Lines */}
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-3 bg-gray-100 rounded w-1/2"></div>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}

export default UsersLoadingSkeleton;