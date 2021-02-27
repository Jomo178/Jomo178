const { MessageEmbed } = require('discord.js')
const mongo = require('@util/mongo')
const warnSchema = require('@schemas/warn-schema')

module.exports = {
  commands: 'warn',
  minArgs: 2,
  expectedArgs: "<Target user's @> <reason>",
  requiredRoles: ['Moderator'],
  callback: async (message, arguments) => {
    const target = message.mentions.users.first()
    if (!target) {
      message.reply('Please specify someone to warn.')
      return
    }

    arguments.shift()

    const guildId = message.guild.id
    const userId = target.id
    const reason = arguments.join(' ')

    const warning = {
      author: message.member.user.tag,
      timestamp: new Date().getTime(),
      reason,
    }

    await mongo().then(async (mongoose) => {
      try {
        await warnSchema.findOneAndUpdate(
          {
            guildId,
            userId,
          },
          {
            guildId,
            userId,
            $push: {
              warnings: warning,
            },
          },
          {
            upsert: true,
          }
        )
      } finally {
        mongoose.connection.close()

        const embed = new MessageEmbed()
      .setTitle('!! Warned !!')
      .setDescription(`<@${message.author.id}> warned <@${userId}> pls stick to the rules.`)
      .addFields({
          name: 'Moderator',
          value: `<@${message.author.id}>`,
          inline: true
      },{
          name: 'Member',
          value: `<@${userId}>`,
          inline: true
      },{
          name: 'Reason',
          value: `${reason}`,
          inline: true
      })
      .setColor('RANDOM')
      .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
      .setTimestamp()

      message.channel.send(embed)
      }
    })
  },
}