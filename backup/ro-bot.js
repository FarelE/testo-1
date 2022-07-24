const {
  WAConnection: _WAConnection,
  MessageType,
  Presence,
  Mimetype,
  GroupSettingChange,
} = require("@adiwajshing/baileys");
const simple = require("./lib/simple.js");
const WAConnection = simple.WAConnection(_WAConnection);
const figlet = require('figlet')
const fs = require("fs");
const { version, bugs } = require('./package.json')
const { banner, start, success, getGroupAdmins } = require("./lib/functions");
const fetch = require("node-fetch");
const moment = require("moment-timezone");
blocked = [];
const { color } = require('./lib/color')
const time2 = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    if (time2 < "24:59:00") {
      var ucapanWaktu = "Selamat malam";
    }
    if (time2 < "19:00:00") {
      var ucapanWaktu = "Selamat senja🌞";
    }
    if (time2 < "18:00:00") {
      var ucapanWaktu = "Selamat sore🌄";
    }
    if (time2 < "15:00:00") {
      var ucapanWaktu = "Selamat siang☀️";
    }
    if (time2 < "11:00:00") {
      var ucapanWaktu = "Selamat pagi🌅";
    }
    if (time2 < "05:00:00") {
      var ucapanWaktu = "Selamat malam🌃";
    }
const runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};
fakenomor = '0@s.whatsapp.net'
const gcrevoke = ["6281804680327-1621430788@g.us"]
shp = '⬡'
owner = "6282182623238@s.whatsapp.net"
spc1 = '         '
spc2 = '\n                           '
spc3 = '                 '
spc4 = '             '
spcn = '\n'
require("./ronove.js");
nocache("./ronove.js", (module) => console.log(`${module} is now updated!`));
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const starts = async (client = new WAConnection()) => {
  client.logger.level = "warn";
  client.version = [2, 2143, 3];
  client.browserDescription = ["RO-BOT CONSOLE", "safari", "3.0"];
  console.log(banner.string);
  client.on("qr", () => {
    console.log(
      color("[", "white"),
      color("!", "blue"),
      color("]", "white"),
      color(" Scan bang"),
      client.sendMessage(`6282182623238@s.whatsapp.net`, `「 *NOTIFICATION!* 」\n\n _Bot Berhasil Terhubung!_`, MessageType.extendedText)
          
    );
  });

  fs.existsSync("./session.json") && client.loadAuthInfo("./session.json");
  client.on("connecting", () => {
    start("2", "Connecting...");
  });
  client.on("open", (json) => {
    start("2", " ")
console.log(color(figlet.textSync(`${spcn}Console`, {
font: 'Larry 3D',
horizontalLayout: 'default',
vertivalLayout: 'default',
width: 68,
whitespaceBreak: false
}), 'cyan'))
console.log(color(`             [ • CREATOR BOT ${namaowner} • ]` ,'cyan'))
console.log(color(`< ================================================== >`, 'cyan'))
console.log(color(`[•]`, 'aqua'), color(`Hai        : ${ucapanWaktu}`, 'white'))
console.log(color(`[•]`, 'aqua'), color(`Bot Version : 2.1.2`, 'white'))
console.log(color(`[•]`, 'aqua'), color(`Status      : Online!`, 'white'))
console.log(color(`[•]`, 'aqua'), color(`Owner       : ${namaowner}`, 'white'))
console.log(color(`< ================================================== >`, 'cyan'))

    console.log(color('⎇','red'), color('Sc ini gua recode vall\nNote: jangan lupa subscribe ItsMeVall', 'yellow'))
    console.log(color('⎇','red'), color('Source code version:', 'aqua'), color(version))
    console.log(color('⎇','red'), color('Bug? Error? Suggestion? Visit here:', 'aqua'), color('https://wa.me/6282182623238'))
    console.log(color('[RO-BOT]'), color('RO-BOT is now online!', 'aqua'))
    console.log(color('[CONSOLE]', 'cyan'), color('Welcome back, Owner! Hope you are doing well~', 'magenta'))
    console.log(color('⎇','green'), color(':/', 'white'))
  });
  await client.connect({ timeoutMs: 20 * 1000 });
  fs.writeFileSync(
    "./session.json",
    JSON.stringify(client.base64EncodedAuthInfo(), null, "\t")
  );
client.on('group-update', async (anu) => {
metdata = await client.groupMetadata(anu.jid)
if(anu.announce == 'false'){
teks = ` [ Group Opened ] \n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`
client.sendMessage(metdata.id, teks, MessageType.text)
console.log(`- [ Group Opened ] - In ${metdata.subject}`)
}
else if(anu.announce == 'true'){
teks = ` [ Group Closed ] \n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`
client.sendMessage(metdata.id, teks, MessageType.text)
console.log(` [ Group Closed ]  In ${metdata.subject}`)
}
else if(!anu.desc == ''){
tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
teks = ` [ Group Description Change ] \n\nDeskripsi Group telah diubah oleh Admin @${anu.descOwner.split('@')[0]}\n• Deskripsi Baru : ${anu.desc}`
client.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}})
console.log(`- [ Group Description Change ] - In ${metdata.subject}`)
  }
