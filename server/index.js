import  Express  from "express";
import mongoose from 'mongoose';
import cors from "cors";
import userRouter from "./routes/bookRoute.js";
import authRouter from "./routes/userRoute.js"
import bodyParser from 'body-parser';

const app = Express();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({origin:true, credentials:true}));

const url = "mongodb+srv://kartikrathor31:kartikrathor@cluster0.tlbxmy4.mongodb.net/test?retryWrites=true&w=majority"

const mongooseOptions = {
    autoIndex: true,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4,
    keepAliveInitialDelay: 300000,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    minPoolSize: 3,
};

mongoose.set('strictQuery', true)

mongoose.connect(url, mongooseOptions).then(() => {
    console.log("Database Connected !")
})
mongoose.connection.on("error", (error) => {
    console.log(error, "kartik")
})


app.get("/",async (req,res)=>{
    res.send("hi this is the backend server!")
})

app.use("/api", userRouter);
app.use("/auth", authRouter);

app.listen(8000,()=>{console.log("success")});