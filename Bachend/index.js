const express = require("express");

const cors = require("cors");
/*to communicate with the frontend and for security*/

const mongoose = require("mongoose");

const userRoute = require("./Routes/userRoute");
const chatRoute = require("./Routes/chatRoute");
const messageRoute = require("./Routes/messageRoute");

const app = express();
require("dotenv").config()

app.use(express.json());
app.use(cors());
app.use("/api/users", userRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);

const port = process.env.PORT || 3000;
const uri = process.env.ATLAS_URI;
app.listen(port, (req, res)=>{
    console.log(`Server running on port: ${port}`);
});
mongoose.connect(uri, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log("mongoDB connection established")).catch((error)=>console.log("mongoDB connection failed:", error.message));
