import express from "express";
import routes from './routes/index.js'
const app = express()

const PORT = process.env.PORT | 3000
const HOST = process.env.HOST | 'error'


app.use('/', routes)

export default function server(){
    return app.listen(PORT, HOST, () => { console.log(`On ${HOST}:${PORT}`)  })
}


