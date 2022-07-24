const moment = require("moment-timezone");
const fs = require('fs')
const chalk = require('chalk')

const runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " Day " : " Days, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " Hours " : " Hours, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " Minute " : " Minute ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " Second " : " Second ") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};

const jam = moment().tz("Asia/Jakarta").format("HH:mm:ss");

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'Good Night'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Good Night'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Good Evening'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Good Afternoon'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = 'Good Morning'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'Good Morning'
}

countDownDate = new Date("2022-08-09").getTime();
var now = new Date().getTime();
var distance = countDownDate - now;
var dayss = Math.floor(distance / (1000 * 60 * 60 * 24));
var hourss = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutess = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var secondss = Math.floor((distance % (1000 * 60)) / 1000);
lebaran = `${dayss} Days ${hourss} Hours ${minutess} Minute ${secondss} Second`

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const ahh = '•'
function toCommas(x) {
	x = x.toString()
	var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
	   x = x.replace(pattern, "$1,$2");
	return x;
}

exports.allmenu = (sender, prefix, pushname, _registered, moys, jam, date) => {
	return `
 ${ucapanWaktu} ${pushname}
	
 _"Kirim Link Postingan Sosial Media_\n _Tanpa Menggunakan Command_\n _Downloader-!"_

 *Illulu Stats*
${moys}

  Join Group? 7k (cht owner)
   *01. Owner Tools*
  ${ahh} ${prefix}akseseval
  ${ahh} ${prefix}delakses
  ${ahh} ${prefix}autodownload ${readmore}
  ${ahh} ${prefix}antidelete
  ${ahh} ${prefix}getcase
  ${ahh} ${prefix}detectreact
  ${ahh} ${prefix}autoreact
  ${ahh} ${prefix}join/leave
  ${ahh} ${prefix}antispam
  ${ahh} ${prefix}addprem/delprem
  ${ahh} ${prefix}listprem
  ${ahh} ${prefix}public/self
  ${ahh} ${prefix}bcgroup
  ${ahh} ${prefix}setmenu
  ${ahh} ${prefix}ban add/del
  ${ahh} ${prefix}setppbot
  ${ahh} ${prefix}cowner
  Usage : #setmenu document

  *02. Group Feature*
  ${ahh} ${prefix}groupsetting
  ${ahh} ${prefix}linkgc
  ${ahh} ${prefix}hidetag
  ${ahh} ${prefix}add/kick
  ${ahh} ${prefix}afk
  ${ahh} ${prefix}tagall
  ${ahh} ${prefix}promote/demote
  Usage : #antilink on
  
  *03. Downloader*
  ${ahh} ${prefix}play <query>
  ${ahh} ${prefix}igstory <username>
  ${ahh} ${prefix}igdl <url>
  ${ahh} ${prefix}tiktok <url>
  ${ahh} ${prefix}ytmp3/ytmp4 <url>
  ${ahh} ${prefix}mediafire <url>
  ${ahh} ${prefix}gitclone <url>
  ${ahh} ${prefix}fbdl <url>
  ${ahh} ${prefix}twitter <url>
  Usage : #tiktok linknya
  
  *04. Convert*
  ${ahh} ${prefix}sticker
  ${ahh} ${prefix}attp
  ${ahh} ${prefix}take
  ${ahh} ${prefix}swm
  ${ahh} ${prefix}smeme
  ${ahh} ${prefix}emojimix
  ${ahh} ${prefix}emojimix2
  ${ahh} ${prefix}toimage
  ${ahh} ${prefix}tovideo
  ${ahh} ${prefix}tourl
  Usage : #s <reply image/video
  
  *05. Other*
  ${ahh} ${prefix}nowa
  ${ahh} ${prefix}styletext
  ${ahh} ${prefix}ssweb
  ${ahh} ${prefix}cerpen
  ${ahh} ${prefix}tts kodenegara|teks
  ${ahh} ${prefix}simi
  ${ahh} ${prefix}detiknews
  ${ahh} ${prefix}ceklokasi
  ${ahh} ${prefix}kbbi
  Usage : #tts en|warning, vynns no counter
  
  *06. Searching*
  ${ahh} ${prefix}whatmusic
  ${ahh} ${prefix}igstalk
  ${ahh} ${prefix}brainly
  ${ahh} ${prefix}ghstalk
  ${ahh} ${prefix}nickfreefire <id>
  ${ahh} ${prefix}nickmobilelegends <id>
  ${ahh} ${prefix}googlesearch
  ${ahh} ${prefix}ytsearch
  ${ahh} ${prefix}searchbyimage
  ${ahh} ${prefix}pinterest <query>
  ${ahh} ${prefix}gimage
  ${ahh} ${prefix}lirik
  ${ahh} ${prefix}gcsearch
  Usage : #pinterest jinmiran --10
  
  *07. Games* 
  ${ahh} ${prefix}asahotak
  ${ahh} ${prefix}susunkata
  ${ahh} ${prefix}tebaklagu
  ${ahh} ${prefix}tebakgambar
  ${ahh} ${prefix}tebakkata
  ${ahh} ${prefix}tebaklirik
  ${ahh} ${prefix}tebakkalimat
  ${ahh} ${prefix}caklontong
  ${ahh} ${prefix}family100
  ${ahh} ${prefix}math
  ${ahh} ${prefix}kuis
  ${ahh} ${prefix}truth
  ${ahh} ${prefix}dare
  ${ahh} ${prefix}akinator
  ${ahh} ${prefix}cancelakinator
  Usage : #tebaklagu
  
  *08. Social* 
  ${ahh} ${prefix}cariteman
  Usage : #cariteman
  
  *09. Bank* 
  ${ahh} ${prefix}limit
  ${ahh} ${prefix}balance
  ${ahh} ${prefix}glimit
  ${ahh} ${prefix}buylimit
  ${ahh} ${prefix}buyglimit
  ${ahh} ${prefix}topbalance
  Usage : #buylimit 1
  
  *10. Main* 
  ${ahh} ${prefix}cekdrive
  ${ahh} ${prefix}aboutbot
  ${ahh} ${prefix}request
  ${ahh} ${prefix}report
  ${ahh} ${prefix}delete
  Usage : #delete <reply chat>
  
  *11. Anonymous* 
  ${ahh} ${prefix}anonymous
  ${ahh} ${prefix}start
  ${ahh} ${prefix}next
  ${ahh} ${prefix}leave
  Usage : #start
  
  *12. Primbon*
  ${ahh} ${prefix}artinama
  Usage : #artinama vynn

  *13. Islam Feature*
  ${ahh} ${prefix}kisahnabi
  Usage : #kisahnabi adam
  
  *14. Fun*
  ${ahh} ${prefix}fitnah @tag|p|p
  ${ahh} ${prefix}ganteng
  ${ahh} ${prefix}cantik
  ${ahh} ${prefix}gantengcek
  ${ahh} ${prefix}cantikcek
  ${ahh} ${prefix}sangecek
  ${ahh} ${prefix}apakah <query>
  ${ahh} ${prefix}kapankah <query>
  ${ahh} ${prefix}bisakah <query>
  Usage : #gantengcek vynn*
  
  *15. Telegram Stick*
  ${ahh} ${prefix}telestick
  ${ahh} ${prefix}sticksearch
  ${ahh} ${prefix}telesticksearch
  Usage : #sticksearch patrick
  
  *16. Store & Payment*
  ${ahh} ${prefix}addlist
  ${ahh} ${prefix}dellist
  ${ahh} ${prefix}updatelist
  ${ahh} ${prefix}list
  ${ahh} ${prefix}topup
  ${ahh} ${prefix}topupewallet
  Usage : #addlist dmff@listdm
  
  *17. Weabo*
  ${ahh} ${prefix}anime
  ${ahh} ${prefix}waifu
  Usage : #anime Tokyo Revengers
  
*Thanks To :*
Adiwajshing, Dika Ardnt, Mybe Vynns, Zack Mans, Hardianto,
Irfan Hariyanto, Fadly ID, Xfarr, Amel, Rzky Fdllah And All Creator.

${jam}
${date}`
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})