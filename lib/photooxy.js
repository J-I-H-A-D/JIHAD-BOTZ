const request = require("request");
const cheerio = require("cheerio");

const tema = {
  shadow: "https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html",
  romantic: "https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html",
  smoke: "https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html",
  burnPapper: "https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html",
  naruto: "https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html",
  loveMsg: "https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html",
  Bit: "https://photooxy.com/logo-and-text-effects/8-bit-text-on-arcade-rift-175.html",
  Legends: "https://photooxy.com/league-of-legends/make-great-cover-lol-133.html",
  Poke: "https://photooxy.com/movies/make-pokemon-wallpaper-with-your-name-149.html",
  crossfire: "https://photooxy.com/cross-fire/nice-cross-fire-cover-137.html",
  Sad: "https://en.ephoto360.com/write-text-on-wet-glass-online-589.html",
  Bear: "https://en.ephoto360.com/free-bear-logo-maker-online-673.html",
  Devil: "https://en.ephoto360.com/neon-devil-wings-text-effect-online-683.html",
  Avatar: "https://photooxy.com/logo-and-text-effects/gradient-avatar-text-effect-207.html",
  Rainbow: "https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html",
  Sky: "https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html",
  msgGrass: "https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html",
  Wolf: "https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html",
  write: "https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html",
  grapiti: "https://photooxy.com/banner-cover/graffiti-text-cover-222.html",
  apicuy: "https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html",
  Glass: "https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html",
  Harry: "https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html",
  Glitch: "https://photooxy.com/logo-and-text-effects/make-tik-tok-text-effect-375.html",
  Gugel: "https://photooxy.com/other-design/make-google-suggestion-photos-238.html",
  Glown: "https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html",
  doubleHeart: "https://photooxy.com/logo-and-text-effects/love-text-effect-372.html",
  coffeCup: "https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html",
  loveText: "https://photooxy.com/logo-and-text-effects/love-text-effect-372.html",
  butterFly: "https://photooxy.com/logo-and-text-effects/butterfly-text-with-reflection-effect-183.html"
}

async function pShadow(text1) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.shadow,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_1: text1, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}

async function pavatar(text1) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.Avatar,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_1: text1, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}

async function prainbow(text1) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.Rainbow,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_1: text1, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}

async function psky(text1) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.Sky,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_1: text1, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}

async function psad(text1) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.Sad,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_1: text1, login: 'GO' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}

async function pbear(text1) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.Bear,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_1: text1, login: 'GO' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}

async function pdevil(text1) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.Devil,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_1: text1, login: 'GO' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}

async function pLegend(text1, text2) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.Legends,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_1: text1, text_2: text2, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}

async function pCross(text1) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.crossfire,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_1: text1, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}

async function pPokem(text1, text2) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.Poke,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_1: text1, text_2: text2, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}

async function pApi(text1) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.apicuy,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_1: text1, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}


async function pGraffiti(text1) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.grapiti,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_1: text1, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}

async function pGlass(text1) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.Glass,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_1: text1, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}

async function pWrite(text1) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.write,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_1: text1, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}

async function pWolf(text1) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.Wolf,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_1: text1, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}

async function pBit(text1, text2) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.Bit,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_1: text1, text_2: text2, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}

async function pGoogle(text1, text2, text3) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.Gugel,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_1: text1, text_2: text2, text_3: text3, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}

async function pHarry(text1) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.Harry,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_1: text1, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}

async function pGlowp(text1) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.Glown,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_1: text1, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}

async function pRomantic(text1) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.romantic,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_1: text1, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}

async function pSmoke(text1) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.smoke,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_1: text1, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}

async function pBurnPapper(text1) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.burnPapper,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_1: text1, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}

async function pNaruto(text1) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.naruto,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_2: text1, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}

async function pLoveMsg(text1) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.loveMsg,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_1: text1, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}

async function pMsgGrass(text1) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.msgGrass,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_1: text1, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}

async function pGlitch(text1, text2) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.Glitch,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_1: text1, text_2: text2, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}

async function pDoubleHeart(text1) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.doubleHeart,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_1: text1, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}

async function pCoffeCup(text1) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.coffeCup,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_1: text1, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}
async function pLoveText(text1) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.loveText,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_1: text1, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}
async function pButterfly(text1) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST', 
      url: tema.butterFly,
      headers: { 'content-type': 'application/x-www-from-urlencoded' },
      formData: { text_1: text1, login: 'OK' } };
      
    request(options, async function (error, response, body) {
    if (error) throw new Error(error);
    const $ = cheerio.load(body)
    const result = {
         url: $('div.btn-group > a').attr('href')
    }
    resolve(result);
    });
  })
}

module.exports = {
  pShadow,
  pRomantic,
  pSmoke,
  pBurnPapper,
  pNaruto,
  pLoveMsg,
  pMsgGrass,
  pPokem,
  pLegend,
  pCross,
  pGlitch,
  pWrite,
  pdevil,
  pbear,
  psad,
  pavatar,
  psky,
  prainbow,
  pGlowp,
  pApi,
  pGlass,
  pGoogle,
  pGraffiti,
  pBit,
  pDoubleHeart,
  pHarry,
  pCoffeCup,
  pWolf,
  pLoveText,
  pButterfly
};