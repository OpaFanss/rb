let ytdl = require('ytdl-core')
let yts = require('yt-search')
let fs = require('fs')
let { pipeline } = require('stream')
let { promisify } = require('util')
let os = require('os')

const streamPipeline = promisify(pipeline);

var handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `Use example ${usedPrefix}${command} naruto blue bird`;
   conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
  try {
  let search = await yts(text);
  let vid = search.videos[Math.floor(Math.random() * search.videos.length)];
  if (!search) throw 'Video Not Found, Try Another Title';
  let { title, thumbnail, timestamp, views, ago, url } = vid;
  let wm = '2023 © RUBBY MD';
  
  const audioStream = ytdl(url, {
    filter: 'audioonly',
    quality: 'highestaudio',
  });

  // Get the path to the system's temporary directory
  const tmpDir = os.tmpdir();

  // Create writable stream in the temporary directory
  const writableStream = fs.createWriteStream(`${tmpDir}/${title}.mp3`);

  // Start the download
  await streamPipeline(audioStream, writableStream);

  let doc = {
    audio: {
      url: `${tmpDir}/${title}.mp3`
    },
    mimetype: 'audio/mp4',
    fileName: `${title}`,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        mediaType: 2,
        mediaUrl: url,
        title: title,
        body: 'rubby md',
        sourceUrl: url,
        thumbnail: await (await conn.getFile(thumbnail)).data
      }
    }
  };

  await conn.sendMessage(m.chat, doc, { quoted: m });

  // Delete the audio file
  fs.unlink(`${tmpDir}/${title}.mp3`, (err) => {
    if (err) {
      console.error(`Failed to delete audio file: ${err}`);
    } else {
      console.log(`Deleted audio file: ${tmpDir}/${title}.mp3`);
    }
  });
   } catch (e) {
    console.log(e);
    m.reply(`Failed :(`);
  }
};

handler.help = ['play4'].map((v) => v + ' <query>');
handler.tags = ['sound'];
handler.command = /^play4$/i;

handler.exp = 0;
handler.limit = false;

module.exports = handler
