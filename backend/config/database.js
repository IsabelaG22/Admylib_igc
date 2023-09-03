const mongoose = require('mongoose')

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@admylib.pnic45u.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

mongoose.connect(uri, {userNewUrlParser: true})

module.exports = mongoose