else if(anu.restrict == 'false'){
teks = ` [ Group Setting Change ] \n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`
client.sendMessage(metdata.id, teks, MessageType.text)
console.log(`- [ Group Setting Change ] - In ${metdata.subject}`)
  }
else if(anu.restrict == 'true'){
teks = `- [ Group Setting Change ] -\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`
client.sendMessage(metdata.id, teks, MessageType.text)
console.log(`- [ Group Setting Change ] - In ${metdata.subject}`)
}
})
  client.on("group-participants-update", async (anu) => {
    try {
      groupMet = await client.groupMetadata(anu.jid);
      groupMembers = groupMet.participants;
      groupAdmins = getGroupAdmins(groupMembers);
      mem = anu.participants[0];

      console.log(anu);
      try {
        pp_user = await client.getProfilePicture(mem);
      } catch (e) {
        pp_user =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
      try {
        pp_grup = await client.getProfilePicture(anu.jid);
      } catch (e) {
        pp_grup =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
      if (anu.action == "add" && mem.includes(client.user.jid)) {
        client.sendMessage(anu.jid, `Halo Semua Aku ${namabot} ketik #menu!`, "conversation");
      }
      if (anu.action == "add" && !mem.includes(client.user.jid)) {
        mdata = await client.groupMetadata(anu.jid);
        tag = "6282182623238@s.whatsapp.net";
        memeg = mdata.participants.length;
        num = anu.participants[0];
        let v = client.contacts[num] || { notify: num.replace(/@.+/, "") };
        anu_user = v.vname || v.notify || num.split("@")[0];
        time_wel = moment.tz("Asia/Jakarta").format("HH:mm");
        teks = `*⌜ ᴡᴇʟᴄᴏᴍᴇ @${num.split('@')[0]}👋🏻 ɪɴ ɢʀᴜᴘ ${mdata.subject} ⌝*
*╭⊷️ ɴᴀᴍᴀ :*
*├ ᴜᴍᴜʀ :*
*├ ᴀsᴋᴏᴛ :*
*├ ɢᴇɴᴅᴇʀ :*
*└━━━━━━•*
• *◪  ᴛᴇᴛᴀᴘ ɪɴɢᴀᴛ 3 ᴍ~*
*├ ᴍᴇᴍᴀᴋᴀɪ ᴍᴀsᴋᴇʀ*
*├ ᴍᴇɴᴄᴜᴄɪ ᴛᴀɴɢᴀɴ*
*└ ᴍᴇɴᴊᴀɢᴀ ᴊᴀʀᴀᴋ* •`;
        buff = await getBuffer(
          `http://hadi-api.herokuapp.com/api/card/welcome?nama=${anu_user}&descriminator=${
            groupMembers.length
          }&memcount=${memeg}&gcname=${encodeURI(
            mdata.subject
          )}&pp=${pp_user}&bg=https://bit.ly/3E1F4AA`
        );
        client.sendMessage(anu.jid, { contentText: `${teks}`, footerText: `៹࣪ Runtime Bot : ${runtime(process.uptime())} \n៹࣪ Semoga Betah Ya~`, buttons: [{ buttonId: `Welcome👋🏻`, buttonText: { displayText: 'Welcome👋🏻' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff, contextInfo: {mentionedJid: [num]}}}, 'buttonsMessage')}
      if (anu.action == "remove" && !mem.includes(client.user.jid)) {
        mdata = await client.groupMetadata(anu.jid);
        tag = "6282182623238@s.whatsapp.net";
        num = anu.participants[0];
        let w = client.contacts[num] || { notify: num.replace(/@.+/, "") };
        anu_user = w.vname || w.notify || num.split("@")[0];
        time_wel = moment.tz("Asia/Jakarta").format("HH:mm");
        memeg = mdata.participants.length;
        out = `Asek ada yang keluar, bismillah nasikotak`;
        buff = await getBuffer(
          `http://hadi-api.herokuapp.com/api/card/goodbye?nama=${anu_user}&descriminator=${
            groupMembers.length
          }&memcount=${memeg}&gcname=${encodeURI(
            mdata.subject
          )}&pp=${pp_user}&bg=https://bit.ly/3E1F4AA`
        );
        client.sendMessage(anu.jid, { contentText: `${out}`, footerText: `៹࣪ YOSHI DAPET NASIKOTAK~`, buttons: [{ buttonId: `dada beban`, buttonText: { displayText: 'Dada kak 😈' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff, contextInfo: {mentionedJid: [num]}}}, 'buttonsMessage')
      }
      
      if (anu.action == "promote") {
const mdata = await client.groupMetadata(anu.jid)
num = anu.participants[0]
console.log(anu)
teks = `─ 「 *PROMOTE DETECT* 」 ─

⬡ *USER :* @${num.split('@')[0]}
⬡ *NOMOR :* ${num.replace('@s.whatsapp.net', '')}
⬡ *GRUP :* ${mdata.subject}`
client.sendMessage(mdata.id, teks, MessageType.text, {thumbnail: pp_user,contextInfo: {"mentionedJid": [num]}});
      }

      if (anu.action == "demote") {
num = anu.participants[0]
const mdata = await client.groupMetadata(anu.jid)
console.log(anu)
teks = `─ 「 *DEMOTE DETECT* 」 ─

⬡ *USER :* @${num.split('@')[0]}
⬡ *NOMOR :* ${num.replace('@s.whatsapp.net', '')}
⬡ *GRUP :* ${mdata.subject}`
client.sendMessage(mdata.id, teks, MessageType.text, {thumbnail: pp_user,contextInfo: {"mentionedJid": [num]}});
      }
    } catch (e) {
      console.log("Error : %s", color(e, "red"));
    }
  });
  //
 antidel = true
  client.on("message-delete", async (m) => {
    if (m.key.remoteJid == "status@broadcast") return;
    if (!m.key.fromMe && m.key.fromMe) return;
   if (antidel === false) return
    m.message =
      Object.keys(m.message)[0] === "ephemeralMessage"
        ? m.message.ephemeralMessage.message
        : m.message;
    const jam = moment.tz("Asia/Jakarta").format("HH:mm:ss");
    let d = new Date();
    let locale = "id";
    let gmt = new Date(0).getTime() - new Date("1 Januari 2021").getTime();
    let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
      Math.floor((d * 1 + gmt) / 84600000) % 5
     ];
    let week = d.toLocaleDateString(locale, { weekday: "long" });
    let calender = d.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
     const type = Object.keys(m.message)[0];
     client.sendMessage(
      m.key.remoteJid,
      `\`\`\`「 Anti Delete 」\`\`\`
  ✙ Nama : @${m.participant.split("@")[0]}
  ✙ Waktu : ${jam} ${week} ${calender}
  ✙ Type : ${type}`,
      MessageType.text,
      { quoted: m.message, contextInfo: { mentionedJid: [m.participant] } }
    );

    client.copyNForward(m.key.remoteJid, m.message);
  });
  client.on("chat-update", async (message) => {
    require("./ronove.js")(client, message);
  });
  isBattre = "Not Detect"; //
  isCharge = "Not Detect"; //
  client.on(`CB:action,,battery`, (json) => {
    const batteryLevelStr = json[2][0][1].value;
    const batterylevel = parseInt(batteryLevelStr);
    isBattre = batterylevel + "%";
    isCharge = json[2][0][1].live;
  });
antical = true
client.on("CB:Call", json => {
if (antical === false) return
let call;
calling = JSON.parse(JSON.stringify(json))
call = calling[1].from
client.sendMessage(call, `*Sorry ${client.user.name} can't receive calls.*\n*Call = Block!*`, MessageType.text)
.then(() => client.blockUser(call, "add"))
})
  client.on("CB:Blocklist", (json) => {
    if (blocked.length > 2) return;
    for (let i of json[1].blocklist) {
      blocked.push(i.replace("c.us", "s.whatsapp.net"));
    }
  });
};

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional>
 */
function nocache(module, cb = () => {}) {
  console.log("Module", `'${module}'`, "is now being watched for changes");
  fs.watchFile(require.resolve(module), async () => {
    await uncache(require.resolve(module));
    cb(module);
  });
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = ".") {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(module)];
      resolve();
    } catch (e) {
      reject(e);
    }
  });
}

starts();
