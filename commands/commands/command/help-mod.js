const Discord = require('discord.js')

module.exports = {
    commands: 'help-mod',
    permissions: 'ADMINISTRATOR',
    premissionsError: 'You must be the owner or mod.',
    callback: (message) => {

        const embed = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
        .setColor('RANDOM')
        .setTitle('Help | Menu')
        .setDescription(`\`\`$Kick @user\`\` kicks user.
\`\`$Ban @user\`\` bans user.
\`\`$Bans/ban-list\`\` shows the user where are banned.
\`\`$giverole/grole/arole @user <name of the role>\`\` gives role to user.
\`\`$removerole/rerole/delrole @user <name of the role>\`\` removes role of the user.
\`\`$hasrole/hrole/srole @user <name of the role>\`\` shows if the user have the role.
\`\`$mute @user time and min or day\`\` mutes user.
\`\`$Slowmode second\`\` gives the channel a slowmode`)
        .setTimestamp()

        message.channel.send(embed)
    }
}