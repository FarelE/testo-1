/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const xa = require('xfarr-api')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const tod = require("tod-api")
const zrapi = require('zrapi')
const xzons = require("xzons-api")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const hx = require("hxz-api")
const knights = require("knights-canvas")
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins, reSize, generateProfilePicture } = require('./lib/myfunc')
const iye = fs.readFileSync('./ronove.png') 
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')

 
let { yta, searchResult } = require('./scrape/ytdl')
const { nsfw, weeaboo, downloader, fun, misc, toxic } = require('./scrape')
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

//VIRTEGGS
const { slayer } = require('./Pirteggs/slayer')
const { brutal } = require('./Pirteggs/brutal')
const { troli } = require('./Pirteggs/troli')
const { slayer7 } = require('./Pirteggs/slayer7')
const { ganas } = require('./Pirteggs/ganas')
const { petir } = require('./Pirteggs/petir')
const { tameng } = require('./Pirteggs/tameng')
///////////////////////////////////////
// read database
let tebaklagu = db.data.game.tebaklagu = []
let family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []
global.akinator = db.data.game.akinator = {}

module.exports = ronove = async (ronove, mek, chatUpdate, store) => {
    try {
        var body = (mek.mtype === 'conversation') ? mek.message.conversation : (mek.mtype == 'imageMessage') ? mek.message.imageMessage.caption : (mek.mtype == 'videoMessage') ? mek.message.videoMessage.caption : (mek.mtype == 'extendedTextMessage') ? mek.message.extendedTextMessage.text : (mek.mtype == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : (mek.mtype == 'listResponseMessage') ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : (mek.mtype == 'templateButtonReplyMessage') ? mek.message.templateButtonReplyMessage.selectedId : (mek.mtype === 'messageContextInfo') ? (mek.message.buttonsResponseMessage?.selectedButtonId || mek.message.listResponseMessage?.singleSelectReply.selectedRowId || mek.text) : ''
        var budy = (typeof mek.text == 'string' ? mek.text : '')
        var prefix = prefa ?/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        let limitCount = 15
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)

        const pushname = mek.pushName || "No Name"
        const botNumber = await ronove.decodeJid(ronove.user.id)
        const isCreator = [botNumber, ...global.owner, ...global.cowner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(mek.sender)
        const isEreator = [botNumber, ...global.powner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(mek.sender)
        const itsMe = mek.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = mek.quoted ? mek.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
	
        // Group
        const groupMetadata = mek.isGroup ? await ronove.groupMetadata(mek.chat).catch(e => {}) : ''
        const groupName = mek.isGroup ? groupMetadata.subject : ''
        const participants = mek.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = mek.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = mek.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = mek.isGroup ? groupAdmins.includes(mek.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(mek.sender) || false
	
	
	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[mek.sender]
            if (typeof user !== 'object') global.db.data.users[mek.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[mek.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[mek.chat]
            if (typeof chats !== 'object') global.db.data.chats[mek.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[mek.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = true
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false
		if (!('templateLocation' in setting)) setting.templateLocation = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: true,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
		templateLocation: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	    
        // Public & Self
        if (!ronove.public) {
            if (!mek.key.fromMe) return
        }

        // Push Message To Console && Auto Read
        if (mek.message) {
            ronove.readMessages([mek.key])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || mek.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(mek.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(mek.isGroup ? pushname : 'Private Chat', mek.chat))
        }
	
	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
     async function reply(teks) {
const relink = ['https://youtu.be/dQw4w9WgXcQ','https://youtu.be/UIp6_0kct_U','https://chat.whatsapp.com/JFURRjorkwmDGWc3iOXztc']
const rurl = relink[Math.floor(Math.random() * relink.length)];
mamans = teks
ronove.sendMessage(m.chat, {text:mamans,contextInfo:{mentionedJid: parseMention(mamans), externalAdReply:{
title: fake,
body: 'Simple WhatsApp Bot By Ronove',
thumbnail: thumb,
mediaType:1,
renderLargerThumbnail: false,
showAdAttribution: true,
mediaUrl: rurl,
sourceUrl: rurl
}}}, {quoted: mek})
}   
        const sendpay = (teks) => {

ronove.relayMessage(mek.chat, {"sendPaymentMessage" : {
        noteMessage : {extendedTextMessage : { text : teks}}
    }}, {quoted: mek })

}
        
	        let picaks = [flaming,fluming,flarun,flasmurf]
		let picak = picaks[Math.floor(Math.random() * picaks.length)]
              ron = 'ℒ⃝🐋⪼'
              
              timestampe = speed();
              latensie = speed() - timestampe

const RAM = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
             
const ymete =[`application/pdf`,`application/vnd.openxmlformats-officedocument.wordprocessingml.document`,`application/vnd.openxmlformats-officedocument.presentationml.presentation`,`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`]
const moci = ymete[Math.floor(Math.random() * ymete.length)]
  const from = m.key.remoteJid;
          const isGroup = from.endsWith("@g.us");    
	  // Anti Link
        if (db.data.chats[mek.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
        if (!isBotAdmins) return reply(`Ehh bot gak admin T_T`)
        let gclink = (`https://chat.whatsapp.com/`+await ronove.groupInviteCode(mek.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(mek.text)
        if (isgclink) return reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
        if (isAdmins) return reply(`Ehh maaf kamu admin`)
        if (isCreator) return reply(`Ehh maaf kamu owner bot ku`)
        ronove.groupParticipantsUpdate(mek.chat, [mek.sender], 'remove')
        }
        }
        //menu
const sender = mek.key.fromMe
      ? ronove.user.jid
      : isGroup
      ? mek.participant
      : mek.key.remoteJid
      

	otag = "6282182623238@s.whatsapp.net"
        stag = `${sender}`
	pod = "6282182623238@s.whatsapp.net"
	
//
      // Mute Chat
      if (db.data.chats[mek.chat].mute && !isAdmins && !isCreator) {
      return
      }

        // Respon Cmd with media
        if (isMedia && mek.msg.fileSha256 && (mek.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[mek.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(mek.chat, { text: text, mentions: mentionedJid }, {
            userJid: ronove.user.id,
            quoted: mek.quoted && mek.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(mek.sender, ronove.user.id)
        messages.key.id = mek.key.id
        messages.pushName = mek.pushName
        if (mek.isGroup) messages.participant = mek.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        ronove.ev.emit('messages.upsert', msg)
        }
	    
	

        if (tebaklagu.hasOwnProperty(mek.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[mek.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ronove.sendButtonText(mek.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, ronove.user.name, m)
                delete tebaklagu[mek.sender.split('@')[0]]
            } else mek.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(mek.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[mek.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[mek.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(mek.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[mek.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ronove.sendButtonText(mek.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, ronove.user.name, m)
                delete tebakgambar[mek.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(mek.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[mek.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ronove.sendButtonText(mek.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, ronove.user.name, m)
                delete tebakkata[mek.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(mek.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[mek.sender.split('@')[0]]
	    deskripsi = caklontong_desk[mek.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ronove.sendButtonText(mek.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, ronove.user.name, m)
                delete caklontong[mek.sender.split('@')[0]]
		delete caklontong_desk[mek.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(mek.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[mek.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ronove.sendButtonText(mek.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, ronove.user.name, m)
                delete tebakkalimat[mek.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(mek.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[mek.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ronove.sendButtonText(mek.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, ronove.user.name, m)
                delete tebaklirik[mek.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(mek.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[mek.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ronove.sendButtonText(mek.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, ronove.user.name, m)
                delete tebaktebakan[mek.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(mek.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // reply(`[DEBUG]\n${parseInt(mek.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(mek.text)) return
	    isSurrender = !/^[1-9]$/.test(mek.text)
	    if (mek.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(mek.sender === room.game.playerO, parseInt(mek.text) - 1))) {
	    reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (mek.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = mek.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== mek.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = mek.chat
	    if (room.x !== room.o) await ronove.sendText(room.x, str, mek, { mentions: parseMention(str) } )
	    await ronove.sendText(room.o, str, mek, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

//Auto React
const ini =[`😂`,`🤣`,`??`,`😍`,`😝`,`🙄`,`🤔`,`😜`,`🇲🇨`,`🗿`,`🍟`,`☺️`]
const kepyns = ini[Math.floor(Math.random() * ini.length)]

// Func React
if (isCmd) {
if (db.data.chats[mek.chat].autoreact) {
const reactionMessage = {
                    react: {
                        text: kepyns,
                        key: { remoteJid: mek.chat, fromMe: true, id: quoted.id }
                    }
                }
                ronove.sendMessage(mek.chat, reactionMessage)
await ronove.sendPresenceUpdate('composing', mek.chat)
}
}
   const { 
     addInventoriDarah, 
      cekDuluJoinAdaApaKagaDiJson, 
      addDarah, 
      kurangDarah, 
     getDarah 
   }  = require('./rpg/user/darah.js')
   const { 
     cekInventoryAdaAtauGak, 
      addInventori,  
       addBesi, 
       addEmas, 
       addEmerald,
       addUmpan,
       addPotion,
       kurangBesi, 
       kurangEmas, 
       kurangEmerald, 
       kurangUmpan,
       kurangPotion,
       getBesi, 
      getEmas, 
     getEmerald,
     getUmpan,
    getPotion
   } = require('./rpg/user/alat_tukar.js')
   const { 
    addInventoriMonay,
    addMonay, 
    kurangMonay, 
   getMonay 
   } = require('./rpg/user/monay.js')
let { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, kurangLimit, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./func/limit");
let balance = JSON.parse(fs.readFileSync('./database/balance.json'));
let limit = JSON.parse(fs.readFileSync('./database/limit.json'));
let glimit = JSON.parse(fs.readFileSync('./database/glimit.json'));
let { addPlayGame, getJawabanGame, isPlayGame, cekWaktuGame, getGamePosi } = require("./lib/game");
let game = require("./lib/game");  
   const { 
        	         cekDuluHasilBuruanNya,
                     addInventoriBuruan, 
                     addIkan,
                     addAyam, 
                     addKelinci, 
                     addDomba, 
                     addSapi,
                     addGajah,
                     addNaga,
                     addTupai,
                     addKaori,
                     addUlar,
                     addRubah,
                     addKucing,
                     kurangIkan,
                     kurangNaga,
                     kurangAyam, 
                     kurangKelinci, 
                     kurangDomba, 
                     kurangSapi,
                     kurangGajah,
                     kurangTupai,
                     kurangKaori,
                     kurangUlar,
                     kurangRubah,
                     kurangKucing,
                     getIkan,
                     getAyam, 
                     getNaga,
                     getKelinci, 
                     getDomba,
                     getSapi,
                     getGajah,
                     getTupai,
                     getKaori,
                     getUlar,
                     getRubah,
                     getKucing             
   } = require('./rpg/user/buruan.js')
   let DarahAwal =  global.rpg.darahawal
   const isDarah = cekDuluJoinAdaApaKagaDiJson(mek.sender)   
   const isCekDarah = getDarah(mek.sender)
   const isUmpan = getUmpan(mek.sender)
   const isPotion = getPotion(mek.sender)
   const isIkan = getIkan(mek.sender)
   const isAyam = getAyam(mek.sender)
   const isKelinci = getKelinci(mek.sender)
   const isDomba = getDomba(mek.sender)
   const isSapi = getSapi(mek.sender)
   const isGajah = getGajah(mek.sender)
   const isMonay = getBalance(mek.sender, balance)
   const isBesi = getBesi(mek.sender)
   const isEmas = getEmas(mek.sender)
   const isEmerald = getEmerald(mek.sender)
   const isInventory = cekInventoryAdaAtauGak(mek.sender)
   const isInventoriBuruan = cekDuluHasilBuruanNya(mek.sender)
   
   const ikan = ['🐊','🐳','🐋','🐟','🐠','🐬','🦭','🐧','🦈','🐧','🐚','🐌','🐡','🦐','🦀','🦞','🦑','🐙']

//rpg database\\
 let _buruan = JSON.parse(fs.readFileSync('./rpg/user/hasil_buruan.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./rpg/user/darah.json'))
  let _limit = JSON.parse(fs.readFileSync('./rpg/user/limit.json'));
var asupannih = ['https://telegra.ph/file/69d973e277629e84fdcbb.jpg','https://telegra.ph/file/99f3bff31101fc6bc2c6b.jpg'];
var random_asupannih = asupannih[Math.floor(Math.random() * (asupannih.length))];
let achn = await getBuffer(random_asupannih);
let kenepin = await reSize(achn, 200, 200)
let mekdi = await reSize(achn, 300, 300)
    //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(mek.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (mek.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(mek.text) && mek.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(mek.text)) {
	    ronove.sendTextWithMentions(mek.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = mek.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    ronove.sendText(mek.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, mek, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) ronove.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) ronove.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) ronove.sendText(mek.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    ronove.sendTextWithMentions(mek.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = mek.sender == roof.p
	    let jwb2 = mek.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(mek.text) && !roof.pilih && !mek.isGroup) {
	    roof.pilih = reg.exec(mek.text.toLowerCase())[0]
	    roof.text = mek.text
	    reply(`Kamu telah memilih ${mek.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) ronove.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(mek.text) && !roof.pilih2 && !mek.isGroup) {
	    roof.pilih2 = reg.exec(mek.text.toLowerCase())[0]
	    roof.text2 = mek.text
	    reply(`Kamu telah memilih ${mek.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) ronove.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    ronove.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), mek, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    //cekwaktu
cekWaktuGame(ronove, family100)
//
	// fake
fake = `RO-BOT - By Ronove`
cr = `Ronove`
suses = `Sukses banh`
const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": thumb //Gambarnye
					},
					"title": 'RO-BOT', 
					"description": "RO-BOT", 
					"currencyCode": "IDR",
					"priceAmount1000": "70000000",
					"retailerId": 'Whatsapp bot',
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
const bugtrol = { 
	    key: {
	    fromMe: false, 
	    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "62882248593508@s.whatsapp.net" } : {}) 
	    },
                        "message": {
                        "orderMessage": {
                        "orderId": "359531915900587",
						"itemCount": 1000000000000,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": `Ronove`,
						"orderTitle": `Ronove`,
						"sellerJid": "62887435047326@s.whatsapp.net",
						"token": "AR5b5YFz2g4W5fYrjbeakPiI3/XxarATSeP+KLh+0FGwkw=="
					}}}
				  function mentions(teks, mems = [], id) {
if (id == null || id == undefined || id == false) {
let res = ronove.sendMessage(from, { text: teks, mentions: mems })
return res
} else {
let res = ronove.sendMessage(from, { text: teks, mentions: mems }, { quoted: mek })
return res
 }
}

if (game.isfam(from, family100)){
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

       const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 2021,status: 200, thumbnail: thumb, surface: 200, message: `Whatsapp Bot 〽️\nBy Ronove`, orderTitle: 'ronove', sellerJid: '0@s.whatsapp.net'}},contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
        const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `Ronove`,jpegThumbnail: thumb}}}
        const fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":99999,"ptt": "true"}} } 
        const fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title":`Ronove`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `Whatsapp Bot 〽️\nBy Ronove`, 'jpegThumbnail': thumb}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `さ ${pushname} さ\nᴄᴍᴅ ᴇxᴇᴄ : ${command}`, 'jpegThumbnail': thumb}}}
		const fsus = {
      key: { participant: "0@s.whatsapp.net" },
      message: { locationMessage: { name: suses, jpegThumbnail: thumb } },
    };
		const fgclink2 = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `${fake}`, 'jpegThumbnail': thumb}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`Ronove`, "h": `Hmm`,'seconds': '99999', 'caption': `Ronove`, 'jpegThumbnail': thumb}}}
		const floc = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant':`0@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': thumb}}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${cr}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${cr},;;;\nFN:${cr},\nitem1.TEL;waid=${mek.sender.split('@')[0]}:${mek.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}    
	    let mentionUser = [...new Set([...(mek.mentionedJid || []), ...(mek.quoted ? [mek.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
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




        if (db.data.users[mek.sender].afkTime > -1) {
            let user = global.db.data.users[mek.sender]
            reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
        
	    
        switch(command) {
	    case 'afk': {
                let user = global.db.data.users[mek.sender]
                user.afkTime = + new Date
                user.afkReason = text
                reply(`${mek.pushName} Telah Afk${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(mek.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            reply('Partner ditemukan!')
            room.o = mek.chat
            room.game.playerO = mek.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await ronove.sendText(room.x, str, mek, { mentions: parseMention(str) } )
            await ronove.sendText(room.o, str, mek, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: mek.chat,
            o: '',
            game: new TicTacToe(mek.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            ronove.sendText(mek.chat, `Berhasil delete session TicTacToe`, m)
            } else if (!this.game) {
            reply(`Session TicTacToe🎮 tidak ada`)
            } else throw '?'
            } catch (e) {
            reply('rusak')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(mek.sender))) reply(`Selesaikan suit mu yang sebelumnya`)
	    if (mek.mentionedJid[0] === mek.sender) return reply(`Tidak bisa bermain dengan diri sendiri !`)
            if (!mek.mentionedJid[0]) return reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, mek.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(mek.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${mek.sender.split`@`[0]} menantang @${mek.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${mek.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
            this.suit[id] = {
            chat: await ronove.sendText(mek.chat, caption, mek, { mentions: parseMention(caption) }),
            id: id,
            p: mek.sender,
            p2: mek.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) ronove.sendText(mek.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
	    case 'donasi': case 'sewabot': case 'sewa': case 'buypremium': case 'donate': {
                ronove.sendMessage(mek.chat, { image: thumb, caption: `╭◯ *〔 Bot Rental Price〕*
◉ 13k Per Bulan via pulsa
     Telkomsel
◉ 3k Per Minggu Via
    Telkomsel
◉ 30k Permanen Via
    Telkomsel
╰◯
╭◯ *〔 Donasi 〕*
◉ Via Pulsa Tekomsel:    
      6282182623238
╰◯` }, { quoted: fkontak })
            }
            break
            case 'sc': {
                reply('Esceh ini engga utk disebar tapi saya bikin bot ini dari base dika ardnt, link: https://github.com/DikaArdnt/Hisoka-Morou ')
            }
            break
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    ronove.chatModify({ mute: 'Infinity' }, mek.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    ronove.chatModify({ mute: null }, mek.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    ronove.chatModify({  archive: true }, mek.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    ronove.chatModify({ archive: false }, mek.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    ronove.chatModify({ markRead: true }, mek.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    ronove.chatModify({ markRead: false }, mek.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    ronove.chatModify({ clear: { message: { id: mek.quoted.id, fromMe: true }} }, mek.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
	    case 'family100': {
                if ('family100'+mek.chat in family100) {
                    reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let gamewaktu = 70
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
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!mek.quoted && args.length == 0) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = mek.quoted ? mek.quoted.text ? mek.quoted.text : q ? q : mek.text : q ? q : mek.text
            reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'tebak': {
                if (args.length == 0) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(mek.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await ronove.sendMessage(mek.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: mek })
                    ronove.sendText(mek.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[mek.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(mek.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    ronove.sendButtonText(mek.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[mek.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ronove.user.name, m)
                    delete tebaklagu[mek.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(mek.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    ronove.sendImage(mek.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[mek.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(mek.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    ronove.sendButtonText(mek.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[mek.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ronove.user.name, m)
                    delete tebakgambar[mek.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(mek.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    ronove.sendText(mek.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[mek.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(mek.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    ronove.sendButtonText(mek.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[mek.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ronove.user.name, m)
                    delete tebakkata[mek.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(mek.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    ronove.sendText(mek.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[mek.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(mek.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    ronove.sendButtonText(mek.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[mek.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ronove.user.name, m)
                    delete tebakkalimat[mek.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(mek.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    ronove.sendText(mek.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[mek.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(mek.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    ronove.sendButtonText(mek.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[mek.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ronove.user.name, m)
                    delete tebaklirik[mek.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(mek.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    ronove.sendText(mek.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[mek.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[mek.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(mek.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    ronove.sendButtonText(mek.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[mek.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[mek.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ronove.user.name, m)
                    delete caklontong[mek.sender.split('@')[0]]
		    delete caklontong_desk[mek.sender.split('@')[0]]
                    }
                }
            }
            break
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(mek.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./src/math')
                if (args.length == 0) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                ronove.sendText(mek.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[mek.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(mek.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    reply("Waktu Habis\nJawaban: " + kuismath[mek.sender.split('@')[0]])
                    delete kuismath[mek.sender.split('@')[0]]
                }
            }
            break
            case 'jodohku': {
            if (!mek.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = mek.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await ronove.sendButtonText(mek.chat, buttons, jawab, ronove.user.name, mek, {mentions: ments})
            }
            break
            case 'jadian': {
            if (!mek.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await ronove.sendButtonText(mek.chat, buttons, jawab, ronove.user.name, mek, {mentions: menst})
            }
            break
            case 'react': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: mek.chat, fromMe: true, id: quoted.id }
                    }
                }
                ronove.sendMessage(mek.chat, reactionMessage)
            }
            break  
            case 'join': {
                if (!isCreator) throw mess.owner
                if (args.length == 0) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await ronove.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await ronove.groupLeave(mek.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) throw mess.owner
               if (args.length == 0) throw `Example : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          reply(`Exif berhasil diubah menjadi\n\n❏ Packname : ${global.packname}\n❏ Author : ${global.author}`)
            }
            break
	case 'kick': {
		if (!mek.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = mek.mentionedJid[0] ? mek.mentionedJid[0] : mek.quoted ? mek.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ronove.groupParticipantsUpdate(mek.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!mek.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = mek.quoted ? mek.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ronove.groupParticipantsUpdate(mek.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!mek.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = mek.mentionedJid[0] ? mek.mentionedJid[0] : mek.quoted ? mek.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ronove.groupParticipantsUpdate(mek.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!mek.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = mek.mentionedJid[0] ? mek.mentionedJid[0] : mek.quoted ? mek.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ronove.groupParticipantsUpdate(mek.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = mek.mentionedJid[0] ? mek.mentionedJid[0] : mek.quoted ? mek.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ronove.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = mek.mentionedJid[0] ? mek.mentionedJid[0] : mek.quoted ? mek.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ronove.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
                if (!mek.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args.length == 0) throw 'Text ?'
                await ronove.groupUpdateSubject(mek.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!mek.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args.length == 0) throw 'Text ?'
                await ronove.groupUpdateDescription(mek.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await ronove.downloadAndSaveMediaMessage(quoted)
                if (args[0] == `full`) {
            var { img } = await generateProfilePicture(media)
            await ronove.query({
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
            var data = await ronove.updateProfilePicture(botNumber, { url: media })
            fs.unlinkSync(media)
            m.reply(`Sukses`)
            }
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!mek.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await ronove.downloadAndSaveMediaMessage(quoted)
                if (args[0] == `full`) {
var { img } = await generateProfilePicture(media)
await ronove.query({
tag: 'iq',
attrs: {
to: mek.chat,
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
var data = await ronove.updateProfilePicture(mek.chat, { url: media })
fs.unlinkSync(media)
reply(`Sukses`)
}
                }
                break
            case 'tagall': {
                if (!mek.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                teks += `❏ @${mem.id.split('@')[0]}\n`
                }
                ronove.sendMessage(mek.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: mek })
                }
                break
                case 'hidetag': {
            if (!mek.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
            ronove.sendMessage(mek.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: mek })
            }
            break
               case 'totag': {
               if (!mek.isGroup) throw mess.group
               if (!isBotAdmins) throw mess.botAdmin
               if (!isAdmins) throw mess.admin
               if (!mek.quoted) throw `Reply pesan dengan caption ${prefix + command}`
               ronove.sendMessage(mek.chat, { forward: mek.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }
               break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[mek.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		db.data.users[mek.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (args.length == 0) throw 'Masukkan Query text!'
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `❏ *${i.name}* : ${i.result}\n\n`
                }
                reply(teks)
	    }
	    break
               case 'vote': {
            if (!mek.isGroup) throw mess.group
            if (mek.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
            if (args.length == 0) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
            reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
            vote[mek.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[mek.chat][1]
            devote = vote[mek.chat][2]
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[mek.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[mek.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[mek.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: ronove.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            ronove.sendMessage(mek.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!mek.isGroup) throw mess.group
            if (!(mek.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[mek.chat][1].concat(vote[mek.chat][2])
            wasVote = isVote.includes(mek.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[mek.chat][1].push(mek.sender)
            menvote = vote[mek.chat][1].concat(vote[mek.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[mek.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[mek.chat][1].length}
${vote[mek.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[mek.chat][2].length}
${vote[mek.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: ronove.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            ronove.sendMessage(mek.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!mek.isGroup) throw mess.group
            if (!(mek.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[mek.chat][1].concat(vote[mek.chat][2])
            wasVote = isVote.includes(mek.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[mek.chat][2].push(mek.sender)
            menvote = vote[mek.chat][1].concat(vote[mek.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[mek.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[mek.chat][1].length}
${vote[mek.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[mek.chat][2].length}
${vote[mek.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: ronove.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            ronove.sendMessage(mek.chat, buttonMessageDevote)
	}
            break
                 
case 'cekvote':
if (!mek.isGroup) throw mess.group
if (!(mek.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[mek.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[mek.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[mek.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${ronove.user.id}
`
ronove.sendTextWithMentions(mek.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!mek.isGroup) throw mess.group
            if (!(mek.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            delete vote[mek.chat]
            reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
	    }
            break
               case 'group': case 'grup': {
                if (!mek.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await ronove.groupSettingUpdate(mek.chat, 'announcement').then((res) => reply(`Sukses Menutup Group`)).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await ronove.groupSettingUpdate(mek.chat, 'not_announcement').then((res) => reply(`Sukses Membuka Group`)).catch((err) => reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await ronove.sendButtonText(mek.chat, buttons, `Mode Group`, ronove.user.name, m)

             }
            }
            break
            case 'editinfo': {
                if (!mek.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await ronove.groupSettingUpdate(mek.chat, 'unlocked').then((res) => reply(`Sukses Membuka Edit Info Group`)).catch((err) => reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await ronove.groupSettingUpdate(mek.chat, 'locked').then((res) => reply(`Sukses Menutup Edit Info Group`)).catch((err) => reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await ronove.sendButtonText(mek.chat, buttons, `Mode Edit Info`, ronove.user.name, m)

            }
            }
            break
            case 'antilink': {
                if (!mek.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[mek.chat].antilink) return reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[mek.chat].antilink = true
                reply(`Antilink Aktif !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[mek.chat].antilink) return reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[mek.chat].antilink = false
                reply(`Antilink Tidak Aktif !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await ronove.sendButtonText(mek.chat, buttons, `Mode Antilink`, ronove.user.name, m)
                }
             }
             break
             case 'mute': {
                if (!mek.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[mek.chat].mute) return reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[mek.chat].mute = true
                reply(`${ronove.user.name} telah di mute di group ini !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[mek.chat].mute) return reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[mek.chat].mute = false
                reply(`${ronove.user.name} telah di unmute di group ini !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await ronove.sendButtonText(mek.chat, buttons, `Mute Bot`, ronove.user.name, m)
                }
             }
             break
            case 'linkgroup': case 'linkgc': {
                if (!mek.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                let response = await ronove.groupInviteCode(mek.chat)
                ronove.sendText(mek.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, mek, { detectLink: true })
            }
            break
case 'meme': case 'memeindo':
 var biocil = fs.readFileSync(`./database/memeindo.json`)

const oioi = biocil

const jsonoData = JSON.parse(oioi);
const xi1 = Math.floor(Math.random() * jsonoData.length);
const xi2 = jsonoData[xi1];
ronove.sendMessage(mek.chat, { image: { url: xi2.image}, caption: 'Done!'},{quoted: fsus})
break
case 'igstalk':{
if (!args[0]) return reply(`Example:\n${command} jokowi`)
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
{buttonId: `jpeg ${igSt.profile.high}`, buttonText: {displayText: 'Picture'}, type: 1}
]
let buttonMessage = {
document: fs.readFileSync("./index.js"),
mimetype: moci,
fileName: `Hai kak ${pushname}, Aku RO-BOT`,
fileLength: 9999999,
caption: teks,
footer: fake,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: ' ',
body: fake,
thumbnail: {url:igSt.profile.high},
thumbnailUrl: igSt.profile.high,
sourceUrl: `https://instagram.com/${args[0]}`,
mediaUrl: `https://instagram.com/${args[0]}`,
renderLargerThumbnail: true,
showAdAttribution: true,
mediaType: 1
}}
}
ronove.sendMessage(m.chat, buttonMessage, { quoted: fsus })
}
break
case prefix+'jpeg': case prefix+'jpg': {
if (!args[0]) return reply("Linknya mana kak?")
try {
ronove.sendMessage(from, {image:{url:args[0]}, caption:"Succes", contextInfo:{externalAdReply:{
title: " ",
body: fake,
thumbnail: thumb,
sourceUrl: "https://youtu.be/dQw4w9WgXcQ",
mediaUrl: 'https://youtu.be/dQw4w9WgXcQ',
renderLargerThumbnail: false,
showAdAttribution: true,
mediaType: 1
}}}, {quoted:fsus})
} catch {
m.reply("Linknya Error")
}
}
break
            case 'ephemeral': {
                if (!mek.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === '1') {
                    await ronove.groupToggleEphemeral(mek.chat, 1*24*3600).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === '7') {
                    await ronove.groupToggleEphemeral(mek.chat, 7*24*3600).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === '90') {
                    await ronove.groupToggleEphemeral(mek.chat, 90*24*3600).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'off') {
                    await ronove.groupToggleEphemeral(mek.chat, 0).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else {
                let sections = [
                {
                title: "CHANGE EPHEMERAL GROUP",
                rows: [
                {title: "Ephemeral 1 day", rowId: `ephemeral 1`, description: `Activate the ephemeral group for 1 day`},
                {title: "Ephemeral 7 day's", rowId: `ephemeral 7`, description: `Activate the ephemeral group for 7 day's`},
                {title: "Ephemeral 90 days's", rowId: `ephemeral 90`, description: `Activate the ephemeral group for 90 day's`},
                {title: "Ephemeral Off", rowId: `ephemeral off`, description: `Deactivate this Ephemeral group`}
                ]
                },
                ]
                ronove.sendListMsg(mek.chat, `Please select the following Ephemeral Options List !`, ronove.user.name, `Hello Admin ${groupMetadata.subject}`, `Click Here`, sections, m)
                }
            }
            break
            case 'delete': case 'del': {
                if (!mek.quoted) throw false
                let { chat, fromMe, id, isBaileys } = mek.quoted
                ronove.sendMessage(mek.chat, { delete: { remoteJid: mek.chat, fromMe: true, id: mek.quoted.id, participant: mek.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (args.length == 0) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let getGroups = await ronove.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: 'https://github.com/DikaArdnt/Hisoka-Morou'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: '+62 882-9202-4190'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Script',
                                    id: 'sc'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      ronove.send5ButImg(i, txt, ronove.user.name, global.thumb, btn)
                    }
                reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
case prefix+'bctes':{
	if (!isCreator) return reply(mess.owner)
	if (!text) return reply(`Text mana?\n\nExample : ${command} Amin gey no debat`)
	let anu = Object.keys(global.db.data.users)
	for(let ui of anu) {
		await sleep(4000)
		let txt = `\n${text}`
	  let bytn = [{

                                urlButton: {

                                    displayText: 'Sc',
                                    url: 'https://youtu.be/dQw4w9WgXcQ'
                                }
                            }]

     ronove.send5ButImg(ui, txt, fake, thumb, bytn, thumb)
		}
		reply('succes')
	}
	break
            case 'bc': case 'broadcast': case 'bcall': {
           if (!isCreator) return reply(mess.owner)
if (!args.join(" ")) return reply(`Where is the text??\n\nExample : ${prefix + command} Amin gey`)
let getGroups = await ronove.groupFetchAllParticipating()

                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])

                let anu = groups.map(v => v.id)

reply(`sukses`)
for (let yoi of anu) {
await sleep(1500)
let btn = [{
urlButton: {
displayText: 'Script 🍜',
url: `https://youtube.com/watch?v=dQw4w9WgXcQ`
}
}, {
quickReplyButton: {
displayText: 'Menu Bot',
id: 'menu'
}  
}, {
quickReplyButton: {
displayText: 'Owner',
id: 'owner'
}
}]
let txt = `*「 RO-BOT Broadcast」*\n\n${text}`
ronove.send5ButImg(yoi, txt, `By Ronove`, thumb, btn, thumb)
}
reply('Broadcast Success')
}
break
            case 'infochat': {
                if (!mek.quoted) reply('Reply Pesan')
                let msg = await mek.getQuotedObj()
                if (!mek.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `❏ @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━❏ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ❏ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                ronove.sendTextWithMentions(mek.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
		if (!mek.quoted) return reply('Reply Pesannya!!')
		let wokwol = await ronove.serializeM(await mek.getQuotedObj())
		if (!wokwol.quoted) return reply('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward(mek.chat, true)
            }
	    break
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 ronove.sendTextWithMentions(mek.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await ronove.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 ronove.sendTextWithMentions(mek.chat, teks, m)
             }
             break
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : mek.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    ronove.sendText(mek.chat, 'List Online:\n\n' + online.map(v => '❏ @' + v.replace(/@.+/, '')).join`\n`, mek, { mentions: online })
             }
             break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
            reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await ronove.sendImageAsSticker(mek.chat, media, mek, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await ronove.sendVideoAsSticker(mek.chat, media, mek, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
            case 'stickerwm': case 'swm': case 'stickergifwm': case 'sgifwm': {
                if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command} teks1|teks2`
                let [teks1, teks2] = text.split`|`
                if (!teks1) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
                if (!teks2) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
            	reply(mess.wait)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await ronove.sendImageAsSticker(mek.chat, media, mek, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
                    let media = await quoted.download()
                    let encmedia = await ronove.sendVideoAsSticker(mek.chat, media, mek, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else {
                    throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
            case 'ebinary': {
            if (args.length == 0) throw `Example : ${prefix + command} text`
            let { eBinary } = require('./lib/binary')
            let eb = await eBinary(text)
            reply(eb)
        }
        break
            case 'dbinary': {
            if (args.length == 0) throw `Example : ${prefix + command} text`
            let { dBinary } = require('./lib/binary')
            let db = await dBinary(text)
            reply(db)
        }
        break
            case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
		if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await ronove.sendImageAsSticker(mek.chat, res.url, mek, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	    case 'emojimix2': {
	    if (args.length == 0) throw `Example : ${prefix + command} 😅`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anu.results) {
		    let encmedia = await ronove.sendImageAsSticker(mek.chat, res.url, mek, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	       case 'ttp': {
           if (args.length == 0) throw `Example : ${prefix + command} text`
           var text2png = require('text2png');
mclor = text.split("|")[1] ? text.split("|")[1] : "white"
fs.writeFileSync('./lib/ttp.png', text2png(text.split("|")[0] ? text.split("|")[0] : text, {font:" 100px Etna-sans-serif", lineSpacing: 10, padding: 20, color: mclor, strokeWidth: 4, strokeColor: mclor}))
ronove.sendImageAsSticker(mek.chat, fs.readFileSync("./lib/ttp.png"), m, { packname: global.packname, author: global.author })
await fs.unlinkSync("./lib/ttp.png")
         }
         break

	       case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': const sendFile = async (from, url, caption, msg, men) => {
let mime = '';
let res = await axios.head(url)
mime = res.headers['content-type']
if (mime.split("/")[1] === "gif") {
return ronove.sendMessage(from, { video: await convertGif(url), caption: caption, gifPlayback: true, mentions: men ? men : []}, {quoted: mek})
}
let type = mime.split("/")[0]+"Message"
if(mime.split("/")[0] === "image"){
return ronove.sendMessage(from, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: mek})
} else if(mime.split("/")[0] === "video"){
return ronove.sendMessage(from, { video: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: mek})
} else if(mime.split("/")[0] === "audio"){
return ronove.sendMessage(from, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg'}, {quoted: mek })
} else {
return ronove.sendMessage(from, { document: await getBuffer(url), mimetype: mime, caption: caption, mentions: men ? men : []}, {quoted: mek })
}
}
	         let smeme = require('./plugin/smeme')
smeme(mek, ronove, sendFile, q, global)
	       break  
	                   case prefix+'kusonime':{
                if (!args[0]) return reply(`Format salah! contoh: ${prefix+command} boruto`)
                reply(mess.wait)
                weeaboo.anime(args[0])
                    .then(async ({ info, link_dl, sinopsis, thumb, title, error, status }) => {
                        if (status === false) {
                            return reply(`Error!`)
                        } else {
                            let animek = `${title}\n\n${info}\n\nSinopsis: ${sinopsis}\n\nLink download:\n${link_dl}`
                            await ronove.sendMessage(m.chat, { image: { url:thumb}, caption:animek})
                                .then(() => console.log('Success sending anime info!'))
                        }
                    })
                    .catch(async (err) => {
                        console.error(err)
                        reply(`Maaf error banh`)
                    })
                }
            break
	        case 'simih': case 'simisimi': {
            if (!q) return reply('contoh : #simi udah makan blom') 
const simi = await fetchJson(`https://simsimi.info/api/?text=${q}&lc=id`)
const sami = simi.success
reply(sami) 
limitAdd(mek.sender, limit)
            }
            break
            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
                reply(mess.wait)
                let media = await ronove.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    ronove.sendMessage(mek.chat, { image: buffer }, { quoted: mek })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await ronove.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await ronove.sendMessage(mek.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: mek })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            ronove.sendMessage(mek.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            ronove.sendMessage(mek.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${ronove.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            ronove.sendMessage(mek.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
case 'waifu':
  case 'loli':
    case 'husbu':
      case 'yaoi':
        case 'yuri':
          case 'milf':
            var biicil = fs.readFileSync(`./database/${command}.json`)

const oiooi = biicil

const jsionoData = JSON.parse(oiooi);
const xic1 = Math.floor(Math.random() * jsionoData.length);
const xic2 = jsionoData[xic1];
ronove.sendMessage(mek.chat, { image: { url: xic2.image}, caption: 'Done!'},{quoted: fsus})
          break
            case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await ronove.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await ronove.sendMessage(mek.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: mek })
                await fs.unlinkSync(media)
            }
            break
case prefix+'searchbyimage': case prefix+'searchbyimg': case prefix+'sbyimg': case prefix+'sbyimage': case 'googlelens': case 'golens':{
	
if (/image/.test(mime)) {
const { goLens } = require("./lib/goLens.js")

let media = await ronove.downloadAndSaveMediaMessage(quoted)
let anu = await TelegraPh(media)
let res = await goLens(anu)
const templateButtons = [{ index: 1, urlButton: {displayText: 'Click Here', url: res.url }}]
const templateMessage = {
image: {url:res.imgUrl},
caption: 'Klik tombol dibawah ini',
footer: fake,
templateButtons: templateButtons
}
ronove.sendMessage(m.chat, templateMessage)
await fs.unlinkSync(media)
} else {
reply(`Kirim Gambar Dengan Caption ${command}`)
}
}
break
            
	        case 'tourl': {
                reply(mess.wait)
		
                let media = await ronove.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
case 'tespay':
ronove.relayMessage(mek.chat, {"sendPaymentMessage" : {

        noteMessage: {
    extendedTextMessage: { text: 'Tes Doang' }
  },
  expiryTimestamp: { low: 0, high: 0, unsigned: false },
  amount: {
    value: { low: 1000000, high: 0, unsigned: false },
    offset: 1000,
    currencyCode: 'Jangan_Nyebar_Komtol_Ngapain_Lu_Eval'
  }
      
    }}, {quoted: fkontak })
break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await ronove.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    ronove.sendMessage(mek.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case 'yts': case 'ytsearch': {
                                if (args.length == 0) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `❏ No : ${no++}\n❏ Type : ${i.type}\n❏ Video ID : ${i.videoId}\n❏ Title : ${i.title}\n❏ Views : ${i.views}\n❏ Duration : ${i.timestamp}\n❏ Upload At : ${i.ago}\n❏ Author : ${i.author.name}\n❏ Url : ${i.url}\n\n─────────────────\n\n`
                }
                ronove.sendMessage(mek.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
                if (args.length == 0) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `❏ *Title* : ${g.title}\n`
                teks += `❏ *Description* : ${g.snippet}\n`
                teks += `❏ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                reply(teks)
                })
                }
                break
        case 'gimage': {
        if (args.length == 0) throw `Example : ${prefix + command} kaori cicak`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: ronove.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                ronove.sendMessage(mek.chat, buttonMessage, { quoted: mek })
        })
        }
        break
	
case 'play': 
 if (args.length < 1) return reply(`Example : \n${command} Hujan - Utopia`)
   let yts = require("yt-search")

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

ronove.sendMessage(from, {audio:{url: `${media.dl_link}`}, mimetype:"audio/mp4", ptt:true, contextInfo:{externalAdReply:{
title: `${media.title}`,
body: 'RO-BOT - By Ronove',
thumbnail: uh,
mediaType:1,
mediaUrl: `${search.all[0].url}`, showAdAttribution: true, renderLargerThumbnail: true,
sourceUrl: `${search.all[0].url}`
}}}, {quoted: fkontak})

await sleep(3000)

const listMessage = {
text: teskd,
footer: "RO-BOT - By Ronove",
title: "[ YouTube Downloader ]",
buttonText: "Click Here",
mentions: parseMention(teskd),
sections:listSerch
}
ronove.sendMessage(from, listMessage, {quoted:fkontak})
  
  
  break
  
    case 'ytmp3': case 'ytaudio': {
                let { yta } = require('./lib/y2mate')
                if (args.length == 0) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
                ronove.sendImage(mek.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, mek)
                ronove.sendMessage(mek.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: mek })
            }
            break
            case 'ytmp4': case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (isLimit(sender, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}inventory untuk mengecek limit`)
                if (args.length == 0) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
                ronove.sendMessage(mek.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: mek })
                  limitAdd(mek.sender, limit)
            }
            break
case 'kapan':
              kapankah = body.slice(1)
              const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
              const koh = kapan[Math.floor(Math.random() * kapan.length)]
              reply(`*Pertanyaan :* ${kapankah}\n*Jawaban :* ${koh}`)
             
break
  case 'instagramreels': case 'igreels': {
   
if (!args[0]) return reply(`Example :\n${prefix + command} https://www.instagram.com/reel/CZjf0GWlOXN/?igshid=YmMyMTA2M2Y=`)
try {
hx.igdl(args[0]).then(async(resed) => {
ini_anu = []
anu_list = []
textbv = `*| INSTAGRAM DOWNLOADER |*\n\n${global.themeemoji} Username : ${resed.user.username ? resed.user.name : "undefined"}\n${global.themeemoji} Followers : ${resed.user.followers}`
urut = 1
for (let i = 0; i < resed.medias.length; i++) {
ini_anu.push({
 "type": resed.medias[i].fileType,
 "url": resed.medias[i].url
})
}
ilod = 1
for (let i of ini_anu) {
anu_list.push({buttonId: `igeh ${i.type} ${i.url}`, buttonText: {displayText: `Media ${ilod++}`}, type: 1})
}
textbv += `\n\n_Select the media below to download_`
let buttons = anu_list
let buttonMessage = {
image:thumb,
jpegThumbnail:thumb,
caption: textbv,
footer: fake,
buttons: buttons,
headerType: 4
}
ronove.sendMessage(from, buttonMessage, {quoted:fsus})
})
} catch (err) {
reply(String(err))
}
}
break
case 'igeh': {
	   
if (args[0] === "mp4") {
ronove.sendMessage(from, {video:{url:args[1]}, caption:'Done!', mimetype:'video/mp4'}, {quoted:mek})
} else if (args[0] === "jpg") {
ronove.sendMessage(from, {image:{url:args[1]}, caption:'Done!'}, {quoted:mek})
} else {
reply("Error! ")
}
}
break
case 'igstory':
if(!args[0]) return reply(`Example : \n${command} username`)
let igs = await hx.igstory(args[0])
listStory = []
listnyd = 1
for (let i of igs.medias) {
listStory.push({
title: `${listnyd++}. Story Instagram`, rowId: `.igs ${i.fileType} ${i.url}`, description: `Type : ${i.type}/${i.fileType}`})
}
let sektions = [
{
title: `Total Story ${igs.medias.length}`,
rows: listStory
}
]
teskd = `Result Story *${args[0]}*`
ronove.sendMessage(from, {
text: teskd,
footer: "RO-BOT - By Ronove",
title: "Instagram Story",
buttonText: "Click Here",
sektions
}, {quoted: fkontak})
break
	    case 'getmusic': {
                let { yta } = require('./lib/y2mate')
                if (args.length == 0) throw `Example : ${prefix + command} 1`
                if (!mek.quoted) return reply('Reply Pesan')
                if (!mek.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
                ronove.sendImage(mek.chat, media.thumb, `❏ Title : ${media.title}\n❏ File Size : ${media.filesizeF}\n❏ Url : ${urls[text - 1]}\n❏ Ext : MP3\n❏ Resolusi : ${args[1] || '128kbps'}`, m)
                ronove.sendMessage(mek.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: mek })
            }
            break
            case 'getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (args.length == 0) throw `Example : ${prefix + command} 1`
                if (!mek.quoted) return reply('Reply Pesan')
                if (!mek.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
                ronove.sendMessage(mek.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `❏ Title : ${media.title}\n❏ File Size : ${media.filesizeF}\n❏ Url : ${urls[text - 1]}\n❏ Ext : MP3\n❏ Resolusi : ${args[1] || '360p'}` }, { quoted: mek })
            }
            break
        case 'vietnam':
        case 'korea':
        case 'china':
        case 'indonesia':
        case 'malaysia':
        case 'japan':
        case 'thailand':
        let btin = [{

                                urlButton: {

                                    displayText: 'Sc',

                                    url: 'https://youtu.be/dQw4w9WgXcQ'

                                }

                            }, {

                               

                  quickReplyButton: {

                                    displayText: 'Next ➡️',

                                    id: `${prefix + command }`
                                }

                            }]
                           
var bocil = fs.readFileSync(`./Asupan/cecan/${command}.json`)
const ooi = bocil
const jsonData = JSON.parse(ooi);
const x1 = Math.floor(Math.random() * jsonData.length);
const x2 = jsonData[x1];
ronove.sendMessage(mek.chat, { image: { url: x2.url}, caption: 'Done!'},{quoted: fsus})
            break
case 'asupan':
var jbocil = fs.readFileSync("./Asupan/video/tiktok.json")
const ojoi = jbocil
const jsonDjata = JSON.parse(ojoi);
const xj1 = Math.floor(Math.random() * jsonDjata.length);
const xj2 = jsonDjata[xj1];
ronove.sendMessage(mek.chat, { video: { url: xj2.url}, caption: 'Done!'},{quoted: m})
break
            case 'pinterest': {
                reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                ronove.sendMessage(mek.chat, { image: { url: result }, caption: '❏ Media Url : '+result }, { quoted: mek })
            }
            break
case 'bucinquote':{
  const qi = require('quote-indo')
      let anu = await qi.Quotes('bucin')
      teks = `~_${anu}_`
      let buttons = [{buttonId: `bucinquote`, buttonText: {displayText: 'Next'}, type: 1}]
                let buttonMessage = {
                    text: teks,
                    footer: fake,
                    buttons: buttons,
                    headerType: 2
                }
                ronove.sendMessage(m.chat, buttonMessage, { quoted: fkontak })
}
break
case 'quotes':{
  const dhn = require('dhn-api')

      let anu = dhn.Quotes()
teks= `~_${anu.quotes}_\n\nBy ${anu.author}`
let buttons = [

                    {buttonId: `quotes`, buttonText: {displayText: 'Next'}, type: 1}

                ]
                let buttonMessage = {
                    text: teks,
                    footer: fake,
                    buttons: buttons,
                    headerType: 2
                }
                ronove.sendMessage(m.chat, buttonMessage, { quoted: fkontak })
}
break
            case 'quotesanime': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `.quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: fake,
                    buttons: buttons,
                    headerType: 2
                }
                ronove.sendMessage(m.chat, buttonMessage, { quoted: fkontak })
            }
            break
            
            case 'anime': {
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
  const sendm =  ronove.sendMessage(
      from, 
      {
       text: "𝗔𝗻𝗶𝗺𝗲 𝗦𝗲𝗮𝗿𝗰𝗵",
       footer: fake,
       title: "[ W E A B O B A W A N G ]",
       buttonText: "Click Here",
       sections
      }, { quoted : fkontak }
    )  
})
}
  break
	    case 'couple': {
                reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                ronove.sendMessage(mek.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: mek })
                ronove.sendMessage(mek.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: mek })
            }
	    break
            case 'coffe': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffe`,
                    footer: ronove.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                ronove.sendMessage(mek.chat, buttonMessage, { quoted: mek })
            }
            break
            case 'wallpaper': {
                if (args.length == 0) throw 'Masukkan Query Title'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `❏ Title : ${result.title}\n❏ Category : ${result.type}\n❏ Detail : ${result.source}\n❏ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: ronove.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                ronove.sendMessage(mek.chat, buttonMessage, { quoted: mek })
            }
            break
case 'gaywiki':
const nigger = require('./scrape/wiki')
if (args.length < 1) return reply('What Are You Looking For?? ')
const res2 = nigger.wikiSearch(q).catch(e => {
return reply('_[ ! ] Error Result Not Found_') 
}) 
const result2 = `*Title :* ${q}\n*Wiki :* ${res2.wiki}`
reply(result2)
break

            case 'media': 
              case 'wikimedia':{
                if (args.length == 0) throw 'Masukkan Query Title'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `❏ Title : ${result.title}\n❏ Source : ${result.source}\n❏ Media Url : ${result.image}`,
                    footer: ronove.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                ronove.sendMessage(mek.chat, buttonMessage, { quoted: mek })
            }
            break
            case 'quotesanime': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                ronove.sendMessage(mek.chat, buttonMessage, { quoted: mek })
            }
            break
case prefix+'cerpen':{
if (!q) return reply(`*List*\n${prefix}Cerpen Anak\n${prefix}Cerpen Bahasa Daerah\n${prefix}Cerpen Bahasa Inggris\n${prefix}Cerpen Bahasa Jawa\n${prefix}Cerpen Bahasa Sunda\n${prefix}Cerpen Budaya\n${prefix}Cerpen Cinta\n${prefix}Cerpen Cinta Islami\n${prefix}Cerpen Cinta Pertama\n${prefix}Cerpen Cinta Romantis\n${prefix}Cerpen Cinta Sedih\n${prefix}Cerpen Cinta Segitiga\n${prefix}Cerpen Cinta Sejati\n${prefix}Cerpen Galau\n${prefix}Cerpen Gokil\n${prefix}Cerpen Inspiratif\n${prefix}Cerpen Jepang\n${prefix}Cerpen Kehidupan\n${prefix}Cerpen Keluarga\n${prefix}Cerpen Kisah Nyata\n${prefix}Cerpen Korea\n${prefix}Cerpen Kristen\n${prefix}Cerpen Liburan\n${prefix}Cerpen Lingkungan\n${prefix}Cerpen Lucu\n${prefix}Cerpen Malaysia\n${prefix}Cerpen Mengharukan\n${prefix}Cerpen Misteri\n${prefix}Cerpen Motivasi\n${prefix}Cerpen Nasihat\n${prefix}Cerpen Nasionalisme\n${prefix}Cerpen Olahraga\n${prefix}Cerpen Patah Hati\n${prefix}Cerpen Penantian\n${prefix}Cerpen Pendidikan\n${prefix}Cerpen Pengalaman Pribadi\n${prefix}Cerpen Pengorbanan\n${prefix}Cerpen Penyesalan\n${prefix}Cerpen Perjuangan\n${prefix}Cerpen Perpisahan\n${prefix}Cerpen Persahabatan\n${prefix}Cerpen Petualangan\n${prefix}Cerpen Ramadhan\n${prefix}Cerpen Remaja\n${prefix}Cerpen Renungan\n${prefix}Cerpen Rindu\n${prefix}Cerpen Rohani\n${prefix}Cerpen Romantis\n${prefix}Cerpen Sastra\n${prefix}Cerpen Sedih\n${prefix}Cerpen Sejarah\n${prefix}Cerpen Slice Of Life\n${prefix}Cerpen Terjemahan\n${prefix}Cerpen Thriller`)
let cerpe = await cerpen(q)
reply(`• _*Title :*_ ${cerpe.title}\n• _*Author :*_ ${cerpe.author}\n• _*Category :*_ ${cerpe.kategori}\n• _*Pass Moderation :*_ ${cerpe.lolos}\n• _*Story :*_\n${cerpe.cerita}`)
}
break
	        
case 'character':
  if (!text) return reply(`What Anime Character Are You Looking For??`)
                await reply(mess.wait)
                xa.anime.character(q).then(async data => {
                    let txt = `*---「 CHARACTER-SEARCH 」---*\n\n`
                    for (let i of data) {
                        txt += `*📫 Character :* ${i.character}\n`
                        txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					"urlButton": {
						"displayText": "Script",
						"url": `https://youtu.be/dQw4w9WgXcQ`
						}
					}
				]
				await ronove.send5ButLoc(mek.chat, txt , fake, gam, but , { userJid: mek.chat, quoted: fsus })
                })
                .catch((err) => {
                    reply(mess.error)
                })
                break
case 'teswelcom':
thmb = reSize('./lib/ronove.jpg', 200, 200)
var ige = await new knights.Welcome2()
.setAvatar(thmb)
.setUsername('udin itam')
.setBg("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq0uJnQO5Cz3pZUXXbO9BofUL6kiXDyGZU5w&usqp=CAU") 
.setGroupname('Ro-Bot Group')
.setMember('20')
.toAttachment();

ronove.sendMessage(m.chat, { image : { url: ige.toBuffer() }, caption: 'tes'})
break
case 'atttpp':




const dcanvas = require('discord-canvas')
const asu = getRandom()
	  	const asi = asu.replace('undefined', '')
const imge = await new dcanvas.Welcome()
			.setUsername('amin')
		.setDiscriminator(mek.sender.replace(/@s.whatsapp.net/, '').slice(5, 9))
			.setMemberCount('1')
			.setGuildName('tes')
			.setAvatar('https://bit.ly/3E1F4AA')
			.setColor("border", "#8015EA")
			.setColor("username-box", "#8015EA")
			.setColor("discriminator-box", "#8015EA")
			.setColor("message-box", "#8015EA")
			.setColor("title", "#8015EA")
			.setColor("avatar", "#8015EA")
			.setBackground('https://bit.ly/3E1F4AA')
			.toAttachment();
			 
const imaage = await new dcanvas.RankCard()
    .setAvatar("xixi52")
    .setXP("current", 500)
    .setXP("needed", 1000)
    .setLevel(7)
    .setRank(2)
    .setReputation(450)
    .setRankName("professional")
    .setUsername("xixi52")
    .setBadge(1, "gold")
    .setBadge(3, "diamond")
    .setBadge(5, "silver")
    .setBadge(6, "bronze")
    .setBackground("https://www.site.com/background.jpg")
    .toAttachment();
let btn = [{
                                urlButton: {
                                    displayText: 'Sc',
                                    url: 'https://youtu.be/dQw4w9WgXcQ'
                                }
                            }, {
                               
                  quickReplyButton: {
                                    displayText: 'List Menu📙',
                                    id: 'command'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: `Welcome\nBtw aku suka kamu om, kyaaa`,
                                    id: 'ownehr'
                                }
                            }]
ronove.send5ButImg(mek.chat, fake, ronove.user.name, imaage.toBuffer(), btn, imge.toBuffer())
break
case prefix+'kalkulator': case prefix+'kal': {
	const mathjs = require('mathjs')
if (args.length < 1) return reply(`*Example :*\n${prefix}kalkulator 2 * 5\n\n*List Bilangan :*\n•> Kali : *\n•> Bagi : /\n•> Tambah : +\n•> Kurang : -`)
let qsd = args.join(" ")
if (typeof mathjs.evaluate(qsd) !== 'number') {
reply('Error')
} else {
reply(`\`\`\`「 Kalkulator 」\`\`\`\n\n*•> Hitung :* ${qsd}\n*•> Hasil :* ${mathjs.evaluate(qsd.replace(/×/g, "*").replace(/x/g, "*").replace(/÷/g, "/"))}`)
}
}
break
 case 'attp':
if (!q) return reply(`Textnya mana? Contoh: ${prefix +command} Amin gei`)
reply(mess.wait)
xa.maker.attp(q).then(data => {
ronove.sendMedia(mek.chat, data.result, 'Ronove', 'Op', fsus, {asSticker: true})
})
break
case '3dchristmas':
if (!q) return reply(`Textnya mana? Contoh: ${prefix +command} Amin gei`)
zrapi.textpro("https://textpro.me/3d-christmas-text-effect-by-name-1055.html", [
    `${q}`,
  ]).then((data) => {  ronove.sendMessage(mek.chat, { image: { url: data }, caption: `Dekita desu` }, { quoted: fsus })
            })
break 
case '3ddeepsea':
if (!q) return reply(`Textnya mana? Contoh: ${prefix +command} Amin gei`)
zrapi.textpro("https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html", [
    `${q}`,
  ]).then((data) => {  ronove.sendMessage(mek.chat, { image: { url: data }, caption: `Dekita desu` }, { quoted: fsus })
            })
break 

case 'americanflag':
if (!q) return reply(`Textnya mana? Contoh: ${prefix +command} Amin gei`)
zrapi.textpro("https://textpro.me/create-american-flag-3d-text-effect-online-1051.html", [
    `${q}`,
  ]).then((data) => {  ronove.sendMessage(mek.chat, { image: { url: data }, caption: `Dekita desu` }, { quoted: fsus })
            })
break 

case '3dscifi':
if (!q) return reply(`Textnya mana? Contoh: ${prefix +command} Amin gei`)
zrapi.textpro("https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html", [
    `${q}`,
  ]).then((data) => {  ronove.sendMessage(mek.chat, { image: { url: data }, caption: `Dekita desu` }, { quoted: fsus })
            })
break 

case '3drainbow':
if (!q) return reply(`Textnya mana? Contoh: ${prefix +command} Amin gei`)
zrapi.textpro("https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html", [
    `${q}`,
  ]).then((data) => {  ronove.sendMessage(mek.chat, { image: { url: data }, caption: `Dekita desu` }, { quoted: fsus })
            })
break 

case '3dwaterpipe':
if (!q) return reply(`Textnya mana? Contoh: ${prefix +command} Amin gei`)
zrapi.textpro("https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html", [
    `${q}`,
  ]).then((data) => {  ronove.sendMessage(mek.chat, { image: { url: data }, caption: `Dekita desu` }, { quoted: fsus })
            })
break 

case 'halloweenskeleton':
if (!q) return reply(`Textnya mana? Contoh: ${prefix +command} Amin gei`)
zrapi.textpro("https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html", [
    `${q}`,
  ]).then((data) => {  ronove.sendMessage(mek.chat, { image: { url: data }, caption: `Dekita desu` }, { quoted: fsus })
            })
break 

case 'sketch':
if (!q) return reply(`Textnya mana? Contoh: ${prefix +command} Amin gei`)
zrapi.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    `${q}`,
  ]).then((data) => {  ronove.sendMessage(mek.chat, { image: { url: data }, caption: `Dekita desu` }, { quoted: fsus })
            })
break 

case 'bluecircuit':
if (!q) return reply(`Textnya mana? Contoh: ${prefix +command} Amin gei`)
zrapi.textpro("https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html", [
    `${q}`,
  ]).then((data) => {  ronove.sendMessage(mek.chat, { image: { url: data }, caption: `Dekita desu` }, { quoted: fsus })
            })
break 

case 'space':
if (!q) return reply(`Textnya mana? Contoh: ${prefix +command} Amin gei`)
zrapi.textpro("https://textpro.me/create-space-text-effects-online-free-1042.html", [
    `${q}`,
  ]).then((data) => {  ronove.sendMessage(mek.chat, { image: { url: data }, caption: `Dekita desu` }, { quoted: fsus })
            })
break 

case 'metallic':
if (!q) return reply(`Textnya mana? Contoh: ${prefix +command} Amin gei`)
zrapi.textpro("https://textpro.me/create-a-3d-luxury-metallic-text-effect-for-free-1071.html", [
    `${q}`,
  ]).then((data) => {  ronove.sendMessage(mek.chat, { image: { url: data }, caption: `Dekita desu` }, { quoted: fsus })
            })
break 

case 'fiction':
if (!q) return reply(`Textnya mana? Contoh: ${prefix +command} Amin gei`)
zrapi.textpro("https://textpro.me/create-science-fiction-text-effect-online-free-1038.html", [
    `${q}`,
  ]).then((data) => {  ronove.sendMessage(mek.chat, { image: { url: data }, caption: `Dekita desu` }, { quoted: fsus })
            })
break 

case 'greenhorror':
if (!q) return reply(`Textnya mana? Contoh: ${prefix +command} Amin gei`)
zrapi.textpro("https://textpro.me/create-green-horror-style-text-effect-online-1036.html", [
    `${q}`,
  ]).then((data) => {  ronove.sendMessage(mek.chat, { image: { url: data }, caption: `Dekita desu` }, { quoted: fsus })
            })
break 

case 'transformer':
if (!q) return reply(`Textnya mana? Contoh: ${prefix +command} Amin gei`)
zrapi.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [
    `${q}`,
  ]).then((data) => {  ronove.sendMessage(mek.chat, { image: { url: data }, caption: `Dekita desu` }, { quoted: fsus })
            })
break 

case 'berry':
if (!q) return reply(`Textnya mana? Contoh: ${prefix +command} Amin gei`)
zrapi.textpro("https://textpro.me/create-berry-text-effect-online-free-1033.html", [
    `${q}`,
  ]).then((data) => {  ronove.sendMessage(mek.chat, { image: { url: data }, caption: `Dekita desu` }, { quoted: fsus })
            })
break 

case 'thunder':
if (!q) return reply(`Textnya mana? Contoh: ${prefix +command} Amin gei`)
zrapi.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
    `${q}`,
  ]).then((data) => {  ronove.sendMessage(mek.chat, { image: { url: data }, caption: `Dekita desu` }, { quoted: fsus })
            })
break 

case 'magma':
if (!q) return reply(`Textnya mana? Contoh: ${prefix +command} Amin gei`)
zrapi.textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html", [
    `${q}`,
  ]).then((data) => {  ronove.sendMessage(mek.chat, { image: { url: data }, caption: `Dekita desu` }, { quoted: fsus })
            })
break 

case '3dcrackedstone':
if (!q) return reply(`Textnya mana? Contoh: ${prefix +command} Amin gei`)
zrapi.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
    `${q}`,
  ]).then((data) => {  ronove.sendMessage(mek.chat, { image: { url: data }, caption: `Dekita desu` }, { quoted: fsus })
            })
break 

case '3dneonlight':
if (!q) return reply(`Textnya mana? Contoh: ${prefix +command} Amin gei`)
zrapi.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [
    `${q}`,
  ]).then((data) => {  ronove.sendMessage(mek.chat, { image: { url: data }, caption: `Dekita desu` }, { quoted: fsus })
            })
break 

case 'impressiveglitch':
if (!q) return reply(`Textnya mana? Contoh: ${prefix +command} Amin gei`)
zrapi.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [
    `${q}`,
  ]).then((data) => {  ronove.sendMessage(mek.chat, { image: { url: data }, caption: `Dekita desu` }, { quoted: fsus })
            })
break 

case 'naturalleaves':
if (!q) return reply(`Textnya mana? Contoh: ${prefix +command} Amin gei`)
zrapi.textpro("https://textpro.me/natural-leaves-text-effect-931.html", [
    `${q}`,
  ]).then((data) => {  ronove.sendMessage(mek.chat, { image: { url: data }, caption: `Dekita desu` }, { quoted: fsus })
            })
break 

case 'fireworksparkle':
if (!q) return reply(`Textnya mana? Contoh: ${prefix +command} Amin gei`)
zrapi.textpro("https://textpro.me/firework-sparkle-text-effect-930.html", [
    `${q}`,
  ]).then((data) => {  ronove.sendMessage(mek.chat, { image: { url: data }, caption: `Dekita desu` }, { quoted: fsus })
            })
break 

case 'matrix':
if (!q) return reply(`Textnya mana? Contoh: ${prefix +command} Amin gei`)
zrapi.textpro("https://textpro.me/matrix-style-text-effect-online-884.html", [
    `${q}`,
  ]).then((data) => {  ronove.sendMessage(mek.chat, { image: { url: data }, caption: `Dekita desu` }, { quoted: fsus })
            })
break 

case 'dropwater':
if (!q) return reply(`Textnya mana? Contoh: ${prefix +command} Amin gei`)
zrapi.textpro("https://textpro.me/dropwater-text-effect-872.html", [
    `${q}`,
  ]).then((data) => {  ronove.sendMessage(mek.chat, { image: { url: data }, caption: `Dekita desu` }, { quoted: fsus })
            })
break  
case 'harrypotter':
if (!q) return reply(`Textnya mana? Contoh: ${prefix +command} Amin gei`)
zrapi.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
    `${q}`,
  ]).then((data) => {  ronove.sendMessage(mek.chat, { image: { url: data }, caption: `Dekita desu` }, { quoted: fsus })
            })
break 

case 'foggywindow':
if (!q) return reply(`Textnya mana? Contoh: ${prefix +command} Amin gei`)
zrapi.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
    `${q}`,
  ]).then((data) => {  ronove.sendMessage(mek.chat, { image: { url: data }, caption: `Dekita desu` }, { quoted: fsus })
            })
break 

case 'neondevils':
if (!q) return reply(`Textnya mana? Contoh: ${prefix +command} Amin gei`)
zrapi.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
    `${q}`,
  ]).then((data) => {  ronove.sendMessage(mek.chat, { image: { url: data }, caption: `Dekita desu` }, { quoted: fsus })
            })
break 

case 'christmasholiday':
if (!q) return reply(`Textnya mana? Contoh: ${prefix +command} Amin gei`)
zrapi.textpro("https://textpro.me/create-a-christmas-holiday-snow-text-effect-1007.html", [
    `${q}`,
  ]).then((data) => {  ronove.sendMessage(mek.chat, { image: { url: data }, caption: `Dekita desu` }, { quoted: fsus })
            })
break 

case '3dgradient':
if (!q) return reply(`Textnya mana? Contoh: ${prefix +command} Amin gei`)
zrapi.textpro("https://textpro.me/3d-gradient-text-effect-online-free-1002.html", [
    `${q}`,
  ]).then((data) => {  ronove.sendMessage(mek.chat, { image: { url: data }, caption: `Dekita desu` }, { quoted: fsus })
            })
break 

case 'blackpink':
if (!q) return reply(`Textnya mana? Contoh: ${prefix +command} Amin gei`)
zrapi.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
    `${q}`,
  ]).then((data) => {  ronove.sendMessage(mek.chat, { image: { url: data }, caption: `Dekita desu` }, { quoted: fsus })
            })
break 

case 'gluetext':
if (!q) return reply(`Textnya mana? Contoh: ${prefix +command} Amin gei`)
zrapi.textpro("https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html", [
    `${q}`,
  ]).then((data) => {  ronove.sendMessage(mek.chat, { image: { url: data }, caption: `Dekita desu` }, { quoted: fsus })
            })
break
case 'covidindo':
case 'covid':
let { covid } = require('./lib/covid.js') 
const c = await covid()
var { kasus, kematian, sembuh } = c[0]
reply(`Case : ${kasus}\n\nDead : ${kematian}\n\nHealed : ${sembuh}`)
break
case 'tvschedule':
if (!q) return reply('Send orders *#tvschedule [channel]*')
reply(await jadwaltv(q))
break
case 'playstore': case 'apk':
if(!q) return reply('what are you looking for?')
let play = await hx.playstore(q)
let storee = '❉─────────────────────❉\n'
for (let i of play){
storee += `\n*「 *PLAY STORE* 」*\n
- *Name* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Dev Link* : ${i.link_dev}\n❉─────────────────────❉`
}
reply(storee)
break
case 'film':
	reply(mess.wait)
if (!q) return reply(`What film you wanna search?\nExample: ${prefix}film Spiderman`)
xa.search.film(q)
    .then(data => {console.log(data)
    let krl = `*❒「  Film ${q} 」*\n*🌿 Author* : Ronove\n\n`
			    for (let i of data) {
                krl += (`\n────────────────────\n\n *📍Title :* ${i.judul}\n *📟 Quality :* ${i.quality}\n *🖥️ Type : ${i.type}*\n *⌛ Uploaded :* ${i.upload}\n *🌍 Source :* ${i.link}`)
                }
               ronove.sendMessage(from, { image: { url: data[0].thumb}, caption: krl }, { quoted: fsus })
});
break

case 'mcserver': case 'mcquery': {
   
if (!args.join(" ")) return reply(`Example : \n${prefix + command} ip|port\nUses : \n${prefix + command} play.xeon.com|19132`)
const Qooery = require("minecraft-query");

const qury = args.join(" ")
const iphost = qury.split("|")[0];
const portnya = qury.split("|")[1];

if (!iphost) return reply(`Where's your ip?`)
if (!portnya) return reply(`Where's the port??`)

const q = new Qooery({host: iphost, port: portnya, timeout: 7500});

q.fullStat()
.then(success => {
reply(jsonformat(success));
return q.basicStat()
})
.then(success => {
reply(jsonformat(success));
q.close();
})
}
break
case 'mcpedl': {
   
if (!args.join(" ")) return reply(`Example : ${prefix + command} shader`)
tod.mcpedl(args.join(" ")).then(async(res) => {
teks = `*| MCPEDL SEARCH |*`
for (let i of res) {
teks += `\n\nName : ${i.name}\nCategory : ${i.category}\nDate : ${i.date}\nDesc : ${i.desc}\nLink : ${i.link}`
}
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
image: thumb,
jpegThumbnail: thumb,
caption: teks,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4
}
ronove.sendMessage(mek.chat, buttonMessage, { quoted: fsus })
})
}
break
case 'happymod': {
   
if (!args.join(" ")) return reply(`Example : ${prefix + command} mobile legend`)
tod.happymod(args.join(" ")).then(async(res) => {
teks = '```「 HappyMod Search 」```'
for (let i of res) {
teks += `\n\n${i.name}\n`
teks += `${i.link}`
}
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
image: {url:res[0].icon},
jpegThumbnail: thumb,
caption: teks,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4
}
ronove.sendMessage(m.chat, buttonMessage, { quoted: mek })
})
}
break
case 'mangakusearch':
  case 'mangaku':{
    require('dhn-api').MangakuSearch(q).then(async(res) => {



teks = `「 Mangaku Search 」`

for (let i of res) {
teks += `\n\n❏ ${i.manga_name}\n`
teks += `❏ Link Manga: ${i.manga_url}\n`
teks += `❏ Chapter: ${i.manga_eps}\n`
teks += `❏ Rating: ${i.manga_rating}\n `
}

reply(teks)
})
}
break
case 'wamod':
  case 'searchwamod':
    case 'wamodsearch':{
      if (!args.join(" ")) return reply(`Example : ${prefix + command} Fm whatsapp`)
   require("dhn-api").WAModsSearch(q).then(async(res) => {

teks = '```「 WhatsappMod Search 」```'

for (let i of res) {
teks += `\n\n${i.apk_name}\n`
teks += `${i.apk_url}`
}

reply(teks)
})
}
break
	    case 'shadow': case 'romantic': case 'smoke': case 'burnpapper': case 'naruto': case 'lovemsg': case 'grassmsg': case 'lovetext': case 'coffecup': case 'butterfly': case 'harrypotter': case 'retrolol': {
                if (args.length == 0) throw 'No Query Text'
                reply(mess.wait)
                ronove.sendMessage(mek.chat, { image: { url: api('zenz', '/photooxy/' + command, { text: text }, 'apikey') }, caption: `Photo Oxy ${command}` }, { quoted: mek })
            }
            break
            case 'ffcover': case 'crossfire': case 'galaxy': case 'glass': case 'neon': case 'beach': case 'blackpink': case 'igcertificate': case 'ytcertificate': {
                if (args.length == 0) throw 'No Query Text'
                reply(mess.wait)
                ronove.sendMessage(mek.chat, { image: { url: api('zenz', '/ephoto/' + command, { text: text }, 'apikey') }, caption: `Ephoto ${command}` }, { quoted: mek })
            }
            break
	    case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) throw `Example : ${prefix + command} 6288292024190`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return reply(anu.message)
                ronove.sendText(mek.chat, `❏ *Nomor HP :* ${anu.message.nomer_hp}\n❏ *Angka Shuzi :* ${anu.message.angka_shuzi}\n❏ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n❏ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (args.length == 0) throw `Example : ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return reply(anu.message)
                ronove.sendText(mek.chat, `❏ *Mimpi :* ${anu.message.mimpi}\n❏ *Arti :* ${anu.message.arti}\n❏ *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (args.length == 0) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                ronove.sendText(mek.chat, `❏ *Nama Anda :* ${anu.message.nama_anda.nama}\n❏ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n❏ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n❏ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n❏ *Hasil :* ${anu.message.result}\n❏ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (args.length == 0) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                ronove.sendText(mek.chat, `❏ *Nama Anda :* ${anu.message.nama_anda.nama}\n❏ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n❏ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n❏ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n❏ *Hasil :* ${anu.message.result}\n❏ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
                if (args.length == 0) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                ronove.sendText(mek.chat, `❏ *Nama Suami :* ${anu.message.suami.nama}\n❏ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n❏ *Nama Istri :* ${anu.message.istri.nama}\n❏ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n❏ *Hasil :* ${anu.message.result}\n❏ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
                if (args.length == 0) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                ronove.sendText(mek.chat, `❏ *Nama Anda :* ${anu.message.nama_anda.nama}\n❏ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n❏ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n❏ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n❏ *Sisi Positif :* ${anu.message.sisi_positif}\n❏ *Sisi Negatif :* ${anu.message.sisi_negatif}\n❏ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
                if (args.length == 0) throw `Example : ${prefix + command} Dika Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return reply(anu.message)
                ronove.sendText(mek.chat, `❏ *Nama :* ${anu.message.nama}\n❏ *Arti :* ${anu.message.arti}\n❏ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (args.length == 0) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                ronove.sendText(mek.chat, `❏ *Nama :* ${anu.message.nama}\n❏ *Lahir :* ${anu.message.tgl_lahir}\n❏ *Life Path :* ${anu.message.life_path}\n❏ *Destiny :* ${anu.message.destiny}\n❏ *Destiny Desire :* ${anu.message.destiny_desire}\n❏ *Personality :* ${anu.message.personality}\n❏ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (args.length == 0) throw `Example : ${prefix + command} Dika|Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return reply(anu.message)
                ronove.sendImage(mek.chat,  anu.message.gambar, `❏ *Nama Anda :* ${anu.message.nama_anda}\n❏ *Nama Pasangan :* ${anu.message.nama_pasangan}\n❏ *Sisi Positif :* ${anu.message.sisi_positif}\n❏ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (args.length == 0) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                ronove.sendText(mek.chat, `❏ *Tanggal Pernikahan :* ${anu.message.tanggal}\n❏ *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
                if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                ronove.sendText(mek.chat, `❏ *Lahir :* ${anu.message.hari_lahir}\n❏ *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (args.length == 0) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                ronove.sendText(mek.chat, `❏ *Lahir :* ${anu.message.hari_lahir}\n❏ *Rezeki :* ${anu.message.rejeki}\n❏ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (args.length == 0) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                ronove.sendText(mek.chat, `❏ *Lahir :* ${anu.message.hari_lahir}\n❏ *Pekerjaan :* ${anu.message.pekerjaan}\n❏ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (args.length == 0) throw `Example : 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                ronove.sendText(mek.chat, `❏ *Analisa :* ${anu.message.analisa}\n❏ *Angka Akar :* ${anu.message.angka_akar}\n❏ *Sifat :* ${anu.message.sifat}\n❏ *Elemen :* ${anu.message.elemen}\n❏ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (args.length == 0) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                ronove.sendText(mek.chat, `❏ *Analisa :* ${anu.message.analisa}\n❏ *Sektor :* ${anu.message.sektor}\n❏ *Elemen :* ${anu.message.elemen}\n❏ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
                if (args.length == 0) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                ronove.sendImage(mek.chat, anu.message.image, `❏ *Lahir :* ${anu.message.tgl_lahir}\n❏ *Simbol Tarot :* ${anu.message.simbol_tarot}\n❏ *Arti :* ${anu.message.arti}\n❏ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
                if (args.length == 0) throw `Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return reply(anu.message)
                ronove.sendText(mek.chat, `❏ *Nama :* ${anu.message.nama}\n❏ *Lahir :* ${anu.message.tahun_lahir}\n❏ *Gender :* ${anu.message.jenis_kelamin}\n❏ *Angka Kua :* ${anu.message.angka_kua}\n❏ *Kelompok :* ${anu.message.kelompok}\n❏ *Karakter :* ${anu.message.karakter}\n❏ *Sektor Baik :* ${anu.message.sektor_baik}\n❏ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
                if (args.length == 0) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                ronove.sendText(mek.chat, `❏ *Lahir :* ${anu.message.tgl_lahir}\n❏ *Kala Tinantang :* ${anu.message.kala_tinantang}\n❏ *Info :* ${anu.message.info}\n❏ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (args.length == 0) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                ronove.sendText(mek.chat, `❏ *Lahir :* ${anu.message.tgl_lahir}\n❏ *Hasil :* ${anu.message.result}\n❏ *Info :* ${anu.message.info}\n❏ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (args.length == 0) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                ronove.sendText(mek.chat, `❏ *Hari Lahir :* ${anu.message.hari_lahir}\n❏ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n❏ *Hari Naas :* ${anu.message.hari_naas}\n❏ *Info :* ${anu.message.catatan}\n❏ *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (args.length == 0) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                ronove.sendText(mek.chat, `❏ *Hari Lahir :* ${anu.message.hari_lahir}\n❏ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n❏ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n❏ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (args.length == 0) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                ronove.sendText(mek.chat, `❏ *Hari Lahir :* ${anu.message.hari_lahir}\n❏ *tanggal Lahir :* ${anu.message.tgl_lahir}\n❏ *Arah Rezeki :* ${anu.message.arah_rejeki}\n❏ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
case 'pirteggs':
case 'madtonjol':
case 'sleier':
if (!isCreator) throw mess.owner
reply(`${slayer(prefix)}`)
break
case 'teskatalog':
case 'catalog': { // Nemu di Sc chika
var messa = await prepareWAMessageMedia({ image: thumb}, { upload: ronove.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "7091718154232528",
"title": fake,
"description": fake,
"footerText":  fake,
"currencyCode": "IDR",
"priceAmount1000": "100000000000000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "1000",
"retailerId": fake,
"url": `${fake}`
},
"businessOwnerJid": "6282182623238@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: fkontak })
ronove.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
break

case 'bugkatalog':{ // Nemu di Sc chika
if (!isCreator) throw mess.owner
var messa = await prepareWAMessageMedia({ image: thumb}, { upload: ronove.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "7091718154232528",
"title": petir(prefix),
"description": ganas(prefix),
"footerText":  fake,
"currencyCode": "IDR",
"priceAmount1000": "100000000000000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "1000",
"retailerId": fake,
"url": `${fake}`
},
"businessOwnerJid": "6282182623238@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: fkontak })
ronove.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
break

case 'slayer7':
if (!isCreator) throw mess.owner
reply(`${slayer7(prefix)}`)
break
case 'troli':
if (!isCreator) throw mess.owner
reply(`${troli(prefix)}`)
break
case 'brutal':
if (!isCreator) throw mess.owner
reply(`${brutal(prefix)}`)
break
case 'petir':
if (!isCreator) throw mess.owner
reply(`${petir(prefix)}`)
break
case 'tameng':
if (!isCreator) throw mess.owner
reply(`${tameng(prefix)}`)
break
case 'ganas':
if (!isCreator) throw mess.owner
reply(`${ganas(prefix)}`)
break

            case 'peruntungan': {
                if (args.length == 0) throw `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return reply(anu.message)
                ronove.sendText(mek.chat, `❏ *Nama :* ${anu.message.nama}\n❏ *Lahir :* ${anu.message.tgl_lahir}\n❏ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n❏ *Hasil :* ${anu.message.result}\n❏ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (args.length == 0) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                ronove.sendText(mek.chat, `❏ *Tanggal :* ${anu.message.tanggal}\n❏ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n❏ *Watak Hari :* ${anu.message.watak_hari}\n❏ *Naga Hari :* ${anu.message.naga_hari}\n❏ *Jam Baik :* ${anu.message.jam_baik}\n❏ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
                if (args.length == 0) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                ronove.sendText(mek.chat, `❏ *Nama :* ${anu.message.nama}\n❏ *Lahir :* ${anu.message.tgl_lahir}\n❏ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
                if (args.length == 0) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                ronove.sendText(mek.chat, `❏ *Nama :* ${anu.message.nama}\n❏ *Lahir :* ${anu.message.tgl_lahir}\n❏ *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
                if (args.length == 0) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                ronove.sendText(mek.chat, `❏ *Tanggal :* ${anu.message.tgl_memancing}\n❏ *Hasil :* ${anu.message.result}\n❏ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
                if (args.length == 0) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return reply(anu.message)
                ronove.sendText(mek.chat, `❏ *Hasil :* ${anu.message.result}\n❏ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
                if (args.length == 0) throw `Example : ${prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return reply(anu.message)
                ronove.sendText(mek.chat, `❏ *Zodiak :* ${anu.message.zodiak}\n❏ *Nomor :* ${anu.message.nomor_keberuntungan}\n❏ *Aroma :* ${anu.message.aroma_keberuntungan}\n❏ *Planet :* ${anu.message.planet_yang_mengitari}\n❏ *Bunga :* ${anu.message.bunga_keberuntungan}\n❏ *Warna :* ${anu.message.warna_keberuntungan}\n❏ *Batu :* ${anu.message.batu_keberuntungan}\n❏ *Elemen :* ${anu.message.elemen_keberuntungan}\n❏ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n❏ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
                if (args.length == 0) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return reply(anu.message)
                ronove.sendText(mek.chat, `❏ *Hasil :* ${anu.message}`, m)
            }
            break
case 'namaninja':
let namaninja = require('./plugin/namaninja')
namaninja(q, mek, reply, m)
break
case 'jooxdl': case 'joox':
   const { joox } = require('./scrape/jooxdl')

 if (!text) throw `*Perintah ini untuk mencari lagu joox berdasarkan pencarian*\n\ncontoh:\n${prefix + command} akad`
    if (isUrl(text)) throw `*Perintah ini untuk mencari lagu joox berdasarkan pencarian bukan link*\n\ncontoh:\n${prefix + command} akad`

    joox(text).then(res => {
        let joox = JSON.stringify(res)
        let jjson = JSON.parse(joox)
        let random = Math.floor(Math.random() * jjson.data.length)
        let hasil = jjson.data[random]
        let json = hasil
        let pesan = `
*Penyanyi:* ${json.penyanyi}
*Judul:* ${json.lagu}
*Album:* ${json.album}
*Diterbitkan:* ${json.publish}
*Link:* ${json.mp3}
*Made by* ❤️`.trim()
ronove.sendMessage(mek.chat, { audio: { url: json.mp3 }, mimetype: 'audio/mpeg', fileName: `${q}.mp3` }, { quoted: mek })
})
break


case 'jokessekali': case 'jokesdl':{
   const { joox } = require('./scrape/jooxdl')



 if (!text) throw `*Perintah ini untuk mencari lagu joox berdasarkan pencarian*\n\ncontoh:\n${prefix + command} akad`
    if (isUrl(text)) throw `*Perintah ini untuk mencari lagu joox berdasarkan pencarian bukan link*\n\ncontoh:\n${prefix + command} akad`

var listPost = []
var listnyd = 1
    joox(text).then(res => {
        let joox = JSON.stringify(res)
        let jjson = JSON.parse(joox)
        let random = Math.floor(Math.random() * jjson.data.length)
        let hasil = jjson.data[random]
        let json = hasil
listPost.push({
title: `Media ${listnyd++}`, rowId: ``, description: `• Title : ${jjson.lagu}\n• Album : ${jjson.album}\n• Penyanyi : ${jjson.penyanyi}\n• Url : ${jjson.mp3}`})
const secttions = [

{

title: `Hasil Yg Ditemukan`,
rows: listPost
}
]
const liistMessage = {
text: '',
footer: 'by vynn',
buttonText: "Click Here",
secttions
}
ronove.sendMessage(from, liistMessage, {quoted: mek})
})

}
break
case 'tiktokmusic':
  case 'tiktokmp3':
  if (!args[0]) return reply('Linknya ?')

 let kontoI = await xa.downloader.tiktok(args[0])

ronove.sendMessage(from, {audio: { url: kontoI.media[2].url, mimetype: 'audio/mpeg', ptt: true},

contextInfo:{externalAdReply:{

title:"Tiktok Downloader",
body: 'RO-BOT - By Ronove',
thumbnail: thumb,
mediaType:2,
mediaUrl: `${args[0]}`,renderLargerThumbnail: true, showAdAttribution: true,
sourceUrl: `${args[0]}`
}}}, {quoted:fkontak})
  break
  case 'ttdl': case 'tiktok': case 'tiktoknowm':
  if (!args[0]) return reply('Linknya ?')
  let kontol = await xa.downloader.tiktok(args[0])
let message = await prepareWAMessageMedia({ video : { url: kontol.media[1].url } }, { upload: ronove.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
videoMessage: message.videoMessage,
hydratedContentText: `Download From ${text}`,
hydratedFooterText: `Klik Button Di Bawah`,
hydratedButtons: [{ urlButton: { displayText: 'Source Video', url: `${args[0]}` } },
{ quickReplyButton: { displayText: 'Get Audio', id: `${prefix}tiktokmusic ${args[0]}` } }]
}
}
}), { userJid: mek.chat, quoted: fsus })
ronove.relayMessage(m.chat, template.message, { messageId: template.key.id })
break
           case 'cuaca':
    try{

        const response = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args[0]}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`)
        const res = await response

        const name = res.data.name
        const Country = res.data.sys.country
        const Weather= res.data.weather[0].description
        const Temperature = res.data.main.temp + '°C'
        const Minimum_Temperature= res.data.main.temp_min + '°C'
        const Maximum_Temperature= res.data.main.temp_max + '°C'
        const Humidity= res.data.main.humidity + '%'
        const Wind= res.data.wind.speed + 'km/h'


        reply(`
        🌸 Place: ${name}\n💮 Country: ${Country}\n🌈 Weather: ${Weather}\n🎋 Temperature: ${Temperature}\n💠 Minimum Temperature: ${Minimum_Temperature}\n📛 Maximum Temperature: ${Maximum_Temperature}\n💦 Humidity: ${Humidity}\n🎐 Wind: ${Wind}
        `.trim(),m)
    }catch(e){
throw 'location not found' 
console.log(e)

    }
    break
            case 'tiktokwm': case 'tiktokwatermark': {
                        if (!args[0]) return reply('Linknya ?')
			if (!q.includes('tiktok')) return reply('Itu bukan link tiktok!')
  buffer = await getBuffer(`https://telegra.ph/file/e7abc5e3e1035eb76f742.jpg`) 
  const musim_apl = await TiktokDownloader(`${args[0]}`).catch(e => {
  reply(pesan.eror) 
  } )
  console.log(musim_apl)
  const musim_virtu = musim_apl.result.watermark
  reply('*Scraping Metadata*')
texttk = `<Succes/>\nRequest By *${pushname}*`
let buttons = [
{buttonId: `.tiktokmp3 ${args[0]}`, buttonText: {displayText: 'Audio'}, type: 1}
]
let buttonMessage = {
video: {url:musim_virtu},
caption: texttk,
footer: 'RO-BOT - By Ronove',
buttons: buttons,
headerType: 4
}
ronove.sendMessage(from, buttonMessage, {quoted:fkontak})

            }
            break
	        case 'instagram': case 'ig': case 'igdl': {
if (!args[0]) return reply(`Example :\n${command} https://www.instagramek.com/p/CcvJGuxh9VI/?igshid=YmMyMTA2M2Y=`)
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
footer: "RO-BOT - By Ronove",
buttonText: "Click Here",
sections
}
ronove.sendMessage(from, listMessage, {quoted:fkontak})
} catch (err) {
reply(String(err))
}
            }
            break
case 'igs': {
reply('*Scraping Metadata*')
if (args[0] === "mp4") {
ronove.sendMessage(from, {video:{url:args[1]}, caption:'Dekita!', mimetype:'video/mp4'}, {quoted:mek})
} else if (args[0] === "jpg") {
ronove.sendMessage(from, {image:{url:args[1]}, caption:'Dekita!'}, {quoted:fkontak})
} else {
reply(" Error! ")
}
}
break
case 'jooxdll':{
  
let au = require('./scrape/jooxdl')
let iiigs = require('./scrape/jooxdl').joox('unconditionally')
let jokes = JSON.stringify(iiigs)
let iigs = JSON.parse(jokes)
var listPost = []
let random = Math.floor(Math.random() * iigs.data.length)
var listnyd = 1
for (let i of iigs.data[random]) {
listPost.push({
title: `Media ${listnyd++}`, rowId: ``, description: `• Title : ${i.lagu}\n• Album : ${i.album}\n• Penyanyi : ${i.penyanyi}\n• Url : ${i.mp3}`})
}
const secttions = [
{
title: `Hasil Yg Ditemukan`,
rows: listPost
}
]
const liistMessage = {
text: '',
footer: 'by vynn',
buttonText: "Click Here",
secttions
}
ronove.sendMessage(from, liistMessage, {quoted: mek})
}
break
case 'jooxdlll':


var iigs = require('./scrape/jooxdl')
var memek = await iigs.joox('unconditionally')


var listPost = []

var listnyd = 1
for (var i of memek.data) {
listPost.push({
title: `Media ${listnyd++}`, rowId: ``, description: `• Title : ${i.lagu}\n• Album : ${i.album}\n• Penyanyi : ${i.penyanyi}\n• Url : ${i.mp3}`})
}
const secttions = [
{
title: `Hasil Yg Ditemukan`,
rows: listPost
}
]
const liistMessage = {
text: '',
footer: 'by vynn',
buttonText: "Click Here",
secttions
}
ronove.sendMessage(from, liistMessage, {quoted: m})
break
case 'styletext':
  require('./lib/scraper').styletext(q)
  break

            case 'soundcloud': case 'scdl': {
                if (args.length == 0) throw 'No Query Title'
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await ronove.sendImage(mek.chat, anu.result.thumb, `❏ Title : ${anu.result.title}\n❏ Url : ${isUrl(text)[0]}`)
                ronove.sendMessage(mek.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break
	        case 'twitdl': case 'twitter': {
                if (args.length == 0) throw 'Masukkan Query Link!'
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '► Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                ronove.sendMessage(mek.chat, buttonMessage, { quoted: mek })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
                if (args.length == 0) throw 'Masukkan Query Link!'
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await ronove.sendMessage(mek.chat, buttonMessage, { quoted: mek })
                ronove.sendMessage(mek.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
	        case 'fbdl': case 'fb': case 'facebook': {
   if (!args[0]) return mek.reply('Linknya mana?')
   
xa = require('xfarr-api')
xa.downloader.facebook(q).then(data => {
ronove.sendMessage(m.chat, { video: { url: data.sd }, jpegThumbnail:thumb, caption: `Title: ${data.title}`}, { quoted: ftoko })
})
   }
            break
	        case 'pindl': case 'pinterestdl': {
                if (args.length == 0) throw 'Masukkan Query Link!'
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                ronove.sendMessage(mek.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: mek })
            }
            break
            case 'umma': case 'ummadl': {
	        if (args.length == 0) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib/scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
❏ Title : ${anu.title}
❏ Author : ${anu.author.name}
❏ Like : ${anu.like}
❏ Caption : ${anu.caption}
❏ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: ronove.user.name,
			buttons,
			headerType: 4
		    }
		    ronove.sendMessage(mek.chat, buttonMessage, { quoted: mek })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        ronove.sendMessage(mek.chat, { image: { url }, caption: `❏ Title : ${anu.title}\n❏ Author : ${anu.author.name}\n❏ Like : ${anu.like}\n❏ Caption : ${anu.caption}` }, { quoted: mek })
		    })
		}
	    }
	    break
        case 'ringtone': {
		if (args.length == 0) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		ronove.sendMessage(mek.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: mek })
	    }
	    break
		case 'iqra': {
		oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (args.length == 0) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		ronove.sendMessage(mek.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => reply(oh))
		}
		break
		case 'juzamma': {
		if (args[0] === 'pdf') {
		reply(mess.wait)
		ronove.sendMessage(mek.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		reply(mess.wait)
		ronove.sendMessage(mek.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		reply(mess.wait)
		ronove.sendMessage(mek.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		reply(mess.wait)
		ronove.sendMessage(mek.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		reply(`Mau format apa ? Example : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
		}
		}
		break
		case 'hadits': case 'hadis': case 'hadist': {
		if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
tirmidzi
1 - 3891
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://fatiharridho.herokuapp.com/api/islamic/hadits?list=${args[0]}`)
		let { number, arab, id } = res.result.find(v => v.number == args[1])
		reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		reply(`Hadis tidak ditemukan !`)
		}
		}
		break
		case 'alquran': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		reply(txt)
		ronove.sendMessage(mek.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurah': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		reply(txt)
		}
		break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                reply(mess.wait)
                let media = await ronove.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                ronove.sendMessage(mek.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                reply(e)
                }
                break
            case 'setcmd': {
                if (!mek.quoted) throw 'Reply Pesan!'
                if (!mek.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (args.length == 0) throw `Untuk Command Apa?`
                let hash = mek.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: mek.mentionedJid,
                    creator: mek.sender,
                    at: + new Date,
                    locked: false,
                }
                reply(`Dekita!`)
            }
            break
            case 'delcmd': {
                let hash = mek.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                reply(`Dekita!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                ronove.sendText(mek.chat, teks, mek, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!mek.quoted) throw 'Reply Pesan!'
                if (!mek.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = mek.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                reply('Dekita!')
            }
            break
            case 'addmsg': {
                if (!mek.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (args.length == 0) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (args.length == 0) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                ronove.copyNForward(mek.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
	    case 'anonymous': {
                if (mek.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                ronove.sendButtonText(mek.chat, buttons, `\`\`\`Hi ${await ronove.getName(mek.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, ronove.user.name, m)
            }
			break
            case 'keluar': case 'leave': {
                if (mek.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(mek.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await ronove.sendButtonText(mek.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                reply('Ok')
                let other = room.other(mek.sender)
                if (other) await ronove.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (mek.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(mek.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await ronove.sendButtonText(mek.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, ronove.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(mek.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await ronove.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, ronove.user.name, m)
                    room.b = mek.sender
                    room.state = 'CHATTING'
                    await ronove.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, ronove.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: mek.sender,
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
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await ronove.sendButtonText(mek.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, ronove.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (mek.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(mek.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await ronove.sendButtonText(mek.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(mek.sender)
                if (other) await ronove.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(mek.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await ronove.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, ronove.user.name, m)
                    room.b = mek.sender
                    room.state = 'CHATTING'
                    await ronove.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, ronove.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: mek.sender,
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
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await ronove.sendButtonText(mek.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, ronove.user.name, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) throw mess.owner
                ronove.public = true
                reply('Sukse Change To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                ronove.public = false
                reply('Sukses Change To Self Usage')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
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
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                reply(respon)
            }
            break
case 'jail': case 'pixelate': case 'blur': case 'imagesketch': case 'triggeredwebp': case 'shit': case 'burn': case 'invert': case 'wanted': case 'rip': {
	            if (!/image/.test(mime)) return reply(`*Send/Reply Image With Caption* ${prefix + command}`)
	        	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader2')
                let media = await ronove.downloadAndSaveMediaMessage(quoted)                
                let anu = await TelegraPh(media)
                let buf = await getBuffer(`https://cililitan.herokuapp.com/api/${command}?url=${anu}`)
                ronove.sendMessage(mek.chat, { image: buf, caption: `Made by Ronove` }, { quoted: mek}).catch ((err) => reply(mess.error))
                }
                break
            case 'speedtest': {
            reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) reply(stdout)
        if (stderr.trim()) reply(stderr)
            }
            }
            break
            case 'owner': case 'creator': {
                ronove.sendContact(mek.chat, global.owner, mek)
            }
            break
case 'ownerfriend': case 'kawanowner': case 'cowner':{

                ronove.sendContact(mek.chat, global.cowner, mek)

            }
            break
            
            case 'gsmarena': {
            if (args.length == 0) throw `Example : ${prefix + command} samsung`
            let res = await fetchJson(api('zenz', '/webzone/gsmarena', { query: text }, 'apikey'))
            let { judul, rilis, thumb, ukuran, type, storage, display, inchi, pixel, videoPixel, ram, chipset, batrai, merek_batre, detail } = res.result
let capt = `❏ Title: ${judul}
❏ Realease: ${rilis}
❏ Size: ${ukuran}
❏ Type: ${type}
❏ Storage: ${storage}
❏ Display: ${display}
❏ Inchi: ${inchi}
❏ Pixel: ${pixel}
❏ Video Pixel: ${videoPixel}
❏ Ram: ${ram}
❏ Chipset: ${chipset}
❏ Battery: ${batrai}
❏ Battery Brand: ${merek_batre}
❏ Detail: ${detail}`
            ronove.sendImage(mek.chat, thumb, capt, m)
            }
            break
            case 'jadwalbioskop': {
            if (args.length == 0) throw `Example: ${prefix + command} jakarta`
            let res = await fetchJson(api('zenz', '/webzone/jadwalbioskop', { kota: text }, 'apikey'))
            let capt = `Jadwal Bioskop From : ${text}\n\n`
            for (let i of res.result){
            capt += `❏ Title: ${i.title}\n`
            capt += `❏ Thumbnail: ${i.thumb}\n`
            capt += `❏ Url: ${i.url}\n\n──────────────────────\n`
            }
            ronove.sendImage(mek.chat, res.result[0].thumb, capt, m)
            }
            break
            case 'nowplayingbioskop': {
            let res = await fetchJson(api('zenz', '/webzone/nowplayingbioskop', {}, 'apikey'))
            let capt = `Now Playing Bioskop\n\n`
            for (let i of res.result){
            capt += `❏ Title: ${i.title}\n`
            capt += `❏ Url: ${i.url}\n`
            capt += `❏ Img Url: ${i.img}\n\n──────────────────────\n`
            }
            ronove.sendImage(mek.chat, res.result[0].img, capt, m)
            }
            break
            case 'aminio': {
            if (args.length == 0) throw `Example: ${prefix + command} free fire`
            let res = await fetchJson(api('zenz', '/webzone/amino', { query: text }, 'apikey'))
            let capt = `Aminio Search From : ${text}\n\n`
            for (let i of res.result){
            capt += `❏ Community: ${i.community}\n`
            capt += `❏ Community Link: ${i.community_link}\n`
            capt += `❏ Thumbnail: ${i.community_thumb}\n`
            capt += `❏ Description: ${i.community_desc}\n`
            capt += `❏ Member Count: ${i.member_count}\n\n──────────────────────\n`
            }
            ronove.sendImage(mek.chat, 'https://'+res.result[0].community_thumb, capt, m)
            }
            break
            case 'wattpad': {
            if (args.length == 0) throw `Example : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/wattpad', { query: text }, 'apikey'))
            let { judul, dibaca, divote, bab, waktu, url, thumb, description } = res.result[0]
            let capt = `Wattpad From ${text}\n\n`
            capt += `❏ Judul: ${judul}\n`
            capt += `❏ Dibaca: ${dibaca}\n`
            capt += `❏ Divote: ${divote}\n`
            capt += `❏ Bab: ${bab}\n`
            capt += `❏ Waktu: ${waktu}\n`
            capt += `❏ Url: ${url}\n`
            capt += `❏ Deskripsi: ${description}`
            ronove.sendImage(mek.chat, thumb, capt, m)
            }
            break
            case 'webtoons': {
            if (args.length == 0) throw `Example : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/webtoons', { query: text }, 'apikey'))
            let capt = `Webtoons Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `❏ Judul: ${i.judul}\n`
            capt += `❏ Like: ${i.like}\n`
            capt += `❏ Creator: ${i.creator}\n`
            capt += `❏ Genre: ${i.genre}\n`
            capt += `❏ Url: ${i.url}\n\n──────────────────────\n`
            }
            reply(capt)
            }
            break
            case 'drakor': {
            if (args.length == 0) throw `Example : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/drakor', { query: text }, 'apikey'))
            let capt = `Drakor Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `❏ Judul: ${i.judul}\n`
            capt += `❏ Years: ${i.years}\n`
            capt += `❏ Genre: ${i.genre}\n`
            capt += `❏ Url: ${i.url}\n`
            capt += `❏ Thumbnail Url: ${i.thumbnail}\n\n──────────────────────\n`
            }
            ronove.sendImage(mek.chat, res.result[0].thumbnail, capt, m)
            }
            break
            case 'setmenu': {
            if (!isCreator) throw mess.owner
            let setbot = db.data.settings[botNumber]
               if (args[0] === 'templateImage'){
                setbot.templateImage = true
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                setbot.templateLocation = false
                reply(mess.success)
                } else if (args[0] === 'templateVideo'){
                setbot.templateImage = false
                setbot.templateVideo = true
                setbot.templateGif = false
                setbot.templateMsg = false
                setbot.templateLocation = false
                reply(mess.success)
                } else if (args[0] === 'templateGif'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = true
                setbot.templateMsg = false
                setbot.templateLocation = false
                reply(mess.success)
                } else if (args[0] === 'templateMessage'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = true
                setbot.templateLocation = false
                reply(mess.success)
                } else if (args[0] === 'templateLocation'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                setbot.templateLocation = true
                reply(mess.success)
                } else {
                let sections = [
                {
                title: "CHANGE MENU BOT",
                rows: [
                {title: "Template Image", rowId: `setmenu templateImage`, description: `Change menu bot to Template Image`},
                {title: "Template Video", rowId: `setmenu templateVideo`, description: `Change menu bot to Template Video`},
                {title: "Template Gif", rowId: `setmenu templateGif`, description: `Change menu bot to Template Gif`},
                {title: "Template Message", rowId: `setmenu templateMessage`, description: `Change menu bot to Template Message`},
                {title: "Template Location", rowId: `setmenu templateLocation`, description: `Change menu bot to Template Location`}
                ]
                },
                ]
                ronove.sendListMsg(mek.chat, `Please select the menu you want to change!`, ronove.user.name, `Hello Owner !`, `Click Here`, sections, m)
                }
            }
            break
case 'riio': {
	if (!quoted) return mek.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return mek.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return mek.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
hmm = "./src/waifux2-3"
localFile = await ronove.downloadAndSaveMediaMessage(quoted, hmm)
emm = fs.readFileSync('./src/waifux2-3.jpg')
const Waifu2X = require('@ibaraki-douji/waifu2x')
reply(mess.wait)
out = await './src/waifu2x-3'
const options = {
    noise: 0,
    scale: 2,
    gpu: -1,
    ramLimit: 500,
    outputAsBuffer: false
}

Waifu2X.upscale(localFile, emm, options)

ronove.sendMessage(mek.chat, {image: emm, caption: mess.success}, { quoted : mek })
	}
break

           case 'menu': case 'help':{
                anos = `┌──❥ *Group Menu*
│
│❏ ${prefix}linkgroup
│❏ ${prefix}ephemeral [option]
│❏ ${prefix}setppgc [image]
│❏ ${prefix}setname [text]
│❏ ${prefix}setdesc [text]
│❏ ${prefix}group [option]
│❏ ${prefix}editinfo [option]
│❏ ${prefix}add @user
│❏ ${prefix}kick @user
│❏ ${prefix}hidetag [text]
│❏ ${prefix}tagall [text]
│❏ ${prefix}totag [reply]
│❏ ${prefix}antilink [on/off]
│❏ ${prefix}mute [on/off]
│❏ ${prefix}promote @user
│❏ ${prefix}demote @user
│❏ ${prefix}vote [text]
│❏ ${prefix}devote
│❏ ${prefix}upvote
│❏ ${prefix}cekvote
│❏ ${prefix}hapusvote
│
└───────❥

┌──❥ *Webzone Menu*
│
│❏ ${prefix}playstore
│❏ ${prefix}gsmarena
│❏ ${prefix}jadwalbioskop
│❏ ${prefix}nowplayingbioskop
│❏ ${prefix}aminio
│❏ ${prefix}wattpad
│❏ ${prefix}webtoons
│❏ ${prefix}drakor
│
└───────❥


┌──❥ *Downloader Menu*
│
│❏ ${prefix}tiktoknowm [url]
│❏ ${prefix}tiktokwm [url]
│❏ ${prefix}tiktokmp3 [url]
│❏ ${prefix}instagram [url]
│❏ ${prefix}twitter [url]
│❏ ${prefix}twittermp3 [url]
│❏ ${prefix}facebook [url]
│❏ ${prefix}pinterestdl [url]
│❏ ${prefix}ytmp3 [url]
│❏ ${prefix}ytmp4 [url]
│❏ ${prefix}getmusic [query]
│❏ ${prefix}getvideo [query]
│❏ ${prefix}umma [url]
│❏ ${prefix}joox [query]
│❏ ${prefix}soundcloud [url]
│
└───────❥

┌──❥ *Search Menu*
│
│❏ ${prefix}play [query]
│❏ ${prefix}yts [query]
│❏ ${prefix}google [query]
│❏ ${prefix}gimage [query]
│❏ ${prefix}pinterest [query]
│❏ ${prefix}wallpaper [query]
│❏ ${prefix}wikimedia [query]
│❏ ${prefix}ytsearch [query]
│❏ ${prefix}ringtone [query]
│❏ ${prefix}stalk [option] [query]
│
└───────❥

┌──❥ *Random Menu*
│
│❏ ${prefix}coffe
│❏ ${prefix}quotesanime
│❏ ${prefix}motivasi
│❏ ${prefix}dilanquote
│❏ ${prefix}bucinquote
│❏ ${prefix}katasenja
│❏ ${prefix}puisi
│❏ ${prefix}couple
│❏ ${prefix}anime
│❏ ${prefix}waifu
│❏ ${prefix}husbu
│❏ ${prefix}neko
│❏ ${prefix}shinobu
│❏ ${prefix}waifus (nsfw)
│❏ ${prefix}nekos (nsfw)
│❏ ${prefix}trap (nsfw)
│❏ ${prefix}blowjob (nsfw)
│
└───────❥

┌──❥ *Text Pro Menu*
│
│❏ ${prefix}3dchristmas
│❏ ${prefix}3ddeepsea
│❏ ${prefix}americanflag
│❏ ${prefix}3dscifi
│❏ ${prefix}3drainbow
│❏ ${prefix}3dwaterpipe
│❏ ${prefix}halloweenskeleton
│❏ ${prefix}sketch
│❏ ${prefix}bluecircuit
│❏ ${prefix}space
│❏ ${prefix}metallic
│❏ ${prefix}fiction
│❏ ${prefix}greenhorror
│❏ ${prefix}transformer
│❏ ${prefix}berry
│❏ ${prefix}thunder
│❏ ${prefix}magma
│❏ ${prefix}3dcrackedstone
│❏ ${prefix}3dneonlight
│❏ ${prefix}impressiveglitch
│❏ ${prefix}naturalleaves
│❏ ${prefix}fireworksparkle
│❏ ${prefix}matrix
│❏ ${prefix}dropwater
│❏ ${prefix}harrypotter
│❏ ${prefix}foggywindow
│❏ ${prefix}neondevils
│❏ ${prefix}christmasholiday
│❏ ${prefix}3dgradient
│❏ ${prefix}blackpink
│❏ ${prefix}gluetext
│
└───────❥

┌──❥ *Photo Oxy Menu*
│
│❏ ${prefix}shadow
│❏ ${prefix}romantic
│❏ ${prefix}smoke
│❏ ${prefix}burnpapper
│❏ ${prefix}naruto
│❏ ${prefix}lovemsg
│❏ ${prefix}grassmsg
│❏ ${prefix}lovetext
│❏ ${prefix}coffecup
│❏ ${prefix}butterfly
│❏ ${prefix}harrypotter
│❏ ${prefix}retrolol
│
└───────❥

┌──❥ *Ephoto Menu*
│
│❏ ${prefix}ffcover
│❏ ${prefix}crossfire
│❏ ${prefix}galaxy
│❏ ${prefix}glass
│❏ ${prefix}neon
│❏ ${prefix}beach
│❏ ${prefix}blackpink
│❏ ${prefix}igcertificate
│❏ ${prefix}ytcertificate
│
└───────❥

┌──❥ *Fun Menu*
│
│❏ ${prefix}simih
│❏ ${prefix}halah
│❏ ${prefix}hilih
│❏ ${prefix}huluh
│❏ ${prefix}heleh
│❏ ${prefix}holoh
│❏ ${prefix}jadian
│❏ ${prefix}jodohku
│❏ ${prefix}delttt
│❏ ${prefix}tictactoe
│❏ ${prefix}family100
│❏ ${prefix}tebak [option]
│❏ ${prefix}math [mode]
│❏ ${prefix}suitpvp [@tag]
│
└───────❥

┌──❥ *Primbon Menu*
│
│❏ ${prefix}nomorhoki
│❏ ${prefix}artimimpi
│❏ ${prefix}artinama
│❏ ${prefix}ramaljodoh
│❏ ${prefix}ramaljodohbali
│❏ ${prefix}suamiistri
│❏ ${prefix}ramalcinta
│❏ ${prefix}cocoknama
│❏ ${prefix}pasangan
│❏ ${prefix}jadiannikah
│❏ ${prefix}sifatusaha
│❏ ${prefix}rezeki
│❏ ${prefix}pekerjaan
│❏ ${prefix}nasib
│❏ ${prefix}penyakit
│❏ ${prefix}tarot
│❏ ${prefix}fengshui
│❏ ${prefix}haribaik
│❏ ${prefix}harisangar
│❏ ${prefix}harisial
│❏ ${prefix}nagahari
│❏ ${prefix}arahrezeki
│❏ ${prefix}peruntungan
│❏ ${prefix}weton
│❏ ${prefix}karakter
│❏ ${prefix}keberuntungan
│❏ ${prefix}memancing
│❏ ${prefix}masasubur
│❏ ${prefix}zodiak
│❏ ${prefix}shio
│
└───────❥

┌──❥ *Convert Menu*
│
│❏ ${prefix}attp
│❏ ${prefix}ttp
│❏ ${prefix}toimage
│❏ ${prefix}removebg
│❏ ${prefix}sticker
│❏ ${prefix}stickerwm
│❏ ${prefix}emojimix
│❏ ${prefix}emojimix2
│❏ ${prefix}tovideo
│❏ ${prefix}togif
│❏ ${prefix}tourl
│❏ ${prefix}tovn
│❏ ${prefix}tomp3
│❏ ${prefix}toaudio
│❏ ${prefix}ebinary
│❏ ${prefix}dbinary
│❏ ${prefix}styletext
│❏ ${prefix}smeme
│
└───────❥

┌──❥ *Main Menu*
│
│❏ ${prefix}ping
│❏ ${prefix}owner
│❏ ${prefix}menu / ${prefix}help / ${prefix}?
│❏ ${prefix}delete
│❏ ${prefix}infochat
│❏ ${prefix}quoted
│❏ ${prefix}listpc
│❏ ${prefix}listgc
│❏ ${prefix}listonline
│❏ ${prefix}speedtest
│
└───────❥

┌──❥ *Database Menu*
│
│❏ ${prefix}setcmd
│❏ ${prefix}listcmd
│❏ ${prefix}delcmd
│❏ ${prefix}lockcmd
│❏ ${prefix}addmsg
│❏ ${prefix}listmsg
│❏ ${prefix}getmsg
│❏ ${prefix}delmsg
│
└───────❥

┌──❥ *Anonymous Menu*
│
│❏ ${prefix}anonymous
│❏ ${prefix}start
│❏ ${prefix}next
│❏ ${prefix}keluar
│
└───────❥

┌──❥ *Islamic Menu*
│
│❏ ${prefix}iqra
│❏ ${prefix}hadist
│❏ ${prefix}alquran
│❏ ${prefix}juzamma
│❏ ${prefix}tafsirsurah
│
└───────❥

┌──❥ *Voice Changer*
│
│❏ ${prefix}bass
│❏ ${prefix}blown
│❏ ${prefix}deep
│❏ ${prefix}earrape
│❏ ${prefix}fast
│❏ ${prefix}fat
│❏ ${prefix}nightcore
│❏ ${prefix}reverse
│❏ ${prefix}robot
│❏ ${prefix}slow
│❏ ${prefix}tupai
│
└───────❥

┌──❥ *Owner Menu*
│
│❏ ${prefix}react [emoji]
│❏ ${prefix}chat [option]
│❏ ${prefix}join [link]
│❏ ${prefix}leave
│❏ ${prefix}block @user
│❏ ${prefix}unblock @user
│❏ ${prefix}bcgroup [text]
│❏ ${prefix}bcall [text]
│❏ ${prefix}setppbot [image]
│❏ ${prefix}setexif
│❏ ${prefix}setmenu [option]
│
└───────❥`
anu = `╔════════════════
║╭──❲ *INFO DEVELOPER* ❳
║│${ron} *Nama* : Ronove
║│${ron} *Github* : cmd.to/IYFyw
║│${ron} *Yt* : *cmd.to/IkqGA*
║╰───────────────
╠══❲ *INFO PENGGUNA* ❳═══
║╭───────────────
║│${ron} Nama: ${pushname}
║│${ron} Sender: @${mek.sender.split`@`[0]}
║╰───────────────
╠════❲ *INFO BOT* ❳═════
║╭───────────────
║│${ron} Nama Bot : RO-BOT
║│${ron} Owner: @${otag.split('@')[0]}
║│${ron} Server : VPS
║│${ron} Ram : 10 GB
║│${ron} Versi Os : Android 10
║╰───────────────
╚════════════════`
menu = `
╭◯ *〔 INFO-USER 〕*
◉ Username : ${pushname}
◉ Sender: @${mek.sender.split`@`[0]}
◉ Prefix : [ ${prefix} ]
◉ Limit  :  ${getLimit(m.sender, limitCount, limit)}
◉ Money  : ${getBalance(mek.sender, balance)}
╰◯
╭◯ *〔 INFO DEVELOPER〕*
◉ Nama  :  Ronove
◉ Tag : @${otag.split('@')[0]}
◉ Github: cmd.to/IYFyw
◉ Youtube: cmd.to/IkqGA
╰◯`
 let btn = [{
                                urlButton: {
                                    displayText: 'Sc',
                                    url: 'https://youtu.be/dQw4w9WgXcQ'
                                }
                            }, {
                               
                  quickReplyButton: {
                                    displayText: 'List Menu📙',
                                    id: 'command'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner👥',
                                    id: 'owner'
                                }
                            }]
                
                         let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        ronove.send5ButImg(mek.chat, anu, ronove.user.name, global.thumb, btn, global.thumb)
                        } else if (setbot.templateGif) {
  
  ottag = "6282182623238@s.whatsapp.net"
        sstag = `${sender}`
	podd = "6282182623238@s.whatsapp.net"
                      
ronove.sendMessage(mek.chat, {document: fs.readFileSync('./index.js'), mimetype: moci, fileLength: 999999999999, pageCount: 999, fileName: fake, contextInfo: { mentionedJid: [m.sender], externalAdReply: {title: ' Bot ini masih beta,', body: `Jika ada yg eror chat owner`, sourceUrl: `https://youtu.be/dQw4w9WgXcQ`, mediaUrl: `https://youtu.be/dQw4w9WgXcQ`, renderLargerThumbnail: true, mediaType: 1, thumbnail: thumb}}, caption: menu, footer: ' ', mentions:[m.sender, podd, ottag, sstag, otag], buttons: [ {buttonId: `${prefix}command`, buttonText: {displayText: 'List Menu📙'}, type: 1},{buttonId: 'owner', buttonText: {displayText: 'Owner'}, type: 1} ], headerType: 4},{quoted: fkontak})
let audyio = fs.readFileSync('./lagubagus.mp3')

await sleep(1500)

ronove.sendMessage(mek.chat, {audio: audyio, mimetype: 'audio/mpeg',ptt:true}, { quoted : fkontak })
                        } else if (setbot.templateVid) {
                        ronove.send5ButVid(mek.chat, anu, ronove.user.name, global.visoka, btn, global.thumb)
                        } else if (setbot.templateMsg) {
                        
const ftextt = {
      key: {
        fromMe: false,
      participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}),
      },
      message: {
        productMessage: {
          product: {
            productImage: {
              mimetype: "image/jpeg",
              jpegThumbnail: iye
            },
            title: `Exec: ${command}`,
            description: "SELF BOT",
            currencyCode: "USD",
            priceAmount1000: "9999999",
            retailerId: 'ronove',
            productImageCount: 1,
          },
          businessOwnerJid: `0@s.whatsapp.net`,
        },
      },
    }
 ronove.sendMessage(mek.chat, 
			{document: fs.readFileSync('./index.js'), 
			jpegThumbnail: iye,
			mimetype: moci,
			fileLength: 999999999999,
			pageCount: 99999,
			fileName: `Runtime : ${runtime(process.uptime())}`, contextInfo: { mentionedJid: [sender, pod, otag],
			externalAdReply: {
			title: `RO-BOT`,
			sourceUrl: `https://youtu.be/dQw4w9WgXcQ`, 
			mediaUrl: `https://youtu.be/dQw4w9WgXcQ`, 
			mediaType: 2, showAdAttribution: true,
			thumbnail: iye}},
			                    caption: ' ',
			                    footer: menu,
			                    buttons: [ {buttonId: `${prefix}command`, buttonText: {displayText: 'List Menu📙'}, type: 1},{buttonId: '.owner', buttonText: {displayText: 'Owner'}, type: 1} ],
			                    headerType: 4}, 
			                   {quoted: ftextt})
let audio = fs.readFileSync('./lagubagus.mp3')
await sleep(1500)
ronove.sendMessage(mek.chat, {audio: audio, mimetype: 'audio/mpeg',ptt:true}, { quoted : fkontak })
} else if (setbot.templateLocation) {
                        ronove.send5ButLoc(mek.chat, anu, ronove.user.name, iye, btn)
                        }
                     }
            break
case 'command':

 let sections = [
                {
                title: "✧──────[ COMMAND ]──────✧",
                rows: [
                {title: "[🏢] Group", rowId: `${prefix}gcmenu`, description: `Atur grupmu dengan menjadikan bot sebagai admin`},
                {title: "[🌍] RpgMenu", rowId: `${prefix}rpgmenu`, description: `Menu untuk bermain rpg menggunakan bot`},
                {title: "[📟] WebZone", rowId: `${prefix}webmenu`, description: `Menu untuk mengambil data dari web`},
                {title: "[📲] Downloader", rowId: `${prefix}downloadmenu`, description: `Download sesuatu menggunakan bot`},
                {title: "[🔎] Search", rowId: `${prefix}searchmenu`, description: `Mencari data data dari web menggunakan bot`},
                {title: "[😈] Other", rowId: `${prefix}othermenu`, description: `Menu lain yang random`},
                {title: "[🎬] Maker", rowId: `${prefix}makermenu`, description: `Membuat dan mengedit menggunakan bot`},
                {title: "[🧩] Fun", rowId: `${prefix}funmenu`, description: `Menu" menyenangkan yang terdapat di bot`},
                {title: "[🔮] Primbon", rowId: `${prefix}primbonmenu`, description: `Meramal kamu dengan tanggal lahir, nama, mimpi, dll`},
                {title: "[🕹️] Convert", rowId: `${prefix}convertmenu`, description: `Membuat stiker dan mengconvert media menggunakan bot`},
                {title: "[⚙️] Main menu", rowId: `${prefix}mainmenu`, description: `Menu utama`},
                {title: "[📁] Database", rowId: `${prefix}dbmenu`, description: `Mengatur file di database`},
                {title: "[🎭] Anonymous", rowId: `${prefix}anonmenu`, description: `Anonymous chat menggunakan bot`},
                {title: "[🕋] Islami", rowId: `${prefix}islamimenu`, description: `Menu khusus muslim`},
                {title: "[🎙️] VoiceChanger", rowId: `${prefix}vcmenu`, description: `Mengubah suara menggunakan bot`},
                {title: "[🛠️] OwnerMenu", rowId: `${prefix}ownermenu`, description: `Menu mengatur bot (khusus owner)`}
                ]
                },
                ]
                ronove.sendListMsg(mek.chat, `Hai kak ${pushname}, Aku RO-BOT
Whatsapp bot that can help doing something`, ' ', ' ', `Click Here`, sections, ftoko)

break
case 'apakah':
              apakah = body.slice(1)
              const apa =['Iya','Tidak','Bisa Jadi','mungkin iya','Coba Ulangi','mungkin engga','yntkts']
              const kah = apa[Math.floor(Math.random() * apa.length)]
              reply(`Pertanyaan: ${apakah}\nJawaban: ${kah}`)
              break
case 'gaycek':
       case 'cekgay':
             geii = body.slice(1)
              const gay =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const teg = gay[Math.floor(Math.random() * gay.length)]
reply(`Pertanyaan: Seberapa geii luwh\nJawaban: ${teg}%`)
break
case 'jelekcek':
       case 'cekjelek':
              const gyy =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const tey = gyy[Math.floor(Math.random() * gyy.length)]
              reply(`Pertanyaan: Seberapa jelek luwh\nJawaban: ${tey}%`)
              
break
       case 'gantengcek':
       case 'cekganteng':
              ganteng = body.slice(1)
              const gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const teng = gan[Math.floor(Math.random() * gan.length)]
              reply(`Pertanyaan: Seberapa ganteng luwh\nJawaban: ${teng}%`)
              
break
       case 'cantikcek':
       case 'cekcantik':
              cantik = body.slice(1)
              const can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const tik = can[Math.floor(Math.random() * can.length)]
              reply(`Pertanyaan: Seberapa cantik luwh\nJawaban: ${tik}%`)
              
break
       case 'cekwatak':
              var namao = pushname
              
              const watak = ['top deh pokoknya','penyayang','pemurah','Pemarah','Pemaaf','Penurut','Baik','baperan','Baik-Hati','penyabar','UwU','Suka Membantu']
              const wtk = watak[Math.floor(Math.random() * (watak.length))]
              const ratenyaasu = ['100%','95%','90%','85%','80%','75%','70%','65%','60%','55%','50%','45%','40%','35%','30%','25%','20%','15%','10%','5%']
              const akhlak = ratenyaasu[Math.floor(Math.random() * (ratenyaasu.length))]
              const sifat = ['Penolong','Suka Membantu','Saling Menolong','Perhatian','Ngak Cuek','Romantis','Dermawan','Cool','Peduli Kepada Sesama','Suka Berkata Kasar']
              const sft = sifat[Math.floor(Math.random() * (sifat.length))]
              const hobby = ['Memasak','Membantu Atok','Mabar','Nobar','Coli','Colmek','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
              const hby = hobby[Math.floor(Math.random() * (hobby.length))]
              const kelebihan = ['Soleh dan Soleha','Pintar','Rajin','Teladan']
              const klbh = kelebihan[Math.floor(Math.random() * (kelebihan.length))]
              const tipecewe = ['cool','idaman','Alami','Keren','Ideal','Dia Bamget','normal','elite','epic','Legend']
              const typo = tipecewe[Math.floor(Math.random() * (tipecewe.length))]
              reply(`[ INTROGASI SUKSES ]\n\n[Nama]:${namao}\n\n[Watak]:${wtk}\n\n[Akhlak✨]:${akhlak}\n\n[Sifat]:${sft}\n\n[Hobby]:${hby}\n\n[Tipe]:${typo}\n\n[Kelebihan]:${klbh}\n\nNote\n\n_ini hanya main main_`)
              
break
case 'gcmenu':
gc = `┌──❥ *Group Menu*
│
│ℒ⃝🐋 ${prefix}linkgroup
│ℒ⃝🐋 ${prefix}ephemeral [option]
│ℒ⃝🐋 ${prefix}setppgc [image]
│ℒ⃝🐋 ${prefix}setname [text]
│ℒ⃝🐋 ${prefix}setdesc [text]
│ℒ⃝🐋 ${prefix}group [option]
│ℒ⃝🐋 ${prefix}editinfo [option]
│ℒ⃝🐋 ${prefix}add @user
│ℒ⃝🐋 ${prefix}kick @user
│ℒ⃝🐋 ${prefix}hidetag [text]
│ℒ⃝🐋 ${prefix}tagall [text]
│ℒ⃝🐋 ${prefix}totag [reply]
│ℒ⃝🐋 ${prefix}antilink [on/off]
│ℒ⃝🐋 ${prefix}mute [on/off]
│ℒ⃝🐋 ${prefix}promote @user
│ℒ⃝🐋 ${prefix}demote @user
│ℒ⃝🐋 ${prefix}vote [text]
│ℒ⃝🐋 ${prefix}devote
│ℒ⃝🐋 ${prefix}upvote
│ℒ⃝🐋 ${prefix}cekvote
│ℒ⃝🐋 ${prefix}hapusvote
│
└───────❥`
 ronove.sendMessage(from, { text: gc},{quoted :ftoko})
break
case 'webmenu':
case 'webzonemenu':
case 'webzone':
wzne = `┌──❥ *Webzone Menu*
│
│ℒ⃝🐋 ${prefix}playstore
│ℒ⃝🐋 ${prefix}gsmarena
│ℒ⃝🐋 ${prefix}jadwalbioskop
│ℒ⃝🐋 ${prefix}nowplayingbioskop
│ℒ⃝🐋 ${prefix}aminio
│ℒ⃝🐋 ${prefix}wattpad
│ℒ⃝🐋 ${prefix}webtoons
│ℒ⃝🐋 ${prefix}drakor
│
└───────❥`
 ronove.sendMessage(from, { text: wzne},{quoted :ftoko})
break
case 'downloadmenu':
dload = `┌──❥ *Downloader Menu*
│
│ℒ⃝🐋 ${prefix}tiktoknowm [url]
│ℒ⃝🐋 ${prefix}tiktokwm [url]
│ℒ⃝🐋 ${prefix}tiktokmp3 [url]
│ℒ⃝🐋 ${prefix}instagram [url]
│ℒ⃝🐋 ${prefix}twitter [url]
│ℒ⃝🐋 ${prefix}twittermp3 [url]
│ℒ⃝🐋 ${prefix}facebook [url]
│ℒ⃝🐋 ${prefix}pinterestdl [url]
│ℒ⃝🐋 ${prefix}ytmp3 [url]
│ℒ⃝🐋 ${prefix}ytmp4 [url]
│ℒ⃝🐋 ${prefix}getmusic [query]
│ℒ⃝🐋 ${prefix}getvideo [query]
│ℒ⃝🐋 ${prefix}umma [url]
│ℒ⃝🐋 ${prefix}joox [query]
│ℒ⃝🐋 ${prefix}soundcloud [url]
│
└───────❥`
 ronove.sendMessage(from, { text: dload},{quoted :ftoko})
break
case 'searchmenu':
sch = `┌──❥ *Search Menu*
│
│ℒ⃝🐋 ${prefix}play [query]
│ℒ⃝🐋 ${prefix}yts [query]
│ℒ⃝🐋 ${prefix}google [query]
│ℒ⃝🐋 ${prefix}gimage [query]
│ℒ⃝🐋 ${prefix}pinterest [query]
│ℒ⃝🐋 ${prefix}wallpaper [query]
│ℒ⃝🐋 ${prefix}wikimedia [query]
│ℒ⃝🐋 ${prefix}ytsearch [query]
│ℒ⃝🐋 ${prefix}ringtone [query]
│ℒ⃝🐋 ${prefix}stalk [option] [query]
│
└───────❥`
 ronove.sendMessage(from, { text: sch},{quoted :ftoko})
break
case 'othermenu':
oth = `┌──❥ *Other Menu*
│
│ℒ⃝🐋 ${prefix}coffe
│ℒ⃝🐋 ${prefix}quotesanime
│ℒ⃝🐋 ${prefix}motivasi
│ℒ⃝🐋 ${prefix}dilanquote
│ℒ⃝🐋 ${prefix}bucinquote
│ℒ⃝🐋 ${prefix}katasenja
│ℒ⃝🐋 ${prefix}puisi
│ℒ⃝🐋 ${prefix}couple
│ℒ⃝🐋 ${prefix}anime
│ℒ⃝🐋 ${prefix}waifu
│ℒ⃝🐋 ${prefix}husbu
│
└───────❥`
 ronove.sendMessage(from, { text: oth},{quoted :ftoko})
break
case 'makermenu':
mkr = `┌──❥ *Maker Menu*
│
│ℒ⃝🐋 ${prefix}3dchristmas
│ℒ⃝🐋 ${prefix}3ddeepsea
│ℒ⃝🐋 ${prefix}americanflag
│ℒ⃝🐋 ${prefix}3dscifi
│ℒ⃝🐋 ${prefix}3drainbow
│ℒ⃝🐋 ${prefix}3dwaterpipe
│ℒ⃝🐋 ${prefix}halloweenskeleton
│ℒ⃝🐋 ${prefix}sketch
│ℒ⃝🐋 ${prefix}bluecircuit
│ℒ⃝🐋 ${prefix}space
│ℒ⃝🐋 ${prefix}metallic
│ℒ⃝🐋 ${prefix}fiction
│ℒ⃝🐋 ${prefix}greenhorror
│ℒ⃝🐋 ${prefix}transformer
│ℒ⃝🐋 ${prefix}berry
│ℒ⃝🐋 ${prefix}thunder
│ℒ⃝🐋 ${prefix}magma
│ℒ⃝🐋 ${prefix}3dcrackedstone
│ℒ⃝🐋 ${prefix}3dneonlight
│ℒ⃝🐋 ${prefix}impressiveglitch
│ℒ⃝🐋 ${prefix}naturalleaves
│ℒ⃝🐋 ${prefix}fireworksparkle
│ℒ⃝🐋 ${prefix}matrix
│ℒ⃝🐋 ${prefix}dropwater
│ℒ⃝🐋 ${prefix}harrypotter
│ℒ⃝🐋 ${prefix}foggywindow
│ℒ⃝🐋 ${prefix}neondevils
│ℒ⃝🐋 ${prefix}christmasholiday
│ℒ⃝🐋 ${prefix}3dgradient
│ℒ⃝🐋 ${prefix}blackpink
│ℒ⃝🐋 ${prefix}gluetext
│ℒ⃝🐋 ${prefix}shadow
│ℒ⃝🐋 ${prefix}romantic
│ℒ⃝🐋 ${prefix}smoke
│ℒ⃝🐋 ${prefix}burnpapper
│ℒ⃝🐋 ${prefix}naruto
│ℒ⃝🐋 ${prefix}lovemsg
│ℒ⃝🐋 ${prefix}grassmsg
│ℒ⃝🐋 ${prefix}lovetext
│ℒ⃝🐋 ${prefix}coffecup
│ℒ⃝🐋 ${prefix}butterfly
│ℒ⃝🐋 ${prefix}harrypotter
│ℒ⃝🐋 ${prefix}retrolol
│ℒ⃝🐋 ${prefix}ffcover
│ℒ⃝🐋 ${prefix}crossfire
│ℒ⃝🐋 ${prefix}galaxy
│ℒ⃝🐋 ${prefix}glass
│ℒ⃝🐋 ${prefix}neon
│ℒ⃝🐋 ${prefix}beach
│ℒ⃝🐋 ${prefix}blackpink
│ℒ⃝🐋 ${prefix}igcertificate
│ℒ⃝🐋 ${prefix}ytcertificate
│
└───────❥`
 ronove.sendMessage(from, { text: mkr},{quoted :ftoko})
break
case 'funmenu':
fm = `┌──❥ *Fun Menu*
│
│ℒ⃝🐋 ${prefix}simih
│ℒ⃝🐋 ${prefix}halah
│ℒ⃝🐋 ${prefix}hilih
│ℒ⃝🐋 ${prefix}huluh
│ℒ⃝🐋 ${prefix}heleh
│ℒ⃝🐋 ${prefix}holoh
│ℒ⃝🐋 ${prefix}jadian
│ℒ⃝🐋 ${prefix}jodohku
│ℒ⃝🐋 ${prefix}delttt
│ℒ⃝🐋 ${prefix}tictactoe
│ℒ⃝🐋 ${prefix}family100
│ℒ⃝🐋 ${prefix}tebak [option]
│ℒ⃝🐋 ${prefix}math [mode]
│ℒ⃝🐋 ${prefix}suitpvp [@tag]
│
└───────❥`
 ronove.sendMessage(from, { text: fm},{quoted :ftoko})
break
case 'primbonmenu':
pmb = `┌──❥ *Primbon Menu*
│
│ℒ⃝🐋 ${prefix}nomorhoki
│ℒ⃝🐋 ${prefix}artimimpi
│ℒ⃝🐋 ${prefix}artinama
│ℒ⃝🐋 ${prefix}ramaljodoh
│ℒ⃝🐋 ${prefix}ramaljodohbali
│ℒ⃝🐋 ${prefix}suamiistri
│ℒ⃝🐋 ${prefix}ramalcinta
│ℒ⃝🐋 ${prefix}cocoknama
│ℒ⃝🐋 ${prefix}pasangan
│ℒ⃝🐋 ${prefix}jadiannikah
│ℒ⃝🐋 ${prefix}sifatusaha
│ℒ⃝🐋 ${prefix}rezeki
│ℒ⃝🐋 ${prefix}pekerjaan
│ℒ⃝🐋 ${prefix}nasib
│ℒ⃝🐋 ${prefix}penyakit
│ℒ⃝🐋 ${prefix}tarot
│ℒ⃝🐋 ${prefix}fengshui
│ℒ⃝🐋 ${prefix}haribaik
│ℒ⃝🐋 ${prefix}harisangar
│ℒ⃝🐋 ${prefix}harisial
│ℒ⃝🐋 ${prefix}nagahari
│ℒ⃝🐋 ${prefix}arahrezeki
│ℒ⃝🐋 ${prefix}peruntungan
│ℒ⃝🐋 ${prefix}weton
│ℒ⃝🐋 ${prefix}karakter
│ℒ⃝🐋 ${prefix}keberuntungan
│ℒ⃝🐋 ${prefix}memancing
│ℒ⃝🐋 ${prefix}masasubur
│ℒ⃝🐋 ${prefix}zodiak
│ℒ⃝🐋 ${prefix}shio
│
└───────❥`
 ronove.sendMessage(from, { text: pmb},{quoted :ftoko})
break
case 'convertmenu':
cnv = `┌──❥ *Convert Menu*
│
│ℒ⃝🐋 ${prefix}attp
│ℒ⃝🐋 ${prefix}ttp
│ℒ⃝🐋 ${prefix}toimage
│ℒ⃝🐋 ${prefix}removebg
│ℒ⃝🐋 ${prefix}sticker
│ℒ⃝🐋 ${prefix}stickerwm
│ℒ⃝🐋 ${prefix}emojimix
│ℒ⃝🐋 ${prefix}emojimix2
│ℒ⃝🐋 ${prefix}tovideo
│ℒ⃝🐋 ${prefix}togif
│ℒ⃝🐋 ${prefix}tourl
│ℒ⃝🐋 ${prefix}tovn
│ℒ⃝🐋 ${prefix}tomp3
│ℒ⃝🐋 ${prefix}toaudio
│ℒ⃝🐋 ${prefix}ebinary
│ℒ⃝🐋 ${prefix}dbinary
│ℒ⃝🐋 ${prefix}styletext
│ℒ⃝🐋 ${prefix}smeme
│
└───────❥`
 ronove.sendMessage(from, { text: cnv},{quoted :ftoko})
break
case 'convertmenu':
cnv = `┌──❥ *Convert Menu*
│
│ℒ⃝🐋 ${prefix}attp
│ℒ⃝🐋 ${prefix}ttp
│ℒ⃝🐋 ${prefix}toimage
│ℒ⃝🐋 ${prefix}removebg
│ℒ⃝🐋 ${prefix}sticker
│ℒ⃝🐋 ${prefix}stickerwm
│ℒ⃝🐋 ${prefix}emojimix
│ℒ⃝🐋 ${prefix}emojimix2
│ℒ⃝🐋 ${prefix}tovideo
│ℒ⃝🐋 ${prefix}togif
│ℒ⃝🐋 ${prefix}tourl
│ℒ⃝🐋 ${prefix}tovn
│ℒ⃝🐋 ${prefix}tomp3
│ℒ⃝🐋 ${prefix}toaudio
│ℒ⃝🐋 ${prefix}ebinary
│ℒ⃝🐋 ${prefix}dbinary
│ℒ⃝🐋 ${prefix}styletext
│ℒ⃝🐋 ${prefix}smeme
│
└───────❥`
 ronove.sendMessage(from, { text: cnv},{quoted :ftoko})
break
case 'mainmenu':
main = `┌──❥ *Main Menu*
│
│ℒ⃝🐋 ${prefix}ping
│ℒ⃝🐋 ${prefix}owner
│ℒ⃝🐋 ${prefix}menu / ${prefix}help / ${prefix}?
│ℒ⃝🐋 ${prefix}delete
│ℒ⃝🐋 ${prefix}infochat
│ℒ⃝🐋 ${prefix}quoted
│ℒ⃝🐋 ${prefix}listpc
│ℒ⃝🐋 ${prefix}listgc
│ℒ⃝🐋 ${prefix}listonline
│ℒ⃝🐋 ${prefix}speedtest
│
└───────❥`
 ronove.sendMessage(from, { text: main},{quoted :ftoko})
break
case 'dbmenu':
db = `┌──❥ *Database Menu*
│
│ℒ⃝🐋 ${prefix}setcmd
│ℒ⃝🐋 ${prefix}listcmd
│ℒ⃝🐋 ${prefix}delcmd
│ℒ⃝🐋 ${prefix}lockcmd
│ℒ⃝🐋 ${prefix}addmsg
│ℒ⃝🐋 ${prefix}listmsg
│ℒ⃝🐋 ${prefix}getmsg
│ℒ⃝🐋 ${prefix}delmsg
│
└───────❥`
 ronove.sendMessage(from, { text: db},{quoted :ftoko})
break

case 'anonmenu':
ano = `┌──❥ *Anonymous Menu*
│
│ℒ⃝🐋 ${prefix}anonymous
│ℒ⃝🐋 ${prefix}start
│ℒ⃝🐋 ${prefix}next
│ℒ⃝🐋 ${prefix}keluar
│
└───────❥`
 ronove.sendMessage(from, { text: ano},{quoted :ftoko})
break

case 'islamimenu':
isl = `┌──❥ *Islamic Menu*
│
│ℒ⃝🐋 ${prefix}iqra
│ℒ⃝🐋 ${prefix}hadist
│ℒ⃝🐋 ${prefix}alquran
│ℒ⃝🐋 ${prefix}juzamma
│ℒ⃝🐋 ${prefix}tafsirsurah
│
└───────❥`
 ronove.sendMessage(from, { text: isl},{quoted :ftoko})
break

case 'vcmenu':
vc = `┌──❥ *Voice Changer*
│
│ℒ⃝🐋 ${prefix}bass
│ℒ⃝🐋 ${prefix}blown
│ℒ⃝🐋 ${prefix}deep
│ℒ⃝🐋 ${prefix}earrape
│ℒ⃝🐋 ${prefix}fast
│ℒ⃝🐋 ${prefix}fat
│ℒ⃝🐋 ${prefix}nightcore
│ℒ⃝🐋 ${prefix}reverse
│ℒ⃝🐋 ${prefix}robot
│ℒ⃝🐋 ${prefix}slow
│ℒ⃝🐋 ${prefix}tupai
│
└───────❥`
 ronove.sendMessage(from, { text: vc},{quoted :ftoko})
break

case 'ownermenu':
own = `┌──❥ *Owner Menu*
│
│ℒ⃝🐋 ${prefix}react [emoji]
│ℒ⃝🐋 ${prefix}chat [option]
│ℒ⃝🐋 ${prefix}join [link]
│ℒ⃝🐋 ${prefix}leave
│ℒ⃝🐋 ${prefix}block @user
│ℒ⃝🐋 ${prefix}unblock @user
│ℒ⃝🐋 ${prefix}bcgroup [text]
│ℒ⃝🐋 ${prefix}bcall [text]
│ℒ⃝🐋 ${prefix}setppbot [image]
│ℒ⃝🐋 ${prefix}setexif
│ℒ⃝🐋 ${prefix}setmenu [option]
│
└───────❥`
 ronove.sendMessage(from, { text: own},{quoted :ftoko})
break

case 'rpgmenu':
erpejehh = `┌──❥ *Rpg Menu*
│
│ℒ⃝🐋 ${prefix}hunting
│ℒ⃝🐋 ${prefix}mining
│ℒ⃝🐋 ${prefix}fishing
│ℒ⃝🐋 ${prefix}adventure
│ℒ⃝🐋 ${prefix}myblood
│ℒ⃝🐋 ${prefix}inventory
│ℒ⃝🐋 ${prefix}buy </Option>
│ℒ⃝🐋 ${prefix}huntpet
│ℒ⃝🐋 ${prefix}mypet
│ℒ⃝🐋 ${prefix}leaderboard
│ℒ⃝🐋 ${prefix}heal
│
└───────❥`
 ronove.sendMessage(from, { text: erpejehh},{quoted :ftoko})
break



//RPG BY RIFZA 👍😁👍
  case 'fishing':{
  if (!isInventoriBuruan){ addInventoriBuruan(mek.sender) } 
  if (isUmpan < 1) return reply('Umpan kamu habis!, cobalah berburu dan ubah dagingnya menjadi umpan')
  reply("1 umpan terpakai")
  var ikannya = ikan[Math.floor(Math.random() * ikan.length)]
  var ditangkap = Math.ceil(Math.random() * 20)
  setTimeout( () => {
  let caption = `Hasil tangkapan : ${ikannya}\n> Jumlah tangkapan : ${ditangkap}`
  let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: 'Mancing lagi🎣'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: './rpg/image/mancing.jpg' },
      caption: caption,
      footer: 'RO-BOT BY RONOVE',
      buttons: buttons,
      headerType: 4
     }
     ronove.sendMessage(from, buttonMessage, { quoted: fkontak })
   
   }, 7000)  
  setTimeout( () => {
  reply(`@${mek.sender.split("@")[0]} Mulai memancing🎣`)     
  }, 1500)
  kurangUmpan(mek.sender, 1)
  addIkan(mek.sender, ditangkap)	     
  }   
  break  
  case 'myblood':{
  if (!isDarah){ addInventoriDarah(mek.sender, DarahAwal) }
  let dapat =  getDarah(mek.sender)
  reply(`Your blood: ${dapat}`)
  }
  break
case 'adventure':
reply('Coming soon bang owner males bikin')
break
  case 'huntpet':{
  if (isCekDarah < 1) return reply('Darah kamu habis')
   kurangDarah(mek.sender, 10)
   mab = ['Yeti','Medusa','Goblin','Slime','Wolf','Skeleton','Ghost','Zombie','witch','Piranha','Ghoul','Dragon','Dinosaur','Dracula','Demon']
				const monsta = mab[Math.floor(Math.random() * mab.length)]
				   var dragony = Math.ceil(Math.random() * 3)
				var foxy = Math.ceil(Math.random() * 10)
var squirely = Math.ceil(Math.random() * 20)
var kaory = Math.ceil(Math.random() * 50)
var caty = Math.ceil(Math.random() * 6)
var snaky = Math.ceil(Math.random() * 2)
  reply(`Waduh ${monsta} Membuat mu sekarat dan sisa ${getDarah(mek.sender)} darah!, Jika darahmu habis, Regen dengan menulis command ${prefix}heal\n\n[PET YANG DIDAPAT]\n\n🐉: ${dragony} Ekor\n🐿️: ${squirely} Ekor\n🦎: ${kaory} Ekor\n🦊: ${foxy} Ekor\n🐱: ${caty} Ekor\n🐍: ${snaky} Ekor`)
addNaga(mek.sender, dragony)  
addTupai(mek.sender, squirely)
addKaori(mek.sender, kaory)
addUlar(mek.sender, snaky)
addRubah(mek.sender, foxy)
addKucing(mek.sender, caty)
  }
  break
 case 'hunt': case 'hunting': {
 if (!isDarah){ addInventoriDarah(mek.sender, DarahAwal) }
 if (isCekDarah < 1) return reply('Your Blood Is Gone, Try To Heal Using Potions') 
 if (!isInventoriBuruan){ addInventoriBuruan(mek.sender) } 
  let luka = ["Pierced by a thorn while hunting","Slipped into the abyss while hunting","Scratched by a wild animal","Not careful","Entangled in roots","Fall while hunting"]
  let location = ["Jungle","Amazon forest","Tropical forest","Meadow","African forest","Mountains"]
   var ikanmu = Math.ceil(Math.random() * 10)
   var ayam = Math.ceil(Math.random() * 8)
   var kelinci = Math.ceil(Math.random() * 7)
   var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
   var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
   var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
   var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
   var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
   var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]    
   var lukanya = luka[Math.floor(Math.random() * luka.length)]
   var lokasinya = location[Math.floor(Math.random() * location.length)]
 if (lokasinya === 'Jungle') {
    var image = './rpg/image/rimba.jpg'
   } else
 if (lokasinya === 'Amazon forest') {
    var image =  './rpg/image/amazon.jpg'
   } else
 if (lokasinya === 'Tropical forest') {
    var image = './rpg/image/tropis.jpg'
   } else
 if (lokasinya === 'Meadow') {
    var image = './rpg/image/padang_rumput.jpg'
   } else
 if (lokasinya === 'African forest') {
    var image = './rpg/image/afrika.jpg'
   } else
 if (lokasinya === 'Mountains') {
   var image = './rpg/image/pegunungan.jpg'
   }
 setTimeout( () => {
  let text = `_[ HUNT RESULT ]_\n`
     text += `*🐟Fish* : ${ikanmu}\n`
     text += `*🐔Chicken* : ${ayam}\n`
     text += `*🐇Rabbit* : ${kelinci}\n`
     text += `*🐑Sheep* : ${domba}\n`
     text += `*🐄Cow* : ${sapi}\n`
     text += `*🐘Elephant* : ${gajah}\n\n`
     text += `_[ INFO ]_\n`
     text += `*Location* : ${lokasinya}\n`
     text += `*Wounded* : ${lukanya}, blood - 10\n`
     text += `*Remaining blood* : ${getDarah(mek.sender)}\n`
    let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: 'Hunt Again️🏹'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: image },
      caption: text,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
     ronove.sendMessage(from, buttonMessage, { quoted: ftoko })      
  }, 5000)  
 setTimeout( () => {
  reply(`@${mek.sender.split("@")[0]} Started Hunting In ${lokasinya}`)     
  }, 1000) 
 addIkan(mek.sender, ikanmu) 
   addAyam(mek.sender, ayam) 
   addKelinci(mek.sender, kelinci)
   addDomba(mek.sender, domba)
   addSapi(mek.sender, sapi)
  addGajah(mek.sender, gajah)
 kurangDarah(mek.sender, 10)
 }
 break
case 'mypet':
reply(`┌─❥ *[MyPets]*\n│\n│ℒ⃝🐍Snake: ${getUlar(mek.sender)}\n│ℒ⃝🦎Kaori: ${getKaori(mek.sender)}\n│ℒ⃝🦊Fox: ${getRubah(mek.sender)}\n│ℒ⃝🐉Dragon: ${getNaga(mek.sender)}\n│ℒ⃝🐱Cat: ${getKucing(mek.sender)}\n│ℒ⃝🐿️Chipmunk: ${getTupai(mek.sender)}\n└───────❥`)
break
case 'inventori': case 'inventory': case 'profile': case 'inv':{

  if (!isDarah){ addInventoriDarah(mek.sender, DarahAwal) }
  if (!isInventory){ addInventori(mek.sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(mek.sender) }
     
 
     stats = fs.readFileSync('./lib/stats.png')
     let text = `_[ 👩🏻‍💼INFO USER👨🏻‍💼 ]_\n\n`
     text += `*🖤Your Blood* : ${getDarah(mek.sender)}\n`
     text += `*◻️️Your Iron* : ${getBesi(mek.sender)}\n`
     text += `*🌟Your Gold* : ${getEmas(mek.sender)}\n`
     text += `*💎Your Emerald* : ${getEmerald(mek.sender)}\n`
     text += `*⏺️Your Limit* : ${getLimit(m.sender, limitCount, limit)}\n`
     text += `*💴Your Money* : ${getBalance(mek.sender, balance)}\n`
     text += `*🧪Your Potion* : ${getPotion(mek.sender)}\n\n`
     text += `_[ 🐺HUNT RESULT🐺 ]_\n`
     text += `*🐟Fish* : ${getIkan(mek.sender)}\n`
     text += `*🐔Chicken* : ${getAyam(mek.sender)}\n`
     text += `*🐇Rabbit* : ${getKelinci(mek.sender)}\n`
     text += `*🐑Sheep* : ${getDomba(mek.sender)}\n`
     text += `*🐄Cow* : ${getSapi(mek.sender)}\n`
     text += `*🐘Elephant* : ${getGajah(mek.sender)}\n\n`
 
 let btn = [{
                                urlButton: {
                                    displayText: 'Sc',
                                    url: 'https://youtu.be/dQw4w9WgXcQ'
                                }
                            }, {
                               
                                quickReplyButton: {
                                    displayText: 'Berburu🏹',
                                    id: 'hunt'
                                }
                            }]
 ronove.send5ButImg(mek.chat, text, ronove.user.name, stats, btn, stats)

  }
  break
        case 'userlimit': 
{      
   let txt = `◤ *ALL LIMIT USER* ◢\n\n`
     for (let i of _limit){
     txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Limit* : ${i.limit}\n`
     }
    reply(txt)       
  }
 break
 case 'leaderboard':
{      
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
 break
case 'mining': case 'mine':{

  if (!isInventory){ addInventori(mek.sender) }
  if (isCekDarah < 1) return reply(`You're Tired!, Try To Heal Using Potions`) 
  let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
  let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
  let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]
  var besinya = besi[Math.floor(Math.random() * besi.length)]  
  var emasnya = emas[Math.floor(Math.random() * emas.length)]  
  var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]  
  setTimeout( () => {
  let caption = `[ MINING RESULT ]\n*Iron* : ${besinya}\n*Gold* : ${emasnya}\n*Emerald* : ${emeraldnya}`
  let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: 'Mine Again⛏️'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: './rpg/image/tambang.jpg' },
      caption: caption,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
     ronove.sendMessage(from, buttonMessage, { quoted: mek })
   
   }, 7000)  
  setTimeout( () => {
  reply(`@${mek.sender.split("@")[0]} Started Mining🎣`)     
  }, 1500)
  kurangDarah(mek.sender, 10)
  addBesi(mek.sender, besinya)
  addEmas(m.sended, emasnya)
  addEmerald(mek.sender, emeraldnya)	     
  }   
  break  
  //transaction\\
 case 'beli': case 'buy':{

 if (!isInventoriBuruan){ addInventoriBuruan(mek.sender) } 
 if (!isInventory){ addInventori(mek.sender) }
 if (!q) return reply(`What Do You Want To Buy?\n\n1.potion\n2.baitfood\n3.limit\n\nExample: ${prefix + command} baitfood`)
 var anu = args[1]
  if (args[0] === 'potion'){
  let noh = 100000 * anu
 if (!args[1]) return reply(`Example : ${prefix + command} potion 2\n 1 Potion = 100000 Money`)
 if (isMonay < noh) return reply('Your Remaining Money Is Not Sufficient For This Purchase')
 kurangBalance(mek.sender, noh, balance)
 var apalu = anu * 1
 addPotion(mek.sender, apalu)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getBalance(mek.sender, balance)}\n*Your Potion* : ${getPotion(mek.sender)}`)
  }, 2000) 
 } else 
 if (args[0] === 'baitfood'){
  let noh = 5000 * anu
 if (!args[1]) return reply(`Example : ${prefix + command} baitfood 2\n 1 Bait Food = 2500 Money`)
 if (isMonay < noh) return reply('Your Remaining Money Is Not Sufficient For This Purchase')
 kurangBalance(mek.sender, noh, balance)
 var apalu = anu * 1
 addUmpan(mek.sender, apalu)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getBalance(mek.sender, balance)}\n*Your Bait Food* : ${getUmpan(mek.sender)}`)
  }, 2000) 
  } else 
  if (args[0] === 'limit'){
  let noh = 35000 * anu
 if (!args[1]) return reply(`Example : ${prefix + command} limit 2\n 1 Limit = 35000 Money`)
 if (isMonay < noh) return reply('Your Remaining Money Is Not Sufficient For This Purchase')
 kurangBalance(mek.sender, noh, balance)
 var apalu = anu * 1
giveLimit(mek.sender, apalu, limit)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getBalance(mek.sender, balance)}\n*Your Limit* : ${getLimit(m.sender, limitCount, limit)}`)
  }, 2000) 
  } else { reply("Incorrect Format!") }
 }
 break
 case 'sell': case 'jual':{
 if (!q) return  reply(`What Do You Want To Sell??\nExample : ${prefix + command} fish 2`)
 if (!isInventoriBuruan){ addInventoriBuruan(mek.sender) } 
 if (!isInventory){ addInventori(mek.sender) }
 var anu = args[1]
 if (args[0] === 'fish'){
 if (isIkan < anu) return reply(`You Don't Have Enough Fish(es) For This Transaction`)
 if (!args[1]) return reply(`Example : ${prefix + command} fish 2\n 1 Fish = 1500 Money`)
 kurangIkan(mek.sender, anu)
 let monaynya = 1500 * anu
 addBalance(mek.sender, monaynya, balance)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getBalance(mek.sender, balance)}\n*Your Remaining Fish(es)* : ${getIkan(mek.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'chicken'){
 if (isAyam < anu) return reply(`You Don't Have Enough Chicken(s) For This Transaction`)
 if (!args[1]) return reply(`Example : ${prefix + command} chicken 2\n 1 Chicken = 2500 Money`)
 kurangAyam(mek.sender, anu)
 let monaynya = 2500 * anu
 addBalance(mek.sender, monaynya, balance)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getBalance(mek.sender, balance)}\n*Your Remaining Chicken* : ${getAyam(mek.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'rabbit'){
 if (isKelinci < anu) return reply(`You Don't Have Enough Rabbit(s) For This Transaction`)
 if (!args[1]) return reply(`Example : ${prefix + command} rabbit 2\n 1 Rabbit = 3000 Money`)
 kurangKelinci(mek.sender, anu)
 let monaynya = 3000 * anu
 addBalance(mek.sender, monaynya, balance)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getBalance(mek.sender, balance)}\n*Your Remaining Rabbit(s)* : ${getKelinci(mek.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'sheep'){
 if (isDomba < anu) return reply(`You Don't Have Enough Sheep(s) For This Transaction`)
 if (!args[1]) return reply(`Example : ${prefix + command} domba 2\n 1 Sheep = 5000 money`)
 kurangDomba(mek.sender, anu)
 let monaynya = 5000 * anu
 addBalance(mek.sender, monaynya, balance)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getBalance(mek.sender, balance)}\n*Your Remaining Sheep(s)* : ${getDomba(mek.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'cow'){
 if (isSapi < anu) return reply(`You Don't Have Enough Cow(s) For This Transaction`)
 if (!args[1]) return reply(`Example : ${prefix + command} cow 2\n 1 Cow = 10000 Money`)
 kurangSapi(mek.sender, anu)
 let monaynya = 10000 * anu
 addBalance(mek.sender, monaynya, balance)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getBalance(mek.sender, balance)}\n*Your Remaining Cow(s)* : ${getSapi(mek.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'elephant'){
 if (isGajah < anu) return reply(`You Don't Have Enough Elephant(s) For This Transaction`)
 if (!args[1]) return reply(`Example : ${prefix + command} elephant 2\n 1 Elephant = 15000 Money`)
 kurangGajah(mek.sender, anu)
 let monaynya = 15000 * anu
 addBalance(mek.sender, monaynya, balance)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getBalance(mek.sender, balance)}\n*Your Remaining Elephant(s)* : ${getGajah(mek.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'iron'){
 if (isBesi < anu) return reply(`You Don't Have Enough Iron(s) For This Transaction`)
 if (!args[1]) return reply(`Example : ${prefix + command} iron 2\n 1 Iron = 15000 Money`)
 kurangBesi(mek.sender, anu)
 let monaynya = 16000 * anu
 addBalance(mek.sender, monaynya, balance)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getBalance(mek.sender, balance)}\n*Your Remaining Iron(s)* : ${getBesi(mek.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'gold'){
 if (isEmas < anu) return reply(`You Don't Have Enough Gold(s) For This Transaction`)
 if (!args[1]) return reply(`Example : ${prefix + command} gold 2\n 1 Gold = 50000 Money`)
 kurangEmas(mek.sender, anu)
 let monaynya = 50000 * anu
 addBalance(mek.sender, monaynya, balance)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Money* : ${getBalance(mek.sender, balance)}\n*Your Remaining Gold(s)* : ${getEmas(mek.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'emerald'){
 if (isEmerald < anu) return reply(`You Don't Have Enough Emerald(s) For This Transaction`)
 if (!args[1]) return reply(`Example : ${prefix + command} emerald 2\n 1 Emerald = 100000 Money`)
 kurangEmerald(mek.sender, anu)
 let monaynya = 100000 * anu
 addBalance(mek.sender, monaynya, balance)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getBalance(mek.sender, balance)}\n*You Don't Have Enough Emerald(s) For This Transaction* : ${getEmerald(mek.sender)}`)
  }, 2000) 
 } else { reply("Incorrect Format!") }

 }
 break

 case 'heal':{

 
 if (isCekDarah > 100) return reply('Your Blood Is Full')
 if (isPotion < 1) return reply(`You Don't Have A Potion, Try Buying It This Way #buypotion _amount_`) 
 addDarah(mek.sender, 60)
 kurangPotion(mek.sender, 1)
 reply('Success! Darah anda bertambah 60%')
 }
 break
            default:
            if (budy.startsWith('=<')) {
if (!isEreator ) return 
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}
                if (budy.startsWith('=>')) {
                    if (!isEreator) return reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isEreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }
                      if (budy.startsWith('hai')) {
                    reply('Halo')
                }
if (budy.startsWith('<')) {
if (!isEreator) return 
try {
return reply(JSON.stringify(eval(`${q}`),null,'\t'))
} catch (e) {
reply(e)
}
}
                if (budy.startsWith('$')) {
                    if (!isEreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
			
		if (mek.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(mek.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(mek.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(mek.text)) return
                        let other = [room.a, room.b].find(user => user !== mek.sender)
                        mek.copyNForward(other, true, mek.quoted && mek.quoted.fromMe ? {
                            contextInfo: {
                                ...mek.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (mek.chat.endsWith('broadcast')) return
		    if (mek.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    ronove.copyNForward(mek.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        mek.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
