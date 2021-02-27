const Discord = require('discord.js')

module.exports = {
    commands: ['av', 'avatar'],
    callback: (message, args, text, client) => {
        if(message.mentions.users.first()) {
            user = message.mentions.users.first();
        } else if (args[0]) {
            user = message.guild.members.cache.get(args[0]).users;
        } else {
            user = message.author;
        }

        const avatar = user.displayAvatarURL({size: 4096, dynamic: true})

        const embed = new Discord.MessageEmbed()
        .setTitle(message.author.tag)
        .setDescription(`[Avatar Link](${avatar})`)
        .setColor('RANDOM')
        .setImage(avatar)


        message.channel.send(embed)
    }
}