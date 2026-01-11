const express = require("express");
const { userRouter } = require("./routes/user");
const { coursesRouter } = require("./routes/courses");
const { adminRouter } = require("./routes/admin");

const app = express();

app.use("/user", userRouter);
app.use("/courses", coursesRouter);
app.use("/admin", adminRouter);


app.listen(3000, () => {
    console.log("Server is rinning in the localhost 3000")
})