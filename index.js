const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// middleware - function of req and resp objects
// user built middleware
// const harryMiddleware = (req, res, next)=>{
//   console.log(req)
//   next()
// }

app.use(express.static(path.join(__dirname, 'public')))
// app.use(harryMiddleware)


app.get('/hello/:name', (req,res)=>{
  res.send('hello world ' + req.params.name)
})



app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/about', (req, res) => {
    // res.send('this is about page!')
    // res.sendFile(path.join(__dirname, 'index.html'))
    res.json({"hellow":34})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})