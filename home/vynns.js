//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\

  /* SPECIAL THANKS TO
   - Deff
   - Dika Ardnt
   - Zack Mans
   - Vynn's
 */
   
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\
require("../setting/config")
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, WAFlag } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const fetch = require('node-fetch')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const xzons = require("xzons-api")
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const hx = require("hxz-api")
const xfarr = require('xfarr-api')
const bochil = require('@bochilteam/scraper')
const mathjs = require('mathjs')
const { performance } = require('perf_hooks')
const { EmojiAPI } = require("emoji-api")
const imgbbUploader = require('imgbb-uploader')
const emoji = new EmojiAPI()
const cheerio = require('cheerio')
const translate = require('translate-google')
const yts = require("yt-search");
const toMs = require('ms')
const ms = require('ms')
const jimp = require('jimp')
const IKKY = require("ikyy")
const ikyy = new IKKY()
const hikki = require('hikki-me')
const nou = require("node-os-utils");
const request = require("request");

//━━━━━━━━━━━━━━━[ Scrape ]━━━━━━━━━━━━━━━\\
let { yta, ytv, searchResult } = require('./scrape/ytdl')
let { igstalk } = require('./scrape/igstalk')
let gtts = require('./scrape/gtts')
let cerpen = require('./scrape/cerpen.js')
let { igstory } = require('./function.js')
let { mediafireDl } = require('./function.js')
let { covid } = require('./scrape/covid.js') 
let { pinterest } = require("./scrape/pinterest.js")
let { detikNews } = require('./scrape/detik.js') 
let { textpro } = require('./scrape/textpro') 
let { TiktokDownloader } = require('./scrape/tiktokdl') 
let getLocationData = require('./scrape/location')
let { igDownloader } = require('./scrape/igdown.js') 
let  Searchnabi  = require('./scrape/kisahnabi.js');
let { cnn } = require('./scrape/cnn')
let { Gempa } = require('./scrape/gempa')
let { jadwaltv }= require('./scrape/jadwaltv');
let { arti_nama } = require('./scrape/primbon.js') 
let { kbbi } = require('./scrape/kbbi')
let { AioVideoDl } = require('./scrape/aiovideodl')
let { twitter } = require('./scrape/twitter')
let { telesticker } = require("./scrape/telestick")
 
//━━━━━━━━━━━━━━━[ Lib ]━━━━━━━━━━━━━━━\\
let antiSpam = require('./lib/antispam.js')
let antispm = new antiSpam()
const { topUp } = require('./lib/topup.js')
let { smsg, formatp,checkBandwidth, reSize, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, fetchUrl, parseMention, getRandom } = require('./lib/myfunc')
let Database = require('./lib/database.js')
let Exif = require("./lib/exif.js")
let { writeExif } = require("./lib/exif2.js");
let exif = new Exif()
let dbs = new Database()
const { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let { addCmd, AddHituser } = require("./lib/hitbot.js");
let { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
let { addPlayGame, getJawabanGame, isPlayGame, cekWaktuGame, getGamePosi } = require("./lib/game");
let game = require("./lib/game");
let { color, bgcolor } = require("./lib/color")
let _prem = require("./lib/premium");
let { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/list.js')

//━━━━━━━━━━━━━━━[ Database ]━━━━━━━━━━━━━━━\\
let _registered = JSON.parse(fs.readFileSync('./home/src/registered.json'))
let db_respon_list = JSON.parse(fs.readFileSync('./home/src/list/list.json'));
let premium = JSON.parse(fs.readFileSync('./home/database/premium.json'));
let balance = JSON.parse(fs.readFileSync('./home/database/balance.json'));
let limit = JSON.parse(fs.readFileSync('./home/database/limit.json'));
let glimit = JSON.parse(fs.readFileSync('./home/database/glimit.json'));
let _simi = JSON.parse(fs.readFileSync('./home/database/simi.json'));
let antisp = []
let welmes = []
let bad = JSON.parse(fs.readFileSync('./home/src/Toxic/bad.json'))
let commund = JSON.parse(fs.readFileSync('./home/src/dashboard/datacmd.json'));
let hitbot = JSON.parse(fs.readFileSync('./home/src/dashboard/command.json'));
let userHit = JSON.parse(fs.readFileSync('./home/src/dashboard/userhit.json'));
let _cmd = JSON.parse(fs.readFileSync('./home/database/command.json'));
let _cmdUser = JSON.parse(fs.readFileSync('./home/database/commandUser.json'));
let modsNumber = JSON.parse(fs.readFileSync('./home/database/modsNumber.json'));

//━━━━━━━━━━━━━━━[ Db Game ]━━━━━━━━━━━━━━━\\
global.susunkata = db.data.game.susunkata = []
global.tebaklagu = db.data.game.tebaklagu = []
global.tebakgambar = db.data.game.tebakgambar = []
global.tebakkata = db.data.game.tebakkata = []
global.caklontong = db.data.game.lontong = []
global.caklontong_desk = db.data.game.lontong_desk = []
global.tebakkalimat = db.data.game.kalimat = []
global.tebaklirik = db.data.game.lirik = []
global.tebaktebakan = db.data.game.tebakan = []
global.family100 = db.data.game.family100 = []
global.math = db.data.game.math = []
global.kuis = db.data.game.kuis = []
global.asahotak = db.data.game.asahotak = []
global.akinator = db.data.game.akinator = {}

//━━━━━━━━━━━━━━━[ Setting ]━━━━━━━━━━━━━━━\\
let fmenu = `🌐 *About Owner*\n • Email : mybevynns@gmail.com\n • WhatsApp : https://wa.me/6289604111770/\n • Github : https://github.com/vynnshome\n • Rest Api's : web.vynnshome.xyz\n`
let footxt = ` © Support By api.vynnshome.xyz`
let modelmenu = 'doc'
let grupbot = 'https://api.vynnshome.xyz/'
let waktumath = 70
let gamewaktu = 70
let limitCount = 15
let cr = 'Mybe Vynns'
let packname = 'Ilulu - Multidevice'
let author = 'By Vynns'
//akseseval
const uss = 'thispinn'
const pass = 'keyy'

//━━━━━━━━━━━━━━━[ Module Export ]━━━━━━━━━━━━━━━\\
module.exports = vynnx = async (vynnx, m, chatUpdate, store) => {
try {
let { allmenu } = require('../home/message/help')
var body = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = /^[.#`]/.test(body) ? body.match(/^[.#`]/gi) : '`'
const isCmd = body.startsWith(prefix)
const command = body.toLowerCase().split(' ')[0] || ''
const Det = command.startsWith(prefix) 
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await vynnx.decodeJid(vynnx.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isMods = isCreator ? true : modsNumber.includes(m.sender) ? true : false
const itsMe = m.sender == botNumber ? true : false
const text = args.join(" ")
const q = args.join(" ")
const from = m.chat
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const isPersonal = m.chat.endsWith("@s.whatsapp.net")

// Group
const groupMetadata = m.isGroup ? await vynnx.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const groupMembers = m.isGroup ? groupMetadata.participants : ''

		
// Other
const isSimi = _simi.includes(m.sender) ? true : false
const isWelms = isPersonal ? welmes.includes(m.chat) : true
const isRakyat = isCreator || _registered.includes(m.sender) || false
const isPremium = isCreator ? true : _prem.checkPremiumUser(m.sender, premium)
const gcounti = global.limitawal
const gcount = isPremium ? gcounti.rakyat : gcounti.free
const isBan = banUser.includes(m.sender)

// Quoted
const content = JSON.stringify(m.message)
const isImage = (m.mtype == 'imageMessage')
const isVideo = (m.mtype == 'videoMessage')
const isSticker = (m.mtype == 'stickerMessage')
const isMedias = (m.mtype === 'imageMessage' || m.mtype === 'videoMessage')
const isQuotedImage = m.mtype === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = m.mtype === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = m.mtype === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = m.mtype === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedLocation = m.mtype === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedContact = m.mtype === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedDocs = m.mtype === 'extendedTextMessage' && content.includes('documentMessage')
const isQuotedTeks = m.mtype === 'extendedTextMessage' && content.includes('quotedMessage')
const isQuotedTag = m.mtype === 'extendedTextMessage' && content.includes('mentionedJid')
const isQuotedProd = m.mtype === 'extendedTextMessage' && content.includes('productMessage')
const isQuotedReply = m.mtype === 'extendedTextMessage' && content.includes('Message')

try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isRakyat ? global.limitawal.rakyat : global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}

let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('antilink' in chats)) chats.antilink = false
                if (!('antiwame' in chats)) chats.antiwame = false
                if (!('antidelete' in chats)) chats.antidelete = true
                if (!('autodownload' in chats)) chats.autodownload = true
                if (!('autosticker' in chats)) chats.autosticker = false
                if (!('autoreact' in chats)) chats.autoreact = true
            } else global.db.data.chats[m.chat] = {
                antilink: false,
                antiwame: false,
                antidelete: true,
                autodownload: true,
                autosticker: false,
                autoreact: true
            }
            
} catch (err) {
console.error(err)
}

//━━━━━━━━━━━━━━━[ Time ]━━━━━━━━━━━━━━━\\
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam'
                                        }
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang'
                                         }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore'
                                         }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang'
                                         }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi'
                                         }
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Malam'
                                         }
 
var buln = ['/01/', '/02/', '/03/', '/04/', '/05/', '/06/', '/07/', '/08/', '/09/', '/10/', '/11/', '/12/'];
var myHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
var tgel = new Date();
var hri = tgel.getDate();
var bulnh = tgel.getMonth();
var thisHari = tgel.getDay(),
      thisDaye = myHari[thisHari];
var yye = tgel.getYear();
var syear = (yye < 1000) ? yye + 1900 : yye;
const jangwak = (hri + '' + buln[bulnh] + '' + syear)
const janghar = (thisDaye)
const timeWib = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const timeWita = moment().tz('Asia/Makassar').format('DD/MM HH:mm:ss')
const timeWit = moment().tz('Asia/Jayapura').format('DD/MM HH:mm:ss')
const time = moment.tz("Asia/Jakarta").format("DD/MM HH:mm:ss");
const jam = moment().tz("Asia/Jakarta").format("HH:mm:ss");
const wita = moment.tz("Asia/Makassar").format("HH:mm:ss");
const wit = moment.tz("Asia/Jayapura").format("HH:mm:ss");
let locale = "id";
let d = new Date();
let gmt = new Date(0).getTime() - new Date("1 January 1970").getTime();
let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
  Math.floor((d * 1 + gmt) / 84600000) % 5
];
let date = d.toLocaleDateString(locale, {
  day: "numeric",
  month: "long",
  year: "numeric",
});
let calender = d.toLocaleDateString(locale, {
  day: "numeric",
  month: "long",
  year: "numeric",
});
let week = d.toLocaleDateString(locale, { weekday: "long" });
let waktu = d.toLocaleDateString(locale, {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
});
		
// Generate Profile Picture
const generateProfilePicture = async(buffer) => {
const jimp_1 = await jimp.read(buffer);
const resz = jimp_1.getWidth() > jimp_1.getHeight() ? jimp_1.resize(550, jimp.AUTO) : jimp_1.resize(jimp.AUTO, 650)
const jimp_2 = await jimp.read(await resz.getBufferAsync(jimp.MIME_JPEG));
return {
img: await resz.getBufferAsync(jimp.MIME_JPEG)
}
}

//━━━━━━━━━━━━━━━[ Image, Doc, React ]━━━━━━━━━━━━━━━\\
var asupannih = ['https://telegra.ph/file/8a187f4e0478ee3bad32d.jpg','https://telegra.ph/file/8a187f4e0478ee3bad32d.jpg'];
var random_asupannih = asupannih[Math.floor(Math.random() * (asupannih.length))];
let achn = await getBuffer(random_asupannih);
let kenepin = await reSize(achn, 200, 200)
let mekdi = await reSize(achn, 300, 300)

// Mimetype Document
const ymete =[`application/pdf`,`application/vnd.openxmlformats-officedocument.wordprocessingml.document`,`application/vnd.openxmlformats-officedocument.presentationml.presentation`,`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`]
const moci = ymete[Math.floor(Math.random() * ymete.length)]

//Auto React
const ini =[`😂`,`🤣`,`??`,`😍`,`😝`,`🙄`,`🤔`,`😜`,`🇲🇨`,`🗿`,`🍟`,`☺️`]
const kepyns = ini[Math.floor(Math.random() * ini.length)]

// Func React
if (isCmd) {
if (db.data.chats[m.chat].autoreact) {
const reactionMessage = {
                    react: {
                        text: kepyns,
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                vynnx.sendMessage(m.chat, reactionMessage)
await vynnx.sendPresenceUpdate('composing', m.chat)
}
}

// Welcome Message
if (isWelms === true) {
if (m.isGroup === false) {
if (m.key.fromMe === false) {
let buttons = [
                        { buttonId: `.menu`, buttonText: { displayText: '#menu' }, type: 1 }
                    ]
                    await vynnx.sendButtonText(m.chat, buttons, `Waalaikumsalam, Ada Yg Bisa Saya Bantu? Jika Ingin Menggunakan Bot Silahkan Ketik #menu`, footxt, m, {mentions: []})
await welmes.push(m.chat)
}
}
}

//━━━━━━━━━━━━━━━[ Console Log, Anti Badword ]━━━━━━━━━━━━━━━\\
if (!m.isGroup && isCmd) {
      console.log("‣", bgcolor('Command On PRIVATE CHAT', 'magenta'));
      console.log(" From :", color(pushname, "yellow"), "Tanggal :", bgcolor(janghar, 'grey'));
      console.log(" Command :", color(command.toUpperCase(), "orange"), "MessageType :", bgcolor(m.mtype, "orange"));
    }
    
// console log command ketika dalam group
    if (m.isGroup && isCmd) {
      console.log("‣", bgcolor('Command On', 'magenta'), "GROUP", color(groupName, "orange"));
      console.log(" From :", color(pushname, "yellow"), "Tanggal :", bgcolor(janghar, 'grey'));
      console.log(" Command :", color(command.toUpperCase(), "orange"), "MessageType :", bgcolor(m.mtype, "orange"));
    }

//━━━━━━━━━━━━━━━[ Afk & Regex & Premium Expired ]━━━━━━━━━━━━━━━\\

if (bad.includes(body)) {
tos = ['Astaghfirullah','Heh mulut jaga','Gapernah diajarin cara ngomong?','Dih🤢','Toxic teross']
sin =  tos[Math.floor(Math.random() * (tos.length))]
m.reply(sin) 
}

//Premium Exp
_prem.expiredCheck(vynnx, premium)

// Afk
let mentionUsers = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUsers) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}

if (db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}

//━━━━━━━━━━━━━━━[ Other ]━━━━━━━━━━━━━━━\\
let getUserRandomId = () => {
 	return _registered[Math.floor(Math.random() * _registered.length)].id
 }
let addRegisterUser = (userid, sender) => {
	let obj = { id: userid, name: sender }
	_registered.push(obj)
	fs.writeFileSync('./home/src/registered.json', JSON.stringify(_registered))
	}
let createSerial = (size) => {
	return crypto.randomBytes(size).toString('hex').slice(0, size)
	}
let cekUser = (sender) => {
	let status = false
	Object.keys(_registered).forEach((i) => {
		if (_registered[i].id === sender) {
			status = true
			}
			})
			return status
			}
let isUser = cekUser(sender)

function randomNomor(min, max = null) {
		  if (max !== null) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1)) + min;
		  } else {
			return Math.floor(Math.random() * min) + 1
		  }
		}
		const pickRandom = (arr) => {
			return arr[Math.floor(Math.random() * arr.length)]
		}

function monospace(string) {
            return '```' + string + '```'
        }

async function sendStickerFromUrl(from, url, packname1 = global.packname, author1 = global.author, options = {}) {
        	var names = Date.now() / 10000;
        	var download = function (uri, filename, callback) {
                request.head(uri, function (err, res, body) {
                    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
	            });
        	};
            exif.create(packname1, author1, `sendstc_${names}`)
        	download(url, './sticker/' + names + '.png', async function () {
                let filess = './sticker/' + names + '.png'
        	    let asw = './sticker/' + names + '.webp'
        	    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, async (err) => {
        	        exec(`webpmux -set exif ./sticker/sendstc_${names}.exif ${asw} -o ${asw}`, async (error) => {
                        vynnx.sendMessage(from, { sticker: fs.readFileSync(asw) }, options)
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
        	        })
                })
        	})
        }

        async function akiStart() {
            var data = await fetchJson(`https://api.lolhuman.xyz/api/akinator/start?apikey=${global.lolkey}`)
            return data
        }

        async function akiAnswer(server, frontaddr, session, signature, step, answer) {
	        var data = await fetchJson(`https://api.lolhuman.xyz/api/akinator/answer?apikey=${global.lolkey}&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&step=${step}&answer=${answer}`)
	        return data
	    }

        async function akiBack(server, frontaddr, session, signature, step, answer) {
            var data = await fetchJson(`https://api.lolhuman.xyz/api/akinator/back?apikey=${global.lolkey}&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&step=${step}&answer=${answer}`)
            return data
        }

        async function akiEnd(server, session, signature, step) {
            var data = await fetchJson(`https://api.lolhuman.xyz/api/akinator/end?apikey=${global.lolkey}&server=${server}&session=${session}&signature=${signature}&step=${step}`)
            return data
        }
        
        const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByReply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
     

        
//━━━━━━━━━━━━━━━[ Fake Reply ]━━━━━━━━━━━━━━━\\

const fakegroup = async(teks, judul, isi, m) => {
    vynnx.sendMessage(from, {text: teks, contextInfo:{externalAdReply: {
title:"Simple WhatsApp Bot",
body: 'Support By web.vynnshome.xyz',
thumbnail: kenepin,
sourceUrl: `https://chat.whatsapp.com/BnGVGRCPKCv3P2OI8SriBH`, 
mediaUrl: `https://chat.whatsapp.com/BnGVGRCPKCv3P2OI8SriBH`, 
renderLargerThumbnail: true, 
mediaType: 1, showAdAttribution: true
}}}, {quoted:m})
}

const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${cr},;;;\nFN:${cr},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': kenepin, thumbnail: kenepin,sendEphemeral: true}}}

const fexec = {
      key: {
        fromMe: false,
      participant: `0@s.whatsapp.net`,
        ...(m.from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}),
      },
      message: {
        productMessage: {
          product: {
            productImage: {
              mimetype: "image/jpeg",
              jpegThumbnail: kenepin
            },
            title: `WhatsApp Bot`,
            description: "Simple WhatsApp Bot",
            currencyCode: "IDR",
            priceAmount1000: "50000000",
            retailerId: `apa`,
            productImageCount: 1,
          },
          businessOwnerJid: `0@s.whatsapp.net`,
        },
      },
    };

const fakewa = async(teks, judul, isi, m) => {
    vynnx.sendMessage(from, {text: teks, contextInfo:{externalAdReply: {
title:"Owner Bot",
body: 'Support By web.vynnshome.xyz',
thumbnail: mekdi,
sourceUrl: `http://wa.me/6289604111770`, 
mediaUrl: `http://wa.me/6289604111770`, 
renderLargerThumbnail: true, 
mediaType: 1, showAdAttribution: true
}}}, {quoted:m})
}

//Reply
async function reply(teks) {
const relink = ['https://wa.me/'+botNumber.split("@")[0],linkgrupss]
const rurl = relink[Math.floor(Math.random() * relink.length)];
mamans = teks
vynnx.sendMessage(m.chat, {text:mamans,contextInfo:{mentionedJid: await vynnx.parseMention(mamans), externalAdReply:{
title: `Whatsapp Bot`,
body: "Support By web.vynnshome.xyz",
thumbnail: kenepin,
mediaType:1,
renderLargerThumbnail: false,
showAdAttribution: true,
mediaUrl: grupbot,
sourceUrl: grupbot
}}}, {quoted: fkontak})
}

//Render
async function sendRender(jid, teks, imgd, linknya, renderL, showAd, m) {
vynnx.sendMessage(jid, {text:teks, contextInfo:{externalAdReply:{
title: "Simple WhatsApp Bot",
body: "Support By web.vynnshome.xyz",
thumbnail: kenepin,
sourceUrl: linknya,
mediaUrl: linknya,
renderLargerThumbnail: renderL,
showAdAttribution: showAd,
mediaType: 1
}}}, {quoted:fkontak})
}

// Render Ig
async function sendRenderIG(jid, teks, imgd, linknya, renderL, showAd, m) {
vynnx.sendMessage(jid, {text:teks, contextInfo:{externalAdReply:{
title: "Instagram Stalk",
body: "Support By web.vynnshome.xyz",
thumbnail: imgd,
sourceUrl: linknya,
mediaUrl: "www.instagram.com",
renderLargerThumbnail: renderL,
showAdAttribution: showAd,
mediaType: 1
}}}, {quoted:fkontak})
}

//Render Gh
async function sendRenderGh(jid, teks, imgd, linknya, renderL, showAd, m) {
vynnx.sendMessage(jid, {text:teks, contextInfo:{externalAdReply:{
title: "Github Stalk",
body: "Support By web.vynnshome.xyz",
thumbnail: fs.readFileSync('./home/media/image/gh.jpg'),
sourceUrl: linknya,
mediaUrl: "www.github.com",
renderLargerThumbnail: renderL,
showAdAttribution: showAd,
mediaType: 1
}}}, {quoted: fkontak})
}

//Render Ggs
let qq = await getBuffer('https://telegra.ph/file/75ffe3024a0ff8d563da5.jpg')
async function sendRenderGgs(jid, teks, imgd, linknya, renderL, showAd, m) {
vynnx.sendMessage(jid, {text:teks, contextInfo:{externalAdReply:{
title: "Google Search",
body: "Support By web.vynnshome.xyz",
thumbnail: qq,
sourceUrl: linknya,
mediaUrl: linknya,
renderLargerThumbnail: renderL,
showAdAttribution: showAd,
mediaType: 1
}}}, {quoted:m})
}

//Mentions
function mentions(teks, mems = [], id) {
if (id == null || id == undefined || id == false) {
let res = vynnx.sendMessage(from, { text: teks, mentions: mems })
return res
} else {
let res = vynnx.sendMessage(from, { text: teks, mentions: mems }, { quoted: m })
return res
 }
}

//━━━━━━━━━━━━━━━[ Buttons ]━━━━━━━━━━━━━━━\\
const buttonsDefault2 = [
			{ urlButton: { displayText: `Website`, url : 'https://api.vynnshome.xyz/' } }
		]

const buttonsText = (from, text, footer, buttons) => {
			return vynnx.sendMessage(from, { text: text, footer: footer, templateButtons: buttons })
		}

const buttonDoc = [
           {buttonId: 'rules', buttonText: {displayText: 'Rules'}, type: 1},
           {buttonId: 'owner', buttonText: {displayText: 'Owner'}, type: 1}
           ]

const buttonsDefault = [
			{ urlButton: { displayText: `Website`, url : `${grupbot}` } },
			{ callButton: { displayText: `Contact Me`, phoneNumber: `089604111770` } },
			{ quickReplyButton: { displayText: `Rules`, id: `.rules` } },
			{ quickReplyButton: { displayText: `Info Bot`, id: `.infobot` } },
			{ quickReplyButton: { displayText: `🌏 Dashboard`, id: `.dashboard` } },
		]

