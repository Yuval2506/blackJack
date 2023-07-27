const express = require('express')
const app = express()
const port = 3000


const server = http.createServer(function(req, res) {
    res.write("Hello node")
    res.end()
})


app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  }) 