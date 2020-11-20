import express from 'express'
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config()
const myEmailDBPass =  process.env.myEmailDBPass
const databaseName =  process.env.databaseName


const app = express();
const port = process.env.PORT || 8080

app.use(express.json())
app.use(cors())

const connection_url = `mongodb+srv://admin:${myEmailDBPass}@cluster0.qea80.mongodb.net/${databaseName}?retryWrites=true&w=majority`
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.once('open', () => {
    console.log('DB Connected')
})

app.get('/', (req, res) => res.status(200).send('API activated'))

app.post("/upload", (req, res) => {
    console.log(req)
})

app.listen(port, () => console.log(`listening on localhost:${port}`))