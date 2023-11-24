import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let yuanshen = `https://api.asxe.vip/random.php`
	conn.sendMessage(m.chat, { image: { url: yuanshen }, caption: 'anime character cute~~🦊🐾 ' }, m)
}
handler.command = /^(animevip)$/i
handler.tags = ['animecn']
handler.help = ['animevip']


export default handler

