let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
        global.db.data.users[m.sender].money = 1000
        global.db.data.users[m.sender].limit = 1000
        global.db.data.users[m.sender].exp = 1000
        global.db.data.users[m.sender].level = 999
        m.reply(`*Selamat Kamu Mendapatkan*:\n*money:* 1000\n*Limit:* 1000\n*level:* 999`)
}
handler.command = /^(cit)$/i
handler.owner = false
handler.premium = true
export default handler