// Akinator
        if (!m.isGroup && akinator.hasOwnProperty(sender.split('@')[0]) && !isCmd && ["0", "1", "2", "3", "4"].includes(budy)) {
            var { server, frontaddr, session, signature, question, step } = akinator[sender.split('@')[0]]
            var jwb = (await akiAnswer(server, frontaddr, session, signature, step, budy)).result
            if (jwb.hasOwnProperty('name')) {
                var img = await getBuffer(jwb.image)
                var cpt = `*HASIL DITEMUKAN*\n\nNama : ${jwb.name}\nDeskripsi : ${jwb.description}`
                vynnx.sendMessage(from, { image: img, caption: cpt }, { quoted: m })
                .then( res => {
                    delete akinator[sender.split("@")[0]]
                })
                return
            }
            var jques = jwb.question
            var jstep = jwb.step
            var jteks = `${jques}\n\n`
            jteks += `0 - Ya\n`
            jteks += `1 - Tidak\n`
            jteks += `2 - Tidak Tahu\n`
            jteks += `3 - Mungkin\n`
            jteks += `4 - Mungkin Tidak`
            vynnx.sendMessage(from, { text: jteks }, { quoted: m }).then( res => {
                var jaki = akinator[sender.split("@")[0]]
                jaki.question = jques
                jaki.step = jstep
                akinator[sender.split("@")[0]] = jaki
            })
        }
        
//━━━━━━━━━━━━━━━[ Antilink ]━━━━━━━━━━━━━━━\\
if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        reply(`「 *ANTI LINK* 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
        if (!isBotAdmins) return reply(`Bot Is Not Admin`)
        let gclink = (`https://chat.whatsapp.com/`+await vynnx.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
        if (isAdmins) return reply(`Admin Bebas Untuk Mengirimkan Link Apapun`)
        if (isCreator) return reply(`Kyaa Ownerku Bebas Untuk Mengirimkan Link Apapun><`)
        vynnx.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }

//━━━━━━━━━━━━━━━[ Antiwame ]━━━━━━━━━━━━━━━\\
if (db.data.chats[m.chat].antiwame) {
        if (budy.match(/(wa.me\/)/gi)) {
        reply(`「 *ANTI WAME* 」\n\nKamu terdeteksi mengirim link wame, maaf kamu akan di kick !`)
        if (!isBotAdmins) return reply(`Bot Is Not Admin`)
        if (isAdmins) return reply(`Admin Bebas Untuk Mengirimkan Link Apapun`)
        if (isCreator) return reply(`Kyaa Ownerku Bebas Untuk Mengirimkan Link Apapun><`)
        vynnx.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
		
//━━━━━━━━━━━━━━━[ Antispam ]━━━━━━━━━━━━━━━\\
if (antisp === true) {
if (isCmd && !isCreator && antispm.isFilter(from, command)) { console.log(chalk.black(chalk.bgRed('[ ANTI SPAM ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
return reply(`*[ ANTISPAM FILTER ]*\nSorry ${pushname}, harap beri jeda 5detik sebelum menggunakan bot ini kmbali`) }
if (isCmd && !isCreator) antispm.addFilter(from, command)
}

//━━━━━━━━━━━━━━━[ Auto Stick ]━━━━━━━━━━━━━━━\\
if (db.data.chats[m.chat].autosticker) {
if (m.mtype === "imageMessage") {
let media = await quoted.download()
let encmedia = await vynnx.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (m.mtype === "videoMessage") {
if ((quoted.msg || quoted).seconds > 11) return
let media = await quoted.download()
let encmedia = await vynnx.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
}
}

//━━━━━━━━━━━━━━━[ Auto Download ]━━━━━━━━━━━━━━━\\
if (db.data.chats[m.chat].autodownload) {
if (YtIdRegex.test(m.text)) {
linkdn = YtIdRegex.exec(m.text)[0]
buffer = await getBuffer(`https://telegra.ph/file/95b3ceceba091668e1257.jpg`) 
reply('*Scraping Metadata*')
                let media = await ytv(linkdn)
                let pp = media.dl_link
                let qq = await getBuffer(media.thumb)
                if (media.filesize >= 200000) return reply('File Melebihi Batas '+util.format(media))
      let buttons = [
{buttonId: `#youtubemp3 ${linkdn}`, buttonText: {displayText: 'Audio'}, type: 1}
]
let buttonMessage = {
video: {url: pp },
caption: `Done\nRequest By *${pushname}*`,
footer: footxt,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: `${media.title}`,
body: 'Support By web.vynnshome.xyz',
thumbnail:qq,
mediaType:1,
mediaUrl: `${linkdn}`, showAdAttribution: true,
sourceUrl: `${linkdn}`,
}}
}
vynnx.sendMessage(from, buttonMessage, {quoted: m})
}
}

// Auto Dl Tiktok
if (db.data.chats[m.chat].autodownload) {
if (TtIdRegex.test(m.text)) {
linkdn = TtIdRegex.exec(m.text)[0]
reply('*Scraping Metadata*')
const musim_ail = await TiktokDownloader(`${linkdn}`).catch(e => {
  reply(pesan.eror) 
  } )
  console.log(musim_ail)
  const musim_virtul = musim_ail.result.nowatermark
texttk = `🍭 Done Desu\nRequest By *${pushname}*`
let buttons = [
{buttonId: `#tiktokmp3 ${linkdn}`, buttonText: {displayText: 'Audio'}, type: 1}
]
let buttonMessage = {
video: {url: musim_virtul},
caption: texttk,
footer: footxt,
buttons: buttons,
headerType: 4
}
vynnx.sendMessage(from, buttonMessage, {quoted: m})
}
}

//Auto Dl Ig
if (db.data.chats[m.chat].autodownload) {
if (IgIdRegex.test(m.text)) {
linkdn = IgIdRegex.exec(m.text)[0]
const ftextt = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { "extendedTextMessage": { "text":"Instagram Downloader", "title": `Hmm`, 'jpegThumbnail': await reSize(achn, 200, 200, []) }}}
buffer = await getBuffer(`https://telegra.ph/file/95dc7cca717c647418b77.jpg`) 
reply('*Scraping Metadata*')
try {
let igs = await xzons.metaScrape(linkdn)
listPost = []
listnyd = 1
for (let i of igs.medias) {
listPost.push({
title: `Result Postingan ${listnyd++}`, rowId: `.igs ${i.extension} ${i.url}`, description: `• Size : ${i.formattedSize}\n• Type : ${i.extension}`})
}
const sections = [
{
title: `Hasil Yg Ditemukan`,
rows: listPost
}
]
teskd = `Select Your Media In Here`
const listMessage = {
text: teskd,
footer: footxt,
buttonText: "Click Here",
sections
}
vynnx.sendMessage(from, listMessage, {quoted:fkontak})
} catch (err) {
m.reply('Postingan Tidak Ditemukan!')
}
}
}

if (db.data.chats[m.chat].autodownload) {
if (FbIdRegex.test(m.text)) {
linkdn = FbIdRegex.exec(m.text)[0]
const FB = await AioVideoDl(`${linkdn}`)
      reply('*Scraping Metadata*')
      let thumb = FB.thumbnail     
      let medi = FB.medias
      let media = Math.floor(Math.random() * medi.length);
      let medias = medi[media];
      console.log(medias)
      let link = medias.url
      let textz = `*[ FACEBOOK VIDEO ]*\n\n*Title* : ${FB.title}\n*Size* : ${medias.formattedSize}\n*Url* : ${FB.url}\n`
      let buttons = [
{buttonId: `.fbddl ${resd.medias[1].url}`, buttonText: {displayText: 'QualityHD'}, type: 1}
]
let buttonMessage = {
video: {url: link},
caption: textz,
footer: footxt,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"Facebook Downloader",
body:footxt,
thumbnail: kenepin,
mediaType:2,
mediaUrl: `${linkdn}`, renderLargerThumbnail: true, 
sourceUrl: `${linkdn}`
}}
}
vynnx.sendMessage(from, buttonMessage, {quoted: m})
}
}

//Auto Dl Twit
if (db.data.chats[m.chat].autodownload) {
if (TwitIdRegex.test(m.text)) {
linkdn = TwitIdRegex.exec(m.text)[0]
reply('*Scraping Metadata*')
try{
      const TW = await twitter(linkdn)
      let responzeId = TW.desc
      if (responzeId.includes("undefined")) return reply('Media Not Found')
      let buttons = [
{buttonId: `.fbddl ${resd.medias[1].url}`, buttonText: {displayText: 'QualityHD'}, type: 1}
]
let buttonMessage = {
video: {url: TW.HD},
caption: TW.desc,
footer: footxt,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"Twitter Downloader",
body:footxt,
thumbnail: kenepin,
mediaType:2,
mediaUrl: `${linkdn}`, renderLargerThumbnail: true, 
sourceUrl: `${linkdn}`
}}
}
vynnx.sendMessage(from, buttonMessage, {quoted:m})
      console.log(TW)
      } catch { reply('err') }
}
}
        
//━━━━━━━━━━━━━━━[ Public & Self ]━━━━━━━━━━━━━━━\\
if (!vynnx.public) {
if (!m.key.fromMe) return
}

//━━━━━━━━━━━━━━━[ Others ]━━━━━━━━━━━━━━━\\
// Anti Delete
if (m.mtype == 'protocolMessage'){
if (db.data.chats[m.chat].antidelete) {
let array = store.messages[m.chat].array
let findex = array.findIndex(x => x.id == m.msg.key.id)
let message = array[findex]
let msg = message.msg
message.message = {
[message.mtype]: msg
}
let teks = `*「 Anti Delete Message 」*
• User : @${message.sender.split("@")[0]}
• Date : ${moment(message.messageTimestamp * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB
• Type : ${message.mtype}
ketik #antidelete off untuk mematikan fitur antidelete di group ini!`
vynnx.sendText(m.chat, teks, message, { mentions: [message.sender] }).then(res => message.copyNForward(m.chat, true))
}
}

// FUNC DASH
async function addCountCmdUser(nama, sender, u) {
            var posi = null
            var pos = null
            Object.keys(u).forEach((i) => {
                if (u[i].jid === sender) {
                    posi = i
                }
            })
            if (posi === null) {
                u.push({jid: sender, db: [{nama: nama, count: 0}]})
                fs.writeFileSync('./home/database/commandUser.json', JSON.stringify(u, null, 2));
                Object.keys(u).forEach((i) => {
                    if (u[i].jid === sender) {
                        posi = i
                    }
                })
            }
            if (posi !== null) {
                Object.keys(u[posi].db).forEach((i) => {
                    if (u[posi].db[i].nama === nama) {
                        pos = i
                    }
                })
                if (pos === null) {
                    u[posi].db.push({nama: nama, count: 1})
                    fs.writeFileSync('./home/database/commandUser.json', JSON.stringify(u, null, 2));
                } else {
                    u[posi].db[pos].count += 1
                    fs.writeFileSync('./home/database/commandUser.json', JSON.stringify(u, null, 2));
                }
            }
        }

        async function getPosiCmdUser(sender, _db) {
            var posi = null
            Object.keys(_db).forEach((i) => {
                if (_db[i].jid === sender) {
                    posi = i
                }
            })
            return posi
        }

        async function addCountCmd(nama, sender, _db) {
            addCountCmdUser(nama, sender, _cmdUser)
            var posi = null
            Object.keys(_db).forEach((i) => {
                if (_db[i].nama === nama) {
                   posi = i
                }
            })
            if (posi === null) {
                _db.push({nama: nama, count: 1})
                fs.writeFileSync('./home/database/command.json',JSON.stringify(_db, null, 2));
            } else {
                _db[posi].count += 1
                fs.writeFileSync('./home/database/command.json',JSON.stringify(_db, null, 2));
            }
        }
        

if (!isCmd && m.isGroup && isAlreadyResponList(from, body, db_respon_list)) {
var get_data_respon = getDataResponList(from, body, db_respon_list)
if (get_data_respon.isImage === false) {
vynnx.sendMessage(from, { text: sendResponList(from, body, db_respon_list) }, {
quoted: m
})
} else {
vynnx.sendMessage(from, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
quoted: m
})
}
}

//━━━━━━━━━━━━━━━[ Gane ]━━━━━━━━━━━━━━━\\
cekWaktuGame(vynnx, tebakgambar)
cekWaktuGame(vynnx, math)
cekWaktuGame(vynnx, kuis)
cekWaktuGame(vynnx, family100)

if (isPlayGame(from, tebakgambar) && isRakyat) {
  if (body.toLowerCase() == getJawabanGame(from, tebakgambar)) {
    var htgm = randomNomor(100, 1000)
addBalance(m.sender, htgm, balance)
    reply(`*Selamat Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, tebakgambar)}\nHadiah : ${htgm} balance\n\nIngin bermain lagi? ketik *${prefix}tebakgambar*`)
    tebakgambar.splice(getGamePosi(from, tebakgambar), 1)
  }
}		
if (game.isMathGame(from, math) && isRakyat){
  if (body.includes(game.getJawabanMath(from, math))){
    var htgm = randomNomor(100, 1000)
    addBalance(m.sender, htgm, balance)
    reply(`*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanMath(from, math)}\n*Hadiah :* $${htgm}\n\nIngin bermain lagi? kirim *${prefix}math*`)
    math.splice(game.getMathPosi(from, math), 1)
  }
}
if (game.isKuisGame(from, kuis) && isRakyat){
  if (body.toLowerCase().includes(game.getJawabanKuis(from, kuis))){
    var htgm = randomNomor(100, 1000)
    addBalance(m.sender, htgm, balance)
    reply(`*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanKuis(from, kuis)}\n*Hadiah :* $${htgm}\n\nIngin bermain lagi? kirim *${prefix}kuis*`)
    kuis.splice(game.getKuisPosi(from, kuis), 1)
  }
}
if (game.isfam(from, family100) && isRakyat){
    var anjuy = game.getjawaban100(from, family100)
    for (let i of anjuy){
        if (body.toLowerCase().includes(i)){
            var htgm = Math.floor(Math.random() * 1000) + 1
            addBalance(m.sender, htgm, balance)
            reply(`*Jawaban benar*\n*Jawaban :* ${i}\n*Hadiah :* $${htgm}\n*Jawaban yang blum tertebak:* ${anjuy.length - 1}`)
            var anug = anjuy.indexOf(i)
            anjuy.splice(anug, 1)
        }
    }
    if (anjuy.length < 1){
        reply(`Semua jawaban sudah tertebak\nKirim *${prefix}family100* untuk bermain lagi`)
        family100.splice(game.getfamposi(from, family100), 1)
    }
}

if (susunkata.hasOwnProperty( m.sender.split('@')[0]) && !isCmd) {
	var htgm = Math.floor(Math.random() * 1000) + 1
addBalance(m.sender, htgm, balance)
                jawaban = susunkata[m.sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    reply(`*Selamat jawaban kamu benar*\n*Jawaban :* ${jawaban}\n*Hadiah :* $${htgm}\n\nIngin bermain lagi? kirim *${prefix}susunkata*`)
                    delete susunkata[m.sender.split('@')[0]]
                } else m.reply('*Jawaban Salah!*')
            }
            
        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
