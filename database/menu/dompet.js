const dompet = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return ` ❁ཻུ۪۪⸙͎ -----[ *WALLET MENU* ]-----  ❁ཻུ۪۪⸙͎
Hallo, ${pushname} 👋
Have a nice day User, ${sender.split("@")[0]}
╭════〘 *BOT* 〙════⊱❁۪۪۪
┃   ╭─────────────────
┃□│⊱❥ NAME : ${pushname}
┃□│⊱❥ LEVEL : ${getLevelingLevel(sender)}
┃□│⊱❥ USER ${botName} : ${_registered.length}
┃   ╰─────────────────
╰══════════════════⊱❁۪۪۪
Here are the features in this bot!✨
┏══════════════════⊱❁۪۪۪
┃ ╭─────────────────
┃ │➸ *${prefix}limit*
┃ │➸ *${prefix}atm*
┃ │➸ *${prefix}transfer*
┃ │➸ *${prefix}buylimit*
┃ ╰─────────────────
┗══════════════════⊱❁۪۪۪
 ❁ཻུ۪۪⸙͎ -----[ *POWERED BY ${ownerName}* ]----- ❁ཻུ۪۪⸙͎`
}
exports.dompet = dompet