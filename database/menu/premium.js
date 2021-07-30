const vip = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *PREMIUM MENU* ]----- 🔰
Hallo, ${pushname} 👋
Have a nice day User ${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ NAME : ${pushname}
┃│➸ LEVEL : ${getLevelingLevel(sender)}
┃│➸ USER ${botName} : ${_registered.length}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
Here are the features in this bot!✨
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ *${prefix}premiumlist*
┃│➸ *${prefix}randomhentong*
┃│➸ *${prefix}bokep*
┃│➸ *${prefix}blowjob*
┃│➸ *${prefix}nulis1*
┃│➸ *${prefix}nulis2*
┃│➸ *${prefix}mutual*
┃│➸ *${prefix}next*
┃│➸ *${prefix}nangis*
┃│➸ *${prefix}cium*
┃│➸ *${prefix}peluk*
┃│➸ *${prefix}tiktod*
┃│➸ *${prefix}yutubdl*
┃│➸ *${prefix}hidetag5*
┃│➸ *${prefix}hidetag10*
┃│➸ *${prefix}moddroid*
┃│➸ *${prefix}happymod*
┃│➸ *${prefix}ninjalogo*
┃│➸ *${prefix}halloweentext*
┃│➸ *${prefix}pornhub*
┃│➸ *${prefix}glitchtext*
┃│➸ *${prefix}blackpink*
┃│➸ *${prefix}cloudtext*
┃│➸ *${prefix}neontext*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.vip = vip