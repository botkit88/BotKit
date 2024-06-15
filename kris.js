/*Pembuat Script
- KrisBotz
==========
Credit Jangan Di Hapus Hargai Pembuat
==========

Ubah Daftar Harga Sesuai Ke Untungan Anda*/

require('./Pengaturan/Admin/settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, downloadContentFromMessage, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const axios = require('axios')
const FileType = require('file-type')
const fetch = require('node-fetch')
const crypto = require('crypto')
const fs = require('fs')
const { sizeFormatter} = require("human-readable")
const format = sizeFormatter()
const os = require('os');
const { exec } = require("child_process");
const speed = require('performance-now');
const util = require('util')
const chalk = require('chalk')
const short = require('short-uuid');
const moment = require('moment-timezone');
const md5 = require('md5');
const { clockString, tanggal, getTime, isUrl, sleep, runtime, fetchJson, getBuffer, jsonformat, reSize, generateProfilePicture } = require('./Pengaturan/function/myfunc')
const { getProduk } = require('./Pengaturan/function/getpro')
const { color, bgcolor } = require('./Pengaturan/function/color')
const { merchant, secret, signature, digiuser, digiapi, OpenAikey, nomorKu } = require("./Pengaturan/function/apikey")
const { stalkml } = require("./Pengaturan/function/stalk-ml")
const { stalkff } = require("./Pengaturan/function/stalk-ff")
const { stalkmlbb } = require("./Pengaturan/function/stalkmlbb")

global.tanggalserver = `${moment.tz('Asia/Jakarta').format('DD/MM/YY')}`;
global.waktuserver = `${moment.tz('Asia/Jakarta').format('HH:mm:ss')}`; 

let http = require('http')
            http.get({'host': 'api.ipify.org', 'port': 80, 'path': '/'}, function(resp) {
            resp.on('data', function(ip) {
                (global.ipserver = ip);
            })
          })


global.keytri = ' '//apikey
    global.privateKey = ' ' //private key
 global.merchantcode = ' '

global.db = JSON.parse(fs.readFileSync('./Pengaturan/database/database.json'))
if (global.db) global.db = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
...(global.db || {})
}

//━━━━━━━━━━━━━━━[ PREFIX ]━━━━━━━━━━━━━━━━━//

module.exports = kris = async (kris, m, chatUpdate, store) => {
try {
        const gakbisaowner = `${owner}@s.whatsapp.net`
        const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        const budy = (typeof m.text == 'string' ? m.text : '')
        const prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '#'
        const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
        const command = body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase();
        const args = body.trim().split(/ +/).slice(1);
        const { type, quotedMsg, mentioned, now, fromMe } = m
        const isCmd = body.startsWith(prefix)
        const from = m.key.remoteJid
        
        const pushname = m.pushName || "No Name"
        const botNumber = await kris.decodeJid(kris.user.id)
         
         const groupMetadata = m.isGroup ? await kris.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
         const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const groupMembers = m.isGroup ? groupMetadata.participants : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
         
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
        const tanggal = moment().tz("Asia/Jakarta").format("ll")
		const dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
		const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
		
		   const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
		const isVideo = (type == 'videoMessage')
		const isAudio = (type == 'audioMessage')
		const isSticker = (type == 'stickerMessage')
		
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')    
            
        const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        const isOwner = [`${owner}@s.whatsapp.net`] == sender ? true : ["6285786211623@s.whatsapp.net"].includes(sender) ? true : false
        const senderNumber = sender.split('@')[0]   
        const arg = budy.trim().substring(budy.indexOf(" ") + 1);
        const arg1 = arg.trim().substring(arg.indexOf(" ") + 1);	       
try {

ppnyaimg = await kris.sendMessage(m.sender, 'image')
} catch (err) {
ppnyaimg = 'https://telegra.ph/file/558480616af8c2f9efa9f.jpg'
}
ppnyaimg = await reSize(ppnyaimg, 300, 300)

if (!kris.public) {
if (!m.key.fromMe) return
}
const reply = (teks) => {kris.sendMessage(from, { text: teks }, { quoted: m })}
    
var mdu = ['red','green','yellow','blue','magenta','cyan','white']
var halalu = mdu[Math.floor(Math.random() * mdu.length)]
var mdo = ['red','green','yellow','blue','magenta','cyan','white']
var halalo = mdo[Math.floor(Math.random() * mdo.length)]
var mdi = ['red','green','yellow','blue','magenta','cyan','white']
var halali = mdi[Math.floor(Math.random() * mdi.length)]
var mda = ['red','green','yellow','blue','magenta','cyan','white']
var halala = mda[Math.floor(Math.random() * mda.length)]
var mde = ['red','green','yellow','blue','magenta','cyan','white']
var halale = mde[Math.floor(Math.random() * mde.length)]

if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(' 𝙺𝚛𝚒𝚜𝙱𝚘𝚝𝚣 '), color(`[ PESAN MASUK ]`, `${halalu}`), color(`FROM`, `${halalo}`), color(`${pushname}`, `${halali}`), color(`Text :`, `${halala}`), color(`${body}`, `${halale}`))
}
    
    
async function sendkrisMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await kris.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}

let rn = ['recording','composing']
let jd = rn[Math.floor(Math.random() * rn.length)];

if (command) {
kris.sendPresenceUpdate(jd, from)
kris.readMessages([m.key])
}
function formatmoney(n, opt = {}) {
  if (!opt.current) opt.current = "IDR"
  return n.toLocaleString("id", { style: "currency", currency: opt.current })
}

function acakindong(min, max = null) {
  if (max !== null) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
  return Math.floor(Math.random() * min) + 1
  }
}


const sendContact = (jid, numbers, name, quoted, mn) => {
let number = numbers.replace(/[^0-9]/g, '')
const vcard = 'BEGIN:VCARD\n' 
+ 'VERSION:3.0\n' 
+ 'FN:' + name + '\n'
+ 'ORG:;\n'
+ 'TEL;type=CELL;type=VOICE;waid=' + number + ':+' + number + '\n'
+ 'END:VCARD'
return kris.sendMessage(from, { contacts: { displayName: name, contacts: [{ vcard }] }, mentions : mn ? mn : []},{ quoted: quoted })
}

function generateRandomString(length) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  const randomBytes = crypto.randomBytes(length);

  for (let i = 0; i < length; i++) {
    const byte = randomBytes[i] % chars.length;
    result += chars.charAt(byte);
  }

  return result.toLowerCase();
}

    const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? kris.sendMessage(from, {text: teks.trim(), jpegThumbnail: global.krismenu}, text, { sendEphemeral: true, contextInfo: { mentions: memberr } }) : kris.sendMessage(from, {text: teks.trim(), jpegThumbnail: global.krismenu}, text, { sendEphemeral: true, quoted: m, contextInfo: { mentions: memberr } })
}
    
const randomString = generateRandomString(5);


function boolToString(value) {
  return value ? 'iyah' : 'tidak';
}



const formatp = sizeFormatter({
  std: 'JEDEC', //'SI' = default | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})

const isUrl = (url) => {
  return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}

const jsonformat = (string) => {
  return JSON.stringify(string, null, 2)
}

// Berfungsi Untuk Hit Api & Mengirim Data Headers
const fetchJson = async (url, options) => {
  try {
      options ? options : {}
      const res = await axios({
          method: 'GET',
          url: url,
          headers: {
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
          },
          ...options
      })
      return res.data
  } catch (err) {
      return err
  }
}


const repPy = {
	key: {
		remoteJid: '0@s.whatsapp.net',
		fromMe: false,
		id: 'kris Bot',
		participant: '0@s.whatsapp.net'
	},
	message: {
		requestPaymentMessage: {
			currencyCodeIso4217: "USD",
			amount1000: 999999999,
			requestFrom: '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: 'Creator kris'
				}
			},
			expiryTimestamp: 999999999,
			amount: {
				value: 91929291929,
				offset: 1000,
				currencyCode: "USD"
			}
		}
	}
}
      
let r = JSON.parse(fs.readFileSync('./Pengaturan/database/datadigiflaz.json'))

