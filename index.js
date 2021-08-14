/*
❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌
❌     🔵ESTA BASE FOI CRIADA POR MHANKBARBAR 🔵     ❌
❌     🔴E TOTALMENTE TRADUZIDA POR SKILLER 🔴           ❌
❌     🔵QUANDO USA-LA SEMPRE DEIXAR OS CRÉDITOS 🔵❌
❌     💎  © *Copyright © by SkillerOfc-Mhankbarbar*              ❌
❌     💎  Youtube = https://youtube.com/c/SkillerOfc             ❌
❌     💎  contatos = wa.me/558892594715                              ❌
❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌
*/
const {
	MessageOptions,
	WAFlag,
	WANode,
	WAMetric,
	ChatModification,
	DisconectReason,
	MessageTypeProto,
  WAConnection,
	WALocationMessage,
	ReconnectMode,
	WAContextInfo,
	proto,
	ProxyAgent,
	waChatKey,
  MimetypeMap,
  MediaPathMap,
  WAContactMessage,
  WAContactsArrayMessage,
  WAGroupInviteMessage,
  WATextMessage,
  WAMessageContent, 
  WAMessage, 
  BaileysError, 
  WA_MESSAGE_STATUS_TYPE, 
  MediaConnInfo, 
  URL_REGEX, 
  WAUrlInfo, 
  WA_DEFAULT_EPHEMERAL, 
  WAMediaUpload,
	mentionedJid,
	processTime,
	Browser,
  MessageType,
  Presence,
  WA_MESSAGE_STUB_TYPES,
  Mimetype,
	relayWAMessage,
  GroupSettingChange
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const { help } = require('./src/help')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const fs = require('fs')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const setting = JSON.parse(fs.readFileSync('./src/settings.json'))
prefix = setting.prefix
blocked = []
fake = setting.fake
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}

