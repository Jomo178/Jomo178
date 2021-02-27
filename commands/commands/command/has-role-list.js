const { MessageEmbed } = require('discord.js')

module.exports = {
    commands: ['rolelist', 'rlist', 'list'],
    minArgs: 1,
    discription: 'Shows the people who have the role.',
    expectedArgs: 'role name',
    callback: (message, args, text, client) => {
        let roleCheck = ''
        const role = args.join(' ')
        const roleMembers = message.guild.members.cache.filter(m => {
            if (role === 'everyone') roleCheck = m.roles.cache.get(message.guild.id)
            else roleCheck = m.roles.cache.find(r => r.name.toLowerCase() === role.toLowerCase())
            return roleCheck
        }).map(member => {
            return member.user.tag
        })

        const Embed = new MessageEmbed()
        .setTitle(`${role} Members List`)
        .setDescription(`\`${roleMembers.join('\n')}\``)
        .setColor(3426654)
        message.channel.send(Embed)
    }
}