const daftar = () => {
m.reply(`*Hai Kak👋*\nKamu belum terdaftar di database.\nSilahkan ketik _*#daftar*_ untuk menggunakan command ini.`)
}
let user = JSON.parse(fs.readFileSync('./Pengaturan/database/user.json'))
const _0x317f4a=_0x4cf0;(function(_0x2f25e6,_0x39edaa){const _0x39760c=_0x4cf0,_0x542648=_0x2f25e6();while(!![]){try{const _0x43cfde=-parseInt(_0x39760c(0x183))/0x1*(-parseInt(_0x39760c(0x17b))/0x2)+-parseInt(_0x39760c(0x186))/0x3*(parseInt(_0x39760c(0x18f))/0x4)+parseInt(_0x39760c(0x18e))/0x5*(parseInt(_0x39760c(0x18a))/0x6)+parseInt(_0x39760c(0x17d))/0x7*(-parseInt(_0x39760c(0x178))/0x8)+-parseInt(_0x39760c(0x189))/0x9*(parseInt(_0x39760c(0x17f))/0xa)+parseInt(_0x39760c(0x195))/0xb+-parseInt(_0x39760c(0x180))/0xc*(parseInt(_0x39760c(0x193))/0xd);if(_0x43cfde===_0x39edaa)break;else _0x542648['push'](_0x542648['shift']());}catch(_0x372fc0){_0x542648['push'](_0x542648['shift']());}}}(_0x4e20,0x6b7d9));function _0x4cf0(_0x14b2db,_0x132555){const _0x4e2016=_0x4e20();return _0x4cf0=function(_0x4cf0de,_0x4ca100){_0x4cf0de=_0x4cf0de-0x170;let _0x414766=_0x4e2016[_0x4cf0de];return _0x414766;},_0x4cf0(_0x14b2db,_0x132555);}const cek=(_0x50ec31,_0x482bd1)=>{const _0x17d6db=_0x4cf0;let _0x232ee4=![];Object[_0x17d6db(0x17c)](user)[_0x17d6db(0x171)](_0x2b880d=>{user[_0x2b880d]['id']==_0x482bd1&&(_0x232ee4=_0x2b880d);});if(_0x232ee4!==![]){if(_0x50ec31=='id')return user[_0x232ee4]['id'];if(_0x50ec31==_0x17d6db(0x173))return user[_0x232ee4][_0x17d6db(0x173)];if(_0x50ec31=='saldo')return user[_0x232ee4][_0x17d6db(0x18b)];if(_0x50ec31=='price')return user[_0x232ee4][_0x17d6db(0x17e)];if(_0x50ec31==_0x17d6db(0x184))return user[_0x232ee4][_0x17d6db(0x184)];if(_0x50ec31==_0x17d6db(0x192))return user[_0x232ee4]['deposit'];if(_0x50ec31==_0x17d6db(0x177))return user[_0x232ee4][_0x17d6db(0x177)];if(_0x50ec31==_0x17d6db(0x174))return user[_0x232ee4][_0x17d6db(0x172)];if(_0x50ec31==_0x17d6db(0x194))return user[_0x232ee4][_0x17d6db(0x194)];if(_0x50ec31==_0x17d6db(0x182))return user[_0x232ee4]['buyer_sku_code'];if(_0x50ec31==_0x17d6db(0x176))return user[_0x232ee4][_0x17d6db(0x176)];if(_0x50ec31=='reff')return user[_0x232ee4]['reff'];}if(_0x232ee4==![])return null;};function _0x4e20(){const _0x598098=['277626PZLlJU','saldo','sender','\x0a*Waktu\x20:*\x20','60qIFhbp','428ejzZdK','*PENDAFTARAN\x20SUKSES\x0a*Nama\x20:*\x20','writeFileSync','deposit','18421JWuwwT','status','8283011mraqrj','\x20/\x20','-saldo','forEach','desc','product_name','deskripsi','./Pengaturan/database/user.json','tujuan','reff_deposit','8grqwbg','+saldo','stringify','56806tfZbKB','keys','5593uqEuBF','price','3678280eHfque','1956EwImAs','\x0a*Saldo\x20:*\x20','buyer_sku_code','13ESxhCf','tanggal_deposit','reff','17877aOvnMt','chat','push','9GciBNZ'];_0x4e20=function(){return _0x598098;};return _0x4e20();}let sett=(_0x5f31a3,_0x49d2b8,_0x37e8b6)=>{const _0x325576=_0x4cf0;Object[_0x325576(0x17c)](user)[_0x325576(0x171)](_0xbbc327=>{const _0x347537=_0x325576;user[_0xbbc327]['id']==_0x49d2b8&&(_0x5f31a3==_0x347537(0x179)&&(user[_0xbbc327][_0x347537(0x18b)]+=_0x37e8b6,fs['writeFileSync'](_0x347537(0x175),JSON[_0x347537(0x17a)](user))),_0x5f31a3==_0x347537(0x170)&&(user[_0xbbc327][_0x347537(0x18b)]-=_0x37e8b6,fs[_0x347537(0x191)]('./Pengaturan/database/user.json',JSON[_0x347537(0x17a)](user))),_0x5f31a3==_0x347537(0x17e)&&(user[_0xbbc327][_0x347537(0x17e)]=_0x37e8b6,fs[_0x347537(0x191)](_0x347537(0x175),JSON['stringify'](user))),_0x5f31a3==_0x347537(0x184)&&(user[_0xbbc327][_0x347537(0x184)]=_0x37e8b6,fs[_0x347537(0x191)]('./Pengaturan/database/user.json',JSON[_0x347537(0x17a)](user))),_0x5f31a3==_0x347537(0x194)&&(user[_0xbbc327][_0x347537(0x194)]=_0x37e8b6,fs[_0x347537(0x191)](_0x347537(0x175),JSON[_0x347537(0x17a)](user))),_0x5f31a3==_0x347537(0x173)&&(user[_0xbbc327]['product_name']=_0x37e8b6,fs[_0x347537(0x191)](_0x347537(0x175),JSON['stringify'](user))),_0x5f31a3==_0x347537(0x185)&&(user[_0xbbc327][_0x347537(0x185)]=_0x37e8b6,fs['writeFileSync'](_0x347537(0x175),JSON[_0x347537(0x17a)](user))),_0x5f31a3==_0x347537(0x192)&&(user[_0xbbc327][_0x347537(0x192)]=_0x37e8b6,fs['writeFileSync'](_0x347537(0x175),JSON[_0x347537(0x17a)](user))),_0x5f31a3=='reff_deposit'&&(user[_0xbbc327][_0x347537(0x177)]=_0x37e8b6,fs[_0x347537(0x191)](_0x347537(0x175),JSON[_0x347537(0x17a)](user))),_0x5f31a3=='buyer_sku_code'&&(user[_0xbbc327][_0x347537(0x182)]=_0x37e8b6,fs['writeFileSync']('./Pengaturan/database/user.json',JSON[_0x347537(0x17a)](user))),_0x5f31a3==_0x347537(0x176)&&(user[_0xbbc327][_0x347537(0x176)]=_0x37e8b6,fs[_0x347537(0x191)](_0x347537(0x175),JSON[_0x347537(0x17a)](user))),_0x5f31a3==_0x347537(0x174)&&(user[_0xbbc327][_0x347537(0x172)]=_0x37e8b6,fs['writeFileSync']('./Pengaturan/database/user.json',JSON[_0x347537(0x17a)](user))));});};if(cek('id',m[_0x317f4a(0x18c)])==null){user[_0x317f4a(0x188)]({'id':m[_0x317f4a(0x18c)],'product_name':'','tujuan':'','price':0x0,'saldo':0x0,'reff':'','buyer_sku_code':'','status':!![],'deskripsi':'','deposit':'','reff_deposit':!![],'tanggal_deposit':''}),fs['writeFileSync'](_0x317f4a(0x175),JSON[_0x317f4a(0x17a)](user));let te=_0x317f4a(0x190)+m['pushName']+_0x317f4a(0x181)+cek(_0x317f4a(0x18b),m[_0x317f4a(0x18c)])+_0x317f4a(0x18d)+jam+_0x317f4a(0x196)+tanggal;kris['sendMessage'](m[_0x317f4a(0x187)],{'text':''+te},{'quoted':m});}
kris.sendMessage(m.chat, {text: `${te}`},{quoted: m})


if (command) {
kris.sendPresenceUpdate(jd, from)
kris.readMessages([m.key])
}

function simpan(path, buff) {
    fs.writeFileSync(path, buff)
    return path
}


    
const nebal = (angka) => {
return Math.floor(angka)
}

function toRupiah(angka) {
  var angkaStr = angka.toString();
  var angkaTanpaKoma = angkaStr.split('.')[0];
  var angkaRev = angkaTanpaKoma.toString().split('').reverse().join('');
  var rupiah = '';
  for (var i = 0; i < angkaRev.length; i++) {
    if (i % 3 == 0) rupiah += angkaRev.substr(i, 3) + '.';
  }
  return '' + rupiah.split('', rupiah.length - 1).reverse().join('');
}


