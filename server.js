const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<b style="background-color:yellow">Hello World!</b> <br> by Amit (node.js)')
})

app.get('/list', (req,res) => {
    res.send(`<ul>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ul>`)
})

app.get('/headline', (req,res) => {
    res.send(`<h1 style="background-color:tomato"; class="text-center" >Headline</h1>
    <p style="background-color:yellow"; class="text-center">AJKE AMAR MON VALO NEI.</p>`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})