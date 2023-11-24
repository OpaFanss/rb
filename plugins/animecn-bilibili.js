import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let bilibili = 'https://api.yimian.xyz/img?type=easyver'
	conn.sendMessage(m.chat, { image: { url: bilibili }, caption: 'bilibili karakter 🦊🐾 ' }, m)
}
handler.command = /^(bilibili)$/i
handler.tags = ['animecn']
handler.help = ['bilibili']

export default handler