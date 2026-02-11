export default function SectionTitle({ children, subtitle, className = '', center = true }) {
  return (
    <div className={`${center ? 'text-center' : ''} mb-12 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
        {children}
      </h2>
      {subtitle && (
        <p className="text-white/60 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
