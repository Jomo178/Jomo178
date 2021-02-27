const Discord = require('discord.js')


module.exports = client => {
    const channelId = '812364576778747966'

    client.on('guildMemberRemove', (member) => {
        //console.log(member)

        
    let url = member.user.AvatarURL == undefined ? member.user.defaultAvatarURL : member.user.avatarURL

        const embed = new Discord.MessageEmbed()
        //.setTitle(`<@${member.id}>`)
        .setDescription(`**${member.user.username}** You left a person, we're incomplete but other people take their place.`)
        .setColor('RANDOM')
        .setAuthor(`Bye, ${member.user.username}`, member.user.displayAvatarURL({dynamic: true}))
        .setThumbnail(member.user.displayAvatarURL({dynamic: true}))
        .setFooter(`☆ V O R T E X`, iconURL= 'https://cdn.discordapp.com/attachments/814866898809913354/815286174784290826/V_O_R_T_E_X_4.png')
        .setTimestamp()
        //const message = `Please welcome <@${member.id}> to the server!`


        const channel = member.guild.channels.cache.get(channelId)
        channel.send(embed)
    })}