kuis = true
var htgm = Math.floor(Math.random() * 1000) + 1
addBalance(m.sender, htgm, balance)
jawaban = tebaklagu[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
reply(`*Selamat jawaban kamu benar*\n*Jawaban :* ${jawaban}\n*Hadiah :* $${htgm}\n\nIngin bermain lagi? kirim *${prefix}tebaklagu*`)
delete tebaklagu[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
kuis = true
var htgm = Math.floor(Math.random() * 1000) + 1
addBalance(m.sender, htgm, balance)
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
reply(`*Selamat jawaban kamu benar*\n*Jawaban :* ${jawaban}\n*Hadiah :* $${htgm}\n\nIngin bermain lagi? kirim *${prefix}tebakgambar*`)
delete tebakgambar[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
kuis = true
var htgm = Math.floor(Math.random() * 1000) + 1
addBalance(m.sender, htgm, balance)
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
reply(`*Selamat jawaban kamu benar*\n*Jawaban :* ${jawaban}\n*Hadiah :* $${htgm}\n\nIngin bermain lagi? kirim *${prefix}tebakkata*`)
delete tebakkata[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (asahotak.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
kuis = true
var htgm = Math.floor(Math.random() * 1000) + 1
addBalance(m.sender, htgm, balance)
jawaban = asahotak[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
reply(`*Selamat jawaban kamu benar*\n*Jawaban :* ${jawaban}\n*Hadiah :* $${htgm}\n\nIngin bermain lagi? kirim *${prefix}asahotak*`)
delete asahotak[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
kuis = true
var htgm = Math.floor(Math.random() * 1000) + 1
addBalance(m.sender, htgm, balance)
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
reply(`*Selamat jawaban kamu benar*\n*Jawaban :* ${jawaban}\n*Hadiah :* $${htgm}\n\nIngin bermain lagi? kirim *${prefix}tebaklontong*`)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
kuis = true
var htgm = Math.floor(Math.random() * 1000) + 1
addBalance(m.sender, htgm, balance)
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
reply(`*Selamat jawaban kamu benar*\n*Jawaban :* ${jawaban}\n*Hadiah :* $${htgm}\n\nIngin bermain lagi? kirim *${prefix}tebakkalimat*`)
delete tebakkalimat[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
kuis = true
var htgm = Math.floor(Math.random() * 1000) + 1
addBalance(m.sender, htgm, balance)
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
reply(`*Selamat jawaban kamu benar*\n*Jawaban :* ${jawaban}\n*Hadiah :* $${htgm}\n\nIngin bermain lagi? kirim *${prefix}tebaklirik*`)
delete tebaklirik[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
kuis = true
var htgm = Math.floor(Math.random() * 1000) + 1
addBalance(m.sender, htgm, balance)
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
reply(`*Selamat jawaban kamu benar*\n*Jawaban :* ${jawaban}\n*Hadiah :* $${htgm}\n\nIngin bermain lagi? kirim *${prefix}tebaktebakan*`)
delete tebaktebakan[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

        
//━━━━━━━━━━━━━━━[ Respon Cmd With Media ]━━━━━━━━━━━━━━━\\
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: vynnx.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, vynnx.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
vynnx.ev.emit('messages.upsert', msg)
}

//━━━━━━━━━━━━━━━[ All Case ]━━━━━━━━━━━━━━━\\
if (isCmd && !isUser && !m.key.fromMe)  { 
addRegisterUser(sender)
}
if (!m.isBaileys) { // Anti Respon BotBaileys
switch(command) {

case prefix+'menu':{
	if (isBan) return reply(mess.ban)
const ftextt = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { "extendedTextMessage": { "text":"WhatsApp Bot - Mybe Vynns", "title": `Hmm`, 'jpegThumbnail': await reSize(achn, 200, 200, []) }}}
var { download, upload } = await checkBandwidth()
let moys = ` • Upload : ${upload}\n • Download : ${download}\n • Sessions : ${dbs.statDatabase("./connect/session.json").size}\n • Total Register : ${Object.keys(db.data.users).length} User`
var oit = allmenu(sender, prefix, pushname, _registered, moys, jam, date)
if (modelmenu == "text") {
vynnx.sendMessage(from, { text: oit, footer: footxt, templateButtons: buttonsDefault2 })
} else if (modelmenu == 'loc') {
await vynnx.sendButLoc(from, oit, footxt, kenepin, buttonsDefault2)
} else if (modelmenu == 'document') {
await vynnx.sendMessage(from, 
			{document: fs.readFileSync('./home/media/audio/angelbaby.mp3'), 
			jpegThumbnail: kenepin,
			mimetype: moci,
			fileLength: 999999999999,
			pageCount: 99999,
			fileName: `Runtime : ${runtime(process.uptime())}`, contextInfo: {
			externalAdReply: {
			title: `WhatsApp Bot - Mybe Vynn's`,
			sourceUrl: `https://youtube.com/watch?v=QqJ-Vphh8mgvbk`, 
			mediaUrl: `https://youtube.com/watch?v=QqJ-Vp8mhhhvbk`, 
			mediaType: 2, showAdAttribution: true,
			thumbnail: kenepin}},
			                    caption: oit,
			                    footer: footxt,
			                    buttons: [ {buttonId: '.aboutbot', buttonText: {displayText: 'About Bot'}, type: 1},{buttonId: '.owner', buttonText: {displayText: 'Owner'}, type: 1} ],
			                    headerType: 4}, 
			                   {quoted: ftextt})
} else if (modelmenu == 'gif') {
let message = await prepareWAMessageMedia({ video: {url: `https://telegra.ph/file/66fa99af6d51d0e524049.mp4`}, gifPlayback: true, gifAttribution : 1}, { upload: vynnx.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
videoMessage: message.videoMessage,
hydratedContentText: oit,
hydratedFooterText: footxt,
hydratedButtons: buttonsDefault2
}
}
}), { userJid: m.chat, quoted: m })
vynnx.relayMessage(m.chat, template.message, { messageId: template.key.id })
} else if (modelmenu == 'doc') {
let buttonMessage = {
document: fs.readFileSync('./home/media/audio/angelbaby.mp3'),
mimetype: moci,
fileName: `Runtime : ${runtime(process.uptime())}`,
fileLength: 999999999999,
pageCount: 99999,
caption: oit,
footer: footxt,
buttons: [ {buttonId: '.aboutbot', buttonText: {displayText: 'About Bot'}, type: 1},{buttonId: '.owner', buttonText: {displayText: 'Owner'}, type: 1} ],
headerType: 4,
contextInfo:{externalAdReply:{
title: `WhatsApp Bot - Mybe Vynns`,
body: "no spam this bot",
sourceUrl: ``, 
mediaUrl: ``, renderLargerThumbnail: true, 
mediaType: 1, showAdAttribution: false,
thumbnail: await reSize(achn, 300, 300) }}
}
vynnx.sendMessage(from, buttonMessage, { quoted: ftextt })
}
}
break

//━━━━━━━━━━━━━━━[ Special For Owner ]━━━━━━━━━━━━━━━\\
case prefix+'listprem':
            let txt = `List Prem\nJumlah : ${premium.length}\n\n`
            let men = [];
            for (let i of premium) {
                men.push(i.id)
                txt += `*ID :* @${i.id.split("@")[0]}\n`
                if (i.expired === 'PERMANENT') {
                    let cekvips = 'PERMANENT'
                    txt += `*Expire :* PERMANENT\n\n`
            } else {
                let cekvips = ms(i.expired - Date.now())
                txt += `*Expire :* ${cekvips.days} day(s) ${cekvips.hours} hour(s) ${cekvips.minutes} minute(s) ${cekvips.seconds} second(s)\n\n`
                }
            }
            mentions(txt, men, true)
            addCountCmd(`#listprem`, sender, _cmd)
            break
            
case prefix+'addprem':
                if (!isCreator) return reply(mess.OnlyOwner)
                if (args.length < 1) return reply(`Penggunaan :\n*${prefix}addprem* @tag waktu\n*${prefix}addprem* nomor waktu\n\nContoh : ${command} @tag 30d`)
                if (!args[0]) return reply(`Mau yang berapa hari?`)
                if (m.mentionedJid.length !== 0) {
                    _prem.addPremiumUser(m.mentionedJid[0], args[1], premium)
                    reply('Sukses')
                } else {
                 var cekap = await vynnx.onWhatsApp(args[0]+"@s.whatsapp.net")
                 if (cekap.length == 0) return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
                    _prem.addPremiumUser(args[0] + '@s.whatsapp.net', args[1], premium)
                    reply('Sukses')
                }
                addCountCmd(`#addprem`, sender, _cmd)
                break
                
            case prefix+'delprem':
                if (!isCreator) return reply(mess.OnlyOwner)
                if (args.length < 1) return reply(`Penggunaan :\n*${prefix}delprem* @tag\n*${prefix}delprem* nomor`)
                if (m.mentionedJid.length !== 0){
                    premium.splice(_prem.getPremiumPosition(m.mentionedJid[0], premium), 1)
                    fs.writeFileSync('./home/database/premium.json', JSON.stringify(premium))
                    reply('Sukses!')
                } else {
                 var cekpr = await vynnx.oWhatsApp(args[1]+"@s.whatsapp.net")
                 if (cekpr.length == 0) return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
                    premium.splice(_prem.getPremiumPosition(args[1] + '@s.whatsapp.net', premium), 1)
                    fs.writeFileSync('./home/database/premium.json', JSON.stringify(premium))
                    reply('Sukses!')
                }
                addCountCmd(`#delprem`, sender, _cmd)
                break
                
case prefix+'setppbot': {
addCountCmd(`#setppbot`, sender, _cmd)
if (isBan) return reply(mess.ban)
if (!isCreator) return reply(mess.owner)
if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${command}`)
if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${command}`)
if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${command}`)
var media = await vynnx.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `'panjang'`) {
var { img } = await generateProfilePicture(media)
await vynnx.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(media)
reply(`Sukses`)
} else {
var data = await vynnx.updateProfilePicture(botNumber, { url: media })
fs.unlinkSync(media)
reply(`Sukses`)
}
}
break

case prefix+'join': {
if (!isCreator) return reply(mess.owner)
if (isBan) return reply(mess.ban)
if (!args[0]) return reply("Linknya mana kak?")
vdd = args[0]
let vcc = vdd.split("https://chat.whatsapp.com/")[1]
if (!vcc) return reply("Link invalid!")
if (isCreator) {
await vynnx.groupAcceptInvite(vcc).then(async(res) => reply('Succes')).catch(_ => _)
reply("Succes")
} else {
vynnx.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: vcc } }]
}).then(async(res) => {
sizny = res.content[0].attrs.size
if (sizny < 50) {
teks = `Maaf anggota group anda kurang dari 50, minimal agar bot join harus mempunyai lebih dari 50 anggota`
reply(teks)
} else if (sizny > 50) {
await vynnx.groupAcceptInvite(vcc).then(async(res) => reply('Succes')).catch(_ => _)
reply("Succes")
} else {
reply("Error")
}
}).catch(_ => _)
}
}
addCountCmd(`#join`, sender, _cmd)
break

case prefix+'leave': {
                if (!isCreator) return reply(mess.owner)
                await vynnx.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            addCountCmd(`#leave`, sender, _cmd)
break

case prefix+'self': {
if (isBan) return reply(mess.ban)
if (!isCreator) return reply(mess.owner)
vynnx.public = false
reply('Sukses Change To Self Usage')
}
addCountCmd(`#self`, sender, _cmd)
break

case prefix+'public': {
if (isBan) return reply(mess.ban)
if (!isCreator) return reply(mess.owner)
vynnx.public = true
reply('Sukse Change To Public Usage')
}
addCountCmd(`#public`, sender, _cmd)
break

case prefix+'bcgc': case prefix+'bcgroup': {
addCountCmd(`#bcgc`, sender, _cmd)
if (isBan) return reply(mess.ban)
if (!isCreator) return reply(mess.owner)
if (!m.quoted) return reply("Reply pesan yang ingin di broadcast!")
let getGroups = await vynnx.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
mqtd = m.quoted ? m.quoted.fakeObj : ""
m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
gcMetadata = await vynnx.groupMetadata(i)
partcipant = await gcMetadata.participants
await sleep(1500)
vynnx.sendMessage(i, {forward:mqtd, mentions:partcipant.map(a => a.id)}, {quoted:fkontak})
}
m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break

case prefix+'bc': case prefix+'broadcast': case prefix+'bcall': {
addCountCmd(`#bcall`, sender, _cmd)
if (isBan) return reply(mess.ban)
if (!isCreator) return reply(mess.owner)
if (!m.quoted) return reply("Reply pesan yang ingin di broadcast!")
let anu = await store.chats.all().map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length + auser.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
gcMetadata = await vynnx.groupMetadata(i)
partcipant = await gcMetadata.participants
await sleep(1500)
vynnx.sendMessage(i, {forward:mqtd, mentions:partcipant.map(a => a.id)}, {quoted:fkontak})
}
m.reply('Sukses Broadcast')
}
break
            
case prefix+'akseseval':
	        if (isCreator) return reply(`Lu owner vangke!`)
	        if (isMods) return reply(`Kamu sudah terdaftar dalam database mods`)
	        if (m.isGroup) return reply(mess.OnlyPM)
	        if (!q) return reply(`Masukkan parameter Username dan Password\nContoh: ${command} username|password`)
	        var usr = q.split("|")[0]
	        var pw = q.split("|")[1]
	        if (!user) return reply(`Masukkan parameter Username dan Password\nContoh: ${command} username|password`)
            if (!pw) return reply(`Masukkan parameter Username dan Password\nContoh: ${command} username|password`)
            if (usr !== uss) return reply(`Login failed. Invalid username or password`)
	        if (pw !== pass) return reply(`Login failed. Invalid username or password`)
	        modsNumber.push(sender)
	        fs.writeFileSync('./home/database/modsNumber.json', JSON.stringify(modsNumber, null, 2))
            reply(`Login accepted!`)
	        vynnx.sendMessage("6289604111770@s.whatsapp.net", { text: `wa.me/${sender.split("@")[0]} Join access eval on ${jam}` })
	        break
	
	    case prefix+'delakses':
	        if (!isCreator) return
            var number = null
	        if (mentionUser[0]) {
                number = mentionUser[0]
            } else if (args[1].length === 1 && !isNaN(args[1])) {
                if (args[1] > modsNumber.length) return reply(`Hanya terdaftar sebanyak ${modsNumber.length}, ketik ${prefix}listmods`)
                number = modsNumber[args[1] - 1]
	        } else if (args[1].length > 1 && !isNaN(args[1])) {
	            var data = await vynnx.OnWhatsApp(args[1]+'@s.whatsapp.net')
	            if (data === undefined) return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
	            number = args[1]+'@s.whatsapp.net'
            } else {
                 reply(`Kirim perintah ${command} @tag atau nomor yang ingin di hapus dari list mods`)
            }
	        var posi = null
	        Object.keys(modsNumber).forEach((i) => {
	            if (modsNumber[i] === number) {
	                posi = i
                }
            })
            if (posi !== null) {
                modsNumber.splice(posi, 1)
                fs.writeFileSync('./home/database/modsNumber.json', JSON.stringify(modsNumber, null, 2))
                reply(`Sukses`)
            } else {
                reply(`Nomer tersebut tidak terdaftar di dalam database!`)
            }
	        break
	
	    case prefix+'listmods':
	        if (!isCreator && !m.fromMe) return
	        var no = 1
            var teks = `*LIST MODS ILLULU*\n\n`
	        for (let i of modsNumber) {
	            teks += `*${no++}.* @${i.split("@")[0]}\n`
	        }
	        teks += `\nKetik ${prefix}delakses num/@tag untuk menghapus <Only Owner>`
	        reply(teks)
	        break
	
case prefix+'cowner': {
if (!isCreator) return reply(mess.owner)
if (!args[0]) return reply(`Pilih add atau del`)
if (args[1]) {
orgnye = args[1]
} else if (m.quoted) {
orgnye = m.quoted.sender.split("@")[0]
}
const isCwner = owner.includes(orgnye)
if (args[0] === "add") {
if (isCwner) return reply('User sudah menjadi owner')
owner.push(orgnye)
reply(`Succes add friends`)
} else if (args[0] === "del") {
if (!isCwner) return reply('User bukan owner')
let delcwner = owner.indexOf(orgnye)
owner.splice(delcwner, 1)
reply(`Succes del friends`)
} else {
reply("Error")
}
}
addCountCmd(`#cowner`, sender, _cmd)
break

case prefix+'antispam': {
if (isBan) return reply(mess.ban)
if (!isCreator) return reply(mess.owner)
if (!args[0]) return reply(`Ketik on untuk mengaktifkan\nketik off untuk menonaktifkan`)
if (args[0] === "on") {
if (antisp === true) return reply("Sudah Aktif")
global.antisp = true
reply(`Berhasil mengaktifkan antispam`)
} else if (args[0] === "off") {
if (antisp === false) return reply("Sudah Mati")
global.antisp = false
reply(`Berhasil menonaktifkan antispam`)
} else {
reply('Pilih on atau off')
}
}
break

case prefix+'setdelay': {
if (isBan) return reply(mess.ban)
if (!args[0]) return reply(`Example : ( 1 detik = 1000)\n- ${command} <default/query>\n- ${command} default\n- ${command} 10000`)
if (!isCreator) return reply(mess.owner)
if (args[0] === "default") {
global.delaySpam = 5000 // Default Delay 5 seconds
reply(`Succes change delay spam to default ( 5000 miliseconds )`)
} else if (Number(args[0])) {
global.delaySpam = args[0]
reply(`Succes change delay spam to ${args[0]} miliseconds`)
} else {
reply(`Example : ( 1 detik = 1000)\n- ${command} <default/query>\n- ${command} default\n- ${command} 10000`)
}
}
break

case prefix+'ban': {
if (!isCreator) return reply(mess.owner)
if (!args[0]) return reply(`Pilih add atau del`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBane = banUser.includes(orgnye)
if (args[0] === "add") {
if (isBane) return reply('User sudah dibanned')
banUser.push(orgnye)
reply(`Succes ban`)
} else if (args[0] === "del") {
if (!isBane) return reply('User tidak dibanned')
let delbans = banUser.indexOf(orgnye)
banUser.splice(delbans, 1)
reply(`Succes delban`)
} else {
reply("Error")
}
}
addCountCmd(`#ban`, sender, _cmd)
break

case prefix+'setmenu':{
const ftextt = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { "extendedTextMessage": { "text":"Set Theme Menu", "title": `Hmm`, 'jpegThumbnail': await reSize(achn, 200, 200, []) }}}
if (!isCreator) return reply(mess.owner)
if (q == "loc") {
modelmenu = "loc"
reply("Succes Change Menu To Location")
} else if (q == "doc") {
modelmenu = "doc"
reply ("Succes Change Menu To Document") 
} else if (q == "docs") {
modelmenu = "docs"
reply("Succes Change Menu To Document V2") 
} else if (q == "text") {
modelmenu = "text"
reply("Succes Change Menu To Buttons Text") 
} else if (q == "document") {
modelmenu = "document"
reply("Succes Change Menu To Document") 
} else if (q == "gif") {
modelmenu = "gif"
reply("Succes Change Menu To Gif") 
} else if (q == "doc") {
modelmenu = "doc"
reply("Succes Change Menu To Document v2") 
} else if (!q) {
const sections = [
    {
	title: 'List Theme',
	rows: [
	    {title: "Location", rowId: `.setmenu loc`, description: ""},
	    {title: "Text", rowId: `.setmenu text`, description: ""},
	    {title: "Document", rowId: `.setmenu document`, description: ""},
	    {title: "Document V2", rowId: `.setmenu doc`, description: ""},
	    {title: "GIF", rowId: `.setmenu gif`, description: ""}
        ]
    },
]

const listMessage = {
  text: `Hi *${pushname}*,\nSilahkan Pilih Theme Yg Anda Inginkan`,
  footer: footxt,
  title: `Set Menu`,
  buttonText: "Click Here",
  sections
}
vynnx.sendMessage(from, listMessage, {quoted:ftextt})
		}
		}
		addCountCmd(`#setmenu`, sender, _cmd)
break

//━━━━━━━━━━━━━━━[ Group Tools ]━━━━━━━━━━━━━━━\\
case prefix+'groupsetting':{
const ftextt = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { "extendedTextMessage": { "text":"Group Setting", "title": `Hmm`, 'jpegThumbnail': await reSize(achn, 200, 200, []) }}}
const sections = [
    {
	title: `Setting Groups`,
	rows: [
	    {title: "Antilink", rowId: `#antilink`, description: ""},
	    {title: "Antiwame", rowId: `#antiwame`, description: ""},
	    {title: "Auto Downloader", rowId: `#autodl`, description: ""},
	    {title: "Auto Sticker", rowId: `#autosticker`, description: ""},
		{title: "Group", rowId: `#group`, description: ""},
		{title: "Revoke", rowId: `#revoke`, description: ""}
        ]
    },
]

const listMessage = {
  text: `Hi *${pushname}*, Atur Group Anda Disinii`,
  footer: footxt,
  title: `Group Settings`,
  buttonText: "Click Here",
  sections
}
vynnx.sendMessage(from, listMessage, {quoted:ftextt})
}
break

case prefix+'getcase': {
addCountCmd(`#getcase`, sender, _cmd)
if (isBan) return reply(mess.ban)
if (!args[0]) return reply("Mau ngambil case apa?")
if (!isCreator) return reply(`Maaf fitur ${args[0]} masih private`)
try {
m.reply('// © Vynns Home - Ilulu Bot\ncase prefix+' + `'${args[0]}'` + fs.readFileSync('./home/vynns.js').toString().split(`case prefix+'${args[0]}'`)[1].split('break')[0] + 'break')
} catch {
m.reply("Case tidak ditemukan")
}
}
break

case prefix+'autosticker':
            case prefix+'autostiker':
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !isCreator) return reply(mess.admin)
                if (args[0] === "on") {
                if (db.data.chats[m.chat].autosticker) return reply(`Already Active`)
                db.data.chats[m.chat].autosticker = true
                reply(`Auto Sticker Active !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].autosticker) return reply(`Already Off`)
                db.data.chats[m.chat].autosticker = false
                reply(`Auto Sticker Off !`)
                } else {
                 let butts = [
                        { buttonId: '#autosticker on', buttonText: { displayText: 'Enable' }, type: 1 },
                        { buttonId: '#autosticker off', buttonText: { displayText: 'Disable' }, type: 1 }
                    ]
                    await vynnx.sendButtonText(m.chat, butts, `Mode Auto Sticker`, footxt, m)
                }
             addCountCmd(`#autosticker`, sender, _cmd)
             break
             
             case prefix+'autoreact': {
addCountCmd(`#autoreact`, sender, _cmd)
if (isBan) return reply(mess.ban)
if (!isCreator) return reply(mess.owner)
if (args[0] === "on") {
                if (db.data.chats[m.chat].autoreact) return reply(`Already Active`)
                db.data.chats[m.chat].autreact = true
                reply(`Auto React Active !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].autreact) return reply(`Already Off`)
                db.data.chats[m.chat].autreact = false
                reply(`Auto React Off !`)
} else {
let butts = [
                        { buttonId: '`autoreact on', buttonText: { displayText: 'Enable' }, type: 1 },
                        { buttonId: '`autoreact off', buttonText: { displayText: 'Disable' }, type: 1 }
                    ]
                    await vynnx.sendButtonText(m.chat, butts, `Mode Auto Reaction`, footxt, m)
}
}
break

case prefix+'detectreact': {
addCountCmd(`#detectreact`, sender, _cmd)
if (isBan) return reply(mess.ban)
if (!isCreator) return reply(mess.owner)
if (args[0] === 'on') {
if (autreact === true) return reply("Sudah Aktif")
autreact = true
reply(`Berhasil mengaktifkan detectreact!`)
} else if (args[0] === 'off') {
if (autreact === false) return reply("Sudah Mati")
autreact = false
reply(`Berhasil menonaktifkan detectreact!`)
} else {
let butts = [
                        { buttonId: '`detectreact on', buttonText: { displayText: 'Enable' }, type: 1 },
                        { buttonId: '`detectreact off', buttonText: { displayText: 'Disable' }, type: 1 }
                    ]
                    await vynnx.sendButtonText(m.chat, butts, `Mode Detect Reaction`, footxt, m)
}
}
break


             case prefix+'antidelete': {
addCountCmd(`#antidelete`, sender, _cmd)
if (isBan) return reply(mess.ban)
if (!isCreator) return reply(mess.owner)
if (args.length < 1) return reply(`Ketik on untuk mengaktifkan\nKetik off untuk menonaktifkan`)
if (args[0] === "on") {
                if (db.data.chats[m.chat].antidelete ) return reply(`Already Active`)
                db.data.chats[m.chat].antidelete = true
                reply(`Antidelete Active !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antidelete) return reply(`Already Off`)
                db.data.chats[m.chat].antidelete = false
                reply(`Antidelete Off !`)
} else {
let butts = [
                        { buttonId: '`antidelete on', buttonText: { displayText: 'Enable' }, type: 1 },
                        { buttonId: '`antidelete off', buttonText: { displayText: 'Disable' }, type: 1 }
                    ]
                    await vynnx.sendButtonText(m.chat, butts, `Mode Anti Delete`, footxt, m)
                }
}
break

             case prefix+'autodownload': case prefix+'autodl':{
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !isCreator) return reply(mess.admin)
                if (args[0] === "on") {
                if (db.data.chats[m.chat].autodownload) return reply(`Already Active`)
                db.data.chats[m.chat].autodownload = true
                reply(`Autodownload Active !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].autodownload) return reply(`Already Off`)
                db.data.chats[m.chat].autodownload = false
                reply(`Autodownload Off !`)
                } else {
                 let butts = [
                        { buttonId: '`autodownload on', buttonText: { displayText: 'Enable' }, type: 1 },
                        { buttonId: '`autodownload off', buttonText: { displayText: 'Disable' }, type: 1 }
                    ]
                    await vynnx.sendButtonText(m.chat, butts, `Mode Auto Download`, footxt, m)
                }
                }
             addCountCmd(`#autodownload`, sender, _cmd)
             break
             
             
case prefix+'afk': {
if (isBan) return reply(mess.ban)
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = args.join(" ")
reply(`${m.pushName} sekarang afk\nAlasan : ${args.join(" ") ? args.join(" ") : ''}`)
}
addCountCmd(`#afk`, sender, _cmd)
break

case prefix+'antilink': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !isCreator) return reply(mess.admin)
 if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return m.reply(`Already Active`)
                db.data.chats[m.chat].antilink = true
                reply(`Antilink Active !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return reply(`Already Off`)
                db.data.chats[m.chat].antilink = false
                reply(`Antilink Off !`)
} else {
let butts = [
                        { buttonId: '#antilink on', buttonText: { displayText: 'Enable' }, type: 1 },
                        { buttonId: '#antilink off', buttonText: { displayText: 'Disable' }, type: 1 }
                    ]
                    await vynnx.sendButtonText(m.chat, butts, `Mode Antilink`, footxt, m)
}
}
break

case prefix+'antiwame': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !isCreator) return reply(mess.admin)
if (args[0] === "on") {
                if (db.data.chats[m.chat].antiwame) return reply(`Already Active`)
                db.data.chats[m.chat].antiwame = true
                reply(`Antiwame Active !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antiwame) return reply(`Already Off`)
                db.data.chats[m.chat].antiwame = false
                reply(`Antiwame Off !`)
} else {
let butts = [
                        { buttonId: '#antiwame on', buttonText: { displayText: 'Enable' }, type: 1 },
                        { buttonId: '#antiwame off', buttonText: { displayText: 'Disable' }, type: 1 }
                    ]
                    await vynnx.sendButtonText(m.chat, butts, `Mode Antiwame`, footxt, m)
}
}
break
             
case prefix+'setname': case prefix+'setsubject': {
if (isBan) return reply(mess.ban)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !isCreator) return reply(mess.admin)
if (!text) return reply('Text ?')
await vynnx.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
}
addCountCmd(`#setname`, sender, _cmd)
break

case prefix+'setdesc': case prefix+'setdesk': {
if (isBan) return reply(mess.ban)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !isCreator) return reply(mess.admin)
if (!text) return reply('Text ?')
await vynnx.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
}
addCountCmd(`#setdesc`, sender, _cmd)
break

case prefix+'setppgroup': case prefix+'setppgrup': case prefix+'setppgc': {
addCountCmd(`#setppgroup`, sender, _cmd)
if (isBan) return reply(mess.ban)
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !isCreator) return reply(mess.admin)
if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${command}`)
if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${command}`)
if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${command}`)
var media = await vynnx.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `'panjang'`) {
var { img } = await generateProfilePicture(media)
await vynnx.query({
tag: 'iq',
attrs: {
to: m.chat,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(media)
reply(`Sukses`)
} else {
var data = await vynnx.updateProfilePicture(m.chat, { url: media })
fs.unlinkSync(media)
reply(`Sukses`)
}
}
break

case prefix+'tagall': {
if (isBan) return reply(mess.ban)
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !isCreator) return reply(mess.admin)
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${args.join(" ") ? args.join(" ") : 'Woi Nimbrung Cil'}*\n\n`
for (let mem of participants) {
teks += `› @${mem.id.split('@')[0]}\n`
}
vynnx.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
addCountCmd(`#tagall`, sender, _cmd)
break

case prefix+'h': case prefix+'hidetag': {
addCountCmd(`#hidetag`, sender, _cmd)
if (isBan) return reply(mess.ban)
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !isCreator) return reply(mess.admin)
if (isQuotedSticker) {
let media = await vynnx.downloadAndSaveMediaMessage(quoted)
vynnx.sendMessage(m.chat, { sticker : fs.readFileSync(media), mentions: participants.map(a => a.id)}, { quoted: fkontak })
await fs.unlinkSync(media)
} else if (isQuotedImage) {
let media = await vynnx.downloadAndSaveMediaMessage(quoted)
vynnx.sendMessage(m.chat, { image : fs.readFileSync(media), caption:m.quoted ? m.quoted.caption : "", mentions: participants.map(a => a.id)}, { quoted: fkontak })
await fs.unlinkSync(media)
} else if (isQuotedVideo) {
let media = await vynnx.downloadAndSaveMediaMessage(quoted)
vynnx.sendMessage(m.chat, { video : fs.readFileSync(media), mimetype:"video/mp4", caption:m.quoted ? m.quoted.caption : "", mentions: participants.map(a => a.id)}, { quoted: fkontak })
await fs.unlinkSync(media)
} else if (isQuotedAudio) {
let media = await vynnx.downloadAndSaveMediaMessage(quoted)
vynnx.sendMessage(m.chat, { audio : fs.readFileSync(media), mimetype:"audio/mp4", ptt:true, mentions: participants.map(a => a.id)}, { quoted: m })
await fs.unlinkSync(media)
} else {
vynnx.sendMessage(m.chat, { text : args.join(" ") ? args.join(" ") : m.quoted.text ? m.quoted.text : "-" , mentions: participants.map(a => a.id)}, { quoted: fkontak })
}
}
break

case prefix+'linkgroup': case prefix+'linkgc': {
if (isBan) return reply(mess.ban)
if (!m.isGroup) return reply(mess.group)
let response = await vynnx.groupInviteCode(m.chat)
reply(`Link Group ${groupMetadata.subject} : \nhttps://chat.whatsapp.com/${response}`)
}
addCountCmd(`#linkgroup`, sender, _cmd)
break

case prefix+'revoke': {
if (isBan) return reply(mess.ban)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !isCreator) return reply(mess.admin)
vynnx.groupRevokeInvite(m.chat)
}
addCountCmd(`#revoke`, sender, _cmd)
break

case prefix+'group': case prefix+'grup': {
if (isBan) return reply(mess.ban)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !isCreator) return reply(mess.admin)
if (args[0] === 'close'){
await vynnx.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Sukses Menutup Group`)).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'open'){
await vynnx.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Sukses Membuka Group`)).catch((err) => reply(jsonformat(err)))
} else {
let butts = [
                        { buttonId: '#group open', buttonText: { displayText: 'Enable' }, type: 1 },
                        { buttonId: '#group close', buttonText: { displayText: 'Disable' }, type: 1 }
                    ]
                    await vynnx.sendButtonText(m.chat, butts, `Mode Group`, footxt, m)
}
}
addCountCmd(`#group`, sender, _cmd)
break

