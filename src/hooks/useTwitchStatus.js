import { useState, useEffect, useCallback } from 'react'

const CLIENT_ID = import.meta.env.VITE_TWITCH_CLIENT_ID

let cachedToken = null
let tokenExpiry = 0

async function getAccessToken() {
  if (cachedToken && Date.now() < tokenExpiry) {
    return cachedToken
  }

  const res = await fetch('https://id.twitch.tv/oauth2/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: CLIENT_ID,
      client_secret: 'ikw4btzhcet2wvqarmqduxpviuuipq',
      grant_type: 'client_credentials',
    }),
  })

  const data = await res.json()
  cachedToken = data.access_token
  tokenExpiry = Date.now() + (data.expires_in - 60) * 1000
  return cachedToken
}

async function fetchStreamStatus(channel, token) {
  const res = await fetch(
    `https://api.twitch.tv/helix/streams?user_login=${encodeURIComponent(channel)}`,
    {
      headers: {
        'Client-ID': CLIENT_ID,
        Authorization: `Bearer ${token}`,
      },
    }
  )

  const data = await res.json()

  if (data.data && data.data.length > 0) {
    const stream = data.data[0]
    return {
      channel: stream.user_login.toLowerCase(),
      live: true,
      viewers: stream.viewer_count,
      title: stream.title,
      gameName: stream.game_name,
      thumbnailUrl: stream.thumbnail_url,
    }
  }

  return { channel: channel.toLowerCase(), live: false }
}

async function fetchAllStreamsStatus(channels) {
  if (!CLIENT_ID || channels.length === 0) return {}

  const token = await getAccessToken()

  const results = await Promise.all(
    channels.map((ch) => fetchStreamStatus(ch, token))
  )

  const statusMap = {}
  for (const result of results) {
    if (result.live) {
      statusMap[result.channel] = result
    }
  }

  return statusMap
}

export function useTwitchStatus(streamers) {
  const [liveStatus, setLiveStatus] = useState({})

  const checkStatus = useCallback(async () => {
    if (!streamers || streamers.length === 0) return

    const channels = streamers
      .map((s) => s.twitchChannel)
      .filter(Boolean)

    if (channels.length === 0) return

    try {
      const statusMap = await fetchAllStreamsStatus(channels)
      setLiveStatus(statusMap)
    } catch (err) {
      console.error('Erro ao verificar status Twitch:', err)
    }
  }, [streamers])

  useEffect(() => {
    checkStatus()

    // Verifica a cada 2 minutos
    const interval = setInterval(checkStatus, 2 * 60 * 1000)
    return () => clearInterval(interval)
  }, [checkStatus])

  // Retorna streamers com status atualizado
  const streamersWithStatus = streamers.map((streamer) => {
    const channel = streamer.twitchChannel?.toLowerCase()
    const status = channel ? liveStatus[channel] : null

    if (status) {
      return {
        ...streamer,
        status: 'live',
        viewers: status.viewers,
        streamTitle: status.title,
        gameName: status.gameName,
      }
    }

    return { ...streamer, status: 'offline', viewers: null }
  })

  return streamersWithStatus
}
