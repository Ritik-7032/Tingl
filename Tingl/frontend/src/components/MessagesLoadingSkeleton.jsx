function MessagesLoadingSkeleton() {
  return (
    <div className="max-w-3xl mx-auto space-y-6 px-4 py-6">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className={`flex ${
            index % 2 === 0 ? "justify-start" : "justify-end"
          } animate-pulse`}
        >
          <div
            className={`rounded-2xl px-4 py-3 ${
              index % 2 === 0
                ? "bg-gray-200"
                : "bg-yellow-100"
            }`}
            style={{
              width: `${80 + Math.random() * 120}px`,
              height: "16px",
            }}
          ></div>
        </div>
      ))}
    </div>
  );
}

export default MessagesLoadingSkeleton;