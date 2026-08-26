import express, {Express, Request, Response} from "express"
import {config} from 'dotenv'
import cors from 'cors'
import {connectDB} from './utils/db'

const app: Express = express()
config()

app.get('/', (req:Request, res:Response) =>{
    res.json({success:true, Message:'found'})
})

const PORT = process.env.PORT;
connectDB()
app.use(cors({
    origin: process.env.HOST_URL || "*"
}))

app.listen(PORT, () => console.log(`server running on ${PORT}`) )
