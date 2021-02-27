const { MessageEmbed } = require('discord.js')
const fetch = require('node-fetch')




module.exports = {
  commands: ['meme', 'Meme'],
  description: 'Send memes from Reddit',
  callback: (message, arguments, text) => {
    fetch('https://meme-api.herokuapp.com/gimme')
    .then(res => res.json())
    .then(json => {
      const embed = new MessageEmbed()
      .setTitle(json.title)
      .setImage(json.url)
      .setColor('RANDOM')
      .setFooter(`Link: ${json.postLink} | Subreddit: ${json.subreddit}`)


      message.channel.send(embed)
    })
  }}