const express = require('express')
const connectToMongoDB = require('./Helper/db')
const routes = require('./Routes/index')

const app = express()
const port = 1881

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', routes)

app.listen(port, async () => {
    await connectToMongoDB()
    console.log(`Visit on URL http://localhost:${port}`)
})