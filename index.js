require('dotenv').config();
const express = require("express");
const { userRouter } = require("./routes/user");
const { coursesRouter } = require("./routes/courses");
const { adminRouter } = require("./routes/admin");

const mongoose=require("mongoose")
const app = express();

app.use("/user", userRouter);
app.use("/courses", coursesRouter);
app.use("/admin", adminRouter);

async function main(){
    await mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Connected to MongoDB")
    })
    .catch((err) => {
        console.log(err,"App Crashed")
    })
    app.listen(3000, () => {
    console.log("Server is rinning in the localhost 3000")
})
}


main()
