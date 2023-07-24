import { Client, LocalAuth } from "whatsapp-web.js";

const client = new Client({
    authStrategy:new LocalAuth({clientId:'client-one'}),
    puppeteer: {
		args: ['--no-sandbox'],
	}
    
})

export default client