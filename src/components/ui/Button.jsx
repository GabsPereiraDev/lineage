export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-medium transition-all duration-300 focus-ring'

  const variants = {
    primary: 'bg-rose-500/90 hover:bg-rose-500 text-white shadow-[0_0_25px_rgba(255,0,80,0.35)]',
    secondary: 'bg-white/10 hover:bg-white/15 text-white/90 border border-white/10',
    amber: 'bg-amber-400/10 hover:bg-amber-400/15 text-amber-200/80 border border-amber-300/20',
    ghost: 'bg-transparent hover:bg-white/5 text-white/70 hover:text-white',
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
