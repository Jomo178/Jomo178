const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')


module.exports = {
    commands: 'ban',
    callback: (message, args, text, client) => {
const { member, mentions } = message

    const tag = `<@${member.id}>`

    const embed = new MessageEmbed()
      .setTitle('Ban')
      .setDescription(`<@${message.author.id}> the user been baned.`)
      .setColor('RANDOM')
      .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
      .setTimestamp()

      const errrembed = new MessageEmbed()
      .setTitle('Ban')
      .setDescription(`<@${message.author.id}> Please specify someone to ban.`)
      .setColor('RANDOM')
      .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
      .setTimestamp()

      const errembed = new MessageEmbed()
      .setTitle('Ban Error')
      .setDescription(`<@${message.author.id}> You do not have permission to use this command.`)
      .setColor('RANDOM')
      .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
      .setTimestamp()

    if (
      member.hasPermission('ADMINISTRATOR')) 
      {
      const target = mentions.users.first()
      if (target) {
        const targetMember = message.guild.members.cache.get(target.id)
        targetMember.ban()
        message.channel.send(embed)
      } else {
        message.channel.send(errrembed)
      }
    } else {
      message.channel.send(errembed)
    }
}}