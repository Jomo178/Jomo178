require('module-alias/register')


const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const client = new Discord.Client()


const config = require('@root/config.json')
const command = require('@util/command')
const commandBase = require('@root/commands/command-base')
const loadCommands = require('@root/commands/load-commands')
//const memberCount = require('./member-count')
//const botCount = require('./bot-count')
//const userCount = require('./user-count')
const welcome = require('@features/welcome')
const go = require('@features/go')
const mute = require('@features/mute')
const mongo = require('@util/mongo')
//const levels = require('@features/levels')
const { loadLanguages } = require('@util/language')
//const firstMessage = require('@features/first-message')
//const reaction = require('@features/reaction')



client.on('ready', async () => {
  console.log('The client is ready!')
  client.user.setActivity('$help', { type: 'PLAYING' })

  await mongo().then((mongoose) => {
    try {
      console.log('Connected to mongo!')
    } finally {
      mongoose.connection.close()
    }
  })

  const e = new MessageEmbed()
  .setColor('RANDOM')
  .setImage(URL= 'https://cdn.discordapp.com/attachments/759502117526044682/814896678938869780/unknown.png')


//memberCount(client)
//botCount(client)
//userCount(client)
welcome(client)
go(client)
mute(client)
loadCommands(client)
//levels(client)
commandBase.loadPrefixes(client)
loadLanguages(client)
//firstMessage(client)
//reaction(client)


})
client.login(process.env.MUSTAFA)