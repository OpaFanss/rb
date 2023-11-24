import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let yuanshen = `https://t.lizi.moe/fj`
	conn.sendMessage(m.chat, { image: { url: yuanshen }, caption: 'fj cute~~🦊🐾 ' }, m)
}
handler.command = /^(fj)$/i
handler.tags = ['animecn']
handler.help = ['fj']


export default handler

