import fetch from 'node-fetch'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
let chat = global.db.data.chats[m.chat]
if (chat.nsfw == false) {
return conn.sendButton(m.chat, '❗ ᴏᴘᴛɪᴏɴs ɴsғᴡ ᴅɪᴄʜᴀᴛ ɪɴɪ ʙᴇʟᴜᴍ ᴅɪɴʏᴀʟᴀᴋᴀɴ ᴏʟᴇʜ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ', botdate, null, [['ᴇɴᴀʙʟᴇ', '.on nsfw']], m)
} else if (chat.nsfw == true) {
try {
        let ani = await fetch('https://raw.githubusercontent.com/AyGemuy/RESTAPI/master/data/' + command + '.json')
        let mek = await ani.json()
        return conn.sendButtonImg(m.chat, mek.getRandom(), author, 'Nih.jpg', '🔄 Next 🔄', `/${command}`, fakes, adReply)
        } catch {
        throw eror
        }
        }
}
handler.command = handler.help = ["aesthetic",
"ahegao",
"akira",
"akiyama",
"ana",
"anjing",
"ass",
"asuna",
"ayuzawa",
"bdsm",
"blackpink",
"blowjob",
"boneka",
"boruto",
"cecan",
"cecan2",
"cecan3",
"cecan4",
"cecan5",
"chiho",
"china",
"chitoge",
"cogan",
"cogan2",
"cosplay",
"cosplayloli",
"cosplaysagiri",
"cuckold",
"cum",
"cyberspace",
"deidara",
"doraemon",
"eba",
"elaina",
"emilia",
"ero",
"erza",
"femdom",
"foot",
"gangbang",
"gifs",
"glasses",
"gremory",
"hekel",
"hentai",
"hestia",
"hinata",
"inori",
"Islamic",
"isuzu",
"itachi",
"itori",
"jahy",
"jeni",
"jiso",
"justina",
"kaga",
"kagura",
"kakasih",
"kaori",
"kartun",
"katakata",
"keneki",
"kotori",
"kpop",
"kucing",
"kurumi",
"lisa",
"loli",
"madara",
"manga",
"masturbation",
"megumin",
"mikasa",
"miku",
"minato",
"mobil",
"montor",
"mountain",
"naruto",
"neko",
"neko2",
"nekonime",
"nezuko",
"nsfwloli",
"onepiece",
"orgy",
"panties",
"pentol",
"pokemon",
"ppcouple",
"programing",
"profilwa",
"pubg",
"pussy",
"rize",
"rose",
"ryujin",
"sagiri",
"sakura",
"sasuke",
"satanic",
"shina",
"shinka",
"shinomiya",
"shizuka",
"shota",
"tatasurya",
"tejina",
"technology",
"tentacles",
"thighs",
"toukachan",
"tsunade",
"waifu",
"waifu2",
"wallhp",
"yotsuba",
"yuki",
"yulibocil",
"yumeko",
"yuri",
"zettai",
"zettai"]
handler.tags = ['anime']
export default handler