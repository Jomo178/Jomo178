const Discord = require('discord.js')

module.exports = {
    commands: 'AFK',
    discription: 'Makes you AFK.',
    callback: (message, args, text, client) => {
        if (!message.member.displayName.includes('[AFK]')) {
            const nicknameArgs = message.member.displayName
            message.member.setNickname(`[AFK] ${nicknameArgs}`).catch(err => message.reply('I cannot change your nickname! Please check my permissions.'))
        } else {
            const nickname = message.member.displayName.split(' ').slice(1).join(' ')
            message.member.setNickname(nickname).catch(err => message.reply('I cannot change your nickname! Please check my permissions.'))
        }
    }
}