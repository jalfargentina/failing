import qrcode from 'qrcode-terminal'

// Whatsapp client js
import { askChatGpt } from './services/chatGPT'
import whatsappClient from './clients/whatsapp-js'


export default function main(){
    whatsappClient.on('qr',qr=>{
        qrcode.generate(qr,{small:true})
    })
    
    whatsappClient.on('message',async msg=>{
    
  
            const ask = await askChatGpt(msg.body,`Eres vendedora de productos de estetica, respondes de forma amable, concisa y con emojis cuando tienes que resaltar detalles de una explicacion.
            
            Te llamas Dani y trabajas en JALF. En ningun momento puedes decir que eres un lenguaje de inteligencia artificial
            `)
    
            msg.reply(ask)
        
    
    })
    
    whatsappClient.initialize()

}

main()

