import fs from 'fs'

let handler = async (m, { conn }) => {
	let pfft = `
╭ ☻ 『 *Owner*』
│◆ .delesewa
│◆ .addsewa <hari>
│◆ .setbye <teks>
│◆ .titlein [nama]
│◆ .bcgcb
│◆ .listpc
│◆ .oadd @user
│◆ .o+ @user
│◆ .addenergi @user <amount>
│◆ .addlimit @user <amount>
│◆ .addowner [@user]
│◆ .addprem [@user] <hari>
│◆ .addxp @user <amount>
│◆ .addlimit
│◆ .addprem [@user] <days>
│◆ .banchat
│◆ .ban
│◆ .block
│◆ .unblock
│◆ .broadcast <teks>
│◆ .bc <teks>
│◆ .broadcastchats <teks>
│◆ .bcchats <teks>
│◆ .broadcastgroup <teks>
│◆ .bcgc <teks>
│◆ .clearsession
│◆ .cleartmp
│◆ .delprem [@user]
│◆ .deleteuser
│◆ .df
│◆ .email
│◆ >
│◆ =>
│◆ $ [Exec]
│◆ .getdb
│◆ .getfile
│◆ .getname <@tag/reply>
│◆ .getsessi
│◆ .getplugin <text>
│◆ .ojoin <chat.whatsapp.com>
│◆ .okick @user
│◆ .leavegc
│◆ .out
│◆ .ohidetag <teks>
│◆ .opromote @tag
│◆ .resetchat
│◆ .resetlimit
│◆ .resetprefix
│◆ .resetuser
│◆ .restart
│◆ .rf <old name> | <new name>
│◆ .renamefile <old name> | <new name>
│◆ .setbotbio
│◆ .setmenu <teks>
│◆ .setmenubefore <teks>
│◆ .setmenuheader <teks>
│◆ .setmenubody <teks>
│◆ .setmenufooter <teks>
│◆ .setmenuafter <teks>
│◆ .setppbot
│◆ .sf <teks>
│◆ .unbanchat
│◆ .unban
│◆ .unwarn @mention
│◆ .warn @tag
│◆ .self
│◆ .public
│◆ .enable <option>
│◆ .disable <option>
╰╾━━━━━━━━━━━━━━━━━━╼╯
`;
 let neko = await conn.sendMessage(m.chat, {text: '《■■□□□□□□□□》5%'})
 
 await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: neko.key,
        type: 14,
        editedMessage: {
        conversation: '《■■■■□□□□□□□□》30%'
       }
      }
    }, {})
 await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: neko.key,
        type: 14,
        editedMessage: {
        conversation: '《■■■■■■□□□□□□□□》50%'
       }
      }
    }, {})
    await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: neko.key,
        type: 14,
        editedMessage: {
        conversation: '《■■■■■■■■□□□□□□□□》60%'
       }
      }
    }, {})
    await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: neko.key,
        type: 14,
        editedMessage: {
        conversation: '《■■■■■■■■■■■□□□□□》 75%'
       }
      }
    }, {})
    await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: neko.key,
        type: 14,
        editedMessage: {
        conversation: '《■■■■■■■■■■■■■■□》95%'
       }
      }
    }, {})
    await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: neko.key,
        type: 14,
        editedMessage: {
        conversation: '《■■■■■■■■■■■■■■■》100%'
       }
      }
    }, {})
    await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: neko.key,
        type: 14,
        editedMessage: {
        conversation: '_O p a F a n s s_'
       }
      }
    }, {})

await conn.sendMessage(m.chat, { video: {
    url: 'https://telegra.ph/file/395e20536473665ab2c5d.jpg'},
    mimetype: 'video/mp4',
    fileLength: 1,
    caption: pfft,
    gifPlayback: true,
    gifAttribution: 2,
    contextInfo: {
      externalAdReply: {
      title: `OpaFanss`,
      body: ``,
      thumbnailUrl: 'https://telegra.ph/file/19e41947c0a6ae28dbf62.jpg',
      sourceUrl: 'https://chat.whatsapp.com/GBmPMkbE6ch1EjJzz3SSN7',
      mediaType: 1,
      renderLargerThumbnail: true
    }
  },
  })
  conn.sendMessage(m.chat, { audio: fs.readFileSync('./media/menu3.mp3'), quoted: m });
}
handler.command = /^(menuowner)$/i;

export default handler;