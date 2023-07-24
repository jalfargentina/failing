import qrcode from 'qrcode-terminal'

// Whatsapp client js
import {Client, LocalAuth} from 'whatsapp-web.js'
import { askChatGpt } from './services/chatGPT'
const client = new Client({
    authStrategy:new LocalAuth({clientId:'client-one'}),
    puppeteer: {
		args: ['--no-sandbox'],
	}
    
})

client.on('qr',qr=>{
    qrcode.generate(qr,{small:true})
})

client.on('ready',()=>{
    console.log('client is ready')
})

client.on('message',async msg=>{

   
        const ask = await askChatGpt(msg.body,'Eres un vendedor de autos, ayudas a la gente con respuestas cortas y concisas. Si la situacion lo permite, usas emojis al final de las oraciones. Te llamas Bob')

        msg.reply(ask)
  


})

client.initialize()