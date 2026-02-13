import { useState, useEffect } from 'react'

const SPREADSHEET_ID = '1DyzE8kHmosbWJfd924M-Fqfa8mOTW-OCbGovUshXj9M'

const SHEET_GIDS = {
  cpMembros: 2033658231,
  presenca: 1385495992,
  reservarItens: 2078332507,
  controleGS: 1529456181,
}

function buildUrl(gid) {
  return `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/gviz/tq?tqx=out:json&gid=${gid}`
}

function parseGvizJson(text) {
  const match = text.match(/google\.visualization\.Query\.setResponse\((.+)\);?$/)
  if (!match) return null
  const json = JSON.parse(match[1])

  const cols = json.table.cols.map((c) => c.label || '')
  const rows = json.table.rows.map((r) =>
    r.c.map((cell) => {
      if (!cell) return null
      return cell.v !== undefined && cell.v !== null ? cell.v : cell.f || null
    })
  )

  return { cols, rows }
}

function parseCPMembros(data) {
  if (!data) return { members: [], classCounts: {}, cpGroups: [] }

  const members = []
  const classCounts = {}
  const cpGroups = []

  let currentCP = null

  for (const row of data.rows) {
    const colB = row[1]
    const colC = row[2]
    const classe = row[3]
    const classeVariant = row[4]
    const level = row[5]
    const gs = row[6]
    const evolucao = row[7]

    if (colC === 'Nick') {
      const cpName = colB && colB !== 'CP' ? colB : null
      currentCP = {
        name: cpName || `CP ${cpGroups.length + 1}`,
        organizer: cpName || '',
        members: [],
      }
      cpGroups.push(currentCP)
      continue
    }

    if (!colC) {
      if (colB && currentCP && currentCP.members.length === 0 && colB !== 'CP') {
        currentCP.organizer = colB
        currentCP.name = colB
      }
      continue
    }

    const classeName = classeVariant || classe || ''

    const member = {
      cp: currentCP ? currentCP.name : '',
      nick: colC,
      classe: classeName,
      level: level ? Number(level) : null,
      gs: gs ? parseFloat(gs) : null,
      evolucao: evolucao,
    }

    members.push(member)
    if (currentCP) {
      currentCP.members.push(member)
    }

    if (classeName && classeName !== '') {
      classCounts[classeName] = (classCounts[classeName] || 0) + 1
    }
  }

  const validCPs = cpGroups.filter((cp) => cp.members.length > 0)

  return { members, classCounts, cpGroups: validCPs }
}

function parsePresenca(data) {
  if (!data) return []

  const players = []

  for (const row of data.rows) {
    const nick = row[0]
    if (!nick || nick === 'Nick') continue

    const percentage = row[7]
    if (percentage === null || percentage === undefined) continue

    players.push({
      nick,
      percentage: typeof percentage === 'number' ? percentage : parseFloat(percentage) || 0,
    })
  }

  return players.filter((p) => !isNaN(p.percentage))
}

function parseControleGS(data) {
  if (!data) return []

  const players = []

  for (const row of data.rows) {
    const cp = row[1]
    const nick = row[2]
    const classe = row[3]
    const classeVariant = row[4]
    const level = row[5]
    const gs = row[6]

    if (!nick || nick === 'Nick' || nick === 'teste') continue

    const gsValue = gs ? parseFloat(gs) : null
    if (!gsValue || isNaN(gsValue)) continue

    players.push({
      cp: cp || '',
      nick,
      classe: classeVariant || classe || '',
      level: level ? Number(level) : null,
      gs: gsValue,
    })
  }

  return players.sort((a, b) => (b.gs || 0) - (a.gs || 0))
}

export function useGoogleSheets() {
  const [data, setData] = useState({
    members: [],
    classCounts: {},
    cpGroups: [],
    presenca: [],
    gsRanking: [],
    loading: true,
    error: null,
  })

  useEffect(() => {
    async function fetchSheet(gid) {
      const res = await fetch(buildUrl(gid))
      const text = await res.text()
      return parseGvizJson(text)
    }

    async function fetchAll() {
      try {
        const [cpData, presencaData, controleGSData] = await Promise.all([
          fetchSheet(SHEET_GIDS.cpMembros),
          fetchSheet(SHEET_GIDS.presenca),
          fetchSheet(SHEET_GIDS.controleGS),
        ])

        const { members, classCounts, cpGroups } = parseCPMembros(cpData)
        const presenca = parsePresenca(presencaData)
        const gsRanking = parseControleGS(controleGSData)

        setData({
          members,
          classCounts,
          cpGroups,
          presenca,
          gsRanking,
          loading: false,
          error: null,
        })
      } catch (err) {
        console.error('Erro ao buscar dados da planilha:', err)
        setData((prev) => ({ ...prev, loading: false, error: err.message }))
      }
    }

    fetchAll()

    const interval = setInterval(fetchAll, 5 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  return data
}
