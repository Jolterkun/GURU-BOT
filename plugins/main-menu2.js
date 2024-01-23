import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import fs from 'fs'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
import { promises } from 'fs'
import { join } from 'path'
const time = moment.tz('Asia/Kolkata').format('HH')
let wib = moment.tz('Asia/Kolkata').format('HH:mm:ss')
//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command}) => {
    let d = new Date(new Date + 3600000)
    let locale = 'en'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
let pp = './Assets/Gurulogo.jpg'
let user = global.db.data.users[who]
let { name, exp, diamond, lastclaim, registered, regTime, age, level, role, warn } = global.db.data.users[who]
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let totaluser = Object.values(global.db.data.users).length 
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850) 
let greeting = ucapan()
let quote = quotes[Math.floor(Math.random() * quotes.length)];

let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `
🚀 *_Hi babe ${name}😗❤️, ${greeting}! Boobs>>>>>>_* 🚀

📜 *_Quote of the day: ${quote}_* 📜

┏━💼 _User Info:_ 💼━┓
┃ 👾  *User Tag:* ${taguser} 
┃ 🎩  *Name:* ${name} 
┃ 🍒  *Boobs or Ass:* Boobs🥹
┃ 🤵🏽‍♂️  *Race:* Black😗❤️
┃ 📙  *Manga:* Demon slayer
┃ 🎬  *Anime:* One piece>>

┗━━━━━━━━━━━┛

✦ ───『 *group* 』─── ⚝
  ◈ .getbio <@tag/reply>  Ⓛ
  ◈ .animequote
  ◈ .Setdesc <text>
  ◈ .setname <text>
  ◈ .add
  ◈ .delete
  ◈ .delwarn @user
  ◈ .demote (@tag)
  ◈ .infogp
  ◈ .hidetag
  ◈ .invite <917xxx>
  ◈ .kick @user
  ◈ .link
  ◈ .poll question|option|option
  ◈ .profile
  ◈ .promote
  ◈ .resetlink
  ◈ .setbye <text>
  ◈ .group *open/close*
  ◈ .setwelcome <text>
  ◈ .simulate <event> @user
  ◈ .staff
  ◈ .tagall
  ◈ .totag
  ◈ .warn @user
  ◈ .warns
  ◈ .main
  ╰──────────⳹`
  
  let ownermenu = `
  ✦ ───『 *owner* 』─── ⚝
  ◈ .addprem <@tag>
  ◈ .addowner @user
  ◈ .allow <@tag>
  ◈ .HEROKU
  ◈ .ban @user
  ◈ .banchat
  ◈ .tx
  ◈ .broadcastgroup <text>
  ◈ .bcgc <text>
  ◈ .cleartmp
  ◈ .delexpired
  ◈ .delprem @user
  ◈ .removeowner @user
  ◈ .setppbotfull
  ◈ .getplugin <name file>
  ◈ .getfile <name file>
  ◈ .join <chat.whatsapp.com> <dias>
  ◈ .reset <54xxx>
  ◈ .resetprefix
  ◈ .restart
  ◈ ..setprefix
  ◈ ..setprefix [symbol]
  ◈ .unban @user
  ◈ .unbanchat
  ◈ .update
  ◈ .config
  ◈ .listban
  ◈ .deleteplugin <name>
  ╰──────────⳹`
  
  let funmenu = `
  ✦ ───『 *fun* 』─── ⚝
  ◈ .afk <reason>
  ◈ .tomp3
  ◈ .toav
  ◈ .bot
  ◈ .character @tag
  ◈ .dare
  ◈ .flirt
  ◈ .gay @user
  ◈ .pickupline
  ◈ .question
  ◈ .shayari
  ◈ .ship
  ◈ .yomamajoke
  ◈ .truth
  ◈ .waste @user
  ◈ .image
  ◈ .meme
  ◈ .quote
  ╰──────────⳹`
  
  let reactmenu = `
  ✦ ───『 *reaction* 』─── ⚝
  ◈ .bully @tag
  ◈ .cuddle @tag
  ◈ .cry @tag
  ◈ .hug @tag
  ◈ .awoo @tag
  ◈ .kiss @tag
  ◈ .lick @tag
  ◈ .pat @tag
  ◈ .smug @tag
  ◈ .bonk @tag
  ◈ .yeet @tag
  ◈ .blush @tag
  ◈ .smile @tag
  ◈ .wave @tag
  ◈ .highfive @tag
  ◈ .handhold @tag
  ◈ .nom @tag
  ◈ .bite @tag
  ◈ .glomp @tag
  ◈ .slap @tag
  ◈ .kill @tag
  ◈ .happy @tag
  ◈ .wink @tag
  ◈ .poke @tag
  ◈ .dance @tag
  ◈ .cringe @tag
  ╰──────────⳹`
  
  let dlmenu = `
  ✦ ───『 *downloader* 』─── ⚝
  ◈ .facebook <url>
  ◈ .gdrive 🅟
  ◈ .gitclone <url>
  ◈ .igstalk
  ◈ .instagram
  ◈ .mediafire <url>
  ◈ .mega
  ◈ .modapk
  ◈ .play <query>
  ◈ .play2 <text>
  ◈ .playvid <text>
  ◈ .spotify
  ◈ .tiktok <url>
  ◈ .tiktokstalk
  ◈ .twitter <url>
  ◈ .ytmp3 <url>
  ◈ .ytsearch
  ◈ .ytmp4 <yt-link>
  ◈ .wallpaper <query>
  ╰──────────⳹`
  
  let gamemenu = `
  ✦ ───『 *game* 』─── ⚝
  ◈ .slot <amount>
  ◈ .chess [from to]
  ◈ .chess delete
  ◈ .chess join
  ◈ .chess start
  ◈ .delttt
  ◈ .guessflag
  ◈ .Maths <modes>
  ◈ .ppt <rock/paper/scissors>
  ◈ .tictactoe <tag number>
  ╰──────────⳹`
  let logomenu = `
  ✦ ───『 *maker* 』─── ⚝
  ◈ .blur
  ◈ .difuminar2
  ◈ .hornycard
  ◈ .hornylicense
  ◈ .gfx1
  ◈ .gfx2
  ◈ .gfx3
  ◈ .gfx4
  ◈ .gfx5
  ◈ .gfx6
  ◈ .gfx7
  ◈ .gfx8
  ◈ .gfx9
  ◈ .gfx10
  ◈ .gfx11
  ◈ .gfx12
  ◈ .simpcard
  ◈ .itssostupid
  ◈ .iss
  ◈ .stupid
  ◈ .tweet <comment>
  ◈ .lolicon
  ◈ .ytcomment <comment>
  ╰──────────⳹`
  
  let stickermenu = `
  ✦ ───『 *sticker* 』─── ⚝
  ◈ .emojimix <emoji+emoji>
  ◈ .getsticker
  ◈ .smaker
  ◈ .stickerwithmeme (caption|reply media)
  ◈ .swmeme <url>
  ◈ .swm(caption|reply media)
  ◈ .sfull
  ◈ .toimg <sticker>
  ◈ .tovid
  ◈ .trigger <@user>
  ◈ .ttp
  ◈ .ttp2
  ◈ .ttp3
  ◈ .ttp4
  ◈ .ttp5
  ◈ .attp
  ◈ .attp2
  ◈ .attp3
  ◈ .take <name>|<author>
  ╰──────────⳹`
  
  let audiomenu = `
  ✦ ───『 *audio* 』─── ⚝
  ◈ .bass [vn]
  ◈ .blown [vn]
  ◈ .deep [vn]
  ◈ .earrape [vn]
  ◈ .fast [vn]
  ◈ .fat [vn]
  ◈ .nightcore [vn]
  ◈ .reverse [vn]
  ◈ .robot [vn]
  ◈ .slow [vn]
  ◈ .smooth [vn]
  ◈ .tupai [vn]
  ╰──────────⳹`
  
  
  let newsmenu = `
  ✦ ───『 *news* 』─── ⚝
  ◈ .news
  ◈ .technews
  ◈ .ndtv
  ╰──────────⳹
  `
  let economy = `
  ✦ ───『 *economy* 』─── ⚝
  ◈ .addgold <@user>
  ◈ .addxp <@user>
  ◈ .bank
  ◈ .buych
  ◈ .cock-fight <amount>
  ◈ .buy
  ◈ .buyall
  ◈ .daily
  ◈ .deposit
  ◈ .gamble <amount> <color(red/black)>
  ◈ .give credit [amount] [@tag]
  ◈ .levelup
  ◈ .rank
  ◈ .rob
  ◈ .roulette <amount> <color(red/black)>
  ◈ .wallet
  ◈ .withdraw
  ◈ .work
  ╰──────────⳹`
  let animemenu = `
  ✦ ───『 *anime* 』─── ⚝
  ◈ .anime
  ◈ .akira
  ◈ .akiyama
  ◈ .anna
  ◈ .asuna
  ◈ .ayuzawa
  ◈ .boruto
  ◈ .chiho
  ◈ .chitoge
  ◈ .deidara
  ◈ .erza
  ◈ .elaina
  ◈ .eba
  ◈ .emilia
  ◈ .hestia
  ◈ .hinata
  ◈ .inori
  ◈ .isuzu
  ◈ .itachi
  ◈ .itori
  ◈ .kaga
  ◈ .kagura
  ◈ .kaori
  ◈ .keneki
  ◈ .kotori
  ◈ .kurumi
  ◈ .madara
  ◈ .mikasa
  ◈ .miku
  ◈ .minato
  ◈ .naruto
  ◈ .nezuko
  ◈ .sagiri
  ◈ .sasuke
  ◈ .sakura
  ◈ .manhwa
  ◈ .waifu
  ◈ .neko
  ◈ .zerotwo
  ◈ .loli
  ◈ .pokedex <pokemon>
  ◈ .trace
  ╰──────────⳹
  `
  let nsfwmenu = `
  ✦ ───『 *nsfw* 』─── ⚝
  ◈ .genshin
  ◈ .swimsuit
  ◈ .schoolswimsuit
  ◈ .white
  ◈ .barefoot
  ◈ .touhou
  ◈ .gamecg
  ◈ .hololive
  ◈ .uncensored
  ◈ .sunglasses
  ◈ .glasses
  ◈ .weapon
  ◈ .shirtlift
  ◈ .chain
  ◈ .fingering
  ◈ .flatchest
  ◈ .torncloth
  ◈ .bondage
  ◈ .demon
  ◈ .wet
  ◈ .pantypull
  ◈ .headdress
  ◈ .headphone
  ◈ .tie
  ◈ .anusview
  ◈ .shorts
  ◈ .stokings
  ◈ .topless
  ◈ .beach
  ◈ .bunnygirl
  ◈ .bunnyear
  ◈ .idol
  ◈ .vampire
  ◈ .gun
  ◈ .maid
  ◈ .bra
  ◈ .nobra
  ◈ .bikini
  ◈ .whitehair
  ◈ .blonde
  ◈ .pinkhair
  ◈ .bed
  ◈ .ponytail
  ◈ .nude
  ◈ .dress
  ◈ .underwear
  ◈ .foxgirl
  ◈ .uniform
  ◈ .skirt
  ◈ .sex
  ◈ .sex2
  ◈ .sex3
  ◈ .breast
  ◈ .twintail
  ◈ .spreadpussy
  ◈ .tears
  ◈ .seethrough
  ◈ .breasthold
  ◈ .drunk
  ◈ .fateseries
  ◈ .spreadlegs
  ◈ .openshirt
  ◈ .headband
  ◈ .food
  ◈ .close
  ◈ .tree
  ◈ .nipples
  ◈ .erectnipples
  ◈ .horns
  ◈ .greenhair
  ◈ .wolfgirl
  ◈ .catgirl
  ◈ .nsfw
  ◈ .ass
  ◈ .boobs
  ◈ .lesbian
  ◈ .pussy
  ◈ .pack
  ◈ .xvid
  ◈ .xnxx
  ╰──────────⳹`
  
  let toolsmenu = `
  ✦ ───『 *tools* 』─── ⚝
  ◈ .nowa
  ◈ .qr <text>
  ◈ .qrcode <text>
  ◈ .style <key> <text>
  ◈ .weather *<place>*
  ◈ .dehaze
  ◈ .recolor
  ◈ .hdr
  ◈ .length <amount>
  ◈ .tinyurl <link>
  ◈ .shorten <link>
  ◈ .tempmail
  ◈ .shazam
  ◈ .cal <equation>
  ◈ .carbon <code>
  ◈ .define <word>
  ◈ .element
  ◈ .google
  ◈ .itunes
  ◈ .lyrics
  ◈ .imdb
  ◈ .course
  ◈ .randomcourse
  ◈ .readmore <text1>|<text2>
  ◈ .readvo
  ◈ .removebg
  ◈ .ss <url>
  ◈ .ssf <url>
  ◈ .subreddit
  ◈ .telesticker  Ⓛ
  ◈ .tourl
  ◈ .translate <lang> <text>
  ◈ .true
  ◈ .tts <lang> <task>
  ◈ .wa
  ◈ .wikipedia
  ╰──────────⳹`
  
  let Aimenu = `
  ✦ ───『 *AI* 』─── ⚝
  ◈ .bing
  ◈ .dalle
  ◈ .chatgpt
  ◈ .toanime
  ◈ .gitagpt
  ◈ .tocartoon
  ◈ .ai
  ◈ .bard
  ◈ .alexa
  ◈ .bingimg
  ◈ .gemini
  ╰──────────⳹
  `
  let religionmenu = `
  ✦ ───『 *religion* 』─── ⚝
  ◈ .gita [verse_number]
  ◈ .quran [surah_number|surah_name]
  ╰──────────⳹`
  
  let botmenu = `
  ✦ ───『 *Bot Menu* 』─── ⚝
  ◈ .ping
  ◈ .runtime
  ◈ .script
  ◈ .server
  ◈ .blocklist
  ◈ .alive
  ◈ .info
  ◈ .owner
  ◈ .totalfeature
  ◈ .list
  ◈ .messi
  ◈ .cristianoronaldo
  ◈ .cr7
  ◈ .ppcouple
  ◈ .ppcp
  ◈ .pinterest
  ◈ .reg <name.age>
  ◈ .mysn
  ◈ .unreg 
  ╰──────────⳹
  `
  let pluginmenu = `
  ✦ ───『 *plugin* 』─── ⚝
  ◈ .plugins
  ◈ .install <Gist URL>
  ╰──────────⳹
💡 *_Remember, when in doubt, use ${usedPrefix}list or ${usedPrefix}help2. It's like my magic spell book!_* 💡
`


    conn.sendFile(m.chat, pp, 'perfil.jpg', str, m, null, rpyt)
    m.react(done)

}
handler.help = ['main']
handler.tags = ['group']
handler.command = ['menu2', 'help2'] 

