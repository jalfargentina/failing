import qrcode from 'qrcode-terminal'

// Whatsapp client js
import {Client, LocalAuth} from 'whatsapp-web.js'
const client = new Client({
    authStrategy:new LocalAuth({clientId:'client-one'})
})

client.on('qr',qr=>{
    qrcode.generate(qr,{small:true})
})

client.on('ready',()=>{
    console.log('client is ready')
})

client.on('message',()=>{
    console.log('holaaaa')
})

client.initialize()