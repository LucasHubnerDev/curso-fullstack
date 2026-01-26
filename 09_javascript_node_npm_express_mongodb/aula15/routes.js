import express from 'express'
const route = express.Router()

import * as homeController from './src/controllers/homeController.js' 

route.get("/", homeController.home)

export default route