export default handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
    
    function ucapan() {
      const time = moment.tz('WAT').format('HH')
      let res = "happy early in the day☀️"
      if (time >= 4) {
        res = "Good Morning 🌄"
      }
      if (time >= 10) {
        res = "Good Afternoon ☀️"
      }
      if (time >= 15) {
        res = "Good Afternoon 🌇"
      }
      if (time >= 18) {
        res = "Good Night 🌙"
      }
      return res
    }
    const quotes = [“Don’t rush money at a young age bruv, but do well to plan for the future”
“Don’t compare yourself to others because you’re not better yet”
“I love my babe🥲❤️”
“Anyone who doesn’t watch anime needs to be wiped out🙂😗”
“Boobies are so soft😔❤️”
“Don’t rush money at a young age bruv, but do well to plan for the future”
“Don’t compare yourself to others because you’re not better yet”
“I love my babe🥲❤️”
“Anyone who doesn’t watch anime needs to be wiped out🙂😗”
“Boobies are so soft😔❤️”
“Don’t rush money at a young age bruv, but do well to plan for the future”
“Don’t compare yourself to others because you’re not better yet”
“I love my babe🥲❤️”
“Anyone who doesn’t watch anime needs to be wiped out🙂😗”
“Boobies are so soft😔❤️”
“Don’t rush money at a young age bruv, but do well to plan for the future”
“Don’t compare yourself to others because you’re not better yet”
“I love my babe🥲❤️”
“Anyone who doesn’t watch anime needs to be wiped out🙂😗”
“Boobies are so soft😔❤️”
“Don’t rush money at a young age bruv, but do well to plan for the future”
“Don’t compare yourself to others because you’re not better yet”
“I love my babe🥲❤️”
“Anyone who doesn’t watch anime needs to be wiped out🙂😗”
“Boobies are so soft😔❤️”
“Don’t rush money at a young age bruv, but do well to plan for the future”
“Don’t compare yourself to others because you’re not better yet”
“I love my babe🥲❤️”
“Anyone who doesn’t watch anime needs to be wiped out🙂😗”
“Boobies are so soft😔❤️”
“Don’t rush money at a young age bruv, but do well to plan for the future”
“Don’t compare yourself to others because you’re not better yet”
“I love my babe🥲❤️”
“Anyone who doesn’t watch anime needs to be wiped out🙂😗”
“Boobies are so soft😔❤️”
“Don’t rush money at a young age bruv, but do well to plan for the future”
“Don’t compare yourself to others because you’re not better yet”
“I love my babe🥲❤️”
“Anyone who doesn’t watch anime needs to be wiped out🙂😗”
“Boobies are so soft😔❤️”
“Don’t rush money at a young age bruv, but do well to plan for the future”
“Don’t compare yourself to others because you’re not better yet”
“I love my babe🥲❤️”
“Anyone who doesn’t watch anime needs to be wiped out🙂😗”
“Boobies are so soft😔❤️”
“Don’t rush money at a young age bruv, but do well to plan for the future”
“Don’t compare yourself to others because you’re not better yet”
“I love my babe🥲❤️”
“Anyone who doesn’t watch anime needs to be wiped out🙂😗”
“Boobies are so soft😔❤️”
“Don’t rush money at a young age bruv, but do well to plan for the future”
“Don’t compare yourself to others because you’re not better yet”
“I love my babe🥲❤️”
“Anyone who doesn’t watch anime needs to be wiped out🙂😗”
“Boobies are so soft😔❤️”
“Don’t rush money at a young age bruv, but do well to plan for the future”
“Don’t compare yourself to others because you’re not better yet”
“I love my babe🥲❤️”
“Anyone who doesn’t watch anime needs to be wiped out🙂😗”
“Boobies are so soft😔❤️”
“Don’t rush money at a young age bruv, but do well to plan for the future”
“Don’t compare yourself to others because you’re not better yet”
“I love my babe🥲❤️”
“Anyone who doesn’t watch anime needs to be wiped out🙂😗”
“Boobies are so soft😔❤️”
“Don’t rush money at a young age bruv, but do well to plan for the future”
“Don’t compare yourself to others because you’re not better yet”
“I love my babe🥲❤️”
“Anyone who doesn’t watch anime needs to be wiped out🙂😗”
“Boobies are so soft😔❤️”
“Don’t rush money at a young age bruv, but do well to plan for the future”
“Don’t compare yourself to others because you’re not better yet”
“I love my babe🥲❤️”
“Anyone who doesn’t watch anime needs to be wiped out🙂😗”
“Boobies are so soft😔❤️”
“Don’t rush money at a young age bruv, but do well to plan for the future”
“Don’t compare yourself to others because you’re not better yet”
“I love my babe🥲❤️”
“Anyone who doesn’t watch anime needs to be wiped out🙂😗”
“Boobies are so soft😔❤️”
“Don’t rush money at a young age bruv, but do well to plan for the future”
“Don’t compare yourself to others because you’re not better yet”
“I love my babe🥲❤️”
“Anyone who doesn’t watch anime needs to be wiped out🙂😗”
“Boobies are so soft😔❤️”
“Don’t rush money at a young age bruv, but do well to plan for the future”
“Don’t compare yourself to others because you’re not better yet”
“I love my babe🥲❤️”
“Anyone who doesn’t watch anime needs to be wiped out🙂😗”
“Boobies are so soft😔❤️”
      "I'm not saying I'm Spider-Man. I'm just saying no one has ever seen me and Spider-Man in the same room together.",
      "I'm not saying I'm a superhero. I'm just saying no one has ever seen me and a superhero in the same room together.",
      "वक्त हमे बहुत कुछ सिखा देता है, खासकर तब जब हमारे पास वक्त नहीं होता।",
      "जिंदगी एक किताब की तरह होती है, हर दिन नया पन्ना बदलता है। कभी हंसते हैं, कभी रोते हैं, पर हर किसी की कहानी अधूरी होती है!",
      "पढ़ाई करो तो दिल लगता नही, दिल लगाओ तो दिमाग़ लगता नहीं।",
      "दोस्ती इतनी गहरी करो की दिल में बस जाओ, ऐसे दोस्ती निभाओ की हमे भी तुम्हारे दोस्त होने पर नाज हो।",
      "मेरे दोस्त तुम बहुत याद आते हो, जब भी भूख लगती है वो समोसे बहुत याद आते है।",
      "जीवन का असली मज़ा तो तब आता है, जब दूसरे आपकी ज़िंदगी जीने की कोशिश करते हैं।",
      "कुछ लोग तो इतने फालतू होते हैं, खुद की ज़िंदगी खुद ही नहीं जी पाते और दूसरों की ज़िंदगी में टांग अड़ा देते हैं।"
];
