const other = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `❀:ཻུ۪۪⸙ -----[ *OTHER MENU* ]----- ❀:ཻུ۪۪⸙
Hallo, ${pushname} 👋
Have a nice day User, ${sender.split("@")[0]}
╭════〘 *IKY BOT* 〙════⊱❁۪۪۪
┃□╭─────────────────
┃□│⊱❥ NAME : ${pushname}
┃□│⊱❥ LEVEL : ${getLevelingLevel(sender)}
┃□│⊱❥ USER ${botName} : ${_registered.length}
┃□╰─────────────────
╰══════════════════⊱❁۪۪۪
Here are the features in this bot!✨
┏══════════════════⊱❁ཻུ۪۪⸙͎  
┃╭──────────────────
┃│➸ *${prefix}brainly*
┃│➸ *${prefix}pinterest*
┃│➸ *${prefix}bitly*
┃│➸ *${prefix}moddroid*
┃│➸ *${prefix}happymod*
┃│➸ *${prefix}resepmakanan*
┃│➸ *${prefix}beritahoax*
┃│➸ *${prefix}mutual*
┃│➸ *${prefix}next*
┃│➸ *${prefix}virtex*
┃│➸ *${prefix}virtex2*
┃│➸ *${prefix}timer*
┃│➸ *${prefix}nulis*
┃│➸ *${prefix}nulisbkiri*
┃│➸ *${prefix}nulisbkanan*
┃│➸ *${prefix}nulispolio*
┃╰──────────────────
┗══════════════════⊱❁۪۪۪
❀:ཻུ۪۪⸙ -----[ *POWERED BY ${ownerName}* ]----- ❀:ཻུ۪۪⸙`
}
exports.other = other