function BorderAnimatedContainer({ children }) {
  return (
    <div
      className="w-full h-full rounded-2xl border border-transparent flex overflow-hidden
      [background:
        linear-gradient(white,white)_padding-box,
        conic-gradient(
          from var(--border-angle),
          theme(colors.gray.300)_0%,
          theme(colors.gray.200)_40%,
          theme(colors.yellow.500)_50%,
          theme(colors.yellow.400)_55%,
          theme(colors.yellow.500)_60%,
          theme(colors.gray.200)_80%
        )_border-box
      ]
      animate-border"
    >
      {children}
    </div>
  );
}

export default BorderAnimatedContainer;