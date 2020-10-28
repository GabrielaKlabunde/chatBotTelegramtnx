const env = require('./.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

const gifTelegram = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Faminoapps.com%2Fc%2Fgifs-1%2Fpage%2Fblog%2Fgifs-de-gatinhos%2F734P_oBHPuazkWNkw4aKxwa86q2nBDa2rW&psig=AOvVaw2cMPpURMbh4Ed5lcjlstMn&ust=1604013566681000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIDNlKy42OwCFQAAAAAdAAAAABAJ'

bot.use(async(ctx, next) =>{
    const dataEHora = new Date().toLocaleString();
    console.log(`${dataEHora} \n Tempo de resposta: ${ms}ms`)
})

//Diferentes tipos de resposta
bot.start(async ctx => {
    await ctx.reply(`Seja bem vindx, ${ctx.message.from.first_name}! 😄`)

//resposta com video do youtube
await ctx.reply('Veja o vídeo: https://youtu.be/yKNxeF4KMsY')

//repsosta com html
await ctx.replyWithHTML(`Pode ser usado tags <strong>Para negrito</strong> ou para <em>Itálico</em>. <a href="http://sc.senai.br">SENAI</a> <br> <code>Código</code>`)

//Resposta com MarkDown
await ctx.replyWithMarkdown('Dá para escrever *em negrito* _emitálico_ `em código` ou bloco de código ```, Também é possível LINK [SENAI](http://sc.senai.br)')

//Resposta com foto
await ctx.replyWithPhoto('https://picsum.photos/200/300/?random', {caption: 'Foto Aleatória'})

//Resposta com lcoalização
await ctx.replyWithLocation(-27 .1156927, -48 .9123907)

await ctx.replyWithAnimation(gifTelegram)
})

bot.launch()