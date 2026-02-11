export default function Card({ children, className = '', hover = true, ...props }) {
  return (
    <div
      className={`
        relative overflow-hidden rounded-2xl
        bg-black/40 backdrop-blur-sm
        border border-white/10
        ${hover ? 'transition-all duration-300 hover:border-white/15 hover:bg-black/55' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  )
}
