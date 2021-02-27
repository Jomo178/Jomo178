const { MessageEmbed } = require('discord.js')

const  Anime = require('anime-scraper').Anime




module.exports = {
    commands: 'stream',
    discription: 'Searchs some websites to watch your anime.',
    expectedArgs: 'Haikyuu | 1',
    callback: (message, arguments, text) => {


        const cmd = arguments.join(" ").split(' | ');

        if(!cmd[0]) {
            return message.channel.send('Pls give a anime name.')
        }

        if(!cmd[1]) {
            return message.channel.send('Pls give a anime episode.')
        }


        Anime.fromName(cmd[0]).then(function (anime) {
            anime.episodes[cmd[1]-1].fetch().then(function (episode) {

                const embed = new MessageEmbed()
                    .setTitle(`Stream ${cmd}`)
                    .setColor('RANDOM')
                    .addField(episode.videoLinks[7].name, `[LINK 1](${episode.videoLinks[7].url})`, true)
                    .addField(episode.videoLinks[6].name, `[LINK 2](${episode.videoLinks[6].url})`, true)
                    .addField(episode.videoLinks[2].name, `[LINK 3](${episode.videoLinks[2].url})`, true)
                    .addField(episode.videoLinks[3].name, `[LINK 4](${episode.videoLinks[3].url})`, true)
                    .addField(episode.videoLinks[4].name, `[LINK 5](${episode.videoLinks[4].url})`, true)
                    .addField(episode.videoLinks[5].name, `[LINK 6](${episode.videoLinks[5].url})`, true)
                    .setFooter('Important!! These links are not legal.')

                    message.channel.send(embed)
            })

          })
          

    }
}