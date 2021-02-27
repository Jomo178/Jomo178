const mongoose = require('mongoose')
//const { mongoPath } = require('@root/config.json')

const mongoPath = 'mongodb+srv://mustafa:Ss72189Ss@mustafa.sq6j8.mongodb.net/Mustafa?retryWrites=true&w=majority'


module.exports = async () => {
  await mongoose.connect(mongoPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  return mongoose
}