async function starts() {
	const bot = new WAConnection()
	bot.logger.level = 'warn'
	console.log(banner.string)
	bot.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color('escaneie o código qr'))
	})

	fs.existsSync('./qrcode.json') && bot.loadAuthInfo('./qrcode.json')
	bot.on('connecting', () => {
		start('2', 'Conectando base...')
	})
	bot.on('open', () => {
		success('2', 'Base conectada')
	})
	await bot.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./qrcode.json', JSON.stringify(bot.base64EncodedAuthInfo(), null, '\t'))

	bot.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await bot.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await bot.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `𝐎𝐩𝐚 @${num.split('@')[0]}\n𝐁𝐞𝐦 𝐯𝐢𝐧𝐝𝐨 𝐚𝐨 𝐠𝐫𝐮𝐩𝐨 *${mdata.subject}*\n\n𝐥𝐞𝐢𝐚 𝐚𝐬 𝐫𝐞𝐠𝐫𝐚𝐬 𝐝𝐨 𝐠𝐫𝐮𝐩𝐨 𝐩𝐚𝐫𝐚 𝐧𝐚𝐨 𝐬𝐞𝐫 𝐛𝐚𝐧𝐢𝐝𝐨❤️\n ${mdata.desc}`
				let buff = await getBuffer(ppimg)
				bot.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				bot.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
				img = ('./assets/bv.webp')
				buffer = fs.readFileSync(img)
                bot.sendMessage(from, buffer, sticker, {quoted: mek})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await bot.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `@${num.split('@')[0]} 𝑆𝑎𝑖𝑢 𝑝𝑜𝑟 𝑞𝑢𝑒 𝑛𝑎̃𝑜 𝑠𝑎𝑏𝑒 𝑑𝑖𝑟𝑖𝑔𝑖𝑟 𝑢𝑚 𝑡𝑟𝑎𝑡𝑜𝑟😂👋`
				let buff = await getBuffer(ppimg)
				bot.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

	bot.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	bot.on('chat-update', async (mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const zeksapi = setting.zeksapi 
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
            body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)

			msg = {
				espera: '⌛ Espere ⌛',
				sucesso: '✔️ pronto ✔️',
				erro: {
					figu: '❌ Falha, ocorreu um erro ao converter a imagem em um adesivo ❌',
				},
				de: {
					grupo: '❌ Este comando só pode ser usado em grupos! ❌',
					donoGrupo: '❌ Este comando só pode ser usado pelo proprietário do grupo! ❌',
					donoBot: '❌ Este comando só pode ser usado pelo dono do bot! ❌',
					adm: '❌ Este comando só pode ser usado por administradores de grupo! ❌',
					botAdm: '❌ Este comando só pode ser usado quando o bot é um administrador!❌ '
				}
			}

			const botNumber = bot.user.jid
			const ownerNumber = [`${setting.ownerNumber}@s.whatsapp.net`] // replace this with your number
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await bot.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
            pushname = bot.contacts[sender] != undefined ? bot.contacts[sender].vname || bot.contacts[sender].notify : undefined
			const isOwner = ownerNumber.includes(sender)
			const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": fake, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync(`assets/botlogo.webp`)} } }
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const enviar = (teks) => {
				bot.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				bot.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? bot.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : bot.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
						

			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
			//COMANDOS
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mCMD\x1b[1;37m]', time, color(command), 'de', color(pushname), color(sender.split('@')[0]),'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mCMD\x1b[1;37m]', time, color(command), 'de', color(pushname), color(sender.split('@')[0]), 'grupo', color(groupName), 'args :', color(args.length))
			//MENSAGENS
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mMSG\x1b[1;37m]', time, color('Mensagem'), 'de', color(pushname), color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mMSG\x1b[1;37m]', time, color('Mensagem'), 'de', color(pushname), color(sender.split('@')[0]), 'grupo', color(groupName), 'args :', color(args.length))
			
            let authorname = bot.contacts[from] != undefined ? bot.contacts[from].vname || bot.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
			
			function addMetadata(packname, author) {	
				if (!packname) packname = 'Skiller'; if (!author) author = 'Bot';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	

			}
			switch(command) {
				case 'help':
				case 'menu':
					bot.sendMessage(from, help(prefix), text,{quoted: freply})
					break
				case 'stiker':
				case 'sticker':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await bot.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								enviar(msg.erro.figu)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('Skiller', authorname)} ${ran} -o ${ran}`, async (error) => {
									if (error) return enviar(msg.erro.figu)
									bot.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
								/*bot.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)*/
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await bot.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						enviar(msg.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								enviar(`❌ Falha ao converter ${type} em sticker`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('Skiller', authorname)} ${ran} -o ${ran}`, async (error) => {
									if (error) return enviar(msg.erro.figu)
									bot.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
								/*bot.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)*/
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await bot.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						enviar(msg.wait)
						keyrmbg = 'Your-ApiKey'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return enviar('Falha, ocorreu um erro, tente novamente mais tarde. ')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return enviar(msg.erro.figu)
								exec(`webpmux -set exif ${addMetadata('BOT', authorname)} ${ranw} -o ${ranw}`, async (error) => {
									if (error) return enviar(msg.erro.figu)
									bot.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
									fs.unlinkSync(ranw)
								})
								//bot.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
							})
						})
					/*} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await bot.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.on('start', function (cmd) {
								console.log('Started :', cmd)
							})
							.on('error', function (err) {
								fs.unlinkSync(media)
								console.log('Error :', err)
							})
							.on('end', function () {
								console.log('Finish')
								fs.unlinkSync(media)
								bot.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)*/
					} else {
						enviar(`Envie uma imagem com a legenda $ {prefix} adesivo ou imagem marcada já enviada`)
					}
					break
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return enviar(msg.de.donoBot)
					prefix = args[0]
					setting.prefix = prefix
					fs.writeFileSync('./src/settings.json', JSON.stringify(setting, null, '\t'))
					enviar(`Prefix berhasil di ubah menjadi : ${prefix}`)
					break
				case 'marcar':
					if (!isGroup) return enviar(msg.de.grupo)
					if (!isGroupAdmins) return enviar(msg.de.adm)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*#* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
                                case 'marcar2':
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					enviar(teks)
					break
                                case 'marcar3':
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ https://wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					bot.sendMessage(from, teks, text, {detectLinks: false, quoted: mek})
					break
				case 'bc':
					if (!isOwner) return enviar(msg.de.donoBot)
					if (args.length < 1) return enviar('.......')
					anu = await bot.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await bot.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							bot.sendMessage(_.jid, buff, image, {caption: `[Transmissão]\n\n${body.slice(4)}`})
						}
						enviar('transmissão de sucesso ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[Transmissão]\n\n${body.slice(4)}`)
						}
						enviar('transmissão de sucesso ')
					}
					break
                                case 'promote':
					if (!isGroup) return enviar(msg.de.grupo)
					if (!isGroupAdmins) return enviar(msg.de.adm)
					if (!isBotGroupAdmins) return enviar(msg.de.botAdm)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Promovido com sucesso\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
						bot.groupRemove(from, mentioned)
					} else {
						mentions(`promovido com sucesso @${mentioned[0].split('@')[0]} Como Administrador de Grupo!`, mentioned, true)
						bot.groupMakeAdmin(from, mentioned)
					}
					break
				case 'demote':
					if (!isGroup) return enviar(msg.de.grupo)
					if (!isGroupAdmins) return enviar(msg.de.adm)
					if (!isBotGroupAdmins) return enviar(msg.de.botAdm)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Rebaixado com sucesso\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						bot.groupRemove(from, mentioned)
					} else {
						mentions(`Rebaixado com sucesso @${mentioned[0].split('@')[0]} Tornou-se um membro do grupo!`, mentioned, true)
						bot.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'add':
					if (!isGroup) return enviar(msg.de.grupo)
					if (!isGroupAdmins) return enviar(msg.de.adm)
					if (!isBotGroupAdmins) return enviar(msg.de.botAdm)
					if (args.length < 1) return enviar('que numero você quer add no grupo? ')
					if (args[0].startsWith('08')) return enviar('Use o código do país, senhor ')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						bot.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						enviar('Falha ao adicionar destino, provavelmente porque em privado ')
					}
					break
				case 'listadmins':
					if (!isGroup) return enviar(msg.de.grupo)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
                case 'linkgroup':
                    if (!isGroup) return enviar(msg.de.grupo)
                    if (!isGroupAdmins) return enviar(msg.de.adm)
                    if (!isBotGroupAdmins) return enviar(msg.de.botAdm)
                    linkgc = await bot.groupInviteCode(from)
                    enviar('https://chat.whatsapp.com/'+linkgc)
                    break
                case 'leave':
                    if (!isGroup) return enviar(msg.de.grupo)
                    if (isGroupAdmins || isOwner) {
                    	bot.groupLeave(from)
                    } else {
                        enviar(msg.de.adm)
                    }
                    break
				case 'toimg':
					if (!isQuotedSticker) return enviar('❌ envie uma figurinha ❌')
					enviar(msg.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await bot.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return enviar('❌ erro ao converter em imagem ❌')
						buffer = fs.readFileSync(ran)
						bot.sendMessage(from, buffer, image, {quoted: mek, caption: '>//<'})
						fs.unlinkSync(ran)
					})
					break
				case 'bemvindo': 
if (!isGroupAdmins) return enviar(msg.de.adm)
if (!isGroup) return enviar(msg.de.grupo)
if (args.length < 1) return enviar('ativar 1, desativar 0')
if (args[0] === '1') {
if (isWelkom) return enviar('「 ❗ 」recurso de bem vindo ativado✔️')
welkom.push(from)
fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
enviar('「 ❗ 」recurso de bem vindo ativado✔️')
}
//Encontrar a posição do grupo no arquivo json
if (args[0] === '0') {
let position = false
Object.keys(welkom).forEach((i) => {
if (welkom[i] === from) {
position = i
}
 })
//Apagar o grupo dos dados quando a posição já está definida 
if (position !== undefined) {
welkom.splice(position, 1)
fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
enviar('「 ❗ 」recurso de bem vindo desativado✔️')
}}
break
				default:											          	
				
			if (isGroup && !isCmd && budy != undefined) {
			enviar(`comando *${prefix + command}* não registrado no menu`)
					} else {
						console.log(color('[ERROR]','red'), 'Comando não registrado de', color(sender.split('@')[0]))
					}
					}
		} catch (e) {
			            e = String(e)
			if (e.includes('this.isZero')){
return
}
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
