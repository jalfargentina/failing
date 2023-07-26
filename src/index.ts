import qrcode from 'qrcode-terminal'

// Whatsapp client js
import whatsappClient from './clients/whatsapp-js'


export default function main(){
    whatsappClient.on('qr',qr=>{
        qrcode.generate(qr,{small:true})
    })
    
    whatsappClient.initialize()
}

main()

