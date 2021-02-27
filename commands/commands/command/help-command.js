const Discord = require('discord.js')

module.exports = {
    commands: 'help-command',
    callback: (message) => {

        const embed = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
        .setColor('RANDOM')
        .setTitle('Help | Menu')
        .setDescription(`\`\`$meme\`\` sends memes.
\`\`$anime <anime name like Naruto>\`\` sends anime stats.
\`\`$stream <anime name | episode 3or5>\`\` sends stream websites.
\`\`$afk\`\` makes you AFK.
\`\`$ping\`\` shows your ping.
\`\`$avatar also <@user>\`\` shows your avatar.
\`\`$rolelist <role name>\`\` shows how much user have the role.
\`\`$hang\`\` you can play hangman.
\`\`$snake\`\` you can play snake.
\`\`$tictactoe\`\` you can play tiktactoe.
\`\`$userinfo/user\`\` shows the userinfo.`)
        .setTimestamp()
        .setFooter('If the creater got more time there will come more commands :)')

        message.channel.send(embed)
    }
}