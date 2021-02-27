const Discord = require('discord.js')
const moment = require('moment');
 
 
module.exports = {
    commands: ['user', 'userinfo'],
    callback: (message, args, text, client) => {
        const user = message.mentions.users.first() || client.users.cache.find(user => user.username == args[0]) || client.users.cache.get(args[0]) || message.member.user
        const { joinedAt, createdAt } = message.mentions.users.first() || client.users.cache.find(user => user.username == args[0]) || client.users.cache.get(args[0]) || message.member
 
 
 
        const embed = new Discord.MessageEmbed()
        .setTitle(`Userinfo for ${user.username}`)
        .setColor('RANDOM')
        .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
        .setThumbnail(user.displayAvatarURL({dynamic: true}))
        .addFields({
            name: 'Name is:',
            value: user.username
        },{
            name: 'ID:',
            value: user.id
        },
        {
            name: 'Status:',
            value: user.presence.status
        },{
            name: 'Playing',
            value: user.presence.game ? user.presence.game.name : 'None'
        },{
            name: 'Joined Discord At:',
            value: moment.utc(user.createdAt).format('ddd MMM Do YYYY')
        },{
            name: 'Joined the Server',
            value: moment.utc(user.joinedAt).format('ddd MMM Do YYYY')
        })
 
 
        message.channel.send(embed)
 
 
    }
}