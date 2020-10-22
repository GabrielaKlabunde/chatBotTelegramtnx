const env = require('./.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.use(async(ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date - start
    const dataEHora = new Date().toLocaleString();
    console.log(`${dataEHora} \n Tempo de Resposta: ${ms}ms`)
})

//Escuta do comando /start
bot.start(async ctx =>{
    const from = ctx.message.from
    from.id = undefined
    console.log(from)
    if(from.username === 'gabrielaklabunde'){
    await ctx.reply(`Olá ${from.username}, o seu nome é: ${from.first_name} ${from.last_name}!`)
    }else{
        await ctx.reply('Não estou autorizado a falar com estranhos')
    }

})

//Evento de recepção de texto
bot.on('text', ctx => ctx.reply('Alo Ha Mundo SENAI'))

//Evento de localização
bot.on('location', async ctx => {
    const location = ctx.message.location
    console.log(location)
    const lat = location.latitude
    const lon = location.longitude
    await ctx.reply(`https://goo.gl/maps/Wrkvymtqmmt8Tx4E9${lat}, ${lon}, 17z`) 
    await ctx.replyWithLocation(lat,lon)
    await ctx.reply(`Legal amigão! Você está em Lat: ${lat} - Lon: ${lon}!`)
})


bot.launch()