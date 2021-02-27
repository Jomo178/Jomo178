const { MessageEmbed } = require('discord.js')

const { get } = require('request-promise-native')

module.exports = {
  commands: 'anime',
  description: 'Gives you information about the anime',
  expectedArgs: 'One Piece',
  callback: (message, arguments, text) => {
      

      const option = {
          url: `https://kitsu.io/api/edge/anime?filter[text]=${arguments.join(" ")}`,
          method: `GET`,
          headers: {
              'Content-Type': "application/vnd.api+json",
              'Accept': "application/vnd.api+json"
          },
          json:true
      }

      message.channel.send('Wait pls').then(message => {
        get(option).then(body => {

            try{

            const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setDescription(body.data[0].attributes.description)
            .addFields(
              {
                name: '❯ Information',
                value: `**• Japanese Name:** ${body.data[0].attributes.titles.ja_jp}
**• Age Rating:** ${body.data[0].attributes.ageRating}
**• NSFW:** ${body.data[0].attributes.nsfw}`,
inline: true
                },
                {
                  name: '❯ Stats',
                  value: `**• Average Rating:** ${body.data[0].attributes.averageRating}
**• Rating Rank:** ${body.data[0].attributes.ratingRank}
**• Popularity Rank:** ${body.data[0].attributes.popularityRank}`,
                  inline: true
                },
                {
                  name: '❯ Status',
                  value: `**• Episodes:** ${body.data[0].attributes.episodeCount}
**• Start Date:** ${body.data[0].attributes.startDate}
**• End Date:** ${body.data[0].attributes.endDate}`,
                  inline: true 
                }
              )
            .setAuthor(`${body.data[0].attributes.titles.en} | ${body.data[0].attributes.showType}`, body.data[0].attributes.posterImage.original)
            .setImage(body.data[0].attributes.posterImage.original)
              
            message.delete()
            message.channel.send(embed)


            }catch(err) {
                const ErrorEmbed = new MessageEmbed()
                .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
                .setDescription('I find nothing with this anime :(')
                .setTitle('ERROR')
                .setColor('RANDOM')
                .setTimestamp()

                message.delete()
                message.channel.send(ErrorEmbed)

            }

        })
        
    })
      
}
}