import express from "express"
let router = express.Router()

import home from './home.js'
import products from './products.js'

async function routes(router){
   home(router)
   products(router)
}

routes(router)

export default router
