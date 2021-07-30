const gabut = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return ` ❁ཻུ۪۪⸙͎ -----[ *GABUTZ MENU* ]-----  ❁ཻུ۪۪⸙͎
Hallo, ${pushname} 👋
Have a nice day User, ${sender.split("@")[0]}
╭════〘 *BOT* 〙════⊱❁۪۪۪
┃□│⊱❥ NAME : ${pushname}
┃□│⊱❥ LEVEL : ${getLevelingLevel(sender)}
┃□│⊱❥ USER ${botName} : ${_registered.length}
┃□│
╰══════════════════⊱❁۪۪۪
Here are the features in this bot!✨
┏══════════════════ ❁ཻུ۪۪⸙͎
┃╭─────────────────
┃│➸ *${prefix}apakah*
┃│➸ *${prefix}bisakah*
┃│➸ *${prefix}kapankah*
┃│➸ *${prefix}hobby*
┃│➸ *${prefix}rate*
┃│➸ *${prefix}seberapagay*
┃│➸ *${prefix}nangis*
┃│➸ *${prefix}cium*
┃│➸ *${prefix}peluk*
┃│➸ *${prefix}truth*
┃│➸ *${prefix}dare*
┃│➸ *${prefix}timer*
┃╰─────────────────
┗══════════════════ ❁ཻུ۪۪⸙͎
 ❁ཻུ۪۪⸙͎ -----[ *POWERED BY ${ownerName}* ]-----  ❁ཻུ۪۪⸙͎`
}
exports.gabut = gabut