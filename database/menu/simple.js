const simple = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `❀:ཻུ۪۪⸙ -----[ *SIMPLE MENU* ]----- ❀:ཻུ۪۪⸙
Hallo, ${pushname} 👋
Have a nice day User ${sender.split("@")[0]}
╭════〘 *BOT* 〙════⊱❁۪۪۪
┃□╭─────────────────
┃□│⊱❥ NAME : ${pushname}
┃□│⊱❥ LEVEL : ${getLevelingLevel(sender)}
┃□│⊱❥ USER ${botName} : ${_registered.length}
┃□╰─────────────────
╰══════════════════⊱❁۪۪۪
Here are the features of this bot!✨
If you dont understand type *${prefix}bingungcok*
┏══════════════════⊱❁۪۪۪
┃╭───────────────────
┃│➸ *${prefix}sticker*
┃│➸ *${prefix}ttp*
┃│➸ *${prefix}tts*
┃│➸ *${prefix}toimg*
┃│➸ *${prefix}nulis*
┃│➸ *${prefix}stalkig*
┃│➸ *${prefix}quotes*
┃│➸ *${prefix}bikinquote*
┃╰───────────────────
┗══════════════════⊱❁۪۪۪
❀:ཻུ۪۪⸙ -----[ *POWERED BY ${ownerName}* ]----- ❀:ཻུ۪۪⸙`
}
exports.simple = simple