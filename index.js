const express = require('express')
const path = require('path')
//const logger = require('./middlewares/logger')

const app = express()

//Fileni static qilishlik uchun
app.use(express.static(path.join(__dirname, 'public')))

// Middlewares
// Logger middlewares
// const logger = (req, res, next) => {
//     console.log(`${req.protocol}://${req.get('host')}/${req.originalUrl}:${Date.now()}`);
//     next()
// }



//Body parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))





// app.use(logger)

//Filieni shunchaki yuborish
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })



app.use('/api/books', require('./routes/Books'))


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("Server has been started");
})


