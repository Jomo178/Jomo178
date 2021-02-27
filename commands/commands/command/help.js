const Discord = require('discord.js')

module.exports = {
    commands: 'help',
    callback: (message) => {

        const embed = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
        .setColor('RANDOM')
        .setTitle('Help | Menu')
        .setDescription(`If you are the owner or the Mod then can you write help-mod.
If you are normal user then can you write help-command, help-level and help-music.`)
        .setTimestamp()

        message.channel.send(embed)

    }
}