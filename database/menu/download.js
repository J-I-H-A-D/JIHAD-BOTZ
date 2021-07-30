const download = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `❀:ཻུ۪۪⸙ -----[ *DOWNLOAD MENU* ]----- ❀:ཻུ۪۪⸙
Hallo, ${pushname} 👋
Have a nice day User, ${sender.split("@")[0]}
╭════〘 *BOT* 〙════⊱❁۪۪۪
┃   ╭─────────────────
┃□│⊱❥ NAME : ${pushname}
┃□│⊱❥ LEVEL : ${getLevelingLevel(sender)}
┃□│⊱❥ USER ${botName} : ${_registered.length}
┃   ╰─────────────────
╰══════════════════⊱❁۪۪۪
Here are the features of this bot!✨
If you dont understand, type *${prefix}bingungcok*
┏══════════════════ ❁ཻུ۪۪⸙͎  
┃╭───────────────────
┃│➸ *${prefix}play*
┃│➸ *${prefix}yutubdl*
┃│➸ *${prefix}tiktod*
┃│➸ *${prefix}FB(perbaikan)*
┃│➸ *${prefix}IG(perbaikan)*
┃╰───────────────────
┗══════════════════ ❁ཻུ۪۪⸙͎  
❀:ཻུ۪۪⸙ -----[ *POWERED BY ${ownerName}* ]----- ❀:ཻུ۪۪⸙`
}
exports.download = download