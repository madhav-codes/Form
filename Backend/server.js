const cors=require('cors')
const express = require("express");
const dotenv=require('dotenv')
const infoRoute=require('./Routes/infoRoute')

dotenv.config({path:"./Config/.env"})

const connectDB=require('./Config/database')
connectDB();

const app = express();

app.use(cors());

app.use(express.json({
    limit: "50mb"
}))

app.use("/form/v1",infoRoute)

const server=app.listen(process.env.PORT,()=>{
    console.log("Server Connected")
})

