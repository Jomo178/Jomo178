const { MessageEmbed } = require('discord.js')

module.exports = {
  commands: 'coin-flip',
  callback: (message, arguments, text) => {
function doRandHT() {
    var rand = ['HEADS!','TAILS!'];
    
    return rand[Math.floor(Math.random()*rand.length)];
    }
    
     const embed = new MessageEmbed()
    .setTitle(`Here is the winner!`)
    .setDescription(doRandHT())
    
    message.channel.send(embed)
}}