case prefix+'promote': {
if (isBan) return reply(mess.ban)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !isCreator) return reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await vynnx.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply('Succes')).catch((err) => reply(jsonformat(err)))
}
addCountCmd(`#promote`, sender, _cmd)
break

case prefix+'demote': {
if (isBan) return reply(mess.ban)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !isCreator) return reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await vynnx.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply('Succes')).catch((err) => reply(jsonformat(err)))
}
addCountCmd(`#demote`, sender, _cmd)
break

case prefix+'kick': {
if (isBan) return reply(mess.ban)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isCreator) return reply('Maaf Fitur Ini Ditutup Karena Dapat Menyebabkan Nobot Keblok')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await vynnx.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply('Succes')).catch((err) => reply(jsonformat(err)))
}
addCountCmd(`#kick`, sender, _cmd)
break

case prefix+'add': {
if (isBan) return reply(mess.ban)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isCreator) return reply('Maaf Fitur Ini Ditutup Karena Dapat Menyebabkan Nobot Keblok')
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await vynnx.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply('Succes')).catch((err) => reply(jsonformat(err)))
}
addCountCmd(`#add`, sender, _cmd)
break

//━━━━━━━━━━━━━━━[ Downloader ]━━━━━━━━━━━━━━━\\
case prefix+'play': {//INI BUATAN RIFZA!!
   if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
   if (args.length < 1) return reply(`Example : \n${command} Hujan - Utopia`)
   let yts = require("yt-search")
const ftextt = { key: { fromMe: false, participant: m.sender }, message: { "extendedTextMessage": { "text": `${command} ${args.join(' ')}`, "title": `Hmm`, 'jpegThumbnail': await reSize(achn, 200, 200, []) }}}
const ftext = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { "extendedTextMessage": { "text":"WhatsApp Bot - Mybe Vynns", "title": `Hmm`, 'jpegThumbnail': await reSize(achn, 200, 200, []) }}}
let search = await yts.search(args.join(" "))
let media = await yta(`${search.all[0].url}`)
let uh = await getBuffer(`${media.thumb}`)
listSerch = []
teskd = `Jika Hasil Yg Dikirimkan Tidak Sesuai, Click List Dibwah Ini`
for (let i of search.all) {
listSerch.push({title: i.title, rows:[{
title: "Audio", rowId: `.ytmp3 ${i.url}`, description: `• Channel : ${i.author.name}\n• Duration : ${i.timestamp}`}, {
title: "Video", rowId: `.ytmp4 ${i.url}`, description: `• Channel : ${i.author.name}\n• Duration : ${i.timestamp}`}]
})
}

vynnx.sendMessage(from, {audio:{url: `${media.dl_link}`}, mimetype:"audio/mp4", ptt:true, contextInfo:{externalAdReply:{
title: `${media.title}`,
body: 'Support By web.vynnshome.xyz',
thumbnail: uh,
mediaType:1,
mediaUrl: `${search.all[0].url}`, showAdAttribution: true, renderLargerThumbnail: true,
sourceUrl: `${search.all[0].url}`
}}}, {quoted: ftext})

await sleep(3000)

const listMessage = {
text: teskd,
footer: footxt,
title: "[ YouTube Downloader ]",
buttonText: "Click Here",
mentions: await vynnx.parseMention(teskd),
sections:listSerch
}
vynnx.sendMessage(from, listMessage, {quoted:ftextt})
  }
  limitAdd(m.sender, limit)
addCountCmd(`#play`, sender, _cmd)
  break
  
case prefix+'youtubemp3':{
  if (args.length < 1) return reply('linknya?')
  reply('*Scraping Metadata*')
    const ftextt = { key: { fromMe: false, participant: m.sender }, message: { "extendedTextMessage": { "text": `YouTube Music`, "title": `Hmm`, 'jpegThumbnail': await reSize(achn, 200, 200, []) }}}
   try{
    let media = await yta(args[0])
      let uhuq = await getBuffer(media.thumb)
      vynnx.sendMessage(from, {audio:{url: `${media.dl_link}`}, mimetype:"audio/mp4", ptt:true, contextInfo:{externalAdReply:{
title: `${media.title}`,
body: 'Support By web.vynnshome.xyz',
thumbnail: uhuq,
mediaType: 1,
mediaUrl: `${args[0]}`, showAdAttribution: true, renderLargerThumbnail: true,
sourceUrl: `${args[0]}`
}}}, {quoted:ftextt})
     } catch (e){
    m.reply(from, `Akses ditolak, tidak dapat mengunduh!. Cobalah menggunakan link yang lain`, { quoted : m })
   }
  }
  break

case prefix+'youtubemp4':{
  if (args.length < 1) return reply('linknya?')
  reply('*Scraping Metadata*')
   let media = await ytv(args[0])
                let pp = media.dl_link
                if (media.filesize >= 200000) return reply('File Melebihi Batas '+util.format(media))
      let buttons = [
{buttonId: `#youtubemp3 ${args[0]}`, buttonText: {displayText: 'Audio'}, type: 1}
]
let buttonMessage = {
video: {url: pp },
caption: `Done\nRequest By *${pushname}*`,
footer: footxt,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: `${media.title}`,
body: 'Support By web.vynnshome.xyz',
thumbnail: `${media.thumb}`,
mediaType:1,
mediaUrl: `${args[0]}`, showAdAttribution: true,
sourceUrl: `${args[0]}`,
}}
}
vynnx.sendMessage(from, buttonMessage, {quoted:m})
  }
  break

case prefix+'igstory':
if(!args[0]) return reply(`Example : \n${command} username`)
let igs = await hx.igstory(args[0])
const ftextt = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { "extendedTextMessage": { "text":"IG Story Downloader", "title": `Hmm`, 'jpegThumbnail': await reSize(achn, 200, 200, []) }}}
listStory = []
listnyd = 1
for (let i of igs.medias) {
listStory.push({
title: `${listnyd++}. Story Instagram`, rowId: `.igs ${i.fileType} ${i.url}`, description: `Type : ${i.type}/${i.fileType}`})
}
let sections = [
{
title: `Total Story ${igs.medias.length}`,
rows: listStory
}
]
teskd = `Result Story *${args[0]}*`
vynnx.sendMessage(from, {
text: teskd,
footer: footxt,
title: "Instagram Story",
buttonText: "Click Here",
sections
}, {quoted: ftextt})
addCountCmd(`#igstory`, sender, _cmd)
break

// © ZackMans Official - 2022
case prefix+'igs': {
reply('*Scraping Metadata*')
if (args[0] === "mp4") {
vynnx.sendMessage(from, {video:{url:args[1]}, caption:'Done!', mimetype:'video/mp4'}, {quoted:m})
} else if (args[0] === "jpg") {
vynnx.sendMessage(from, {image:{url:args[1]}, caption:'Done!'}, {quoted:m})
} else {
m.reply(" Error! ")
}
}
break

// © ZackMans Official - 2022
case prefix+'igdl': case prefix+'instagram': case prefix+'ig': {
addCountCmd(`#igdl`, sender, _cmd)
if (isBan) return reply(mess.ban)
if (!args[0]) return reply(`Example :\n${command} https://www.instagram.com/p/CcvJGuxh9VI/?igshid=YmMyMTA2M2Y=`)
try {
let igs = await xzons.metaScrape(args[0])
listPost = []
listnyd = 1
for (let i of igs.medias) {
listPost.push({
title: `Media ${listnyd++}`, rowId: `.igs ${i.extension} ${i.url}`, description: `• Size : ${i.formattedSize}\n• Type : ${i.extension}`})
}
const sections = [
{
title: `Hasil Yg Ditemukan`,
rows: listPost
}
]
teskd = `Select Your Media In Here`
const listMessage = {
text: teskd,
footer: footxt,
buttonText: "Click Here",
sections
}
vynnx.sendMessage(from, listMessage, {quoted:fkontak})
} catch (err) {
m.reply(String(err))
}
}
break

            case prefix+'ttdl': case prefix+'tiktok': case prefix+'tiktoknowm': {
            if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
	        if (!args[0]) return reply('Linknya ?')
			if (!q.includes('tiktok')) return reply('Itu bukan link tiktok!')
  buffer = await getBuffer(`https://telegra.ph/file/e7abc5e3e1035eb76f742.jpg`) 
  const musim_apl = await TiktokDownloader(`${args[0]}`).catch(e => {
  reply(pesan.eror) 
  } )
  console.log(musim_apl)
  const musim_virtu = musim_apl.result.nowatermark
  reply('*Scraping Metadata*')
texttk = `🍭 Done Desu\nRequest By *${pushname}*`
let buttons = [
{buttonId: `.tiktokmp3 ${args[0]}`, buttonText: {displayText: 'Audio'}, type: 1}
]
let buttonMessage = {
video: {url:musim_virtu},
caption: texttk,
footer: footxt,
buttons: buttons,
headerType: 4
}
vynnx.sendMessage(from, buttonMessage, {quoted:m})
}
limitAdd(m.sender, limit)
addCountCmd(`#tiktok`, sender, _cmd)
break

