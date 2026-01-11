require('dotenv').config();
const express = require("express");
const { userRouter } = require("./routes/user");
const { coursesRouter } = require("./routes/courses");
const { adminRouter } = require("./routes/admin");

const mongoose = require("mongoose")
const app = express();

app.use("/user", userRouter);
app.use("/courses", coursesRouter);
app.use("/admin", adminRouter);

async function main() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to MongoDB");

        app.listen(3000, () => {
            console.log("Server is running on localhost:3000");
        });
    } catch (error) {
        console.error("Failed to connect to MongoDB chack the url properly");
        process.exit(1);
    }
}


main()
