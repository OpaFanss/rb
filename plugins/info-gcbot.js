let handler = async (m, { conn }) => {
conn.reply(m.chat, `group bot rubby md
* nama gc:ཌ⧼RubbyBotzz➼FurinaMD➼KomariMD⧽ད*
   linkgc ${link.gc}

*subscribe cenel own juga kak baiar tau info bot update*
https://youtube.com/@KENZZOFFCIAL?si=5FN1-PfUHYbD0LXU
`, m)
}
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i

export default handler 
