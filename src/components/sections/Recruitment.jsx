import { useState } from 'react'
import { UserPlus, MessageCircle } from 'lucide-react'

const WhatsAppIcon = ({ size = 20, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)
import Button from '../ui/Button'
import SectionTitle from '../ui/SectionTitle'

const initialFormData = {
  nome: '',
  discord: '',
  idade: '',
  experiencia: '',
  classe: '',
  horarios: '',
  mensagem: '',
}

export default function Recruitment() {
  const [formData, setFormData] = useState(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const sendToWhatsApp = () => {
    const phone = '5516997425812'
    const message =
      `*Nova Candidatura - WarTag*\n\n` +
      `Nome/Nickname: ${formData.nome}\n` +
      `Discord: ${formData.discord}\n` +
      `Idade: ${formData.idade}\n` +
      `Experiência MMO: ${formData.experiencia}\n` +
      `Classe Preferida: ${formData.classe}\n` +
      `Horários Disponíveis: ${formData.horarios}\n` +
      `Por que quer fazer parte da WarTag: ${formData.mensagem}`
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Abre o WhatsApp com a mensagem
    sendToWhatsApp()

    // Reset form after a delay
    setTimeout(() => {
      setFormData(initialFormData)
      setIsSubmitting(false)
    }, 1000)
  }

  const inputClasses = "w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/25 transition-colors"

  return (
    <section id="recruitment" className="py-20 relative">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(255,0,90,0.1),transparent_50%)]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <SectionTitle subtitle="Preencha o formulário abaixo para se candidatar a fazer parte da nossa comunidade">
          <UserPlus className="inline-block mr-2 text-rose-400" size={32} />
          <span className="text-rose-400">Recrutamento</span>
        </SectionTitle>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10 p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Nome */}
            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">
                Nome / Nickname *
              </label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                placeholder="Seu nome ou nickname"
                className={inputClasses}
              />
            </div>

            {/* Discord */}
            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">
                Discord *
              </label>
              <input
                type="text"
                name="discord"
                value={formData.discord}
                onChange={handleChange}
                required
                placeholder="username#0000"
                className={inputClasses}
              />
            </div>

            {/* Idade */}
            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">
                Idade *
              </label>
              <input
                type="number"
                name="idade"
                value={formData.idade}
                onChange={handleChange}
                required
                min="13"
                max="99"
                placeholder="Sua idade"
                className={inputClasses}
              />
            </div>

            {/* Classe Preferida */}
            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">
                Classe Preferida
              </label>
              <select
                name="classe"
                value={formData.classe}
                onChange={handleChange}
                className={inputClasses}
              >
                <option value="">Selecione uma classe</option>
                <option value="Tank">Tank</option>
                <option value="DPS">DPS</option>
                <option value="Healer">Healer</option>
                <option value="Support">Support</option>
                <option value="Mage">Mage</option>
                <option value="Archer">Archer</option>
                <option value="Outro">Outro</option>
              </select>
            </div>

            {/* Experiência */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-white/70 mb-2">
                Experiência em MMO *
              </label>
              <select
                name="experiencia"
                value={formData.experiencia}
                onChange={handleChange}
                required
                className={inputClasses}
              >
                <option value="">Selecione sua experiência</option>
                <option value="Iniciante">Iniciante (menos de 1 ano)</option>
                <option value="Intermediário">Intermediário (1-3 anos)</option>
                <option value="Experiente">Experiente (3-5 anos)</option>
                <option value="Veterano">Veterano (5+ anos)</option>
              </select>
            </div>

            {/* Horários */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-white/70 mb-2">
                Horários Disponíveis *
              </label>
              <input
                type="text"
                name="horarios"
                value={formData.horarios}
                onChange={handleChange}
                required
                placeholder="Ex: Segunda a sexta, 19h às 23h"
                className={inputClasses}
              />
            </div>

            {/* Mensagem */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-white/70 mb-2">
                Por que quer fazer parte da WarTag?
              </label>
              <textarea
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                rows={4}
                placeholder="Conte um pouco sobre você e por que quer fazer parte da nossa comunidade..."
                className={`${inputClasses} resize-none`}
              />
            </div>
          </div>

          {/* Submit button */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <p className="text-sm text-white/50">
              <MessageCircle size={16} className="inline mr-1" />
              Ao enviar, você será redirecionado para o WhatsApp
            </p>
            <Button
              type="submit"
              variant="primary"
              className="w-full sm:w-auto px-8"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                'Enviando...'
              ) : (
                <>
                  <WhatsAppIcon size={18} />
                  Enviar Candidatura
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
