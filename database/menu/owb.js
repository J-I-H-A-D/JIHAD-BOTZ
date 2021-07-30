const owb = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return ` ❁ཻུ۪۪⸙͎ -----[ *OWNER MENU* ]-----  ❁ཻུ۪۪⸙͎
Hallo, ${pushname} 👋
Semoga harimu Menyenangkan User, ${sender.split("@")[0]}
╭════〘 *IKY BOT* 〙════⊱❁۪۪۪
┃□╭─────────────────
┃□│⊱❥ NAMA : ${pushname}
┃□│⊱❥ LEVEL : ${getLevelingLevel(sender)}
┃□│⊱❥ USER ${botName} : ${_registered.length}
┃□╰─────────────────
╰══════════════════⊱❁۪۪۪
Berikut adalah fitur yang ada pada bot ini!✨
┏══════════════════⊱❁۪۪۪
┃╭───────────────────
┃│➸ *${prefix}bc*
┃│➸ *${prefix}bcgc*
┃│➸ *${prefix}clearall*
┃│➸ *${prefix}block*
┃│➸ *${prefix}unblock*
┃│➸ *${prefix}clone*
┃│➸ *${prefix}setppbot*
┃│➸ *${prefix}setreply*
┃│➸ *${prefix}setprefix*
┃│➸ *${prefix}ban*
┃│➸ *${prefix}unban*
┃╰──────────────────
┗══════════════════⊱❁۪۪۪
 ❁ཻུ۪۪⸙͎ -----[ *POWERED BY ${ownerName}* ]-----  ❁ཻུ۪۪⸙͎`
}
exports.owb = owb