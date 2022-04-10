const { Router } = require('express')
const books = require('../books')
const path = require('path')
const uuid = require('uuid')

const router = Router()

//get all books
router.get('/', (req, res) => {
    res.json(books)
})

//get one book params
router.get('/:id', (req, res) => {
    const isExist = books.some(v => v.id === parseInt(req.params.id))
    if (isExist) res.json(books.filter(v => v.id === parseInt(req.params.id)))
    else res.status(404).json({ message: 'Not foun this book' })
})

//post

router.post('/', (req, res) => {
    const newBooks = {
        id: uuid.v4(),
        name: req.body.name,
        author: req.body.author,
        pages: req.body.pages
    }
    if (!req.body.name && !req.body.author && !req.body.pages) {
        return res.status(404).json({ message: "Iltmos formani tola toldiring" })
    }
    books.push(newBooks)
    res.send(json(books))
})

module.exports = router