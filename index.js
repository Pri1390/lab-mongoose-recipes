
import express from 'express'
import * as dotenv from 'dotenv'
import dbConnect from './config/db.config.js'
import recipeRoute from './routes/Recipe.routes.js'

dotenv.config()

dbConnect()

const app = express()

app.use(express.json())


app.use('/recipe', recipeRoute)
app.listen(Number(process.env.PORT), () => console.log('server on port 8080!'))