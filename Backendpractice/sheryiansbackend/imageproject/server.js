require("dotenv").config();
const app = require("./src/app")

// app=express()

const connectDB = require("./src/db/db")

connectDB();

app.listen(3000, ()=>{
    console.log("server is running at http://localhost:3000");
})