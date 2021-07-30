const YoutubeAPI = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const { VISITOR_INFO1_LIVE, CONSENT, SID, __Secure_3PSID, HSID, SSID, APISID, SAPISID, __Secure_3PAPISID, LOGIN_INFO, SIDCC, __Secure_3PSIDCC } = require('../src/cookie.json')
const { YT_API } = require('../config.json');
const youtube = new YoutubeAPI(YT_API);

const COOKIE = `VISITOR_INFO1_LIVE=${VISITOR_INFO1_LIVE}; CONSENT=${CONSENT}; SID=${SID}; __Secure-3PSID=${__Secure_3PSID}; HSID=${HSID}; SSID=${SSID}; APISID=${APISID}; SAPISID=${SAPISID}; __Secure-3PAPISID=${__Secure_3PAPISID}; LOGIN_INFO=${LOGIN_INFO}; SIDCC=${SIDCC}; __Secure-3PSIDCC=${__Secure_3PSIDCC}`

/**
 * 
 * @param {String} args 
 */
const ytplay = (args) => new Promise((resolve, reject) => {
    youtube.searchVideos(args, 5)
    .then(result => {
        resolve(result[0].url)
    }).catch((err) => { reject(err) });
});

/**
 * 
 * @param {url} url 
 * @param {type} type 
 */
const ytdldown = (url, type) => new Promise((resolve, reject) => {
    try {
        switch(type) {
            case "mp3":{
                ytdl.getInfo(url, {
                    requestOptions: {
                        headers: {
                            cookie: COOKIE
                        }
                    }
                }).then(async (res) => {
                    const formats = await ytdl.filterFormats(res.formats, 'audioonly')
                    const thumb = res.videoDetails.thumbnails
                    if (res.videoDetails.lengthSeconds >= 500) resolve({ status: 'error', duration: res.videoDetails.lengthSeconds, link: formats[0].url, title: 'Durasi kepanjangan!'})
                    if (res.videoDetails.lengthSeconds < 500) resolve({ status: 'sukses', duration: res.videoDetails.lengthSeconds, link: formats[0].url, thumbnail: thumb[thumb.length - 1].url, title: res.videoDetails.title })
                })
            }
            break
            case "mp4":{
                ytdl.getInfo(url, {
                    requestOptions: {
                        headers: {
                            cookie: COOKIE
                        }
                    }
                }).then(async (res) => {
                    const formats = await ytdl.filterFormats(res.formats, 'audioandvideo')
                    const thumb = res.videoDetails.thumbnails
                    if (res.videoDetails.lengthSeconds >= 500) resolve({ status: 'error', duration: res.videoDetails.lengthSeconds, link: formats[0].url, title: 'Durasi kepanjangan!'})
                    if (res.videoDetails.lengthSeconds < 500) resolve({ status: 'sukses', duration: res.videoDetails.lengthSeconds, link: formats[0].url, thumbnail: thumb[thumb.length - 1].url, title: res.videoDetails.title })
                })
            }
            break
        }
    } catch (e) {
        reject(e)
    }
})

module.exports = {
    ytplay,
    ytdldown
}