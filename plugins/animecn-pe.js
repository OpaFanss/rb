import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let honkai = `https://api.wdvipa.com/pe`
	conn.sendMessage(m.chat, { image: { url: honkai }, caption: 'pe girl cute  anime 🎶 🦊🐾 ' }, m)
}
handler.command = /^(pe)$/i
handler.tags = ['animecn']
handler.help = ['pe']

export default handler

