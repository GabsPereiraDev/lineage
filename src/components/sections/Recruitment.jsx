import { useState } from 'react'
import { UserPlus, Send, MessageCircle } from 'lucide-react'
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
    const phone = "5500000000000" // TODO: Configurar número real
    const message = encodeURIComponent(
      `*Novo Recrutamento - SentenceSide*\n\n` +
      `*Nome:* ${formData.nome}\n` +
      `*Discord:* ${formData.discord}\n` +
      `*Idade:* ${formData.idade}\n` +
      `*Experiência MMO:* ${formData.experiencia}\n` +
      `*Classe Preferida:* ${formData.classe}\n` +
      `*Horários:* ${formData.horarios}\n` +
      `*Mensagem:* ${formData.mensagem}`
    )
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank')
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
                Por que quer fazer parte da Sentence?
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
                  <Send size={18} />
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
