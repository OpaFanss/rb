import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let yuanshen = `https://api.ghser.com/random/pc.php`
	conn.sendMessage(m.chat, { image: { url: yuanshen }, caption: 'loli cute~~🦊🐾 ' }, m)
}
handler.command = /^(loli)$/i
handler.tags = ['animecn']
handler.help = ['loli']


export default handler

