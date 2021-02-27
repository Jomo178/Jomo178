const Discord = require('discord.js')

module.exports = {
    commands: ['bans', 'ban-list'],
    callback: async(message, args, client) => {

        const fetchBans = message.guild.fetchBans();
        const bannedMembers = (await fetchBans)
        .map((member) => member.user.tag)
        .join(", ");

        message.channel.send(bannedMembers)
    }
}