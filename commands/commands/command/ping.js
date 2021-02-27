const { MessageEmbed } = require("discord.js")


//${Date.now() - message.createdTimestamp}

//${Math.round(client.ws.ping)}


module.exports = {
  commands: 'ping',
  discription: 'Shows your Ping.',
  callback: (message, arguments, text, client) => {


      const embed = new MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
      .setTitle('🏓 PONG 🏓')
      .setColor('RANDOM')
      .setDescription(`Your ping is ${Date.now() - message.createdTimestamp}`)
      .setTimestamp()

      message.channel.send(embed)
  },
}