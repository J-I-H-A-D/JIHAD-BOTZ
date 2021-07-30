const sound = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `❀:ཻུ۪۪⸙ -----[ *SOUND MENU* ]----- ❀:ཻུ۪۪⸙
Hallo, ${pushname} 👋
Have a nice day User ${sender.split("@")[0]}
╭════〘 *BOT* 〙════⊱❁۪۪۪
┃□╭─────────────────
┃□│⊱❥ NAME : ${pushname}
┃□│⊱❥ LEVEL : ${getLevelingLevel(sender)}
┃□│⊱❥ USER ${botName} : ${_registered.length}
┃□╰─────────────────
╰══════════════════⊱❁۪۪۪
Here are the features in this bot!✨
┏══════════════════⊱❁۪۪۪
┃╭──────────────────
┃│➸ *${prefix}iri*
┃│➸ *${prefix}pale*
┃│➸ *${prefix}yamate*
┃│➸ *${prefix}bot*
┃│➸ *${prefix}sound*
┃│➸ *${prefix}sound1*
┃│➸ *${prefix}sound2*
┃│➸ *${prefix}sound3*
┃│➸ *${prefix}sound4*
┃│➸ *${prefix}sound5*
┃│➸ *${prefix}sound6*
┃│➸ *${prefix}sound7*
┃│➸ *${prefix}sound8*
┃│➸ *${prefix}sound9*
┃│➸ *${prefix}sound[10-25]*
┃╰──────────────────
┗══════════════════⊱❁۪۪۪
❀:ཻུ۪۪⸙ -----[ *POWERED BY ${ownerName}* ]----- ❀:ཻུ۪۪⸙`
}
exports.sound = sound