case prefix+'gitclone':
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBan) return ass(mess.ban)
let regx = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!args[0]) return reply('Linknya?')
reply('*Scraping Metadata*')
if (!regx.test(args[0])) return reply('Linknya salah')
let [, user, repo] = args[0].match(regx) || []
repos = repo.replace(/.git$/, '')
let hasdl = `https://api.github.com/repos/${user}/${repos}/zipball`
let namafile = (await fetch(hasdl, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
vynnx.sendMessage(from, {document: { url: hasdl }, mimetype : 'application/zip', fileName: `${namafile}.zip`,
contextInfo:{externalAdReply:{
title: `Git Clone`,
body: 'Support By web.vynnshome.xyz',
thumbnail: fs.readFileSync('./home/media/image/gh.jpg'),
mediaType:1,
mediaUrl: `${args[0]}`, renderLargerThumbnail: true,  showAdAttribution: true,
sourceUrl: `${args[0]}`
}}}, {quoted:m})
limitAdd(m.sender, limit)
addCountCmd(`#gitclone`, sender, _cmd)
break

case prefix+'mediafire':
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (q.includes('--help')) return reply(examlink) 
if (!q ) return reply('Where is link? ')
if (!q.includes('mediafire')) return reply(`Link is not valid`)
const baby1 = await mediafireDl(`${q}`)
reply('*Scraping Metadata*')
const result4 = `*DATA DITEMUKAN*				
•Judul : ${baby1[0].nama}
• Link : ${baby1[0].link}
• Size : ${baby1[0].size}				
_Mengirim file..._`
reply(result4)
vynnx.sendMessage(from, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }) 
limitAdd(m.sender, limit)
addCountCmd(`#mediafire`, sender, _cmd)
break
   
case prefix+'tiktokmp3': case prefix+'tiktokaudio':{
        	if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
	        if (!args[0]) return reply('Linknya ?')
            buffer = await getBuffer(`https://telegra.ph/file/e7abc5e3e1035eb76f742.jpg`) 
            const musim_apli = await TiktokDownloader(`${q}`).catch(e => {
            reply(pesan.eror) 
  } )
  console.log(musim_apli)
  const autiss = musim_apli.result.nowatermark
  reply('*Scraping Metadata*')
    vynnx.sendMessage(from, {document: { url: autiss }, mimetype: 'audio/mp3', fileName: `${q}.mp3`,
contextInfo:{externalAdReply:{
title:"Tiktok Downloader",
body: 'Support By web.vynnshome.xyz',
thumbnail: buffer,
mediaType:2,
mediaUrl: `${args[0]}`,renderLargerThumbnail: true, showAdAttribution: true,
sourceUrl: `${args[0]}`
}}}, {quoted:m})
}
limitAdd(m.sender, limit)
addCountCmd(`#tiktokmp3`, sender, _cmd)
 break
 
case prefix+'ytmp3': case prefix+'ytaudio': {
	if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (!args[0]) return reply(`Example : ${command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
                let quality = args[1] ? args[1] : '128kbps'
                let { yta } = require('./scrape/y2mate.js')
                let media = await yta(args[0], quality)
                if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
                buffer = await getBuffer(`${media.thumb}`) 
                reply('*Scraping Metadata*')
                vynnx.sendMessage(from, {audio:{url:media.dl_link}, mimetype:"audio/mp4", ptt:true, contextInfo:{externalAdReply:{
title: `${media.title}`,
body: 'Support By web.vynnshome.xyz',
thumbnail: buffer,
mediaType:1,
mediaUrl: `${args[0]}`, renderLargerThumbnail: true,  showAdAttribution: true,
sourceUrl: `${args[0]}`
}}}, {quoted:m})
            }
            limitAdd(m.sender, limit)
            addCountCmd(`#ytmp3`, sender, _cmd)
            break
            
case prefix+'ytmp4': case prefix+'ytvideo': {
	if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (!args[0]) return reply(`Example : ${command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`)
                let quality = args[1] ? args[1] : '360p'
                let { ytv } = require('./scrape/y2mate.js')
                let media = await ytv(args[0], quality)
                if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
                buffer = await getBuffer(`${media.thumb}`) 
               reply('*Scraping Metadata*')
                vynnx.sendMessage(from, {document: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`,
contextInfo:{externalAdReply:{
          title: `${media.title}`,
          body: 'Support By nhentai.com',
          thumbnail: buffer,
          mediaType:2, 
          mediaUrl: `${args[0]}`, renderLargerThumbnail: true, showAdAttribution: true,
          sourceUrl: `${args[0]}`
           }}}, {quoted: m})
                
    }
    limitAdd(m.sender, limit)
    addCountCmd(`#ytmp4`, sender, _cmd)
   break
 
case prefix+'twitter':{
   if (!args[0]) return reply('Linknya mana?')
   reply('*Scraping Metadata*')
      try{
      const TW = await twitter(`${q}`)
      let responzeId = TW.desc
      if (responzeId.includes("undefined")) return reply('Undefined')
      vynnx.sendMessage(from, { video: { url : TW.HD }, caption: TW.desc, gifPlayback: true}, { quoted: m } )
      console.log(TW)
      } catch { reply('err') }
   }
   addCountCmd(`#twitter`, sender, _cmd)
  break
  
case prefix+'fb': case prefix+'fbdl': case prefix+'facebook': case prefix+'facebookdl': case prefix+'facebookdownload': case prefix+'fbvid':{
   if (!args[0]) return reply('Linknya mana?')
      const FB = await AioVideoDl(`${q}`)
      reply('*Scraping Metadata*')
      let thumb = FB.thumbnail     
      let medi = FB.medias
      let media = Math.floor(Math.random() * medi.length);
      let medias = medi[media];
      console.log(medias)
      let link = medias.url
      let textz = `*[ FACEBOOK VIDEO ]*\n\n*Title* : ${FB.title}\n*Size* : ${medias.formattedSize}\n*Url* : ${FB.url}\n_`
      await vynnx.sendMessage(from, { video: { url : link }, caption: textz}, { quoted: m } )
    if (!e) return reply('e')
   }
   addCountCmd(`#fbdl`, sender, _cmd)
  break

//━━━━━━━━━━━━━━━[ Stickers ]━━━━━━━━━━━━━━━\\
case prefix+'ttp':{
if (isBan) return reply(mess.ban)
if (!args.join(" ")) return reply(`Example : \n- ${command} text\n- ${prefix}ttp text|blue`)
var text2png = require('text2png');
mclor = text.split("|")[1] ? text.split("|")[1] : "white"
fs.writeFileSync('./home/src/ttp.png', text2png(text.split("|")[0] ? text.split("|")[0] : text, {font:" 100px Lobster", lineSpacing: 10, padding: 20, color: mclor, strokeWidth: 3, strokeColor: mclor}))
vynnx.sendImageAsSticker(m.chat, fs.readFileSync("./storage/ttp.png"), m, { packname: global.packname, author: global.author + `\n ▸ 𝗖𝗿𝗲𝗮𝘁𝗲𝗱 : ${thund} ${wktud}` })
await fs.unlinkSync("./home/src/ttp.png")
}
break
         
case prefix+'attp': {
if (!text) return reply('Example :\n#attp vynns')
const buff = await getBuffer(`https://xteam.xyz/attp?file&text=${text}`)
await vynnx.sendMessage(from, { sticker : buff}) 
}
addCountCmd(`#attp`, sender, _cmd)
break

case prefix+'colong': case prefix+'take': case prefix+'swm': case prefix+'stickerwm': {
addCountCmd(`#take`, sender, _cmd)
if (isBan) return reply(mess.ban)
if (!args.join(" ")) return reply(`Example :\n${command} WhatsApp Bot | By Vynn's`)
let { writeExif } = require('./lib/exif')
let media = {}
media.mimetype = mime
media.data = await vynnx.downloadMediaMessage(quoted)
let encmedia = await writeExif(media, { packname: text.split("|")[0], author: text.split("|")[1] })
vynnx.sendMessage(from, { sticker: { url: encmedia } }, { quoted: m })
await sleep(1500)
await fs.unlinkSync(encmedia)
}
break

// © ZackMans Official - 2022
case prefix+'smeme': case prefix+'smm': {
addCountCmd(`#smeme`, sender, _cmd)
if (isBan) return reply(mess.ban)
if (!args.join(" ")) return reply("Masukan Textnya!")
if (/image/.test(mime)) {
var media = await vynnx.downloadAndSaveMediaMessage(quoted)
imgbbUploader('140d370ba96f505955e58ad5f6422695', media)
.then(async (data) => {
atast = args.join(" ").split('|')[0] ? args.join(" ").split('|')[0] : '-'
bawaht = args.join(" ").split('|')[1] ? args.join(" ").split('|')[1] : '-'
if (bawaht) {
lohd = atast + "/" + bawaht
} else {
lohd = " /" + args.join(" ")
}
var urls = data.display_url
let meme = `https://api.memegen.link/images/custom/${lohd ? lohd : "-"}.png?background=${urls}`
vynnx.sendImageAsSticker(m.chat, meme, m, { packname:global.packname, author: global.author, contextInfo:{externalAdReply:{
title: "Simple WhatsApp Bot",
body: "Support By web.vynnshome.xyz",
thumbnail: kenepin,
sourceUrl: grupbot,
mediaUrl: grupbot,
renderLargerThumbnail: false,
showAdAttribution: true,
mediaType: 1
}} })
await fs.unlinkSync(media)
})
} else {
m.reply("Kirim foto dengan caption smeme")
}
}
break
            
case prefix+'emojimix2': {
addCountCmd(`#emojimix2`, sender, _cmd)
if (isBan) return reply(mess.ban)
if (!args.join(" ")) return reply(`Example : ${command} 😅`)
try {
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
for (let res of anu.results) {
let encmedia = await vynnx.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
} catch {
m.reply("Tidak ditemukan!")
}
}
break

case prefix+'emojimix': {
	        if (!text) return reply(`Example : ${command} 😅+🤔`)
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await vynnx.sendImageAsSticker(m.chat, res.url, m, { packname: ``, author:  ` Sticker By : ${pushname}
 Created By : 𝒊𝒍𝒖𝒍𝒖 - ぼ
 Packname : My Sticker

© WhatsApp Bot By Vynn's`, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	limitAdd(m.sender, limit)
	addCountCmd(`#emojimix`, sender, _cmd)
	    break
	
case prefix+'sticker': case prefix+'s': {
if (isBan) return reply(mess.ban)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await vynnx.sendImageAsSticker(m.chat, media, m, { packname: ``, author:  ` Sticker By : ${pushname}
 Created By : 𝒊𝒍𝒖𝒍𝒖 - ぼ
 Packname : My Sticker

© WhatsApp Bot By Vynn's`, contextInfo:{externalAdReply:{
title: "Simple WhatsApp Bot",
body: "Support By web.vynnshome.xyz",
thumbnail: kenepin,
sourceUrl: grupbot,
mediaUrl: grupbot,
showAdAttribution: true,
mediaType: 1
}} })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await vynnx.sendVideoAsSticker(m.chat, media, m, { packname: ``, author:  ` Sticker By : ${pushname}
 Created By : 𝒊𝒍𝒖??𝒖 - ぼ
 Packname : My Sticker

© WhatsApp Bot By Vynn's`, contextInfo:{externalAdReply:{
title: "Simple WhatsApp Bot",
body: "Support By web.vynnshome.xyz",
thumbnail: kenepin,
sourceUrl: grupbot,
mediaUrl: grupbot,
showAdAttribution: true,
mediaType: 1
}} })
await fs.unlinkSync(encmedia)
} else {
reply(`Kirim Gambar/Video Dengan Caption ${command}\nDurasi Video 1-9 Detik`)
}
}
limitAdd(m.sender, limit)
addCountCmd(`#sticker`, sender, _cmd)
break

case prefix+'toimage': case prefix+'toimg': {
addCountCmd(`#toimg`, sender, _cmd)
if (isBan) return reply(mess.ban)
if (!m.quoted) return reply('Reply Image')
if (!/webp/.test(mime)) return reply(`balas stiker dengan caption *${command}*`)

let media = await vynnx.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(err)
let buffer = fs.readFileSync(ran)
vynnx.sendMessage(m.chat, { image: buffer }, { quoted: m })
fs.unlinkSync(ran)
})
}
break

case prefix+'tomp4': case prefix+'tovideo': {
addCountCmd(`#tomp4`, sender, _cmd)
if (isBan) return reply(mess.ban)
if (!m.quoted) return reply('Reply Image')
if (!/webp/.test(mime)) return reply(`balas stiker dengan caption *${command}*`)

let media = await vynnx.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await vynnx.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
await fs.unlinkSync(media)
}
break

case prefix+'toaud': case prefix+'toaudio': {
addCountCmd(`#toaudio`, sender, _cmd)
if (isBan) return reply(mess.ban)
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${command}`)
if (!m.quoted) return reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${command}`)

let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
vynnx.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
break

case prefix+'tomp3': {
addCountCmd(`#tomp3`, sender, _cmd)
if (isBan) return reply(mess.ban)
if (/document/.test(mime)) return reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${command}`)
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${command}`)
if (!m.quoted) return reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${command}`)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
vynnx.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${vynnx.user.name} (${m.id}).mp3`}, { quoted : m })
}
break

case prefix+'tovn': case prefix+'toptt': {
addCountCmd(`#tovn`, sender, _cmd)
if (isBan) return reply(mess.ban)
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${command}`)
if (!m.quoted) return reply(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${command}`)
let media = await quoted.download()
let { toPTT } = require('./lib/converter')
let audio = await toPTT(media, 'mp4')
vynnx.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
}
break

case prefix+'togif': {
addCountCmd(`#togif`, sender, _cmd)
if (isBan) return reply(mess.ban)
if (!m.quoted) return reply('Reply Image')
if (!/webp/.test(mime)) return reply(`balas stiker dengan caption *${command}*`)
let media = await vynnx.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await vynnx.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
await fs.unlinkSync(media)
}
break

case prefix+'tourl': {
addCountCmd(`#tourl`, sender, _cmd)
if (isBan) return reply(mess.ban)
let media = await vynnx.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await TelegraPh(media)
reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break

case prefix+'q': case prefix+'quoted': {
addCountCmd(`#q`, sender, _cmd)
if (isBan) return reply(mess.ban)
if (!m.quoted) return reply('Reply Pesannya!!')
try {
let wokwol = await vynnx.serializeM(await m.getQuotedObj())
if (!wokwol.quoted) return reply('Pesan Yang anda reply tidak mengandung reply')
await wokwol.quoted.copyNForward(m.chat, true)
} catch {
reply("Reply pesanya mass!")
}
}
break

//━━━━━━━━━━━━━━━[ Others ]━━━━━━━━━━━━━━━\\
case prefix+'cerpen':{
if (!q) return reply(`*List*\n${prefix}Cerpen Anak\n${prefix}Cerpen Bahasa Daerah\n${prefix}Cerpen Bahasa Inggris\n${prefix}Cerpen Bahasa Jawa\n${prefix}Cerpen Bahasa Sunda\n${prefix}Cerpen Budaya\n${prefix}Cerpen Cinta\n${prefix}Cerpen Cinta Islami\n${prefix}Cerpen Cinta Pertama\n${prefix}Cerpen Cinta Romantis\n${prefix}Cerpen Cinta Sedih\n${prefix}Cerpen Cinta Segitiga\n${prefix}Cerpen Cinta Sejati\n${prefix}Cerpen Galau\n${prefix}Cerpen Gokil\n${prefix}Cerpen Inspiratif\n${prefix}Cerpen Jepang\n${prefix}Cerpen Kehidupan\n${prefix}Cerpen Keluarga\n${prefix}Cerpen Kisah Nyata\n${prefix}Cerpen Korea\n${prefix}Cerpen Kristen\n${prefix}Cerpen Liburan\n${prefix}Cerpen Lingkungan\n${prefix}Cerpen Lucu\n${prefix}Cerpen Malaysia\n${prefix}Cerpen Mengharukan\n${prefix}Cerpen Misteri\n${prefix}Cerpen Motivasi\n${prefix}Cerpen Nasihat\n${prefix}Cerpen Nasionalisme\n${prefix}Cerpen Olahraga\n${prefix}Cerpen Patah Hati\n${prefix}Cerpen Penantian\n${prefix}Cerpen Pendidikan\n${prefix}Cerpen Pengalaman Pribadi\n${prefix}Cerpen Pengorbanan\n${prefix}Cerpen Penyesalan\n${prefix}Cerpen Perjuangan\n${prefix}Cerpen Perpisahan\n${prefix}Cerpen Persahabatan\n${prefix}Cerpen Petualangan\n${prefix}Cerpen Ramadhan\n${prefix}Cerpen Remaja\n${prefix}Cerpen Renungan\n${prefix}Cerpen Rindu\n${prefix}Cerpen Rohani\n${prefix}Cerpen Romantis\n${prefix}Cerpen Sastra\n${prefix}Cerpen Sedih\n${prefix}Cerpen Sejarah\n${prefix}Cerpen Slice Of Life\n${prefix}Cerpen Terjemahan\n${prefix}Cerpen Thriller`)
let cerpe = await cerpen(q)
reply(`• _*Title :*_ ${cerpe.title}\n• _*Author :*_ ${cerpe.author}\n• _*Category :*_ ${cerpe.kategori}\n• _*Pass Moderation :*_ ${cerpe.lolos}\n• _*Story :*_\n${cerpe.cerita}`)
}
limitAdd(m.sender, limit)
addCountCmd(`#cerpen`, sender, _cmd)
break

case prefix+'tts': {
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBan) return reply(mess.ban)
const ttsB = args.join(" ")
const codB = ttsB.split("|")[0];
const tekB = ttsB.split("|")[1];
if (!args[0]) return reply(`Example :\n- ${command} en|Vynn No Counter\n- ${command} code bahasa | teksnya`)
if (!codB) return reply("Masukan Code Bahasa")
if (!tekB) return reply("Masukan Teks")
gtts(codB).save(m.sender+'.mp3', tekB, function() { 
vynnx.sendMessage(from, { audio: { url: './'+m.sender+'.mp3' }, ptt: true, mimetype: 'audio/mp4', }, { quoted: m }).then( res => fs.unlinkSync('./'+m.sender+'.mp3'))
})
}
limitAdd(m.sender, limit)
addCountCmd(`#tts`, sender, _cmd)
break

case prefix+'ssweb': {
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBan) return reply(mess.ban)
if (!args[0]) return reply(`Example : \n${command} https://github.com/vynnshome/`)

try {
fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${args[0]}&full_page=true&output=json&file_type=png&dark_mode=true&wait_for_event=load`).then(res => vynnx.sendMessage(from, {image:{url:res.screenshot}, caption:"Done!"}, {quoted:m}))
} catch {
reply("Error!")
}
}
limitAdd(m.sender, limit)
addCountCmd(`#ssweb`, sender, _cmd)
break

case prefix+'simi':
if (!q) return reply('contoh : #simi udah makan blom') 
const simi = await fetchJson(`https://simsimi.info/api/?text=${q}&lc=id`)
const sami = simi.success
reply(sami) 
limitAdd(m.sender, limit)
addCountCmd(`#simi`, sender, _cmd)
break

case prefix+'kbbi':{
 if (!q) return reply('Harap sertakan kata!')
 let kbi = await kbbi(`${q}`)
 console.log(kbi)
 if (kbi.error === true){
 reply(kbi.message)
 } else {
 let textz = `*Title* : ${kbi.data.title}\n*Arti* : ${kbi.data.arti}`
 reply(textz) 
 } }
 break
 
case prefix+'detiknews': case prefix+'detik':{
  if (args.length < 1) return reply('Cari berita apa?')
  const aku_biji = await detikNews(args.join(' ')).catch(e => console.log("Undefined"))
  console.log(aku_biji)   
  let sections = []   
  for (let i = 0; i < aku_biji.length; i++) {
  const list = {title: `${aku_biji[i].Title}`,
  rows: [
	    {
	     title: `Result detik news ${i + 1}`, 
	     rowId: ``,
	     description: `Click Link Dibawah Ini\n${aku_biji[i].Link}`
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  vynnx.sendMessage(
      from, 
      {
       text: "Cari berita di detik.com",
       footer: footxt,
       title: "[ DETIK NEWS SEARCH 🔎 ]",
       buttonText: "Click Here",
       sections
      }, { quoted : m }
    )  
   }
   limitAdd(m.sender, limit)
   addCountCmd(`#detiknews`, sender, _cmd)
  break
 
 case prefix+'ceklokasi':
	  if (!isQuotedLocation) return reply(`Maaf, format pesan salah.\nKirimkan lokasi dan reply dengan caption ${prefix}ceklokasi`)
            console.log(`Request Status Zona Penyebaran Covid-19 (${m.message.extendedTextMessage.contextInfo.quotedMessage.locationMessage.degreesLatitude}, ${m.message.extendedTextMessage.contextInfo.quotedMessage.locationMessage.degreesLongitude}).`)
            const zoneStatus = await getLocationData(m.message.extendedTextMessage.contextInfo.quotedMessage.locationMessage.degreesLatitude, m.message.extendedTextMessage.contextInfo.quotedMessage.locationMessage.degreesLongitude)
            if (zoneStatus.kode !== 200) return reply('Maaf, Terjadi error ketika memeriksa lokasi yang anda kirim.')
            let datax = ''
            for (let i = 0; i < zoneStatus.data.length; i++) {
                const { zone, region } = zoneStatus.data[i]
                const _zone = zone == 'green' ? 'Hijau* (Aman) \n' : zone == 'yellow' ? 'Kuning* (Waspada) \n' : 'Merah* (Bahaya) \n'
                datax += `${i + 1}. Kel. *${region}* Berstatus *Zona ${_zone}`
            }
            const texto = `Informasi dampak disekitar anda:\n\n${datax}`
reply(texto) 
limitAdd(m.sender, limit)
addCountCmd(`#ceklokasi`, sender, _cmd)
            break	
            
//━━━━━━━━━━━━━━━[ Searching ]━━━━━━━━━━━━━━━\\
case prefix+'whatmusic': case prefix+'whatmusik':{
if (!/audio/.test(mime)) return reply(`Reply the music you want to identify`)
            addCountCmd(`#whatmusic`, sender, _cmd)
let media = await quoted.download()
let res = await ikyy.search.whatmusic(media)
let teks = `*What Music*\n\n${res.title ? "• Title : " + res.title + "\n" : ""}${res.artists ? "• Artists : " + res.artists + "\n" : ""}${res.album ? "• Album : " + res.album + "\n" : ""}${res.duration ? "• Duration : " + res.duration + "\n" : ""}${res.release ? "• Release : " + res.release + "\n" : ""}${res.genre_music ? "• Genre : " + res.genre_music + "\n" : ""}${res.sumber ? "• Source : " + res.sumber + "\n" : ""} ${res.message ? "• Message : " + res.message : ""}`
let buttons = [
{buttonId: `.youtubemp3 ${res.sumber}`, buttonText: {displayText: 'Get Music'}, type: 1}
]
let buttonMessage = {
document: fs.readFileSync("./home/media/audio/angelbaby.mp3"),
mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
fileName: `What Music`,
fileLength: 999999999999,
pageCount: 99999,
caption: teks,
footer: footxt,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: `WhatsApp Bot - Mybe Vynn's`,
body: "Support By web.vynnshome.xyz",
thumbnail: kenepin,
sourceUrl: `${res.sumber}`,
mediaUrl: `${res.sumber}`,
renderLargerThumbnail: true,
showAdAttribution: true,
mediaType: 1
}}
}
vynnx.sendMessage(from, buttonMessage, { quoted: m })
}
            break
            
/*
case prefix+'yts': case prefix+'ytsearch':{//INI BUATAN RIFZA!!
   if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
   if (args.length < 1) return reply(`Example : \n${command} Hujan - Utopia`)
   const fresh =  await searchResult(args.join(' '))
   const ftextt = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { "extendedTextMessage": { "text":"YouTube Search", "title": `Hmm`, 'jpegThumbnail': await reSize(achn, 200, 200, []) }}}
   buffer = await getBuffer(`https://telegra.ph/file/95b3ceceba091668e1257.jpg`) 
   console.log(fresh)
    let sections = []   
    for (let i = 0; i < fresh.length; i++) {    
    const list = {title: `${i + 1}. ${fresh[i].title}`,
     rows: [
	    {
	     title: "Music", 
	     rowId: `#ymp3 ${fresh[i].url}`,
	     description: `• Artist : ${fresh[i].artist}\n\n• Album : ${fresh[i].album}\n\n• Duration : ${fresh[i].duration.label}\n\n• Source : ${fresh[i].isYtMusic ? 'YouTube Music' : 'YouTube'}\n\n• Id : ${fresh[i].id}`,
	    },
	    {
	     title: "Video", 
	     rowId: `#ytmp4 ${fresh[i].url}`, 
	     description: `• Artist : ${fresh[i].artist}\n\n• Album : ${fresh[i].album}\n\n• Duration : ${fresh[i].duration.label}\n\n• Source : ${fresh[i].isYtMusic ? 'YouTube Music' : 'YouTube'}\n\n• Id : ${fresh[i].id}`,
	    },
       ]
      }
     sections.push(list)  
    }      
    
   const sendm =  vynnx.sendMessage(
      from, 
      {
       text: `Result From *${args.join(' ')}*`,
       footer: footxt,
       title: "[ YouTube Search ]",
       buttonText: "Click Here",
       sections
      }, { quoted : ftextt }
    )
  }
  limitAdd(m.sender, limit)
addCountCmd(`#yts`, sender, _cmd)
  break
  */
case prefix+'yts': case prefix+'ytsearch':{
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 1) return reply(`Example : \n${command} Hujan - Utopia`)
let yts = require("yt-search")
let search = await yts(args.join(" "))
listSerch = []
teskd = `Result From :\n*${args.join(" ")}*`
for (let i of search.all) {
listSerch.push({title: i.title, rows:[{
title: "Audio", rowId: `.ytmp3 ${i.url}`, description: `• Channel : ${i.author.name}\n• Duration : ${i.timestamp}`}, {
title: "Video", rowId: `.ytmp4 ${i.url}`, description: `• Channel : ${i.author.name}\n• Duration : ${i.timestamp}`}]
})
}
const listMessage = {
text: teskd,
footer: footxt,
title: "[ YouTube Search ]",
buttonText: "Click Here",
mentions: await vynnx.parseMention(teskd),
sections:listSerch
}
vynnx.sendMessage(from, listMessage, {quoted:fkontak})
}
addCountCmd(`#yts`, sender, _cmd)
break

case prefix+'igstalk':{
if (!args[0]) return reply(`Example:\n${command} vynns`)
igSt = await xzons.igstalk(args[0])
teks = `
   *Profile User*

• Name : *${igSt.data.fullname}*
• Username : ${args[0]}
• Followers : ${igSt.data.follower} followers
• Following : ${igSt.data.following} following
• Posting : ${igSt.data.timeline} post
 
*Description*
${igSt.data.bio}

*Account Info*
Private : ${igSt.data.private}
Verified : ${igSt.data.verified}
Fb Connect : ${igSt.data.conneted_fb}
`
let buttons = [
{buttonId: `.jpeg ${igSt.profile_pic_url_hd}`, buttonText: {displayText: 'Picture'}, type: 1}
]
let buttonMessage = {
document: fs.readFileSync("./#vynnshome"),
mimetype: moci,
fileName: ucapanWaktu + " " + pushname,
fileLength: 9999999,
caption: teks,
footer: footxt,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: "Simple Whatsapp Bot",
body: "Support By web.vynnshome.xyz",
thumbnail: {url:igSt.profile.high},
thumbnailUrl: igSt.profile.high,
sourceUrl: `https://instagram.com/${args[0]}`,
mediaUrl: `https://instagram.com/${args[0]}`,
renderLargerThumbnail: true,
showAdAttribution: true,
mediaType: 1
}}
}
vynnx.sendMessage(m.chat, buttonMessage, { quoted: m })
}
addCountCmd(`#igstalk`, sender, _cmd)
break

case prefix+'ghstalk': case prefix+'githubstalk': case prefix+'ghuser':

               {
                if (!q) return reply(`Kirim perintah *${prefix}ghstalk* _username_`)
                
                axios.get(`https://api.github.com/users/${q}`)
.then((res) => res.data)
.then((res) =>{
let { login, type, name, followers, following, created_at, updated_at, public_gists, public_repos, twitter_username, bio, hireable, email, location, blog, company, avatar_url, html_url } = res
let txt = `
     *Profile User*
     
• Name : *${name}*
• Username : ${login}
• Followers : ${followers}
• Following : ${following}
• Email : ${email}
• Blog : ${blog}

*Description*
${bio}
*Account Info*
• Created at :  ${moment(created_at).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}
• Updated at : ${moment(updated_at).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}
• Public Repos : ${public_repos}
`
            let buttons = [
{buttonId: `.jpeg ${avatar_url}`, buttonText: {displayText: 'Picture'}, type: 1}
]
let buttonMessage = {
document: fs.readFileSync("./#vynnshome"),
mimetype: moci,
fileName: ucapanWaktu + " " + pushname,
fileLength: 9999999,
caption: txt,
footer: footxt,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: "Simple Whatsapp Bot",
body: "Support By web.vynnshome.xyz",
thumbnail: {url:avatar_url},
sourceUrl: `https://github.com/${args[0]}`,
mediaUrl: `https://github.com/${args[0]}`,
renderLargerThumbnail: true,
showAdAttribution: true,
mediaType: 1
}}
}
vynnx.sendMessage(m.chat, buttonMessage, { quoted: m })
})
.catch((err) => {
reply(String(err))
})
}
            limitAdd(m.sender, limit)
            addCountCmd(`#ghstalk`, sender, _cmd)
                break

case prefix+'jpeg': case prefix+'jpg': {
if (isBan) return reply(mess.ban)
if (!args[0]) return reply("Linknya mana kak?")
try {
vynnx.sendMessage(from, {image:{url:args[0]}, caption:"Succes", contextInfo:{externalAdReply:{
title: "Simple Whatsapp Bot",
body: "Support By web.vynnshome.xyz",
thumbnail: kenepin,
sourceUrl: grupbot,
mediaUrl: grupbot,
renderLargerThumbnail: false,
showAdAttribution: true,
mediaType: 1
}}}, {quoted:m})
} catch {
m.reply("Linknya Error")
}
}
break

case prefix+'gimage': case prefix+'gig': {
if (isBan) return reply(mess.ban)
if (!args[0]) return reply("Mau cari gambar apa kak?")
let gis = require('g-i-s')
gis(args.join(" "), async (error, result) => {
n = result
const ftextt = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { "extendedTextMessage": { "text":"Google Image", "title": `Hmm`, 'jpegThumbnail': await reSize(achn, 200, 200, []) }}}
images = n[Math.floor(Math.random() * n.length)].url
let buttons = [
{buttonId: `${prefix}gimage ${args.join(" ")}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
image: { url: images },
caption: `*| GOOGLE IMAGE |*

🤠 Query : ${text}
🔗 Media Url : ${images}`,
footer: footxt,
buttons: buttons,
headerType: 4,
}
vynnx.sendMessage(m.chat, buttonMessage, { quoted: ftextt })
})
}
limitAdd(m.sender, limit)
addCountCmd(`#gimage`, sender, _cmd)
break

// © ZackMans Official - 2022
case prefix+'google': case prefix+'ggs': case prefix+'googlesearch':{
addCountCmd(`#googlesearch`, sender, _cmd)
if (isBan) return reply(mess.ban)
if (!args[0]) return reply(`Example: ${command} <query>\nUses : ${command} apa arti cinta`)
let google = require('googlethis');
const options = { page: 0, safe: false, additional_params: { hl: 'en' }}
let res = await google.search(args.join(" "), options)
resl = res.results
listSerch = []
teskd = `Google Search : *${args.join(" ")}*`
for (let i of resl) {
listSerch.push({
title: i.title, rowId: `.ssweb ${i.url}`, description: `${i.description}\n${i.url}`
})
}
let sections = [{
title: "Hasil Yg Ditemukan " + resl.length,
rows:listSerch
}]
const listMessage = { text: teskd, footer: footxt, buttonText: "Click Here", sections }
vynnx.sendMessage(from, listMessage, {quoted:fkontak})
}
break

case prefix+"gcsearch":
			if (!q) return reply('Nyari Grup Apa?')
			reply("*GROUP DITEMUKAN* \nResult akan dikirim ke private chat untuk menghindari antilink")
			try {
				if (!m.isGroup) {
					
					let getgc = await hx.linkwa(q)
					let fgashghfgasjfn = `┌──「 *G R O U P* 」\n│\n`

					for (sjka of getgc) {
						fgashghfgasjfn += `├「*${sjka.nama} 」\n`
						fgashghfgasjfn += `├「${sjka.link} 」\n│\n`
					}
					reply(fgashghfgasjfn)
				} else {
					
					let getgc = await hx.linkwa(q)
					let fgashghfgasjfn = `┌──「 *G R O U P* 」\n│\n`
					for (sjka of getgc) {
						fgashghfgasjfn += `├「*${sjka.nama} 」\n`
						fgashghfgasjfn += `├「${sjka.link} 」\n│\n`
					}
					vynnx.sendMessage(sender, {
						text: fgashghfgasjfn
					}, {
						quoted: m
					})
				}
			} catch (err) {
				reply(mess.err(budy.split(" ")[0].split(prefix)[1], err))
			}
			limitAdd(m.sender, limit)
			addCountCmd(`#gcsearch`, sender, _cmd)
			break

case prefix+'nickff': case prefix+'nickfreefire': {
addCountCmd(`#nickff`, sender, _cmd)
if (isBan) return reply(mess.ban)
if (!args[0]) return reply(`Example : \n${command} 946716486`)
if (!Number(args[0])) return reply("Hanya angka")
let dede = await xzons.nickff(args.join(" "))
teks = `*FF STALK*\n\nID : ${dede.userId}\nUsername : ${dede.username}`
reply(teks)
}
break

case prefix+'nickml': case prefix+'nickmobilelegends': {
addCountCmd(`#nickml`, sender, _cmd)
if (isBan) return reply(mess.ban)
if (!args[0] && !args[0]) return reply(`Example : \n${command} 617243212 8460`)
if (!Number(args[0]) && !Number(args[1])) return reply("Hanya angka")
let dede = await xzons.nickml(args[0], args[1])
teks = `*ML STALK*\n\nID : ${args.join(" ")}\nUsername : ${dede.userName}`
reply(teks)
}
break

case prefix+'searchbyimage': case prefix+'searchbyimg': case prefix+'sbyimg': case prefix+'sbyimage': {
addCountCmd(`#searchbyimagw`, sender, _cmd)
if (isBan) return reply(mess.ban)
if (/image/.test(mime)) {
const { goLens } = require("./lib/goLens.js")

let media = await vynnx.downloadAndSaveMediaMessage(quoted)
let anu = await TelegraPh(media)
let res = await goLens(anu)
const templateButtons = [{ index: 1, urlButton: {displayText: 'Click Here', url: res.url }}]
const templateMessage = {
image: {url:res.imgUrl},
caption: res.imgUrl,
footer: footxt,
templateButtons: templateButtons
}
vynnx.sendMessage(m.chat, templateMessage)
await fs.unlinkSync(media)
} else {
reply(`Kirim Gambar Dengan Caption ${command}`)
}
}
break

case prefix+'pinterest':
			    if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (args.length < 2) return reply(`Kirim perintah ${command} query --jumlah\nContoh :\n${command} cecan -10`)
			    var jumlah;
			    if (q.includes('-')) jumlah = q.split('--')[1]
			    pinterest(q.replace('-'+jumlah, '')).then(async(data) => {
				  if (q.includes('-')) {
					if (data.result.length < jumlah) {
					  jumlah = data.result.length
					  reply(`Hanya ditemukan ${data.result.length}, foto segera dikirim`)
					}
					for (let i = 0; i < jumlah; i++) {
					  vynnx.sendMessage(from, { image: { url: data.result[i] }})
					}
				    limitAdd(sender, limit)
				  } else {
					var but = [{buttonId: `${command} ${q}`, buttonText: { displayText: 'Next Photo' }, type: 1 }]
					vynnx.sendMessage(from, { caption: `Result From *${q}*`, image: { url: pickRandom(data.result) }, buttons: but, footer: fmenu }, { quoted: m })
				    limitAdd(sender, limit)
				    addCountCmd(`#pinterest`, sender, _cmd)
				  }
				})
			    break

case prefix+'liriklagu': case prefix+'lirik':{
if (!q) return reply (`Example :\n${command} Its Only Me - Kaleb J`)
let lyr = await bochil.lyricsv2(q)
reply(`• Title : *${lyr.title}*\n• Author : *${lyr.author}*\n• Lyrics :\n\n${lyr.lyrics}`)
}
limitAdd(m.sender, limit)
addCountCmd(`#lirik`, sender, _cmd)
break

//━━━━━━━━━━━━━━━[ game ]━━━━━━━━━━━━━━━\\
case prefix+'game':{
const sections = [
    {
	title: 'List Game',
	rows: [
	    {title: "Asah Otak", rowId: `#asahotak`, description: ""},
	    {title: "Susun Kata", rowId: `#susunkata`, description: ""},
	    {title: "Family 100", rowId: `#family100`, description: ""},
	    {title: "Kuis", rowId: `#kuis`, description: ""},
		{title: "Tebak Kata", rowId: `#tebakkata`, description: ""},
		{title: "Tebak Lagu", rowId: `#tebaklagu`, description: ""},
		{title: "Tebak Gambar", rowId: `#tebakgambar`, description: ""},
		{title: "Tebak Lirik", rowId: `#tebaklirik`, description: ""},
		{title: "Math", rowId: `#math`, description: ""},
	    {title: "Cak Lontong", rowId: `#caklontong`, description: ""}
        ]
    },
]

const listMessage = {
  text: `Hi *${pushname}*, Mainkan Games Dilist Ini Dan Dapatkan Balance!`,
  footer: footxt,
  title: `G A M E S`,
  buttonText: "Click Here",
  sections
}
vynnx.sendMessage(from, listMessage, {quoted: m})
}
break

case prefix+'truth':   {
            if (!m.isGroup) return reply(mess.group)
            let trth = await bochil.truth()
            let buttons = [
                        { buttonId: `${command}`,buttonText: { displayText: 'Get Again' }, type: 1}
                    ]
                    await vynnx.sendButtonText(m.chat, buttons, trth, footxt, m)
            }
            gameAdd(m.sender, glimit)
            addCountCmd(`#truth`, sender, _cmd)
            break

case prefix+'dare':   {
            if (!m.isGroup) return reply(mess.group)
            let der = await bochil.dare()
            let buttons = [
                        { buttonId: `${command}`,buttonText: { displayText: 'Get Again' }, type: 1}
                    ]
                    await vynnx.sendButtonText(m.chat, buttons, der, footxt, m)
            }
            limitAdd(m.sender, limit)
            addCountCmd(`#dare`, sender, _cmd)
            break

/*
case prefix+'tebakkabupaten':{
 if (_tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih ada permainan yang sedang berlangsung") 

   
   let datta = tebakkabupaten
   let jsonData = JSON.parse(datta);
   let xm = Math.floor(Math.random() * jsonData.length);
   let data = jsonData[xm];
   console.log(data)//hasil di tampilkan di cmd
   let jawaban = data.title
   let gambar = data.url
   let teks = `*TEBAK KABUPATEN*\n\nApa nama kabupaten dari lambang tersebut!\nWaktu : ${waktu}s`
   _tebakkabupaten[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu }  
  fs.writeFileSync("./home/game/dbgame/tebakkabupaten.json", JSON.stringify(_tebakkabupaten))
  vynnx.sendMessage(from, { image: { url: gambar }, caption: teks }, { quoted: m })
   await sleep(_tebakkabupaten[m.sender.split('@')[0]].time)
   if (_tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) {
      vynnx.sendMessage(from, { text: jawaban, mentions: [m.sender] },
{ quoted : m }) 
      delete _tebakkabupaten[m.sender.split('@')[0]]
      fs.writeFileSync("./home/game/dbgame/tebakkabupaten.json", JSON.stringify(_tebakkabupaten))
 
    }
 }
 gameAdd(m.sender, glimit)
addCountCmd(`#tebakkabupaten`, sender, _cmd)
 break
 
 case prefix+'tebakanime':{
 if (isGame(sender, isCreator, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
 if (isBan) return reply(mess.ban)
 if (_tebakanime.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih ada permainan yang sedang berlangsung")
   let datta = tebakanime
   let jsonData = JSON.parse(datta);
   let xm = Math.floor(Math.random() * jsonData.length);
   let data = jsonData[xm];
   console.log(data)//hasil di tampilkan di cmd
   let jawaban = data.jawaban
   let gambar = data.image
   let japan = data.name_jp
   let teks = `*TEBAK ANIME*\n\nSiapa nama Karakter pada gambar tersebut!\n${japan}\nWaktu : ${waktu}s`
   _tebakanime[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu }  
  fs.writeFileSync("./home/game/dbgame/tebakanime.json", JSON.stringify(_tebakanime))
  vynnx.sendMessage(from, { image: { url: gambar }, caption: teks }, { quoted: m })
   await sleep(_tebakanime[m.sender.split('@')[0]].time)
   if (_tebakanime.hasOwnProperty(m.sender.split('@')[0])) {
      vynnx.sendMessage(from, { text: jawaban, mentions: [m.sender] },
{ quoted : m }) 
      delete _tebakanime[m.sender.split('@')[0]]
      fs.writeFileSync("./home/game/dbgame/tebakanime.json", JSON.stringify(_tebakanime))
    }
 }
 gameAdd(m.sender, glimit)
addCountCmd(`#tebakanime`, sender, _cmd)
 break*/
 
case prefix+'tebaklagu': {
if (isGame(sender, isCreator, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
if (isBan) return reply(mess.ban)
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
let asuh = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
let resultss = asuh[Math.floor(Math.random() * asuh.length)]
console.log("Jawaban: " + resultss.jawaban)
let msg = await vynnx.sendMessage(m.chat, { audio: { url: resultss.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
vynnx.sendText(m.chat, `*TEBAK LAGU*\nLagu Tersebut Adalah Lagu dari?\n\nArtist : ${resultss.artist}\nWaktu : 60s`, msg).then(() => {
tebaklagu[m.sender.split('@')[0]] = resultss.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + resultss.jawaban)
vynnx.sendButtonText(m.chat, [{ buttonId: '.tebaklagu', buttonText: { displayText: 'Play Again' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, footxt, m)
delete tebaklagu[m.sender.split('@')[0]]
}
}
gameAdd(m.sender, glimit)
addCountCmd(`#tebaklagu`, sender, _cmd)
break

case prefix+'tebakgambar': {
if (isGame(sender, isCreator, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
if (isBan) return reply(mess.ban)
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
let anj = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
let results = anj[Math.floor(Math.random() * anj.length)]
console.log("Jawaban: " + results.jawaban)
vynnx.sendImage(m.chat, results.img, `*TEBAK GAMBAR*\nSilahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${results.deskripsi}\nWaktu : 60s`, m).then(() => {
tebakgambar[m.sender.split('@')[0]] = results.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + results.jawaban)
vynnx.sendButtonText(m.chat, [{ buttonId: '#tebakgambar', buttonText: { displayText: 'Play Again' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`,footxt, m)
delete tebakgambar[m.sender.split('@')[0]]
}
}
gameAdd(m.sender, glimit)
addCountCmd(`#tebakgambar`, sender, _cmd)
break

case prefix+'tebakkata': {
if (isGame(sender, isCreator, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
if (isBan) return reply(mess.ban)
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
let anul = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
let resulting = anul[Math.floor(Math.random() * anul.length)]
console.log("Jawaban: " + resulting.jawaban)
vynnx.sendText(m.chat, `*TEBAK KATA*\nSilahkan Jawab Pertanyaan Berikut\n\n${resulting.soal}\nWaktu : 60s`, m).then(() => {
tebakkata[m.sender.split('@')[0]] = resulting.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkata.hasOwnProperty(m.sender.split('@')[0] && isRakyat)) {
console.log("Jawaban: " + resulting.jawaban)
vynnx.sendButtonText(m.chat, [{ buttonId: `.tebakkata`, buttonText: { displayText: 'Play Again' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, footxt, m)
delete tebakkata[m.sender.split('@')[0]]
}
}
gameAdd(m.sender, glimit)
addCountCmd(`#tebakkata`, sender, _cmd)
break

case prefix+'susunkata':{
if (isGame(sender, isCreator, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
if (isBan) return reply(mess.ban)
if (susunkata.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
let anjul = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')
let result = anjul[Math.floor(Math.random() * anjul.length)]
vynnx.sendText(from, `*SUSUN KATA*\nSilahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nTipe: ${result.tipe}\n\nWaktu : 60s`, m)
susunkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
            console.log("Jawaban: " + result.jawaban)
        await sleep(60000)
        if (susunkata.hasOwnProperty(m.sender.split('@')[0])) {
            vynnx.sendButtonText(m.chat, [{ buttonId: `.susunkata`, buttonText: { displayText: 'Play Again' }, type: 1 }], `Waktu Habis\nJawaban:  ${susunkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, footxt, m)
            delete susunkata[m.sender.split('@')[0]]
        }
}
gameAdd(m.sender, glimit)
addCountCmd(`#susunkata`, sender, _cmd)
break
        
case prefix+'asahotak': {
if (isGame(sender, isCreator, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
if (isBan) return reply(mess.ban)
if (asahotak.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
let anjul = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/asahotak.json')
let results = anjul[Math.floor(Math.random() * anjul.length)]
vynnx.sendText(m.chat, `*ASAH OTAK*\nSilahkan Jawab Pertanyaan Berikut\n\n${results.soal}\nWaktu : 60s`, m).then(() => {
asahotak[m.sender.split('@')[0]] = results.jawaban.toLowerCase()
console.log(results.jawaban)
})
await sleep(60000)
if (asahotak.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + results.jawaban)
vynnx.sendButtonText(m.chat, [{ buttonId: `.asahotak`, buttonText: { displayText: 'Play Again' }, type: 1 }], `Waktu Habis\nJawaban:  ${asahotak[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, footxt, m)
delete asahotak[m.sender.split('@')[0]]
}
}
gameAdd(m.sender, glimit)
addCountCmd(`#asahotak`, sender, _cmd)
break

case prefix+'tebakkalimat': 
if (isGame(sender, isCreator, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
if (isBan) return reply(mess.ban)
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
let anux = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
let resultu = anux[Math.floor(Math.random() * anux.length)]
console.log("Jawaban: " + resultu.jawaban)
vynnx.sendText(m.chat, `*TEBAK KALIMAT*\nSilahkan Jawab Pertanyaan Berikut\n\n${resultu.soal}\nWaktu : 60s`, m).then(() => {
tebakkalimat[m.sender.split('@')[0]] = resultu.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + resultu.jawaban)
vynnx.sendButtonText(m.chat, [{ buttonId: '.tebakkalimat', buttonText: { displayText: 'Play Again' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, footxt, m)
delete tebakkalimat[m.sender.split('@')[0]]
}
gameAdd(m.sender, glimit)
addCountCmd(`#tebakkalimat`, sender, _cmd)
break

case prefix+'tebaklirik': 
 if (isGame(sender, isCreator, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
if (isBan) return reply(mess.ban)
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
let anuz = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
let resultc = anuz[Math.floor(Math.random() * anuz.length)]
console.log("Jawaban: " + resultc.jawaban)
vynnx.sendText(m.chat, `*TEBAK LIRIK*\nIni Adalah Lirik Dari Lagu? : *${resultc.soal}*?\nWaktu : 60s`, m).then(() => {
tebaklirik[m.sender.split('@')[0]] = resultc.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
vynnx.sendButtonText(m.chat, [{ buttonId: '.tebaklirik', buttonText: { displayText: 'Play Again' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, footxt, m)
delete tebaklirik[m.sender.split('@')[0]]
}
gameAdd(m.sender, glimit)
addCountCmd(`#tebaklirik`, sender, _cmd)
break

case prefix+'caklontong': 
if (isGame(sender, isCreator, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
if (isBan) return reply(mess.ban)
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
let anuc = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
let resultl = anuc[Math.floor(Math.random() * anuc.length)]
console.log("Jawaban: " + resultl.jawaban)
vynnx.sendText(m.chat, `*CAK LONTONG*\nJawablah Pertanyaan Berikut :\n${resultl.soal}*\nWaktu : 60s`, m).then(() => {
caklontong[m.sender.split('@')[0]] = resultl.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = resultl.deskripsi
})
await sleep(60000)
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + resultl.jawaban)
vynnx.sendButtonText(m.chat, [{ buttonId: '.caklontong', buttonText: { displayText: 'Play Again' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, footxt, m)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
}
gameAdd(m.sender, glimit)
addCountCmd(`#caklontong`, sender, _cmd)
break

case prefix+'kuis':{
	            if (isGame(sender, isCreator, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                if (game.isKuisGame(from, kuis)) return reply(`Masih ada soal yang belum di selesaikan`)
                var anu = await fetchJson(`https://violetics.pw/api/games/tebakan?apikey=900c-3717-2c24`)
                console.log(anu.result.jawaban)
                var petunjuk = anu.result.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                reply(monospace(`*KUIS*\nSilahkan jawab soal berikut ini\n\nSoal :${anu.result.pertanyaan}\nPetunjuk : ${petunjuk}\nWaktu : ${waktumath}s`))
                var ahh = anu.result.jawaban.toLowerCase()
                game.addKuis(from, ahh, waktumath, kuis)
            }
            gameAdd(m.sender, glimit)
            addCountCmd(`#kuis`, sender, _cmd)
                 break

case prefix+'math':{
	            if (isGame(sender, isCreator, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                if (game.isMathGame(from, math)) return reply(`Masih ada soal yang belum di selesaikan`)
                var anu = await fetchJson(`http://zekais-api.herokuapp.com/math?mode=extreme`)
                reply(`Math Game\n\n[ * ] Perkalian / kali kalian\n[ - ] Pengurangan / kurang kurangin\n[ / ] Pembagian / bagi bagian\n[ + ] Pertambahan / tambah tambahan\n\n❖ Soal : ${anu.soal}\n❖ Waktu : ${waktumath}s`)
                var anh = anu.jawaban
                console.log(anu.jawaban)
                game.addMath(from, anh, waktumath, math)
            }
            gameAdd(m.sender, glimit)
           addCountCmd(`#math`, sender, _cmd)
                 break

case prefix+'family100':{
	            if (isGame(sender, isCreator, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                if (game.isfam(from, family100)) return reply(`Masih ada soal yang belum di selesaikan`)
                let anu = await axios.get(`https://violetics.pw/api/games/family100?apikey=900c-3717-2c24`)
                reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${anu.data.result.pertanyaan}\n*Total Jawaban :* ${anu.data.result.jawaban.length}\n\nWaktu : ${gamewaktu}s`)
                let anoh = anu.data.result.jawaban
                console.log(anu.data.result.jawaban)
                let rgfds = []
                for (let i of anoh){
                    let fefs = i.split('/') ? i.split('/')[0] : i
                    let iuhbb = fefs.startsWith(' ') ? fefs.replace(' ','') : fefs
                    let axsf = iuhbb.endsWith(' ') ? iuhbb.replace(iuhbb.slice(-1), '') : iuhbb
                    rgfds.push(axsf.toLowerCase())
                }
                game.addfam(from, rgfds, gamewaktu, family100)
            }
            gameAdd(m.sender, glimit)
            addCountCmd(`#family100`, sender, _cmd)
                break

//━━━━━━━━━━━━━━━[ Bank ]━━━━━━━━━━━━━━━\\

case prefix+'limit': case prefix+'balance':
			case prefix+'ceklimit': case prefix+'cekbalance':
			    if (m.mentionedJid.length !== 0){
					var Ystatus = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
					var isPrim = Ystatus ? true : _prem.checkPremiumUser(m.mentionedJid[0], premium)
				    var ggcount = isPrim ? gcounti.rakyat : gcounti.free
                    var limitMen = `${getLimit(m.mentionedJid[0], limitCount, limit)}`
                    reply(`*LIMIT & BALANCE*\nLimit : ${_prem.checkPremiumUser(m.mentionedJid[0], premium) ? 'Unlimited' : limitMen}/${limitCount}\nLimit Game : ${cekGLimit(m.mentionedJid[0], ggcount, glimit)}/${ggcount}\nBalance : $${getBalance(m.mentionedJid[0], balance)}\nInfo User : *${pushname}*\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit\n\nNOTE : harga 1 Limit = 300 balance`)
                } else {
                    var limitPrib = `${getLimit(m.sender, limitCount, limit)}/${limitCount}`
                    reply(`*LIMIT & BALANCE*\nLimit : ${isPremium ? 'Unlimited' : limitPrib}\nLimit Game : ${cekGLimit(m.sender, gcount, glimit)}/${gcount}\nBalance : $${getBalance(m.sender, balance)}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`)
                }
                addCountCmd(`#ceklimit`, sender, _cmd)
				break
				
				case prefix+'topbalance':{
                balance.sort((a, b) => (a.balance < b.balance) ? 1 : -1)
                let top = '*── 「 TOP BALANCE 」 ──*\n\n'
                let arrTop = []
				var total = 10
				if (balance.length < 10) total = balance.length
                for (let i = 0; i < total; i++) {
                    top += `${i + 1}. @${balance[i].id.split("@")[0]}\n=> Balance : $${balance[i].balance}\n\n`
                    arrTop.push(balance[i].id)
                }
                mentions(top, arrTop, true)
            }
            addCountCmd(`#topbalance`, sender, _cmd)
                break
                
            case prefix+'buylimit':{
                if (args.length < 1) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $150 balance`)
                if (!args[0]) return reply(`Masukkan nominal nya!`)
                if (!isNaN(args[1])) return reply(`Nominal harus berupa angka!`)
                if (args[0].toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
                if (args[0].includes("-")) return reply(`Jangan menggunakan -`)
                let ane = Number(parseInt(args[0]) * 150)
                if (getBalance(m.sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
                kurangBalance(m.sender, ane, balance)
                giveLimit(m.sender, parseInt(args[0]), limit)
                reply(`Pembeliaan limit sebanyak ${args[0]} berhasil\n\nSisa Balance : $${getBalance(m.sender, balance)}\nSisa Limit : ${getLimit(m.sender, limitCount, limit)}/${limitCount}`)
            }
            addCountCmd(`#buylimit`, sender, _cmd)
                break
                
			case prefix+'transfer':
            case prefix+'tf':{
                 if (args.length < 1) return reply(`Kirim perintah *${command}* @tag nominal\nContoh : ${command} @6285791458996 2000`)
                 if (m.mentionedJid.length == 0) return reply(`Tag orang yang ingin di transfer balance`)
                 if (!args[0]) return reply(`Masukkan nominal nya!`)
                 if (!isNaN(args[0])) return reply(`Nominal harus berupa angka!`)
                 if (args[0].toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
                 if (args[0].includes("-")) return reply(`Jangan menggunakan -`)
                 var anu = getBalance(m.sender, balance)
                 if (anu < args[1] || anu == 'undefined') return reply(`Balance Kamu Tidak Mencukupi Untuk Transfer Sebesar $${args[1]}, Kumpulkan Terlebih Dahulu\nKetik ${prefix}balance, untuk mengecek Balance mu!`)
                 kurangBalance(m.sender, parseInt(args[1]), balance)
                 addBalance(m.mentionedJid[0], parseInt(args[1]), balance)
                 reply(`Sukses transfer balance sebesar $${args[1]} kepada @${m.mentionedJid[0].split("@")[0]}`)
            }
            addCountCmd(`#transfer`, sender, _cmd)
                 break
                 
            case prefix+'buygamelimit':
            case prefix+'buyglimit':{
                if (args.length < 1) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $150 balance`)
                if (!args[0]) return reply(`Masukkan nominal nya!`)
                if (!isNaN(args[1])) return reply(`Nominal harus berupa angka!`)
                if (args[0].toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
                if (args[0].includes("-")) return reply(`Jangan menggunakan -`)
                let ane = Number(parseInt(args[0]) * 150)
                if (getBalance(m.sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
                kurangBalance(m.sender, ane, balance)
                givegame(m.sender, parseInt(args[0]), glimit)
                reply(`Pembeliaan game limit sebanyak ${args[0]} berhasil\n\nSisa Balance : $${getBalance(m.sender, balance)}\nSisa Game Limit : ${cekGLimit(m.sender, gcount, glimit)}/${gcount}`)
            }
            addCountCmd(`#buyglimit`, sender, _cmd)
                break

//━━━━━━━━━━━━━━━[ social ]━━━━━━━━━━━━━━━\\
case prefix+'cariteman':{
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (m.isGroup) return reply( 'Fitur ini tidak bisa dijalankan di dalam grup')
let hem = getUserRandomId(db.data.users)
await reply('Search A Partner..')
try {
ppuser = await vynnx.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://telegra.ph/file/265c672094dfa87caea19.jpg'
}
let ppc = await getBuffer(ppuser)
let teks = `*PARTNER DITEMUKAN*

• *Request By* : ${pushname}
• *Partner* : ${hem.split("@")[0]} | ${hem.pushname}
• *Api* : wa.me/${hem.split("@")[0]}?text=Assalamualaikum

Klik Api untuk memulai obrolan`
let buttons = [
{buttonId: `.cariteman`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
document: fs.readFileSync("./home/media/audio/angelbaby.mp3"),
mimetype: moci,
fileName: `[ Cari Teman ]`,
fileLength: 999999999999,
pageCount: 99999,
caption: teks,
footer: footxt,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: `${hem.pushname}`,
body: "Support By web.vynnshome.xyz",
thumbnail: ppc,
sourceUrl: grupbot,
mediaUrl: grupbot,
renderLargerThumbnail: true,
showAdAttribution: true,
mediaType: 1
}}
}
vynnx.sendMessage(from, buttonMessage, { quoted: m })
}         
limitAdd(m.sender, limit)
addCountCmd(`#cariteman`, sender, _cmd)
break

//━━━━━━━━━━━━━━━[ About ]━━━━━━━━━━━━━━━\\
case prefix+'style': case prefix+'styletext': {
		let { styletext } = require('./lib/scraper')
		if (!m.text) return reply('Masukkan Query text!')
                let anu = await styletext(m.text)
                let teks = `Style Text From *${text}*\n\n`
                for (let i of anu) {
                    teks += `• *${i.name}* : ${i.result}\n\n`
                }
                reply(teks)
	    }
	    break
	
case prefix+'aboutbot':{
const ftextt = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { "extendedTextMessage": { "text":"About Bot", "title": `Hmm`, 'jpegThumbnail': await reSize(achn, 200, 200, []) }}}
const sections = [
    {
	title: 'About Bot',
	rows: [
	    {title: "Owner", rowId: `#owner`, description: ""},
	    {title: "Bandwidth", rowId: `#bandwidth`, description: ""},
	    {title: "Info Bot", rowId: `#ping`, description: ""},
	    {title: "Rules", rowId: `#rules`, description: ""},
		{title: "Dashboard", rowId: `#dashboard`, description: ""}
        ]
    },
]

const listMessage = {
  text: `Hi *${pushname}*,\nKlik List Berikut Untuk Mengetahui Informasi Mengenai Bot Ini`,
  footer: footxt,
  title: `About Bot`,
  buttonText: "Click Here",
  sections
}
vynnx.sendMessage(from, listMessage, {quoted:ftextt})
}
break

case prefix+'tes':{
  // send a list message!
   const sections = [
    {
	title: "Section 1",
	rows: [
	    {
	     title: "Option 1", 
    	 rowId: "option1"
	    },
	    {
	     title: "Option 2", 
	     rowId: "option2", 
	     description: "This is a description"
	    }
     ]
    },
    {
	title: "Section 2",
	rows: [
	    {
	     title: "Option 3", 
	     rowId: "option3"
	     },
	    {
	     title: "Option 4", 
	     rowId: "option4", 
	     description: "This is a description V2"
	    }
       ]
     },
    ]

  const listMessage = {
   text: "This is a list",
   footer: "https://web.vynnshome.xyz/",
   title: "List message",
   buttonText: "Required, text on the button to view the list",
   sections
   }

  const sendm =  vynnx.sendMessage(
      from, 
      listMessage
    )

  }
  break
  
case prefix+'infobot': case prefix+'ping': {
if (isBan) return reply(mess.ban)
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
*Ilulu Stats*

_*Last Update 30 Mei 2022*_

- Upload : ${upload}
- Download : ${download}
- Speed : ${latensi.toFixed(4)} _Second_ 
- Runtime : ${runtime(process.uptime())}
- Total Register : ${Object.keys(db.data.users).length} Users

*Big Thanks To :*
• Allah SWT
• Adiwajshing/baileys
• ZackMans
• Dika Ardnt
• Rzky Fdlh
• Fatih Aridho
• Fadly ID
• Hexagonz
• www.yudaxwer.xyz
• Rifza
• Rzk
• X-None Team
• Penyedia Dari :
  - Module
  
*Info Server*
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

*NodeJS Memory Usage*
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}
`.trim()
fakegroup(respon)
}
addCountCmd(`#infobot`, sender, _cmd)
break

case prefix+'dashboard':
	        addCountCmd('#dashboard', sender, _cmd)
            var posi = await getPosiCmdUser(sender, _cmdUser)
            _cmdUser[posi].db.sort((a, b) => (a.count < b.count) ? 1 : -1)
            _cmd.sort((a, b) => (a.count  < b.count) ? 1 : -1)
            var posi = await getPosiCmdUser(sender, _cmdUser)
            var jumlahCmd = _cmd.length
            if (jumlahCmd > 10) jumlahCmd = 10
            var jumlah = _cmdUser[posi].db.length
            if (jumlah > 5) jumlah = 5
            var totalUser = 0
            for (let x of _cmdUser[posi].db) {
                totalUser = totalUser + x.count
            }
            var total = 0
            for (let o of _cmd) {
                total = total + o.count
            }
            var teks = `*ILULU DASHBOARD*\n\n*HIT*\n• GLOBAL : ${total}\n• USER : ${Object.keys(db.data.users).length} Users\n\n`
            teks += `*Most Command Global*\n`
            for (let u = 0; u < jumlahCmd; u ++) {
                teks += `• ${_cmd[u].nama} : ${_cmd[u].count}\n`
            }
            teks += `\n*Most Command User*\n`
            for (let i = 0; i < jumlah; i ++) {
                teks += `• ${_cmdUser[posi].db[i].nama} : ${_cmdUser[posi].db[i].count}\n`
            }
            reply(teks)
            break
           
case prefix+'cekdrive': case prefix+'drive':{
            var resulti = await nou.drive.info();
            addCountCmd('#cekdrive', sender, _cmd)
            reply(`*Drive Server Info*\n\n *• Total :* ${resulti.totalGb} GB\n *• Used :* ${resulti.usedGb} GB (${resulti.usedPercentage}%)\n *• Free :* ${resulti.freeGb} GB (${resulti.freePercentage}%)`)
            }
            break


case prefix+'bandwidth':
let ehek = `*Bandwidth Server*\n\n*-* Upload : ${upload}\n*-* Download : ${download}`
reply(ehek)
break

case prefix+'rules':
addCountCmd(`#rules`, sender, _cmd)
 let tol = `*Rules Mori's* \n• No Spam\n• No Call Bot/Owner \n\nRegards © Vynns`
 sendRender(m.chat, tol, "https://wa.me/"+botNumber.split("@")[0], false, true, m)
 break
 
case prefix+'owner': case prefix+'creator': {
addCountCmd(`#owner`, sender, _cmd)
vynnx.sendContact(from, global.owner, fkontak)
}
break

case prefix+'request': {
if (isBan) return reply(mess.ban)
if (!args.join(" ")) return reply(`Example : ${command} min tambahin fitur downloader`)
teks = `*| REQUEST FITUR |*`
teks1 = `\n\nNomor : @${m.sender.split("@")[0]}\nRequest : ${args.join(" ")}`
teks2 = `\n\nSucces send to owner`
for (let i of owner) {
vynnx.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:m})
}
vynnx.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
}
addCountCmd(`#request`, sender, _cmd)
break

case prefix+'report': {
if (isBan) return reply(mess.ban)
if (!args.join(" ")) return reply(`Example : \n- ${command} fitur ig error min\n- ${command} user ini nyepam min`)
teks = `*| REPORT FITUR |*`
teks1 = `\n\nNomor : @${m.sender.split("@")[0]}\nReport : ${args.join(" ")}`
teks2 = `\n\nSucces send to owner`
for (let i of owner) {
vynnx.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:m})
}
vynnx.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
}
addCountCmd(`#report`, sender, _cmd)
break

//━━━━━━━━━━━━━━━[ anonymous ]━━━━━━━━━━━━━━━\\
// Anonymous Chat
        case prefix+'anonymous': {
if (isBan) return reply(mess.ban)
if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let buttons = [
{ buttonId: '.start', buttonText: { displayText: 'Start' }, type: 1 }
]
vynnx.sendButtonText(m.chat, buttons, `Hi @${m.sender.split('@')[0]} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner`, footxt, fkontak, {mentions: m.sender})
}
addCountCmd(`#anonymous`, sender, _cmd)
break

case prefix+'keluar': case prefix+'leave': {
if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!room) {
let buttons = [
{ buttonId: '.start', buttonText: { displayText: 'Start' }, type: 1 }
]
await vynnx.sendButtonText(m.chat, buttons, `[💛] Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner`)
throw false
}
m.reply('Ok')
let other = room.other(m.sender)
if (other) await vynnx.sendText(other, `[💔] Partner Telah Meninggalkan Sesi Anonymous`, fkontak)
delete this.anonymous[room.id]
if (command === 'leave') break
}
break

case prefix+'mulai': case prefix+'start': {
if (isBan) return reply(mess.ban)
if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
let buttons = [
{ buttonId: '.keluar', buttonText: { displayText: 'Stop' }, type: 1 }
]
await vynnx.sendButtonText(m.chat, buttons, `[💛] Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda`, footxt, fkontak)
throw false
}
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
let buttons = [
{ buttonId: '.next', buttonText: { displayText: 'Skip' }, type: 1 },
{ buttonId: '.keluar', buttonText: { displayText: 'Stop' }, type: 1 }
]
await vynnx.sendButtonText(room.a, buttons, `[💚] Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan`, footxt, fkontak)
room.b = m.sender
room.state = 'CHATTING'
await vynnx.sendButtonText(room.b, buttons, `[💚] Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan`, footxt, fkontak)
} else {
let id = + new Date
this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
let buttons = [
{ buttonId: '.keluar', buttonText: { displayText: 'Stop' }, type: 1 }
]
await vynnx.sendButtonText(m.chat, buttons, `[🔍] Mohon Tunggu Sedang Mencari Partner`, footxt, fkontak)
}
break
}
case prefix+'next': case prefix+'lanjut': {
if (isBan) return reply(mess.ban)
if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!romeo) {
let buttons = [
{ buttonId: '.start', buttonText: { displayText: 'Start' }, type: 1 }
]
await vynnx.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
throw false
}
let other = romeo.other(m.sender)
if (other) await vynnx.sendText(other, `[🍟] Partner Telah Meninggalkan Sesi Anonymous`, fkontak)
delete this.anonymous[romeo.id]
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
let buttons = [
{ buttonId: '.next', buttonText: { displayText: 'Skip' }, type: 1 },
{ buttonId: '.keluar', buttonText: { displayText: 'Stop' }, type: 1 }
]
await vynnx.sendButtonText(room.a, buttons, `[💚] Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan`, footxt, m)
room.b = m.sender
room.state = 'CHATTING'
await vynnx.sendButtonText(room.b, buttons, `[💚] Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan`, footxt, m)
} else {
let id = + new Date
this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
let buttons = [
{ buttonId: '.keluar', buttonText: { displayText: 'Stop' }, type: 1 }
]
await vynnx.sendButtonText(m.chat, buttons, `[🔍] Mohon Tunggu Sedang Mencari Partner`, footxt, fkontak)
}
break
}
            
//━━━━━━━━━━━━━━━[ Store ]━━━━━━━━━━━━━━━\\
case prefix+'list':
            if (!m.isGroup) return m.reply('Khusus Grup')
            if (db_respon_list.length === 0) return m.reply(`Belum ada list message di database`)
            if (!isAlreadyResponListGroup(from, db_respon_list)) return m.reply(`Belum ada list message yang terdaftar di group ini`)
            var arr_rows = [];
            for (let x of db_respon_list) {
                if (x.id === from) {
                    arr_rows.push({
                        title: x.key,
                        rowId: x.key
                    })
                }
            }
            var listMsg = {
                text: 'Silahkan Pilih Produk Nya',
                buttonText: 'Click Here!',
                footer: footxt,
                sections: [{
                    title: groupName, rows: arr_rows
                }]
            }
            vynnx.sendMessage(from, listMsg)
addCountCmd(`#list`, sender, _cmd)
            break

case prefix+'topup': {
addCountCmd(`#topup`, sender, _cmd)
if (isBan) return reply(mess.ban)
if (!args[0]) return reply(`Example :\n- ${command} id\n- ${command} 946716486`)
if (!Number(args[0])) return reply("Hanya Angka!")
const sections = [
{
title: "FREE FIRE",
rows: [ { title: "5 💎", rowId: `.etopup 5 ${args[0]}`, description: "Rp 1.261,00" }, { title: "12 💎", rowId: `.topup 12 ${args[0]}`, description: "Rp 2.523,00" }, { title: "070 💎", rowId: `.etopup 70 ${args[0]}`, description: "Rp 12.614,00" }, { title: "140 💎", rowId: `.etopup 140 ${args[0]}`, description: "Rp 25.227,00" }, { title: "355 💎", rowId: `.etopup 355 ${args[0]}`, description: "Rp 63.068,00" }, { title: "720 💎", rowId: `.etopup 720 ${args[0]}`, description: "Rp 126.136,00" }, { title: "1450 💎", rowId: `.etopup 1450 ${args[0]}`, description: "Rp 252.273,00" } ]
}
]
const listMessage = {
text: "List Service Diamond Free Fire",
footer: "https://duniagames.co.id/top-up/",
buttonText: "Click Here!",
sections
}
vynnx.sendMessage(m.chat, listMessage, {quoted:fkontak})
}
break

case prefix+'etopup': {
addCountCmd(`#etopup`, sender, _cmd)
if (isBan) return reply(mess.ban)
try {
let topU = await topUp(args[1], "", args[0], "6289604111770", "FREEFIRE")
teks = `*TOPUP-FREEFIRE*

ID : ${args[1]}
NickName : ${topU.data.userGameName}
Total Diamond  : ${topU.data.item.name}
Silahkan Scan QR Untuk Membayar

*Note* : _QR Hanya Berlaku 5 Menit_`
vynnx.sendMessage(from, {image:{url:topU.data.elisaConfig.qrCode}, caption:teks}, {quoted:m})
} catch {
reply("id tidak valid, coba cek id kamu")
}
}
break
            
        case prefix+'addlist':
            if (!m.isGroup) return m.reply('Khusus Grup')
            if (!isAdmins && !isCreator) return m.reply(mess.admin)
            var args1 = q.split("@")[0]
            var args2 = q.split("@")[1]                
            if (!q.includes("@")) return m.reply(`Gunakan dengan cara ${command} *key@response*\n\n_Contoh_\n\n${command} tes@apa`)
            if (isAlreadyResponList(from, args1, db_respon_list)) return m.reply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
            if (isImage || isQuotedImage) {
            let { TelegraPh } = require('./lib/uploader')
                let media = await vynnx.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                        addResponList(from, args1, args2, true, `${anu}`, db_respon_list)
                        reply(`Sukses Menambahkan ${args[0]} Ke Dalam List`)
                        if (fs.existsSync(media)) fs.unlinkSync(media)
            } else {
                addResponList(from, args1, args2, false, '-', db_respon_list)
                reply(`Sukses Menambahkan ${args[0]} Ke Dalam List`)
            }
            addCountCmd(`#addlist`, sender, _cmd)
            break
            
        case prefix+'dellist':
            if (!m.isGroup) return reply('Khusus Grup')
            if (!isAdmins && !isCreator) return reply(mess.admin)
            if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
            if (!q) return reply(`Gunakan dengan cara ${command} *key*\n\n_Contoh_\n\n${command} hello`)
            if (!isAlreadyResponList(from, q, db_respon_list)) return m.reply(`List respon dengan key *${q}* tidak ada di database!`)
            delResponList(from, q, db_respon_list)
            reply(`Sukses delete list message dengan key *${q}*`)
            addCountCmd(`#dellist`, sender, _cmd)
            break
            
        case prefix+'updatelist': case prefix+'update':
            if (!m.isGroup) return reply('Khusus Grup')
            if (!isAdmins && !isCreator) return reply(mess.admin)
            var args1 = q.split("@")[0]
            var args2 = q.split("@")[1]
            if (!q.includes("@")) return reply(`Gunakan dengan cara ${command} *key@response*\n\n_Contoh_\n\n${command} tes@apa`)
            if (!isAlreadyResponListGroup(from, db_respon_list)) return m.reply(`Maaf, untuk key *${args1}* belum terdaftar di group ini`)
            if (isImage || isQuotedImage) {
                let media = await vynnx.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                        updateResponList(from, args1, args2, true, `${anu}`, db_respon_list)
                        reply(`Sukses update list message dengan key : *${args1}*`)
                        if (fs.existsSync(media)) fs.unlinkSync(media)
            } else {
                updateResponList(from, args1, args2, false, '-', db_respon_list)
                reply(`Sukses update respon list dengan key *${args1}*`)
            }
            addCountCmd(`#updatelist`, sender, _cmd)
            break

//━━━━━━━━━━━━━━━[ Primbon ]━━━━━━━━━━━━━━━\\
case prefix+'artinama':{
  if (!q) return reply('Namanya siapa?')
  let namalu = await arti_nama(q)
  let teksnya = `[ *NAMA* : ${namalu.message.nama} ]\n*Arti* : ${namalu.message.arti}`
  reply(teksnya)
  console.log(namalu)
  }
  addCountCmd(`#artinama`, sender, _cmd)
  break
  
  //━━━━━━━━━━━━━━━[ Islam Feature ]━━━━━━━━━━━━━━━\\
case prefix+'kisahnabi':{
if (!q) return reply('Example : kisahnabi adam')
const res = await Searchnabi(q) 
const result = `*Nama* : ${res.name}\n*Wafat* : ${res.wafat_usia}\n*Kelahiran* : ${res.kelahiran}\n*Singgah* : ${res.singgah}\n*Kisah* : ${res.kisah}`
reply(result)
limitAdd(m.sender, limit)
addCountCmd(`#kisahnabi`, sender, _cmd)
}
break	

//━━━━━━━━━━━━━━━[ Fun ]━━━━━━━━━━━━━━━\\
case prefix+'jodohku': {
            if (!m.isGroup) return reply(mess.group)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'jodohku', buttonText: { displayText: 'Get Again' }, type: 1 }
                    ]
                    await vynnx.sendButtonText(m.chat, buttons, jawab, footxt, m, {mentions: ments})
            }
            limitAdd(m.sender, limit)
            addCountCmd(`#jodohku`, sender, _cmd)
            break
            
case prefix+'jadian': {
            if (!m.isGroup) return reply(mess.group)
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian💖 
@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: `.jadian`, buttonText: { displayText: 'Get Again' }, type: 1 }
                    ]
                    await vynnx.sendButtonText(m.chat, buttons, jawab, footxt, m, {mentions: menst})
            }
            limitAdd(m.sender, limit)
            addCountCmd(`#jadian`, sender, _cmd)
            break

case prefix+'fitnah': {
addCountCmd(`#fitnah`, sender, _cmd)
if (isBan) return reply(mess.ban)
if (!m.isGroup) return reply(mess.group)
if (!args.join(" ")) return reply(`Example :\n- ${command} no | jawaban | fitnah\n- ${command} @6289604111770 | p | apa`)
targetd = args.join(" ").split("|")[0];
jawbanbot = args.join(" ").split("|")[1];
teksfit = args.join(" ").split("|")[2];
targetnya = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : targetd.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
vynnx.sendMessage(from, {text:jawbanbot}, {quoted:{
key: {
fromMe: false,
participant: targetnya
},
message: {
conversation: teksfit
}
}})
}
addCountCmd(`#fitnah`, sender, _cmd)
break

case prefix+'ganteng': case prefix+'memek': case prefix+'ngentod': case prefix+'autis': case prefix+'cantik': case prefix+'jelek': case prefix+'goblok':  case prefix+'bego': case prefix+'pinter': case prefix+'jago': case prefix+'nolep': case prefix+'monyet': case prefix+'sange':  case prefix+'babi': case prefix+'beban': case prefix+'baik': case prefix+'jahat': case prefix+'anjing': case prefix+'haram': case prefix+'kontol': case prefix+'pakboy': case prefix+'pakgirl': case prefix+'hebat': case prefix+'sadboy': case prefix+'sadgirl':   {
            if (!m.isGroup) return reply(mess.group)
            let member = participants.map(u => u.id)
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Yg Paling *${command}* Disini Adalah @${jodoh.split('@')[0]}`
            let ments = [jodoh]
            let buttons = [
                        { buttonId: `infobot`,buttonText: { displayText: 'Info Bot' }, type: 1}
                    ]
                    await vynnx.sendButtonText(from, buttons, jawab, footxt, m, {mentions: ments})
            }
            limitAdd(m.sender, limit)
            addCountCmd(`#ganteng`, sender, _cmd)
            break

case prefix+'apakah':
            if (!m.isGroup) return reply(mess.group)
				if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
					const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
					const kah = apa[Math.floor(Math.random() * apa.length)]
vynnx.sendMessage(m.chat, { text: `Pertanyaan : Apakah ${q}\nJawaban : ${kah}` }, { quoted: m })
limitAdd(m.sender, limit)
addCountCmd(`#apakah`, sender, _cmd)
					break
					
case prefix+'bisakah':
case prefix+'bisa':
case prefix+'bisagak':
    if (!m.isGroup) return reply(mess.group)
				if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
					const bisa = ['Bisa','Mungkin','Bisa Jadi','Gak Bisa','Gak Bisa Ajg Aaokawpk','TENTU PASTI KAMU BISA!!!!']
					const ga = bisa[Math.floor(Math.random() * bisa.length)]
vynnx.sendMessage(m.chat, { text: `Pertanyaan : ${q}\nJawaban : ${ga}` }, { quoted: m })
limitAdd(m.sender, limit)
addCountCmd(`#bisakah`, sender, _cmd)
					break
					
case prefix+'bagaimanakah': case prefix+'gimanakah': case prefix+'gimana':
if (!m.isGroup) return reply(mess.group)
				if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
					const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel','astaghfirallah Beneran???','Pusing ah','Owhh Begitu:(','Yang Sabar Ya Bos:(','Gimana yeee']
					const ya = gimana[Math.floor(Math.random() * gimana.length)]
limitAdd(m.sender, limit)
vynnx.sendMessage(m.chat, { text: `Pertanyaan : ${q}\nJawaban : ${ya}` }, { quoted: m })
addCountCmd(`#bagaimanakah`, sender, _cmd)
					break
					
case prefix+'rate':
if (!m.isGroup) return reply(mess.group)
				if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
					const ra = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
vynnx.sendMessage(m.chat, { text: `Rate : ${q}\nJawaban : *${te}%*` }, { quoted: m })
limitAdd(m.sender, limit)
addCountCmd(`#rate`, sender, _cmd)
					break
					
case prefix+'gantengcek':  case prefix+'cekganteng':
if (!m.isGroup) return reply(mess.group)
				if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Arasya`)
					const gan = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
vynnx.sendMessage(m.chat, { text: `Nama : ${q}\nJawaban : *${teng}%*` }, { quoted: m })
limitAdd(m.sender, limit)
addCountCmd(`#gantengcek`, sender, _cmd)
					break
					
case prefix+'cantikcek': case prefix+'cekcantik':
if (!m.isGroup) return reply(mess.group)
				if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Kepin`)
					const can = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const tik = can[Math.floor(Math.random() * can.length)]
vynnx.sendMessage(m.chat, { text: `Nama : ${q}\nJawaban : *${tik}%*` }, { quoted: m })
limitAdd(m.sender, limit)
addCountCmd(`#cantikcek`, sender, _cmd)
					break
					
case prefix+'sangecek': case prefix+'ceksange': case prefix+'gaycek': case prefix+'cekgay': case prefix+'lesbicek': case prefix+'ceklesbi':
				if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
					const sangeh = ['5', '10', '15','20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
vynnx.sendMessage(m.chat, { text: `Nama : ${q}\nJawaban : *${sange}%*` }, { quoted: m })
limitAdd(m.sender, limit)
addCountCmd(`#sangecek`, sender, _cmd)
					break
					
case prefix+'kapankah': case prefix+'kapan':
				if (!q) return reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
					const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi','20 Hari Lagi', '25 Hari Lagi','30 Hari Lagi','35 Hari Lagi','40 Hari Lagi','45 Hari Lagi','50 Hari Lagi','55 Hari Lagi','60 Hari Lagi','65 Hari Lagi','70 Hari Lagi','75 Hari Lagi','80 Hari Lagi','85 Hari Lagi','90 Hari Lagi','100 Hari Lagi','5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi','20 Bulan Lagi', '25 Bulan Lagi','30 Bulan Lagi','35 Bulan Lagi','40 Bulan Lagi','45 Bulan Lagi','50 Bulan Lagi','55 Bulan Lagi','60 Bulan Lagi','65 Bulan Lagi','70 Bulan Lagi','75 Bulan Lagi','80 Bulan Lagi','85 Bulan Lagi','90 Bulan Lagi','100 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','Besok','Lusa',`Abis Command Ini Juga Lu ${q}`]
					const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
vynnx.sendMessage(m.chat, { text: `Pertanyaan : ${q}\nJawaban : *${kapankah}*` }, { quoted: m })
limitAdd(m.sender, limit)
addCountCmd(`#kapankah`, sender, _cmd)
					break

//━━━━━━━━━━━━━━━[ Sticker Tele ]━━━━━━━━━━━━━━━\\
case prefix+'telestick':{
const ftextt = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { "extendedTextMessage": { "text":"Telegram Sticker", "title": `Hmm`, 'jpegThumbnail': await reSize(achn, 200, 200, []) }}}
const sections = [
    {
	title: 'Telegram Sticker',
	rows: [
	    {title: "Gura Stick", rowId: `#gura`, description: ""},
	    {title: "Doge Stick", rowId: `#doge`, description: ""},
	    {title: "Bucin Stick", rowId: `#bucinstick`, description: ""},
	    {title: "Patrick", rowId: `#patrick`, description: ""}
        ]
    },
]

const listMessage = {
  text: `Hi *${pushname}*, Klik List Ini Untuk Melihat List Stick Yg Tersedia`,
  footer: footxt,
  title: `Telegram Stick`,
  buttonText: "Click Here",
  sections
}
vynnx.sendMessage(from, listMessage, {quoted:ftextt})
}
break

case prefix+'gura':
case prefix+'gurastick':{
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await vynnx.sendImageAsSticker(from, wifegerakx, m, { packname: ``, author:  ` Sticker By : ${pushname}
 Created By : 𝒊𝒍𝒖𝒍𝒖 - ぼ
 Packname : My Sticker

© WhatsApp Bot By Vynn's`, contextInfo:{externalAdReply:{
title: "Simple WhatsApp Bot",
body: "Support By web.vynnshome.xyz",
thumbnail: kenepin,
sourceUrl: grupbot,
mediaUrl: grupbot,
showAdAttribution: true,
mediaType: 1
}} })
await fs.unlinkSync(encmedia)
}
limitAdd(m.sender, limit)
addCountCmd(`#gura`, sender, _cmd)
break

case prefix+'doge':
case prefix+'dogestick':{
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await vynnx.sendImageAsSticker(from, wifegerakx, m, { packname: ``, author:  ` Sticker By : ${pushname}\n Created By : 𝒊𝒍𝒖𝒍𝒖 - ぼ\n Packname : My Sticker\n\n© WhatsApp Bot By Vynn's`, contextInfo:{externalAdReply:{
title: "Simple WhatsApp Bot",
body: "Support By web.vynnshome.xyz",
thumbnail: kenepin,
sourceUrl: grupbot,
mediaUrl: grupbot,
showAdAttribution: true,
mediaType: 1
}} })
await fs.unlinkSync(encmedia)
}
limitAdd(m.sender, limit)
addCountCmd(`#doge`, sender, _cmd)
break

case prefix+'bucinstick':
case prefix+'bucinp' :{
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await vynnx.sendImageAsSticker(from, wifegerakx, m, { packname: ``, author:  ` Sticker By : ${pushname}\n Created By : 𝒊𝒍𝒖𝒍𝒖 - ぼ\n Packname : My Sticker\n\n© WhatsApp Bot By Vynn's`, contextInfo:{externalAdReply:{
title: "Simple WhatsApp Bot",
body: "Support By web.vynnshome.xyz",
thumbnail: kenepin,
sourceUrl: grupbot,
mediaUrl: grupbot,
showAdAttribution: true,
mediaType: 1
}} })
await fs.unlinkSync(encmedia)
}
limitAdd(m.sender, limit)
addCountCmd(`#bucinstick`, sender, _cmd)
break

case prefix+'sticksearch': case prefix+'stickersearch':{
if (!args[0]) return reply(`Example :\n${command} patrick`)
let stSearch = await xzons.StickerSearch(args[0])
reply('Hasil Akan Dikirimkan Melalui Private Chat Agar Tidak Terjadi Spam')
for (let i of stSearch.sticker_url) {
sleep(1000)
sendStickerFromUrl(m.sender, i, global.packname, global.author, { quoted: m })
}
}
addCountCmd(`#sticksearch`, sender, _cmd)
break

case prefix+'telesticksearch': case prefix+'stickertele': case prefix+'sticktele': {
if (isBan) return reply(mess.ban)
if (!args[0]) return reply(`Example : \n- ${command} url\n- ${command} https://t.me/addstickers/Nekonyaaaa`)
telesticker(args[0]).then(async(data) => {
                for (let i of data) {
                    if (i.status == 200) {
			            sendStickerFromUrl(from, i.url)
			            await sleep(1000)
			        } else {
			            vynnx.sendMessage(from, { text: 'Salah satu sticker error!' })
			        }
			    }
            }).catch((e) => reply(mess.error.api))
            }
            break

case prefix+'patrik':
case prefix+'patrick': {
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await vynnx.sendImageAsSticker(from, wifegerakx, m, { packname: ``, author:  ` Sticker By : ${pushname}\n Created By : 𝒊𝒍𝒖𝒍𝒖 - ぼ\n Packname : My Sticker\n\n© WhatsApp Bot By Vynn's`, contextInfo:{externalAdReply:{
title: "Simple WhatsApp Bot",
body: "Support By web.vynnshome.xyz",
thumbnail: kenepin,
sourceUrl: grupbot,
mediaUrl: grupbot,
showAdAttribution: true,
mediaType: 1
}} })
await fs.unlinkSync(encmedia)
}
limitAdd(m.sender, limit)
addCountCmd(`#patrick`, sender, _cmd)
break

case prefix+'delete': case prefix+'del': {
if (isBan) return reply(mess.ban)
if (!m.quoted) return
let { chat, fromMe, id, isBaileys } = m.quoted
if (!isBaileys) return reply('Pesan tersebut bukan dikirim oleh bot!')
vynnx.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
limitAdd(m.sender, limit)
addCountCmd(`#delete`, sender, _cmd)
break

case prefix+'catalog': { // Nemu di Sc chika
const ftextt = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { "extendedTextMessage": { "text":"WhatsApp Bot - Mybe Vynns", "title": `Hmm`, 'jpegThumbnail': await reSize(achn, 200, 200, []) }}}
let moys = ` • Upload : ${cBandwidth.upload}\n • Download : ${cBandwidth.download}\n • Sessions : ${dbs.statDatabase("./connect/session.json").size}\n • Total Register : ${_registered.length} User`
var oit = allmenu(sender, prefix, pushname, _registered, moys, jam, date)
tod = await reSize(achn, 200, 200) 
var messa = await prepareWAMessageMedia({ image: tod}, { upload: vynnx.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "7091718154232528",
"title": `All Menu`,
"description": oit,
"footerText": footxt,
"currencyCode": "IDR",
"priceAmount1000": "50000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "1000",
"retailerId": footxt,
"url": linkgrupss
},
"businessOwnerJid": "6289604111770@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: ftextt })
vynnx.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
break

case prefix+'caripesan': case prefix+'caritext': case prefix+'searchtext': case prefix+'searchmsg': {
if (isBan) return reply(mess.ban)
if (!args[0]) return reply(`Example : \n- ${command} Vynn\n- ${command} <text>`)
try {
let d = store.messages[m.chat].array.filter(v => RegExp(args.join(" "), "gi").test(v.body))
for (let i of d) {
sleep(1000)
await vynnx.sendMessage(m.chat, {forward:i}, {quoted:i})
}
await reply(`Hanya ${d.length} pesan yang ditemukan`)
} catch {
reply(`Gagal mencari pesan`)
}
}
break

case prefix+'waifu': {
  try{
   let za = await fetchJson(`https://waifu.pics/api/sfw/waifu`)
            
  
    let buttons = [
      {
       buttonId: `${command}`, 
       buttonText: {
        displayText: 'Next'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: za.url },
      caption: `Nih ${pushname}`,
      footer: footxt,
      buttons: buttons,
      headerType: 4
     }
     vynnx.sendMessage(from, buttonMessage, { quoted: m })
   } catch { reply("Maaf, sepertinya terjadi kesalahan dalam pengiriman gambar") }
 }
 break

case prefix+'quotesanime': case prefix+'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `#quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: footxt,
                    buttons: buttons,
                    headerType: 2
                }
                vynnx.sendMessage(m.chat, buttonMessage, { quoted: fgif })
            }
            break
            
            case prefix+'anime': {
if (args.length < 1) return reply('Nyari Anime Apa?')
await fetchJson(`https://api.jikan.moe/v4/anime?q=${args[0]}`)
.then((res) =>{
console.log(res)   
let sections = []   
  for (let i of res.data) {
  const list = {title: `${i.title}`,
  rows: [
	    {
	     title: `${i.title}\n\n`, 
	     rowId: `#animee ${i.mal_id}`,
	     description: `${i.synopsis}`
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  vynnx.sendMessage(
      from, 
      {
       text: "𝗔𝗻𝗶𝗺𝗲 𝗦𝗲𝗮𝗿𝗰𝗵",
       footer: footxt,
       title: "[ W E A B O B A W A N G ]",
       buttonText: "Click Here",
       sections
      }, { quoted : fkontak }
    )  
})
}
  break
		
		case prefix+'animee':{
await fetchJson(`https://api.jikan.moe/v4/anime/${args[0]}`)
.then((res) => {
let txt = `𝗔𝗻𝗶𝗺𝗲 𝗜𝗻𝗳𝗼\n\n*Judul:* *${res.data.title}*\n*English:* *${res.data.title_english}*\n*Japanese:* *${res.data.title_japanese}*\n*Type Anime:* *${res.data.type}*\n*Adaptasi:* *${res.data.source}*\n*Total Episode:* *${res.data.episodes}*\n*Status:* *${res.data.status}*\n*Ongoing:* *${res.data.airing ? 'Ya' : 'Tidak'}*\n*Aired:* *${res.data.aired.string}*\n*Durasi:* *${res.data.duration}*\n*Rating:* *${res.data.rating}*\n*Score:* *${res.data.score}*\n*Rank:* *${res.data.rank}*\n*Produser Utama:* *${res.data.producers.name}*\n*Studio:* *${res.data.studios[0].name}* `
vynnx.sendMessage(from, { image : { url : res.data.images.jpg.image_url}, caption : txt}, {quoted : m }) 
})
}
break

case prefix+'ceve':
if (isBan) return reply(mess.ban)
if (!args[0]) return reply(`Gunakan dengan cara ${command} *id_product|nomor*\n\nContoh\n\n${command} 59|0895xxxx`)
hikki.payment.convertSaldo(args[0], args[1]).then( data => {
vynnx.sendMessage(from, { image: { url: data.img }, caption: `*CONVERT-SALDO*\n\nOrder ID : ${data.order_id}\nTagihan : ${data.tagihan}\nTime : ${data.time}\nProduct : ${data.product}` })
})
break

case prefix+'topupewallet':
if (isBan) return reply(mess.ban)
if (!args[0]) return reply(`Gunakan dengan cara ${command} *<wallet> <nomor>*\n\nContoh\n\n${command} dana 0895xxxx`)
if (args[0] === "gopay") {
var id = ["24","25","26","27","28","29","30","31","32","33","34","35","57","122","58","59"]
var civi = ["10.000","20.000","25.000","30.000","40.000","50.000","70.000","75.000","90.000","100.000","150.000","200.000","250.000","300.000","500.000","1.000.000"]
var row = []
for (var i = 0; i < id.length; i++) {
row.push({
title: "GoPay "+civi[i],
rowId: `.ceve ${id[i]} ${args[1]}`
})
}
var list_gpy = {
text: `*TOPUP E-WALLET GOPAY*\n\nList Product Saldo Gopay`,
footer: `© Support By Hotel Murah`,
buttonText: 'Click Here!',
sections: [{
title: "LIST-SERVICE", rows: row
}]
}
vynnx.sendMessage(from, list_gpy)
} else if (args[0]=== 'dana') {
var id = ["36","37","38","39","40","41","42","43","73","76","78","83"]
var civi = ["10.000","20.000","25.000","50.000","75.000","100.000","150.000","200.000","250.000","400.000","500.000","1.000.000"]
var row = []
for (var i = 0; i < id.length; i++) {
row.push({
title: "Dana "+civi[i],
rowId: `.ceve ${id[i]} ${args[1]}`
})
}
var list_dana = {
text: `*TOPUP E-WALLET DANA*\n\nList Product Saldo Dana`,
footer: `© Support By Hotel Murah`,
buttonText: 'Click Here!',
sections: [{
title: "LIST-SERVICE", rows: row
}]
}
vynnx.sendMessage(from, list_dana)
} else if (args[0] === 'ovo') {
var id = ["180","11","12","13","14","15","16","17","18","19","20","21","22","23","53","216","54","55"]
var civi = ["10.000","20.000","25.000","30.000","40.000","50.000","60.000","70.000","75.000","90.000","100.000","125.000","150.000","200.000","250.000","300.000","500.000","1.000.000"]
var row = []
for (var i = 0; i < id.length; i++) {
row.push({
title: "Ovo "+civi[i],
rowId: `.ceve ${id[i]} ${args[1]}`
})
}
var list_ovo = {
text: `*TOPUP E-WALLET OVO*\n\nList Product Saldo Ovo`,
footer: `© Support By Hotel Murah`,
buttonText: 'Click Here!',
sections: [{
title: "LIST-SERVICE", rows: row
}]
}
vynnx.sendMessage(from, list_ovo)
} else if (args[0] === 'linkaja') {
var id = ["44","45","46","61","62","47","48","49","50","51","64","65","66","67","72"]
var civi = ["10.000","20.000","25.000","30.000","40.000","50.000","75.000","100.000","150.000","200.000","250.000","300.000","400.000","500.000","1.000.000"]
var row = []
for (var i = 0; i < id.length; i++) {
row.push({
title: "Link Aja "+civi[i],
rowId: `.ceve ${id[i]} ${args[1]}`
})
}
var list_linkaja = {
text: `*TOPUP E-WALLET LINK AJA*\n\nList Product Saldo Link Aja`,
footer: `© Support By Hotel Murah`,
buttonText: 'Click Here!',
sections: [{
title: "LIST-SERVICE", rows: row
}]
}
vynnx.sendMessage(from, list_linkaja, { quoted: fkontak})
}
break

case prefix+'bugpc':{
						if (args.length < 1) return reply(`Example :\n${command} nomor|jumlah|jeda`)
						if (args[0]) return reply(`Example :\n${command} nomor|jumlah|jeda`)
						if (args.length < 2) return reply(`Example :\n${command} nomor|jumlah|jeda`)
						const fkk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `16149533378@g.us` } : {}) }, message: { "extendedTextMessage": { "text":"O", "title": `Hmm`, 'jpegThumbnail': await reSize(achn, 200, 200, []) }}}
						var num = q.split('|')[0]+'@s.whatsapp.net'
						var jumlah = q.split('|')[1]
						var wakto = q.split('|')[2]
						for (let i = 0; i < jumlah; i++) {
							vynnx.sendMessage(from, { react: { key: m.key, text: '🫡'}}).then( res => vynnx.sendMessage(num, { text: 'NT' }, { quoted: fkk }))
							await sleep(toMs(wakto))
						}
						var tek = `Success Send Bug To: ${num}\nAmount Spam: ${jumlah}\nTimer: ${waktu}`
						reply(tek)
						}
						break
						
						case prefix+'buggc':{
							if (args.length < 1) return reply(`*Syntax Error!*\n\nUse : ${command} idGroup|amount spam|timer\nExample : ${command} 62888@g.us|1|10s\n\n\ns = Second/Detik`)
							var num = q.split('|')[0]
							var jumlah = q.split('|')[1]
							var wakti = q.split('|')[2]
							for (let i = 0; i < jumlah; i++) {
								vynnx.sendMessage(from, { react: { key: m.key, text: '🫡'}}).then( res => vynnx.sendMessage(num, { text: 'NT' }, { quoted: res }))
								await sleep(toMs(wakti))
							}
							var tek = `Success Send Bug To: ${num}\nAmount Spam: ${jumlah}\nTimer: ${waktu}`
							reply(tek)
							}
							break
							
case prefix+'akinator':
                   if (isGroup) return replyDeface(mess.OnlyPM)
                   addCountCmd('#akinator', sender, _cmd)
                   var teks = `Hai ${pushname == undefined ? 'Kak' : pushname} Selamat Datang di Akinator\n\nPikirkan seorang karakter fiksi atau nyata. Saya akan mencoba untuk menebaknya, lalu ketik /akinatorstart atau pencet tombol dibawah untuk mulai`
                   var but = [
                     { quickReplyButton: { displayText: "BERMAIN", id: prefix+'akinatorstart' }}
                   ]
                   vynnx.sendMessage(from, { text: teks, footer: footxt, templateButtons: but })
                   break
                case prefix+'akinatorstart':
                   if (isGroup) return replyDeface(mess.OnlyPM)
                   if (akinator.hasOwnProperty(sender.split('@')[0])) return replyDeface("Selesain yg sebelumnya dulu atuh")
                   if (isGame(sender, isOwner, gcount, glimit)) return replyDeface(`Limit game kamu sudah habis`)
                   addCountCmd('#akinatorstart', sender, _cmd)
                   var get_result = await akiStart()
                   if (get_result.status == 200) {
                     var { server, frontaddr, session, signature, question, progression, step } = get_result.result
                     const data = {}
                      data["server"] = server
                      data["frontaddr"] = frontaddr
                      data["session"] = session
                      data["signature"] = signature
                      data["question"] = question
                      data["step"] = step
                     var ini_txt = `${question}\n\n`
                      ini_txt += "0 - Ya\n"
                      ini_txt += "1 - Tidak\n"
                      ini_txt += "2 - Saya Tidak Tau\n"
                      ini_txt += "3 - Mungkin\n"
                      ini_txt += "4 - Mungkin Tidak\n\n"
                      ini_txt += "Pertanyaan №: 1\n"+progression+" %"
                     vynnx.sendMessage(from, { text: ini_txt }, { quoted: msg, messageId: 'BAE5'+makeid(9)+'AKI'.toUpperCase()}).then(() => {
                       akinator[sender.split('@')[0]] = data
                       gameAdd(sender, glimit)
                     })
                   } else {
                     replyDeface(mess.error.api)
                   }
                   break
                   
                case prefix+'cancelakinator':
                   if (isGroup) return replyDeface(mess.OnlyPM)
                   if (!akinator.hasOwnProperty(sender.split('@')[0])) return replyDeface("Anda tidak memiliki akinator sebelumnya")
                   addCountCmd('#cancelakinator', sender, _cmd)
                   delete akinator[sender.split("@")[0]]
                   replyDeface(`Sukses`)
                   break
                   
                case prefix+'akisalah':
                   if (type !== "templateButtonReplyMessage") return
                   if (!quotedMsg.id.endsWith('AKI')) return
                   if (!akinator.hasOwnProperty(sender.split("@")[0])) return replyDeface(`Game tersebut sudah selesai`)
                   var { server, frontaddr, session, signature, question, step, answer } = akinator[sender.split('@')[0]]
                   var jwb = (await akiAnswer(server, frontaddr, session, signature, step + 1, answer)).result
                   if (jwb.hasOwnProperty('name')) {
                     replyDeface(`Aku gagal menebaknya!, ingin bermain lagi? ketik ${prefix}akinatorstart`)
                     delete akinator[sender.split("@")[0]]
                   } else {
                     var jques = jwb.question
                     var jstep = jwb.step
                     var jteks = `${jques}\n\n`
                      jteks += `0 - Ya\n`
                      jteks += `1 - Tidak\n`
                      jteks += `2 - Tidak Tahu\n`
                      jteks += `3 - Mungkin\n`
                      jteks += `4 - Mungkin Tidak\n\n`
                      jteks += `Pertanyaan №: ${jstep}\n${jwb.progression} %`
                     vynnx.sendMessage(from, { text: jteks }, { quoted: msg, messageId: 'BAE5'+makeid(9)+'AKI'.toUpperCase() }).then( res => {
                       var jaki = akinator[sender.split("@")[0]]
                        jaki.question = jques
                        jaki.step = jstep
                       akinator[sender.split("@")[0]] = jaki
                     })
                   }
                   break
                   
                case prefix+'akibenar':
                   if (type !== "templateButtonReplyMessage") return
                   if (!m.quotedMsg.id.endsWith('AKI')) return
                   if (!akinator.hasOwnProperty(sender.split("@")[0])) return replyDeface(`Akinator tersebut sudah selesai`)
                   var steps = akinator[sender.split("@")[0]].step
                   var teks = `Aku berhasil menebaknya!, Anda menjawab ${steps  + 1} pertanyaan.`
                   var but = [
                     { quickReplyButton: { displayText: "BERMAIN LAGI", id: prefix+'akinatorstart' }}
                   ]
                   vynnx.sendMessage(from, { text: teks, footer: footxt, templateButtons: but })
                   delete akinator[sender.split("@")[0]]
                   break
            
            case prefix+'nowa': {
addCountCmd(`#nowa`, sender, _cmd)
if (isBan) return reply(mess.ban)
if (!args[0]) return reply(`Kirim perintah ${prefix+command} <nomer>`)
var noteks = args[0]
if (!noteks.includes('x')) return reply('lah?')
reply(mess.wait)
function countInstances(string, word) {
return string.split(word).length - 1;
}
var nomer0 = noteks.split('x')[0]
var nomer1 = noteks.split('x')[countInstances(noteks, 'x')] ? noteks.split('x')[countInstances(noteks, 'x')] : ''
var random_length = countInstances(noteks, 'x')
var random;
if (random_length == 1) {
random = 10
} else if (random_length == 2) {
random = 100
} else if (random_length == 3) {
random = 1000
}
var nomerny = `LIST NOMER WHATSAPP\n\nPunya Bio/status/info\n`
var no_bio = `\nTanpa Bio/status/info || \nHey there! I am using WhatsApp.\n`
var no_watsap = `\nTidak Terdaftar\n`
for (let i = 0; i < random; i++) {
var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
var dom1 = nu[Math.floor(Math.random() * nu.length)]
var dom2 = nu[Math.floor(Math.random() * nu.length)]
var dom3 = nu[Math.floor(Math.random() * nu.length)]
var dom4 = nu[Math.floor(Math.random() * nu.length)]
var rndm;
if (random_length == 1) {
rndm = `${dom1}`
} else if (random_length == 2) {
rndm = `${dom1}${dom2}`
} else if (random_length == 3) {
rndm = `${dom1}${dom2}${dom3}`
} else if (random_length == 4) {
rndm = `${dom1}${dom2}${dom3}${dom4}`
}
var anu = await vynnx.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
var anuu = anu.length !== 0 ? anu : false
try {
try {
var anu1 = await vynnx.fetchStatus(anu[0].jid)
} catch {
var anu1 = '401'
}
if (anu1 == '401' || anu1.status.length == 0) {
no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
} else {
nomerny += `wa.me/${anu[0].jid.split("@")[0]}\nBiography : ${anu1.status}\nDate : ${moment(anu1.setAt).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n\n`
}
} catch {
no_watsap += `${nomer0}${i}${nomer1}\n`
}
}
reply(`${nomerny}${no_bio}${no_watsap}`)
}
break

case prefix + "brainly":
        if (!q) return reply("mau cri ap?");
        var bren = await require("brainly-scraper")(`${q}`, 30);
        if (!bren.length) throw `Maaf, fitur brainly sedang error!`;
        var teks = "*「 _BRAINLY_ 」*\n\n";
        await reply(`${teks}${bren.length} jawaban Ditemukan`);
        var no = 0;
        for (let data of bren.data) {
          var hem = data.jawaban;
          console.log(hem);
          no += 1;
          teks += `\n*➸ Pertanyaan ${no}:* ${data.pertanyaan}\n\n*➸ Jawaban ${no}:* ${data.jawaban[0].text}\n\n❉───────────❉\n`;
        }
        reply(teks.trim());
        break;
        
case prefix+'simigc': 
            if (args[0] == 'enable') {
                if (isSimi) return reply(`Fifur Simi sudah di aktifkan sebelumnya`)
                _simi.push(sender)
                reply(`Sukses mengaktifkan fitur Simi`)
            } else if (args[0] == 'disable') {
                if (!isSimi) return reply(`Fitur Simi sudah di nonaktifkan sebelumnya`)
                var posi = _simi.indexOf(sender)
                _simi.splice(posi, 1)
                reply(`Sukses menonaktifkan fitur Simi`)
            } else {
                reply(`Kirim perintah ${command} enable atau ${command} disable`)
            }
            break
            
default:
if (isCmd && isSimi) {
    if (args[0]) {
        var { success: result } = await fetchJson(`https://api-sv2.simsimi.net/v2/?text={encodeURIComponent(q)}&lc=id&cf=false`)
        if ( result === "Aku tidak mengerti apa yang kamu katakan. Tolong ajari aku." )
        return reply("maaf kak, aku ga ngerti :(");
        reply(result.trim().replace(/simi/gi, "ilulu"));
    }
}

if (budy.startsWith('=>')) {
if (!isCreator && !isMods ) return 
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`(async () => { ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))
}
}
if (budy.startsWith('>')) {
if (!isCreator && !isMods) return 
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
sendRender(m.chat, evaled, kenepin, "https://wa.me/"+botNumber.split("@")[0], false, true, m)
} catch (err) {
m.reply(String(err))
}
}
if (budy.startsWith('<')) {
if (!isCreator) return 
try {
return reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}
if (budy.startsWith('$')) {
if (!isCreator && !isMods ) return 
exec(budy.slice(2), (err, stdout) => {
if(err) return reply(String(err))
if (stdout) return sendRender(m.chat, stdout, kenepin, "https://wa.me/"+botNumber.split("@")[0], true, false, m)
})
}
// Anonymous
if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
if (room) {
if (/^.*(next|leave|start)/.test(m.text)) return
if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
let other = [room.a, room.b].find(user => user !== m.sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
}
return !0
}
if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
vynnx.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}

}
}
} catch (err) {
vynnx.sendMessage("6289604111770@s.whatsapp.net", util.format(err), {quoted:m})
console.log(err)
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})