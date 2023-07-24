import Client from '../clients/openai'

const askChatGpt = async (message:string,prompt:string)=>{

    const completion = await Client.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: prompt },
          { role: 'user', content: message },
        ],
    })

    return completion.data.choices[0].message.content
}

export {askChatGpt}