import { Server as ServerIcon, Users, Wifi, Clock, ExternalLink, Copy } from 'lucide-react'
import Button from '../ui/Button'
import SectionTitle from '../ui/SectionTitle'

const serverInfo = {
  name: 'Lineage 2 - Sentence Side',
  status: 'online',
  players: 247,
  maxPlayers: 500,
  uptime: '99.9%',
  address: 'play.sentenceside.com.br',
  port: '7777',
}

export default function ServerSection() {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <section id="server" className="py-20 relative">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(34,197,94,0.08),transparent_50%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle subtitle="Informações sobre nosso servidor e como se conectar">
          <ServerIcon className="inline-block mr-2 text-emerald-400" size={32} />
          Nosso <span className="text-emerald-400">Servidor</span>
        </SectionTitle>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Server status card */}
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
            {/* Header with status */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">{serverInfo.name}</h3>
                <p className="text-sm text-white/50">Servidor Oficial da Comunidade</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm text-emerald-400 font-medium uppercase">Online</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 divide-x divide-white/10">
              <div className="p-6 text-center">
                <Users className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                <div className="text-2xl font-semibold text-white">{serverInfo.players}</div>
                <div className="text-xs text-white/50">/ {serverInfo.maxPlayers} online</div>
              </div>
              <div className="p-6 text-center">
                <Wifi className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                <div className="text-2xl font-semibold text-white">{serverInfo.uptime}</div>
                <div className="text-xs text-white/50">uptime</div>
              </div>
              <div className="p-6 text-center">
                <Clock className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                <div className="text-2xl font-semibold text-white">24/7</div>
                <div className="text-xs text-white/50">disponível</div>
              </div>
            </div>

            {/* Connection info */}
            <div className="p-6 border-t border-white/10">
              <div className="text-sm text-white/50 mb-2">Endereço do Servidor:</div>
              <div className="flex items-center gap-2">
                <code className="flex-1 px-4 py-3 bg-black/40 rounded-lg text-emerald-400 font-mono text-sm">
                  {serverInfo.address}:{serverInfo.port}
                </code>
                <button
                  onClick={() => copyToClipboard(`${serverInfo.address}:${serverInfo.port}`)}
                  className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  title="Copiar"
                >
                  <Copy size={18} className="text-white/70" />
                </button>
              </div>
            </div>
          </div>

          {/* How to connect */}
          <div className="space-y-6">
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Como Conectar</h3>
              <ol className="space-y-4">
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm font-medium shrink-0">1</span>
                  <div>
                    <div className="text-white font-medium">Baixe o cliente do jogo</div>
                    <div className="text-sm text-white/50">Faça o download do cliente oficial</div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm font-medium shrink-0">2</span>
                  <div>
                    <div className="text-white font-medium">Configure o servidor</div>
                    <div className="text-sm text-white/50">Adicione nosso endereço nas configurações</div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm font-medium shrink-0">3</span>
                  <div>
                    <div className="text-white font-medium">Crie sua conta</div>
                    <div className="text-sm text-white/50">Registre-se e comece a jogar!</div>
                  </div>
                </li>
              </ol>
            </div>

            <div className="flex gap-4">
              <Button variant="primary" className="flex-1">
                <ExternalLink size={18} />
                Baixar Cliente
              </Button>
              <Button variant="secondary" className="flex-1">
                Guia Completo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
