const express = require('express')

const app = express()

const port = process.env.PORT || 3000

console.log(__dirname)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/player', (req, res) => {
    res.send('Hello Player!')
})

app.listen(port, () => {
    console.log('Server initialized...')
})