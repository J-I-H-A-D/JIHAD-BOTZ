exports.wait = () => {
	return`ᴘʟᴇᴀsᴇ ᴡᴀɪᴛ ʙʀᴜʜ`
}

exports.succes = () => {
	return`*sᴜᴄᴄᴇss!!*`
}

exports.lvlon = () => {
	return`ᴇɴᴀʙʟᴇ ʟᴇᴠᴇʟɪɴɢ`
}

exports.lvloff = () => {
	return`ᴅɪsᴀʙʟᴇ ʟᴇᴠᴇʟɪɴɢ`
}

exports.lvlnul = () => {
	return`ᴇɴɪᴋ ᴀʀɪʏɪʟʟᴀ`
}

exports.lvlnoon = () => {
	return`ɴᴛʜᴏ ᴍʏʀ ᴀᴍ ɪᴛʜ`
}

exports.noregis = () => {
	return`ʜᴇʏ ʙʀᴜʜ ɴɪɴɢᴀʟ ᴠᴇʀɪғʏᴇᴅ ᴀʟʟᴀ ᴀᴛʜᴏɴᴅ ɪɢᴀɴᴇ ᴛʏᴘᴇ ᴀᴋ\nᴘʟᴇᴀsᴇ ᴛʏᴘᴇ <ᴇxᴀᴍᴘʟᴇ>\n*!ᴠᴇʀɪғʏ*`
}

exports.baned = () => {
	return`ᴏᴡɴᴇʀ ɴɪɴɴᴇ ʙᴀɴ ᴀᴋᴋɪ ᴀᴛʜᴏɴᴅ ɴɪɴᴋ ᴇɴɴᴇ ᴜsᴇ ᴀᴋᴀɴ ᴘᴀᴛᴛɪʟᴀ`
}

exports.rediregis = () => {
	return`ɴɪ ʀᴇɢɪsᴛᴇᴅ ᴀɴ ɴɪɴɴᴇ ɴᴊᴀɴ ᴇɴᴛᴇ ᴅᴀᴛᴀʙᴀsᴇ ᴀᴅᴅ ᴀᴋᴋɪ`
}

exports.stikga = () => {
	return`sᴏʀʀʏ ᴄᴏɴᴠᴇʀᴛɪɴɢ ғᴀɪʟᴅ`
}

exports.linkga = () => {
	return`ᴛʜᴇ ʟɪɴᴋ ɪs ɴᴏᴛ ᴀʟʟᴏᴡᴇᴅ ᴠʀᴏɪ`
}

exports.groupo = () => {
	return`ɢʀᴏᴜᴘ ᴏɴʟʏ`
}

exports.ownerb = () => {
	return`ᴏᴡɴᴇʀ ʙᴏᴛ ᴏɴʟʏ`
}

exports.ownerg = () => {
	return`ᴏᴡɴᴇʀ ɢʀᴏᴜᴘ ᴏɴʟʏ`
}

exports.admin = () => {
	return`ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ ᴏɴʟʏ`
}

exports.badmin = () => {
	return`ɪ ᴀᴍ sᴏʀʀʏ ɴᴊᴀɴ ᴀᴅᴍɪɴ ᴀʟʟᴀ`
},

exports.antiNsfwOn = () => {
	return`ɴsғᴡ ᴍᴏᴅᴇ ᴏɴ`
}

exports.antiNswfOff = () => {
	return`ɴsғᴡ ᴍᴏᴅᴇ ᴏғғ`
}



exports.nsfwoff = () => {
	return`ɴsғᴡ ᴏᴋ ʙɪᴇ`
}

exports.bug = () => {
	return`*The problem has been reported to the BOT owner, false report/playing games will not be responded*`
}

exports.wrongf = () => {
	return`ᴛᴇᴋs ɴʏᴀ ᴍᴀɴᴀ ᴋᴀᴋ??..`
}

exports.wrongFormat = () => {
	return`ᴇʀʀᴏʀ ᴋᴀᴋ...`
}

exports.clears = () => {
	return`sᴜᴄᴄᴇss ᴄʟᴇᴀʀᴀʟʟ`
}

exports.pc = () => {
	return`*「❗」REGISTRATION*\n\To find out if you have registered, please check the message I sent \n\nNOTE:\n*if you haven't received the message. means you havent saved the bot number*`
}

exports.registered = (nameUser, ageUser, serialUser, time, sender, botName) => {
	return`*「 SUCCESSFUL REGISTRATIONll 」*\nUser Info :\n\n*➸ Name : ${namaUser}*\n*➸ Number : wa.me/${sender.split("@")[0]}*\n*➸ Age : ${umurUser}*\n*➸ Registration time : ${time}*\n\n*「SN」: ${serialUser}*\n_NOTE : This message is very important:v_`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* not found\try to write *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*sorry but ${pushname} not owner script*`
}
exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 SAFE 」*
➸ *ɴᴀᴍᴇ* : ${pushname}
➸ *ɴᴜᴍʙᴇʀ* : wa.me/${sender.split("@")[0]}
➸ *xᴘ* : ${getLevelingXp(sender)}
➸ *ʟᴇᴠᴇʟ* : ${getLevel} ➸ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*maaf ${pushname} limit hari ini habis*\n*limit di reset setiap jam 24:00*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
remaining your limit : ${limitCounts}

Upgrade premium my boss, lets be free to use bots`
}

exports.satukos = () => {
	return`*Add parameters 1/enable 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`┏━━━━━━━♡ *ᴀᴛᴍ* ♡━━━━━━━┓\n┃╭───────────────────\n┃│➸ ɴᴀᴍᴇ : ${pushname}\n┃│➸ ɴᴜᴍʙᴇʀ : ${sender.split("@")[0]}\n┃│➸ ᴍᴏɴᴇʏ : ${uangkau}\n┃╰───────────────────\n┗━━━━━━━━━━━━━━━━━━━━┛`
}
