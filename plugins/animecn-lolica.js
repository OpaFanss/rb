import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let yuanshen = `http://www.yzxdd.icu/api/`
	conn.sendMessage(m.chat, { image: { url: yuanshen }, caption: 'lolice sleep ~~🦊🐾 ' }, m)
}
handler.command = /^(lolice)$/i
handler.tags = ['animecn']
handler.help = ['lolice']


export default handler

