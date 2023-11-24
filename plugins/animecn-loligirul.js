import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let yuanshen = `https://api.sb-tencent.cn/API/cosplay/index.php`
	conn.sendMessage(m.chat, { image: { url: yuanshen }, caption: 'yuri loli girls cute~~🦊🐾 ' }, m)
}
handler.command = /^(2)$/i
handler.tags = ['animecn']
handler.help = ['2']


export default handler