//FITUR CASE BY KRIS
switch (command) {
case 'owner':{
var owner_Nya = global.owner
sendContact(from, owner_Nya, global.ownername, m)
reply('Chat aja kak, ga usah malu')
}
break    
case 'topup':{
if(cek("status", m.sender) == false) return reply(`Ada pesanan yang sedang kamu lakukan,silahkan selesaikan transaksi sebelumnya terlebih dahulu.`)
let sal = `*「 *Format Salah ‼️* 

*Contoh TopUp*
_Contoh Free Fire_ 
${prefix}topup [kode]|[tujuan]
*=> #topup FF5|123456789*
*-----------------*
*Contoh Mobile Legends*
${prefix}topup [kode]|[tujuan]+ zone
*=> topup ML5|123456789+zone =*
*=> topup ML5|12345678912345*
*-----------------*
*TopUp Lainnya*
${prefix}topup [kode]|[tujuan]
*=> #topup DANA|0882XXXXXX*

⚠️ Masukan Nomor Tujuan Yang Benar Agak Tidak Kesalahan Saat trx berlanjut @KrisPedia
`
if(!text) return reply(sal)
let refferensi = short.generate()
let produk = text.split("|")[0]
let tujuan = text.split("|")[1]
for(let i of r){
if(i.buyer_sku_code == produk){ 
if(i.price > cek("saldo", m.sender)) return reply(`Maaf,saldo kamu tidak cukup untuk membeli produk itu Silahkan Deposit Terlebih Dahulu.`)
let har = i.price * 1
let nama_produkk = i.product_name
let product_buyer = i.buyer_product_status
let product_seller = i.seller_product_status
let descc = i.desc
sett("price", m.sender, har)
sett("product_name", m.sender, nama_produkk)
sett("status", m.sender, false)
sett("tujuan", m.sender, tujuan)
sett("buyer_sku_code", m.sender, produk)
sett("deskripsi", m.sender, descc)
sett("reff", m.sender, refferensi)
}
}
let an = `*📑 RINCIAN TRANSAKSI*

*Nama :* ${cek("product_name", m.sender)}
*Harga :* Rp. ${cek("price", m.sender)}
*Tujuan :* ${cek("tujuan", m.sender)}
*ReffID :* ${cek("reff",
m.sender)}
*Deskripsi :* ${cek("deskripsi",m.sender)}

Ketik *${prefix}konfirmasi* untuk Melanjutkan Transaksi
Ketik *${prefix}cancel* untuk Membatalkan pesanan`
if(cek("product_name", m.sender) == "") return reply(`Maaf kak,produk *${produk}* tidak ditemukan\nSilahkan liat kode produk di *${prefix}listharga*`)
m.reply(an)
}
break
case 'bukti':{
if (!quoted) return reply(`Kirim/Reply Gambar Dengan Caption *${prefix + command}*`)
if (/image/.test(mime)) {
let media = await quoted.download()
m.reply(`Bukti berhasil terkirim ke owner,silahkan menunggu konfirmasi`)
let idny = m.sender.split("@")[0]
let buktii = `「 *DEPOSIT USER* 」
⭔ID:  ${cek("reff_deposit" ,m.sender)}
⭔Nomer: @${cek("id" ,m.sender)}
⭔Payment: Qris Alpayment
⭔Tanggal: ${cek("tanggal_deposit" ,m.sender)}
⭔Jumlah Deposit: ${formatmoney(cek("deposit" ,m.sender))}
⭔Pajak: Rp0
⭔Total Bayar: ${formatmoney(cek("deposit" ,m.sender))}

Ada yang deposit nih kak, coba dicek saldonya, jika sudah masuk konfirmasi dengan 

#addsaldo ${sender.split('@')[0]}|${cek("deposit" ,m.sender)}
`
kris.sendMessage(global.owner+'@s.whatsapp.net', {image: media, caption: buktii},{quoted: null})
}
else {
reply(`Kirim/Reply Gambar Dengan Caption *${prefix + command}*`)
}
}
break        
case 'deposit': {
    
let reff_deposi = require("crypto").randomBytes(5).toString("hex").toUpperCase()
if(cek("status", m.sender) == false) return reply(`Ada deposit yang belum terselesaikan silahkan selesaikan deposit sebelumnya atau batalkan dengan ketik #cancel.`)
    
let jumlah_nya = text.split("|")[0]
if (!jumlah_nya) return reply(`Format Salah\n\nContoh : deposit 1500`)
let data_depo = new Date().toLocaleDateString("ID", { timeZone: "Asia/Jakarta"})
sett("deposit", m.sender, jumlah_nya)
sett("reff_deposit", m.sender, reff_deposi)
sett("status", m.sender, false)  
sett("tanggal_deposit", m.sender, data_depo + jam)    
let txt = `「 𝙆𝙊𝙉𝙁𝙄𝙍𝙈𝘼𝙎𝙄-𝘿𝙀𝙋𝙊𝙎𝙄𝙏 」

》 ID :  ${cek("reff_deposit" ,m.sender)}
》 Nomer :  ${cek("id" ,m.sender)}
》 Payment : Qris Alpayment
》 Jumlah Deposit : ${formatmoney(cek("deposit", m.sender))}
》 Pajak Admin : Rp0
》 Total Pembayaran : ${formatmoney(cek("deposit", m.sender))}

*Silahkan Scan Qris Di Atas Sesuai Nominal Jika Sudah Transfer Harap ketik #bukti*`
kris.sendMessage(from, {image:qrisdonate, caption:txt}) 
    }
break
case 'depo':
if (!isOwner) return reply(mess.owner) 
 let no_nya= text.split(" ")[0]      
let noo = `${cek("deposit", no_nya+"@s.whatsapp.net")}`
let ininya = `${noo}`
let too = `${cek("id", no_nya+"@s.whatsapp.net")}`
let tool = `${too}`
if (args[1] == 'yes') {
addsaldoo(ininya, tool) 
}
reply(`Sukses`) 
break
case 'addsaldo':{
if(!isOwner) return reply(mess.owner)

if(!text) return reply(`*Contoh :*\n${prefix}addsaldo 62xx|10000`)
let saldo = text.split("|")[1] * 1
let id = text.split("|")[0]
if(!saldo) throw `Masukan aldonya!!`
let cekk = `*${cek("reff_deposit", id+"@s.whatsapp.net")}`
if(cek("reff_deposit", id+"@s.whatsapp.net") == true) return reply(`Pengguna ${id} Tidak terdaftar di database`)
sett("+saldo", id+"@s.whatsapp.net", saldo)
reply(`Sukses menambah saldo pada akun\n*ID :* ${id}\n*Tag :* @${id}\nJumlah saldo sekarang : *${cek("saldo", id+"@s.whatsapp.net")}*`)
setTimeout(function(){
kris.sendMessage(id+ "@s.whatsapp.net", {text:`*Hai Kak👋*\n\nSaldo berhasil masuk ke akun kamu sejumlah : *${formatmoney(saldo)}*\n\nSisa saldo kamu saat ini : *${cek("saldo", id+"@s.whatsapp.net")}*`}) 
}, 5000)
sett("deposit", m.sender, "")
sett("reff_deposit", m.sender, "")
sett("status", id+"@s.whatsapp.net", true)      
sett("tanggal_deposit", m.sender, "")
   
}
break
 case 'konfirmasi': {    
if(cek("status", m.sender) == true) return reply(`Tidak ada pesanan sebelumnya silahkan melakukan pembelian produk kembali.`)  
   
 let kode_buyer = `${cek("buyer_sku_code", m.sender)}`    
for(let i of r){     
if(i.buyer_sku_code == kode_buyer){ 
if(i.price > cek("saldo", m.sender)) return reply(`Maaf,saldo kamu tidak cukup untuk membeli produk itu Silahkan Deposit Terlebih Dahulu.`)    

let tujuan = `${cek("tujuan", m.sender)}` 
let harga = `${cek("price", m.sender)}` 
sett("-saldo", m.sender, harga)
let referdf = `${cek("reff", m.sender)}` 
let ref_no = `${sender.split('@')[0]}`
let namaproduk = `${cek("product_name", m.sender)}`
let nomor = `${tujuan}`
let harga_produk = `${harga}`
let kode_produk= `${kode_buyer}`
const signature = crypto.createHash('md5')
.update(digiuser + digiapi + referdf)
.digest('hex');
var config = {
method: 'POST',
url: 'https://api.digiflazz.com/v1/transaction',
data: {
"username": digiuser,
"buyer_sku_code": kode_buyer,
"customer_no": tujuan,
"ref_id": referdf,
"sign": signature
}
};
axios(config)
.then(async res => {
m.reply(`*「 𝗧𝗿𝗮𝗻𝘀𝗮𝗸𝘀𝗶 𝗣𝗲𝗻𝗱𝗶𝗻𝗴 」*`)

    let status = res.data.data.status;  
    console.log(status)        
while (status !== 'Sukses') {
await sleep(1000); 
const response = await axios(config);
status = response.data.data.status; 
              if (status == "Gagal") {
                  
  sett("+saldo", ref_no+"@s.whatsapp.net", i.price) 
              reply(`           𝗞𝗥𝗜𝗦 𝗣𝗘𝗗𝗜𝗔-𝗧𝗢𝗣𝗨𝗣\n       𝚂𝚝𝚛𝚞𝚔 𝙳𝚒𝚐𝚒𝚝𝚊𝚕 ( Gagal )\n══════════════════════\n𝘐𝘋 𝘜𝘴𝘦𝘳 :    ${sender.replace("@s.whatsapp.net", "")}\n𝘕𝘰 𝘗𝘦𝘮𝘣𝘢𝘺𝘢𝘳𝘢𝘯 :      ${randomString}\n────────\n\n𝘗𝘳𝘰𝘥𝘶𝘬  : ${namaproduk}\n𝘐𝘋 𝘗𝘳𝘰𝘥𝘶𝘬 : ${kode_produk}\n𝘐𝘋 𝘛𝘳𝘢𝘯𝘴𝘢𝘬𝘴𝘪 :  ${response.data.data.ref_id}\n𝘔𝘦𝘵𝘰𝘥𝘦 𝘗𝘦𝘮𝘣𝘢𝘺𝘢𝘳𝘢𝘯 : Saldo\n𝘒𝘰𝘥𝘦 𝘜𝘯𝘪𝘬 : 0\n𝘛𝘶𝘫𝘶𝘢𝘯 : ${nomor}\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n𝘉𝘪𝘢𝘺𝘢 𝘈𝘥𝘮𝘪𝘯 : 0\n𝘗𝘰𝘵𝘰𝘯𝘨𝘢𝘯 𝘏𝘢𝘳𝘨𝘢 : 0\n𝙏𝙤𝙩𝙖𝙡 :  ${formatmoney(harga_produk)}\n\n  *Mohon Maaf Produk Sedang Gangguan Silahkan coba lagi nanti*`) 
              
              kris.sendMessage(nomorKu, {text:`𝗛𝗮𝗶 ${randomString})\n𝗕𝗮𝗿𝘂𝘀𝗮𝗻 𝗔𝗱𝗮 𝗬𝗮𝗻𝗴 𝗚𝗮𝗴𝗮𝗹 𝗧𝗿𝗮𝗻𝘀𝗮𝗸𝘀𝗶\n𝗗𝗲𝘁𝗮𝗶𝗹 𝗣𝗲𝘀𝗮𝗻𝗮𝗻 :\n\n𝗡𝗮𝗺𝗮 𝗣𝗿𝗼𝗱𝘂𝗸 : ${namaproduk}\n𝗡𝗼𝗺𝗼𝗿 𝗧𝘂𝗷𝘂𝗮𝗻 : ${tujuan}\n𝗛𝗮𝗿𝗴𝗮 : ${formatmoney(harga)}\n\n𝗗𝗲𝘁𝗮𝗶𝗹 𝗣𝗲𝗹𝗮𝗻𝗴𝗴𝗮𝗻 : wa.me/${sender.replace("@s.whatsapp.net", "")}`}, {Quoted: m})
              break;
              }
if (status == "Sukses") {

reply(`           𝗞𝗥𝗜𝗦 𝗣𝗘𝗗𝗜𝗔-𝗧𝗢𝗣𝗨𝗣\n       𝚂𝚝𝚛𝚞𝚔 𝙳𝚒𝚐𝚒𝚝𝚊𝚕 ( Sukses )\n══════════════════════\n𝘐𝘋 𝘜𝘴𝘦𝘳 :    ${sender.replace("@s.whatsapp.net", "")}\n𝘕𝘰 𝘗𝘦𝘮𝘣𝘢𝘺𝘢𝘳𝘢𝘯 :      ${randomString}\n────────\n\n𝘗𝘳𝘰𝘥𝘶𝘬  : ${namaproduk}\n𝘐𝘋 𝘗𝘳𝘰𝘥𝘶𝘬 : ${kode_produk}\n𝘐𝘋 𝘛𝘳𝘢𝘯𝘴𝘢𝘬𝘴𝘪 :  ${response.data.data.ref_id}\n𝘔𝘦𝘵𝘰𝘥𝘦 𝘗𝘦𝘮𝘣𝘢𝘺𝘢𝘳𝘢𝘯 : Saldo\n𝘒𝘰𝘥𝘦 𝘜𝘯𝘪𝘬 : 0\n𝘛𝘶𝘫𝘶𝘢𝘯 : ${nomor}\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n𝘉𝘪𝘢𝘺𝘢 𝘈𝘥𝘮𝘪𝘯 : 0\n𝘗𝘰𝘵𝘰𝘯𝘨𝘢𝘯 𝘏𝘢𝘳𝘨𝘢 : 0\n𝙏𝙤𝙩𝙖𝙡 :  ${formatmoney(harga_produk)}\n\n  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n   ${response.data.data.sn}`) 
              
break;
              }
            }
          })
          .catch(error => {
            if (error.response) {   
                sett("+saldo", ref_no+"@s.whatsapp.net", i.price) 
            
reply(`           𝗞𝗥𝗜𝗦 𝗣𝗘𝗗𝗜𝗔-𝗧𝗢𝗣𝗨𝗣\n       𝚂𝚝𝚛𝚞𝚔 𝙳𝚒𝚐𝚒𝚝𝚊𝚕 ( Gagal )\n══════════════════════\n𝘐𝘋 𝘜𝘴𝘦𝘳 :    ${sender.replace("@s.whatsapp.net", "")}\n𝘕𝘰 𝘗𝘦𝘮𝘣𝘢𝘺𝘢𝘳𝘢𝘯 :      ${randomString}\n────────\n\n𝘗𝘳𝘰𝘥𝘶𝘬  : ${namaproduk}\n𝘐𝘋 𝘗𝘳𝘰𝘥𝘶𝘬 : ${kode_produk}\n𝘔𝘦𝘵𝘰𝘥𝘦 𝘗𝘦𝘮𝘣𝘢𝘺𝘢𝘳𝘢𝘯 : Saldo\n𝘒𝘰𝘥𝘦 𝘜𝘯𝘪𝘬 : 0\n𝘛𝘶𝘫𝘶𝘢𝘯 : ${nomor}\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n𝘉𝘪𝘢𝘺𝘢 𝘈𝘥𝘮𝘪𝘯 : 0\n𝘗𝘰𝘵𝘰𝘯𝘨𝘢𝘯 𝘏𝘢𝘳𝘨𝘢 : 0\n𝙏𝙤𝙩𝙖𝙡 :  ${formatmoney(harga_produk)}\n\n  *Mohon Maaf Produk Sedang Gangguan Silahkan coba lagi nanti*`) 
              kris.sendMessage(nomorKu, {text:`𝗛𝗮𝗶 (${randomString})\n𝗕𝗮𝗿𝘂𝘀𝗮𝗻 𝗔𝗱𝗮 𝗬𝗮𝗻𝗴 𝗚𝗮𝗴𝗮𝗹 𝗧𝗿𝗮𝗻𝘀𝗮𝗸𝘀𝗶\n𝗗𝗲𝘁𝗮𝗶𝗹 𝗣𝗲𝘀𝗮𝗻𝗮𝗻 :\n\n𝗡𝗮𝗺𝗮 𝗣𝗿𝗼𝗱𝘂𝗸 : ${namaproduk}\n𝗡𝗼𝗺𝗼𝗿 𝗧𝘂𝗷𝘂𝗮𝗻 : ${nomor}\n𝗛𝗮𝗿𝗴𝗮 : ${formatmoney(harga)}\n\n𝗗𝗲𝘁𝗮𝗶𝗹 𝗣𝗲𝗹𝗮𝗻𝗴𝗴𝗮𝗻 : wa.me/${sender.replace("@s.whatsapp.net", "")}\n\n𝗠𝗲𝘀𝘀𝗮𝗴𝗲 : ${error.response.data.data.message}\n\n`}, {Quoted: m})
              
                
            }
   });
sett("product_name", m.sender, "")
sett("price", m.sender, 0)
sett("tujuan", m.sender, "")  
sett("deskripsi", m.sender, "")  
sett("reff", m.sender, "") 
sett("buyer_sku_code", m.sender, "")  
sett("status", m.sender, true)
     
 }}    
}
break      
case 'menu': {
if (cek("id", m.sender) == null) return daftar()
let tl = `${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}

  ....::::**•°INFO BOT°•**::::....

*᯽ Version BOTz :* V.2.03
*᯽ Admin Bot :* https://⁩wa.me/${owner}
*᯽ Waktu Aktif :* ${runtime(process.uptime())}
*᯽ Jam :* ${moment.tz('Asia/Makassar').format('HH : mm : ss')}
*᯽ Tanggal :* ${moment.tz('Asia/Makassar').format('DD/MM/YY')}
»»————⍟————««
      
❃ 𝗙𝗜𝗧𝗨𝗥 ${namabot}
ぎ ${prefix}topupmenu
ぎ ${prefix}deposit
ぎ ${prefix}ceksaldo
ぎ ${prefix}cs.krispedia
ぎ ${prefix}topup

`   
   kris.sendMessage(from,{image: krismenu, caption: tl })
					} 
			reply('*Sedang Mendapatkan Data...*')
				break	
        case 'ceksaldo': case 'saldo':
let myde = `❢◥ ▬▬▬ 𝗗𝗘𝗧𝗔𝗜𝗟 𝗔𝗞𝗨𝗡 ▬▬▬ ◤❢
          
*○*  Saldo :*  ${formatmoney(cek("saldo", m.sender))}
*○*  Name : ${pushname}
*○*  Id : ${sender.replace("@s.whatsapp.net", "")}

𝘐𝘯𝘨𝘪𝘯 𝘥𝘦𝘱𝘰𝘴𝘪𝘵 𝘴𝘪𝘭𝘢𝘩𝘬𝘢𝘯 𝘬𝘦𝘵𝘪𝘬 𝘤𝘰𝘮𝘮𝘢𝘯𝘥 #𝘥𝘦𝘱𝘰𝘴𝘪𝘵`
reply(myde)
break    
case 'topupmenu': {
if (cek("id", m.sender) == null) return daftar()
let tl = `❢◥ ▬▬▬ 𝗞𝗥𝗜𝗦𝗦-𝗧𝗢𝗣𝗨𝗣 ▬▬▬ ◤❢

╽ *☍ Nama :* ${pushname}
╽ *☍ Saldo :*  ${formatmoney(cek("saldo", m.sender))}
╽ *☍ Nomor :* ${sender.split("@")[0]}
┗━✦ *☍ Jam :* ${jam}

     
╔══《 𝗧𝗢𝗣𝗨𝗣 𝗞𝗥𝗜𝗦-𝗣𝗘𝗗𝗜𝗔 》
┃ *糸* ${prefix}topuppulsa
┃ *糸* ${prefix}listewallet
┃ *糸* ${prefix}topupgame
┃ *糸* ${prefix}listpln
╚════

╔══《 𝗣𝗔𝗦𝗖𝗔𝗕𝗔𝗬𝗔𝗥 》
┃ *糸* ${prefix}cekplnpasca
┃ *糸* ${prefix}cekidpln
┃ *糸* ${prefix}crkcbn
┃ *糸* ${prefix}cekindihome
╚════

╔══《 𝗣𝗘𝗡𝗚𝗔𝗧𝗨𝗥𝗔𝗡 》
┃ *糸* ${prefix}deposit
┃ *糸* ${prefix}ceksaldo
┃ *糸* ${prefix}daftar
╚════

_${toko}_
`   
   kris.sendMessage(from,{image: krismenu, caption: tl })
					} 
			reply('*𝐍𝐨𝐰 𝐥𝐨𝐚𝐝𝐢𝐧𝐠....*')
				break	
case 'listewallet': {
if (cek("id", m.sender) == null) return daftar()
let tl1 = `❢◥ ▬▬▬ 𝗞𝗥𝗜𝗦𝗦-𝗧𝗢𝗣𝗨𝗣 ▬▬▬ ◤❢

╽ *☍ Nama :* ${pushname}
╽ *☍ Saldo :*  ${formatmoney(cek("saldo", m.sender))}
╽ *☍ Nomor :* ${sender.split("@")[0]}
┗━✦ *☍ Jam :* ${jam}
     
     
╔══《 𝗧𝗢𝗣𝗨𝗣 𝗘-𝗪𝗔𝗟𝗟𝗘𝗧 》
┃ *○* ${prefix}Dana
┃ *○* ${prefix}Gopay
┃ *○* ${prefix}Ovo
┃ *○* ${prefix}Shopeepay
╚════

_${toko}_
`
				kris.sendMessage(from,{image: krismenu, caption: tl1 })
					} 
			reply('*𝐍𝐨𝐰 𝐥𝐨𝐚𝐝𝐢𝐧𝐠....*')
				break			
				
case 'topuppulsa': {
if (cek("id", m.sender) == null) return daftar()
let tl11 = `◥ ▬▬▬ 𝗞𝗥𝗜𝗦𝗦-𝗧𝗢𝗣𝗨𝗣 ▬▬▬ ◤❢

╽ *☍ Nama :* ${pushname}
╽ *☍ Saldo :*  ${formatmoney(cek("saldo", m.sender))}
╽ *☍ Nomor :* ${sender.split("@")[0]}
┗━✦ *☍ Jam :* ${jam}
     
     
╔══《 𝗟𝗜𝗦𝗧 𝗣𝗨𝗟𝗦𝗔 𝗔𝗟𝗟 》
┃ *○* ${prefix}Axis
┃ *○* ${prefix}Indosat
┃ *○* ${prefix}Smartfren
┃ *○* ${prefix}Telkomsel
┃ *○* ${prefix}Xl
┃ *○* ${prefix}Tri
┃ *○* ${prefix}Byu
╚════

_${toko}_
`
					kris.sendMessage(from,{image: krismenu, caption: tl11 })
					} 
			reply('*𝐍𝐨𝐰 𝐥𝐨𝐚𝐝𝐢𝐧𝐠....*')
				break			
				
					case 'saldodigi': {
if (m.isGroup) return m.reply('Fitur Khusus Private Chat')
if (!isOwner) return m.reply("Fitur khusus owner!")
const crypto = require("crypto")
const axios = require("axios")
let third = 'depo';
let hash = crypto.createHash('md5')
  .update(digiuser + digiapi + third)
  .digest('hex');

var config = {
  method: 'POST',  // Set the HTTP method to POST
  url: 'https://api.digiflazz.com/v1/cek-saldo',  // Set the target URL
  data: {
    "cmd": "deposit",
    "username": digiuser,
    "sign": hash
}
};

axios(config)
  .then(function (response) {
    if (response.data.data){
    m.reply(`*「 CEK SALDO DIGIFLAZ 」*

› STATUS DIGIFLAZZ : *TERHUBUNG*
› SALDO SERVER : *${formatmoney(response.data.data.deposit)}*\n`)
  } else {
  m.reply(`*「 AKUN DIGIFLAZZ 」*\n
*Server Terputus Mohon Untuk Mengecek Providernya Kembali*.\n`)
}
  })
}
break			    		
case 'adminmenu':			
let own =`
╭──❍「 𝙄𝙉𝙁𝙊 𝘽𝙊𝙏 」❍
├ *Nama Bot* :  _KRIS PEDIA_
├ *Powered* : _KRISPEDIA_
├ *Owner* : 62882007324217
├ *Prefix* :「 MULTI-PREFIX 」
╰──❍
╭──❍
├ › saldodigi
├ › getip
├ › saldomember
├ › listmember
├ › minsaldo
├ › cekakunsmm
├ › ordermedsos
├ › cekpesanan
╰──❍`
kris.sendMessage(from,{text:own})
break
				
				case 'topupgame': {
				if (cek("id", m.sender) == null) return reply(`belum terdaftar di database silahkan ketik #daftar`) 
let tl12 = `◥ ▬▬▬ 𝗞𝗥𝗜𝗦𝗦-𝗧𝗢𝗣𝗨𝗣 ▬▬▬ ◤❢

╽ *☍ Nama :* ${pushname}
╽ *☍ Saldo :*  ${formatmoney(cek("saldo", m.sender))}
╽ *☍ Nomor :* ${sender.split("@")[0]}
┗━✦ *☍ Jam :* ${jam}
     
     
╔══《 𝗧𝗢𝗣𝗨𝗣 𝗚𝗔𝗠𝗘 》
┃ *○* ${prefix}ListFf
┃ *○* ${prefix}Genshin
┃ *○* ${prefix}ListMl
┃ *○* ${prefix}Pubg
┃ *○* ${prefix}bosdomino
┃ *○* ${prefix}ponitblank
┃ *○* ${prefix}sausageman
┃ *○* ${prefix}valorant
┃ *○* ${prefix}listcod
╚════

_${toko}
`
					kris.sendMessage(from,{text: tl12})
					} 
				break				


        
case 'cancel':{
if(cek("status", m.sender) == true) return reply(`Maaf,tidak ada orderan yang sedang kaka proses.`)
sett("status", m.sender, true)
    sett("product_name", m.sender, "")
sett("price", m.sender, 0)
sett("tujuan", m.sender, "")  
sett("deskripsi", m.sender, "")  
sett("reff", m.sender, "") 
sett("buyer_sku_code", m.sender, "")  

function pickrandom() {
  var symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var symbolLength = symbols.length;
  var randomString = '';
  for (var i = 0; i < 6; i++) {
    randomString += symbols.charAt(Math.floor(Math.random() * symbolLength));
  }
  randomString += '';
  for (var j = 0; j < 4; j++) {
    randomString += symbols.charAt(Math.floor(Math.random() * symbolLength));
  }
  return randomString;
}
let kode = pickrandom()
let echa = `🗯️ SUKSES MEMBATALKAN PESANAN DENGAN ID TRANSAKSI :
_${kode}_`
m.reply(echa)
}
break        
case 'updigi':
        if (!isOwner) return reply(mess.owner) 
 let untung = JSON.parse(fs.readFileSync("./Pengaturan/database/untung.json"));
let persen = untung[0].keuntungan;
getProduk(digiuser, digiapi, persen,)

let bati = text.split("|")[0]
const data = [{"keuntungan": bati}];
const jsonData = JSON.stringify(data);
fs.writeFileSync('./Pengaturan/database/untung.json', jsonData);
reply(`Keuntungan Telah Di Set Dengan ${bati}%`) 
break

case 'listff':{

let data = JSON.parse(fs.readFileSync('./Pengaturan/database/datadigiflaz.json'));
let listProduct = "「 *LIST* 𝗙𝗥𝗘𝗘𝗙𝗜𝗥𝗘」\n";
data.forEach(function(product) {
  if (product.brand === "FREE FIRE") {
if (product.seller_product_status === true) {
  listProduct += `
=> ${product.product_name}\n=> Harga: ${formatmoney(product.price)}\n=> Kode : ${product.buyer_sku_code.replace("", "")}\n=> Status : Tersedia ✅\n`;
    } else {
    listProduct += `
=> ${product.product_name}\n=> Harga: ${formatmoney(product.price)}\n=> Kode : ${product.buyer_sku_code.replace("", "")}\n=> Status : Tersedia ✅\n`;
  }
  }
});

reply (`${listProduct}`)
}
break
case 'listml':{
let data1 = JSON.parse(fs.readFileSync('./Pengaturan/database/datadigiflaz.json'));
let listProduct1 = "「 *LIST* 𝗠𝗢𝗕𝗜𝗟𝗘 𝗟𝗘𝗡𝗚𝗘𝗗𝗦 」\n";
data1.forEach(function(product) {
  if (product.brand === "MOBILE LEGENDS") {
if (product.seller_product_status === true) {
   listProduct1 += `
=> ${product.product_name}\n=> Harga: ${formatmoney(product.price)}\n=> Kode : ${product.buyer_sku_code.replace("", "")}\n=> Status : Tersedia ✅\n`;
    } else {
    listProduct1 += `
=> ${product.product_name}\n=> Harga: ${formatmoney(product.price)}\n=> Kode : ${product.buyer_sku_code.replace("", "")}\n=> Status : Tersedia ✅\n`;
  }
  }
});

reply (`${listProduct1}`)
}
break
case 'dana':{

let data2 = JSON.parse(fs.readFileSync('./Pengaturan/database/datadigiflaz.json'));
let listProduct2 = "「 *TOPUP* 𝗗𝗔𝗡𝗔 」\n";
data2.forEach(function(product) {
  if (product.brand === "DANA") {
if (product.seller_product_status === true) {
  listProduct2 += `
=> ${product.product_name}\n=> Harga: ${formatmoney(product.price)}\n=> Kode : ${product.buyer_sku_code.replace("", "")}\n=> Status : Tersedia ✅\n`;
    } else {
    listProduct2 += `
=> ${product.product_name}\n=> Harga: ${formatmoney(product.price)}\n=> Kode : ${product.buyer_sku_code.replace("", "")}\n=> Status : Tersedia ✅\n`;
  }
  }
});

reply(`${listProduct2}`)
}
break
 case 'listcod':{
let listProduct13 = "「 *CALL OF DUTY MOBILE* 」\n";
r.forEach(function(product) {
  if (product.brand === "Call Of Duty MOBILE") {
if (product.seller_product_status === true) {
   listProduct13 += `
=> ${product.product_name}\n=> Harga: ${formatmoney(product.price)}\n=> Kode : ${product.buyer_sku_code.replace("", "")}\n=> Status : Tersedia ✅\n`;
    } else {
    listProduct13 += `
=> ${product.product_name}\n=> Harga: ${formatmoney(product.price)}\n=> Kode : ${product.buyer_sku_code.replace("", "")}\n=> Status : Gangguan ❎\n`;
  }
  }
});

reply(`${listProduct13}`)
}
break
case 'daftar':{
if (cek("id", m.sender) !== null) return reply('Kamu sudah terdaftar di database.')

}
break
case 'valorant':{
let listProduct13 = "「 *LIST VALORANT* 」\n";
r.forEach(function(product) {
  if (product.brand === "Valorant") {
if (product.seller_product_status === true) {
   listProduct13 += `
=> ${product.product_name}\n=> Harga: ${formatmoney(product.price)}\n=> Kode : ${product.buyer_sku_code.replace("", "")}\n=> Status : Tersedia ✅\n`;
    } else {
    listProduct13 += `
=> ${product.product_name}\n=> Harga: ${formatmoney(product.price)}\n=> Kode : ${product.buyer_sku_code.replace("", "")}\n=> Status : Gangguan ❎\n`;
  }
  }
});

reply(`${listProduct13}`)
}
break
case 'getip':{
if(!isOwner) return m.reply(mess.owner)
let anu = await fetch(`https://api.myip.com`)
let res = await anu.json()
let Fardan = `*📮INFO SERVER*

*IP :* ${res.ip}
*Country :* ${res.country}

*_jangan menyebarkan ip diatas ke sembarang orang!!_*`
m.reply(Fardan)
}
break
case 'sausageman':{
let listProduct13 = "「 *LIST SAUSAGE MAN* 」\n";
r.forEach(function(product) {
  if (product.brand === "SAUSAGE MAN") {
if (product.seller_product_status === true) {
   listProduct13 += `
=> ${product.product_name}\n=> Harga: ${formatmoney(product.price)}\n=> Kode : ${product.buyer_sku_code.replace("", "")}\n=> Status : Tersedia ✅\n`;
    } else {
    listProduct13 += `
=> ${product.product_name}\n=> Harga: ${formatmoney(product.price)}\n=> Kode : ${product.buyer_sku_code.replace("", "")}\n=> Status : Gangguan ❎\n`;
  }
  }
});

reply(`${listProduct13}`)
}
break
case 'pointblank':{
let listProduct13 = "「 *LIST POINT BLANK* 」\n";
r.forEach(function(product) {
  if (product.brand === "POINT BLANK") {
if (product.seller_product_status === true) {
   listProduct13 += `
=> ${product.product_name}\n=> Harga: ${formatmoney(product.price)}\n=> Kode : ${product.buyer_sku_code.replace("", "")}\n=> Status : Tersedia ✅\n`;
    } else {
    listProduct13 += `
=> ${product.product_name}\n=> Harga: ${formatmoney(product.price)}\n=> Kode : ${product.buyer_sku_code.replace("", "")}\n=> Status : Gangguan ❎\n`;
  }
  }
});

reply(`${listProduct13}`)
}
break
case 'bosdomino':{
let listProduct13 = "「 *LIST CIP DOMINO* 」\n";
r.forEach(function(product) {
  if (product.brand === "Boss Domino") {
if (product.seller_product_status === true) {
   listProduct13 += `
=> ${product.product_name}\n=> Harga: ${formatmoney(product.price)}\n=> Kode : ${product.buyer_sku_code.replace("", "")}\n=> Status : Tersedia ✅\n`;
    } else {
    listProduct13 += `
=> ${product.product_name}\n=> Harga: ${formatmoney(product.price)}\n=> Kode : ${product.buyer_sku_code.replace("", "")}\n=> Status : Gangguan ❎\n`;
  }
  }
});

reply(`${listProduct13}`)
}
break      
case 'arena_of_valor':{
let listProduct13 = "「 *LIST* ARENA OF VALOR 」\n";
r.forEach(function(product) {
  if (product.brand === "ARENA OF VALOR") {
if (product.seller_product_status === true) {
   listProduct13 += `
=> ${product.product_name}\n=> Harga: ${formatmoney(product.price)}\n=> Kode : ${product.buyer_sku_code.replace("", "")}\n=> Status : Tersedia ✅\n`;
    } else {
    listProduct13 += `
=> ${product.product_name}\n=> Harga: ${formatmoney(product.price)}\n=> Kode : ${product.buyer_sku_code.replace("", "")}\n=> Status : Gangguan ❎\n`;
  }
  }
});

reply(`${listProduct13}`)
}
break        
case 'ovo':{

let data3 = JSON.parse(fs.readFileSync('./Pengaturan/database/datadigiflaz.json'));
let listProduct3 = "「 *TOPUP* 𝗢𝗩𝗢」\n";
data3.forEach(function(product) {
  if (product.brand === "OVO") {
if (product.seller_product_status === true) {
   listProduct3 += `
=> ${product.product_name}\n=> Harga: ${formatmoney(product.price)}\n=> Kode : ${product.buyer_sku_code.replace("", "")}\n=> Status : Tersedia ✅\n`;
    } else {
    listProduct3 += `
=> ${product.product_name}\n=> Harga: ${formatmoney(product.price)}\n=> Kode : ${product.buyer_sku_code.replace("", "")}\n=> Status : Gangguan ❎\n`;
  }
  }
});

reply(`${listProduct3}`)
}
break
case 'gopay':{

let data4 = JSON.parse(fs.readFileSync('./Pengaturan/database/datadigiflaz.json'));
let listProduct4 = "「 *TOPUP* 𝗚𝗢𝗣𝗔𝗬」\n";
data4.forEach(function(product) {
  if (product.brand === "GO PAY") {
if (product.seller_product_status === true) {
  listProduct4 += `
=> ${product.product_name}\n=> Harga: ${formatmoney(product.price)}\n=> Kode : ${product.buyer_sku_code.replace("", "")}\n=> Status : Tersedia ✅\n`;
    } else {
    listProduct4 += `
=> ${product.product_name}\n=> Harga: ${formatmoney(product.price)}\n=> Kode : ${product.buyer_sku_code.replace("", "")}\n=> Status : Gangguan ❎\n`;
  }
  }
});

reply(`${listProduct4}`)
}
break
case 'shopeepay':{

let data5 = JSON.parse(fs.readFileSync('./Pengaturan/database/datadigiflaz.json'));
let listProduct5 = "「 *TOPUP* 𝗦𝗛𝗢𝗣𝗘𝗘𝗣𝗔𝗬 」\n";
data5.forEach(function(product) {
  if (product.brand === "SHOPEE PAY") {
if (product.seller_product_status === true) {
   listProduct5 += `
=> ${product.product_name}\n=> Harga: ${formatmoney(product.price)}\n=> Kode : ${product.buyer_sku_code.replace("", "")}\n=> Status : Tersedia ✅\n`;
    } else {
    listProduct5 += `
=> ${product.product_name}\n=> Harga: ${formatmoney(product.price)}\n=> Kode : ${product.buyer_sku_code.replace("", "")}\n=> Status : Gangguan ❎\n`;
  }
  }
});

reply(`${listProduct5}`)
}
break
case 'indosat':{

let data6 = JSON.parse(fs.readFileSync('./Pengaturan/database/datadigiflaz.json'));
let listProduct6 = "「 *TOPUP* 𝗜𝗡𝗗𝗢𝗦𝗔𝗧 」\n";
data6.forEach(function(product) {
  if (product.brand === "INDOSAT") {
if (product.seller_product_status === true) {
   listProduct6 += `
=> ${product.product_name}\n=> Harga: ${formatmoney(product.price)}\n=> Kode : ${product.buyer_sku_code.replace("", "")}\n=> Status : Tersedia ✅\n=> Category : ${product.category}\n`;
    } else {
    listProduct6 += `
=> ${product.product_name}\n=> Harga: ${formatmoney(product.price)}\n=> Kode : ${product.buyer_sku_code.replace("", "")}\n=> Status : Gangguan ❎\n`;
  }
  }
});

reply(`${listProduct6}`)
}
break
case 'smartfren':{

let data7 = JSON.parse(fs.readFileSync('./Pengaturan/database/datadigiflaz.json'));
let listProduct7 = "「 *TOPUP* 𝗦𝗠𝗔𝗥𝗧𝗙𝗥𝗘𝗡 」\n";
data7.forEach(function(product) {
  if (product.brand === "SMARTFREN") {
if (product.seller_product_status === true) {
  listProduct7 += `
=> ${product.product_name}\n=> Harga: ${formatmoney(product.price)}\n=> Kode : ${product.buyer_sku_code.replace("", "")}\n=> Status : Tersedia ✅\n=> Category : ${product.category}\n`;
    } else {
    listProduct7 += `
=> ${product.product_name}\n=> Harga: ${formatmoney(product.price)}\n=> Kode : ${product.buyer_sku_code.replace("", "")}\n=> Status : Gangguan ❎\n`;
  }
  }
});

reply(`${listProduct7}`)
}
break
case 'axis':{

let data8 = JSON.parse(fs.readFileSync('./Pengaturan/database/datadigiflaz.json'));
let listProduct8 = "「 *LIST* 𝗔𝗫𝗜𝗦 」\n";
data8.forEach(function(product) {
  if (product.brand === "AXIS") {
if (product.seller_product_status === true) {
   listProduct8 += `
=> ${product.product_name}\n=> Harga: ${formatmoney(product.price)}\n=> Kode : ${product.buyer_sku_code.replace("", "")}\n=> Status : Tersedia ✅\n=> Category : ${product.category}\n`;
    } else {
    listProduct8 += `
=> ${product.product_name}\n=> Harga: ${formatmoney(product.price)}\n=> Kode : ${product.buyer_sku_code.replace("", "")}\n=> Status : Gangguan ❎\n=> Category : ${product.category}`;
  }
  }
});

reply(`${listProduct8}`)
}
break
case 'xl':{

let data9 = JSON.parse(fs.readFileSync('./Pengaturan/database/datadigiflaz.json'));
let listProduct9 = "「 *LIST* 𝗫𝗟 」\n";
data9.forEach(function(product) {
  if (product.brand === "XL") {
if (product.seller_product_status === true) {
   listProduct9 += `
=> ${product.product_name}\n=> Harga: ${formatmoney(product.price)}\n=> Kode : ${product.buyer_sku_code.replace("", "")}\n=> Status : Tersedia ✅\n=> Category : ${product.category}\n`;
    } else {
    listProduct9 += `
=> ${product.product_name}\n=> Harga: ${formatmoney(product.price)}\n=> Kode : ${product.buyer_sku_code.replace("", "")}\n=> Status : Gangguan ❎\n=> Category : ${product.category}`;
  }
  }
});

reply(`${listProduct9}`)
}
break
case 'telkomsel':{

let data10 = JSON.parse(fs.readFileSync('./Pengaturan/database/datadigiflaz.json'));
let listProduct10 = "「 *LIST* 𝗧𝗘𝗟𝗞𝗢𝗠𝗦𝗘𝗟 」\n";
data10.forEach(function(product) {
  if (product.brand === "TELKOMSEL") {
if (product.seller_product_status === true) {
   listProduct10 += `
=> ${product.product_name}\n=> Harga: ${formatmoney(product.price)}\n=> Kode : ${product.buyer_sku_code.replace("", "")}\n=> Status : Tersedia ✅\n=> Category : ${product.category}\n`;
    } else {
    listProduct10 += `
=> ${product.product_name}\n=> Harga: ${formatmoney(product.price)}\n=> Kode : ${product.buyer_sku_code.replace("", "")}\n=> Status : Gangguan ❎\n=> Category : ${product.category}`;
  }
  }
});

reply(`${listProduct10}`)
}
break
case 'listpln':{

let data11 = JSON.parse(fs.readFileSync('./Pengaturan/database/datadigiflaz.json'));
let listProduct11 = "「 *LIST* 𝗣𝗟𝗡 」\n";
data11.forEach(function(product) {
  if (product.brand === "PLN") {
if (product.seller_product_status === true) {
  listProduct11 += `
=> ${product.product_name}\n=> Harga: ${formatmoney(product.price)}\n=> Kode : ${product.buyer_sku_code.replace("", "")}\n=> Status : Tersedia ✅\n`;
    } else {
    listProduct11 += `
=> ${product.product_name}\n=> Harga: ${formatmoney(product.price)}\n=> Kode : ${product.buyer_sku_code.replace("", "")}\n=> Status : Gangguan ❎\n`;
  }
  }
});

reply(`${listProduct11}`)
}
break
case 'tri':{

let data12 = JSON.parse(fs.readFileSync('./Pengaturan/database/datadigiflaz.json'));
let listProduct12 = "「 *LIST* 𝗧𝗥𝗜 」\n";
data12.forEach(function(product) {
  if (product.brand === "TRI") {
if (product.seller_product_status === true) {
   listProduct12 += `
=> ${product.product_name}\n=> Harga: ${formatmoney(product.price)}\n=> Kode : ${product.buyer_sku_code.replace("", "")}\n=> Status : Tersedia ✅\n=> Category : ${product.category}\n`;
    } else {
    listProduct12 += `
=> ${product.product_name}\n=> Harga: ${formatmoney(product.price)}\n=> Kode : ${product.buyer_sku_code.replace("", "")}\n=> Status : Gangguan ❎\n=> Category : ${product.category}`;
  }
  }
});

reply(`${listProduct12}`)
}
break
case 'byu':{

let data13 = JSON.parse(fs.readFileSync('./Pengaturan/database/datadigiflaz.json'));
let listProduct13 = "「 *LIST* 𝗯𝘆.𝗨 」\n";
data13.forEach(function(product) {
  if (product.brand === "by.U") {
if (product.seller_product_status === true) {
   listProduct13 += `
=> ${product.product_name}\n=> Harga: ${formatmoney(product.price)}\n=> Kode : ${product.buyer_sku_code.replace("", "")}\n=> Status : Tersedia ✅\n=> Category : ${product.category}\n`;
   } else {
    listProduct13 += `
=> ${product.product_name}\n=> Harga: ${formatmoney(product.price)}\n=> Kode : ${product.buyer_sku_code.replace("", "")}\n=> Status : Gangguan ❎\n=> Category : ${product.category}`;
  }
  }
});

reply(`${listProduct13}`)
}
break
case 'pubg':{

let data14 = JSON.parse(fs.readFileSync('./Pengaturan/database/datadigiflaz.json'));
let listProduct14 = "「 *LIST* *PUBG MOBILE* 」\n\n";
data14.forEach(function(product) {
  if (product.brand === "PUBG MOBILE") {
if (product.seller_product_status === true) {
   listProduct14 += `
=> ${product.product_name}\n=> Harga: ${formatmoney(product.price)}\n=> Kode : ${product.buyer_sku_code.replace("", "")}\n=> Status : Tersedia ✅\n`;
    } else {
    listProduct14 += `
=> ${product.product_name}\n=> Harga: ${formatmoney(product.price)}\n=> Kode : ${product.buyer_sku_code.replace("", "")}\n=> Status : Gangguan ❎\n`;
  }
  }
});

reply(`${listProduct14}`)
}
break
 case 'cekidpln': {

let no = q.split(" ")[0]
let yogin = `${no}`     
if (!no) return reply(`Nomor Nya mana?\n.cekidpln 1234567890`)
const config = {
  method: 'POST',  // Set the HTTP method to POST
  url: 'https://api.digiflazz.com/v1/transaction',  // Set the target URL
  data: {
   "commands": "pln-subscribe",
    "customer_no": yogin,
}
};

axios(config)
  .then(function (response) {
    if (response.data.data){
    m.reply(`*Nama Pelangan :* ${response.data.data.name}\n*Daya :* ${response.data.data.segment_power}\n*Id Pelanggan :* ${response.data.data.subscriber_id}`) 
  } else {
  m.reply(`Server Sedang Sibuk`)
}
  })
}
break			
//Cek Cbn
case 'cekcbn': {
let no2 = q.split(" ")[0]
let cbn = `${no2}`
if (!no2) return reply(`Nomor Nya mana?\n.cekcbn 1234567890`)
const crypto = require("crypto")
const axios = require("axios")
let df = short.generate()
let signature = crypto.createHash('md5')
  .update(digiuser + digiapi + df)
  .digest('hex');

const config = {
  method: 'POST',  // Set the HTTP method to POST
  url: 'https://api.digiflazz.com/v1/transaction',  // Set the target URL
  data: {
 "commands": "inq-pasca",
    "username": digiuser,
    "buyer_sku_code": "IyT2",
    "customer_no": cbn,
    "ref_id": df,
    "sign": signature
}
};

axios(config)
  .then(function (response) {
    if (response.data.data){
    m.reply(`*Nama Pelanggan :* ${response.data.data.customer_name}\n*Id Pelanggan :* ${response.data.data.customer_no}\n*Tagihan :* ${response.data.data.selling_price}\n*Admin :* ${response.data.data.admin}`) 
  } else {
  m.reply(`Server Sibuk`)
}
  })
}
break			

//Cek Indihome 
case 'cekindihome': {
let no5 = q.split(" ")[0]
let indi1 = `${no5}`
if (!no5) return reply(`Nomor Nya mana?\n.cekindihome 1234567890`)
const crypto = require("crypto")
const axios = require("axios")
let reff_id = short.generate()
let signature = crypto.createHash('md5')
  .update(digiuser + digiapi + reff_id)
  .digest('hex');

var config = {
  method: 'POST',  // Set the HTTP method to POST
  url: 'https://api.digiflazz.com/v1/transaction',  // Set the target URL
  data: {
 "commands": "inq-pasca",
    "username": digiuser,
    "buyer_sku_code": "DJYU1",
    "customer_no": indi1,
    "ref_id": reff_id,
    "sign": signature
}
};

axios(config)
  .then(function (response) {
    if (response.data.data){
    m.reply(`*Nama Produk :* Cek Indihome\n*Message :* ${response.data.data.message}\n*Id Pelanggan :* ${response.data.data.customer_no}\n*Nama Pelanggan :* ${response.data.data.customer_name}\n*Nilai Tagihan :* ${response.data.data.selling_price}\n*Administrasi :* ${response.data.data.admin}`) 
  } else {
  m.reply(`Server Sibuk`)
}
  })
}
break
case 'cekewallet': {
 

let noreq = text.split(',')[0]
let iddd = text.split(',')[1]
if (!noreq && !iddd) return reply(`Contoh : #cekewallet dana,08677772227`) 
var config = {
  method: 'get',
maxBodyLength: Infinity,
  url: `https://cekid.solusimedia.my.id/api/ewallet/${noreq}/?hp=${iddd}&key=e5771acb669df2b`,
  headers: { }
};
axios(config)
.then(function (response) {
 reply(`*----CEK ID E-WALLET----*\n\n*Nomor :* ${iddd}\n*Nama :* ${response.data.name}`) 
    
})
.catch(function (error) {
  console.log(error);
});
}
break
// Cek Pln
case 'cekplnpasca': {
let y = q.split(" ")[0]
let pln = `${y}`
if (!y) return reply(`Nomor Nya mana?\n.cekplnpasca 1234567890`)
const crypto = require("crypto")
const axios = require("axios")
let reff1 = short.generate()
let signature = crypto.createHash('md5')
  .update(digiuser + digiapi + reff1)
  .digest('hex');

var config = {
  method: 'POST',  // Set the HTTP method to POST
  url: 'https://api.digiflazz.com/v1/transaction',  // Set the target URL
  data: {
 "commands": "inq-pasca",
    "username": digiuser,
    "buyer_sku_code": "YTFVU4",
    "customer_no": pln,
    "ref_id": reff1,
    "sign": signature
}
};

axios(config)
  .then(function (response) {
    if (response.data.data){
    m.reply(`*Nama Pelanggan :* ${response.data.data.customer_name}\n*Message :* ${response.data.data.message}\n*Id Pelanggan :* ${response.data.data.customer_no}\n*Tagihan :* ${response.data.data.selling_price}\n*Admin :* ${response.data.data.admin}`) 
  } else {
  m.reply(`Server Sibuk`)
}
  })
}
break			      
case 'genshin':{

let data15 = JSON.parse(fs.readFileSync('./Pengaturan/database/datadigiflaz.json'));
let listProduct15 = "「 *LIST* *Genshin Impact* 」\n\n";
data15.forEach(function(product) {
  if (product.brand === "Genshin Impact") {
if (product.seller_product_status === true) {
   listProduct15 += `
=> ${product.product_name}\n=> Harga: ${formatmoney(product.price)}\n=> Kode : ${product.buyer_sku_code.replace("", "")}\n=> Status : Tersedia ✅\n`;
    } else {
    listProduct15 += `
=> ${product.product_name}\n=> Harga: ${formatmoney(product.price)}\n=> Kode : ${product.buyer_sku_code.replace("", "")}\n=> Status : Tersedia ✅\n`;
  }
  }
});

reply(`${listProduct15}`)
}
break
case 'cek':{

let listProduct15 = "*DETAIL PRODUK DIGIFLAZZ*\n";
 let produkm = text.split("|")[0]  
for(let i of d){
  if(i.buyer_sku_code == produkm){ 
  if (i.buyer_product_status === true) {
if (i.seller_product_status === true) {
   listProduct15 += `
*Nama:* ${i.product_name}\n*Harga:*  ${formatmoney(i.price)}\n*Seller:*
${i.seller_name}\n*Status Prioduct Seller:* Ready\n*Cutt Of:* ${i.end_cut_off}\n*Multi:* Bisa\n*Deskripsi:* ${i.desc}`;
    }} else {{
    listProduct15 += `
=> ${i.product_name}\n=> Harga: ${formatmoney(i.price)}\n=> Kode : ${i.buyer_sku_code.replace("", "")}\n=> Status : 🚫\n`;
  }}
  }
};

reply(`${listProduct15}`)
}
break


default:
if (budy.startsWith('<')) {
if (!isOwner) return
try {
return reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}

if (budy.startsWith('vv')) {
if (!isOwner) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}

if (budy.startsWith('uu')){
if (!isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}

if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
kris.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}

} catch (err) {
console.log(util.format(err))
let e = String(err)
kris.sendMessage("6289660378730@s.whatsapp.net", { text: "assalamualaikum Owner Ada Fitur Yang Eror Nih " + util.format(e), 
contextInfo:{
forwardingScore: 5, 
isForwarded: true
}})
}
}