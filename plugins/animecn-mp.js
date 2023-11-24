import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let yuanshen = `https://t.lizi.moe/mp`
	conn.sendMessage(m.chat, { image: { url: yuanshen }, caption: 'waifu mp cute ~🦊🐾 ' }, m)
}
handler.command = /^(mp)$/i
handler.tags = ['animecn']
handler.help = ['mp']


export default handler

