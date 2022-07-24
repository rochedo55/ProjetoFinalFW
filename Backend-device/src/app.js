// Importing dependences and packges 
const express = require('express')
const cors = require('cors')
const app = express()
const port = 8000
const routes = require('./routes')

// Using destructuring to use method "use" in app->express()
//Apply cors and expressive response in json format and use all routes content in controller 
app.use(cors())
app.use(express.json())
app.use(routes)
// Start server 
app.listen(port,()=>{
    console.log(`Server active listening in http://localhost:${port}`)
})