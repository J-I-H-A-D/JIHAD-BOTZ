const maker = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `❀:ཻུ۪۪⸙ -----[ *MAKER MENU* ]----- ❀:ཻུ۪۪⸙
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
 If you dont understand, type *${prefix}bingungcok*
┏══════════════════⊱❁۪۪۪
┃╭───────────────────
┃│➸ *${prefix}tahta*
┃│➸ *${prefix}pornhub*
┃│➸ *${prefix}halloweentext*
┃│➸ *${prefix}cloudtext*
┃│➸ *${prefix}gemboktext*
┃│➸ *${prefix}glitchtext*
┃│➸ *${prefix}silktext*
┃│➸ *${prefix}party* [text]
┃│➸ *${prefix}quotemaker* [tx|tx|random]
┃│➸  *${prefix}glitch* [text]
┃│➸ *${prefix}lovemake* [text]
┃│➸ *${prefix}fire* [text]
┃│➸ *${prefix}apiteks* [text]
┃│➸ *${prefix}airtext* [text]
┃│➸ *${prefix}metaltext* [text]
┃│➸ *${prefix}rtext* [text]
┃│➸ *${prefix}wolflogo* [text]
┃╰───────────────────
┗══════════════════⊱❁۪۪۪
❀:ཻུ۪۪⸙ -----[ *POWERED BY ${ownerName}* ]----- ❀:ཻུ۪۪⸙`
}
exports.maker = maker