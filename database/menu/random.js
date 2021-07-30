const random = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `❁ཻུ۪۪⸙͎ -----[ *RANDOM MENU* ]----- ❁ཻུ۪۪⸙͎
Hallo, ${pushname} 👋
Have a nice day User, ${sender.split("@")[0]}
╭════〘 *BOT* 〙════⊱❁۪۪۪
┃□╭─────────────────
┃□│⊱❥ NAME : ${pushname}
┃□│⊱❥ LEVEL : ${getLevelingLevel(sender)}
┃□│⊱❥ USER ${botName} : ${_registered.length}
┃□╰─────────────────
╰══════════════════⊱❁۪۪۪
Here are the features in this bot!✨
┏══════════════════⊱❁۪۪
┃╭───────────────────
┃│➸ *${prefix}randomhentong*
┃│➸ *${prefix}nekonime*
┃│➸ *${prefix}wibu*
┃│➸ *${prefix}loli*
┃│➸ *${prefix}neko*
┃│➸ *${prefix}blowjob*
┃│➸ *${prefix}husbu*
┃│➸ *${prefix}kpop*
┃│➸ *${prefix}anjing*
┃│➸ *${prefix}pokemon*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━❁۪۪
❁ཻུ۪۪⸙͎ -----[ *POWERED BY ${ownerName}* ]----- ❁ཻུ۪۪⸙͎`
}
exports.random = random