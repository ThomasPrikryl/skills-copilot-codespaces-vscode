// Create web server
// npm install express
// npm install body-parser
// npm install nodemon

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

const comments = {
  1: {
    id: 1,
    username: 'alice',
    comment: 'hello'
  }
}

app.get('/comments', (req, res) => {
  res.send(Object.values(comments))
})

app.get('/comments/:id', (req, res) => {
  res.send(comments[req.params.id])
})

app.post('/comments', (req, res) => {
  const id = Object.keys(comments).length + 1
  comments[id] = req.body
  res.send(comments[id])
})

app.put('/comments/:id', (req, res) => {
  comments[req.params.id] = req.body
  res.send(comments[req.params.id])
})

app.delete('/comments/:id', (req, res) => {
  delete comments[req.params.id]
  res.sendStatus(204)
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})

// Run the server
// node comments.js
// or
// nodemon comments.js

// Test with curl
// curl -X GET http://localhost:3000/comments
// curl -X POST -H "Content-Type: application/json" -d '{"username": "bob", "comment": "hi"}' http://localhost:3000/comments
// curl -X GET http://localhost:3000/comments/2
// curl -X PUT -H "Content-Type: application/json" -d '{"username": "bob", "comment": "bye"}' http://localhost:3000/comments/2
// curl -X DELETE http://localhost:3000/comments/2

// Test with Postman
// GET http://localhost:3000/comments
// POST http://localhost:3000/comments
// GET http://localhost:3000/comments/2
// PUT http://localhost:3000/comments/2
// DELETE http://localhost:3000/comments/2