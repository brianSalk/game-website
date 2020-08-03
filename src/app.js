const express = require('express')
const chalk = require('chalk')
const hbs = require('hbs')
const {tabs} = require('./arrays/tabs.js')
hbs.registerPartials('handlebars/partials')
const port = process.env.PORT || 3000
const app = express()
app.use(express.static('public'))
app.set('view engine', 'hbs')
app.set('views', 'handlebars/views')

app.get('/', (req,res) => {
    res.render('index.hbs', {tabs})
})

app.listen(port, () => console.log(chalk.greenBright(`listening on port ${port}`)))