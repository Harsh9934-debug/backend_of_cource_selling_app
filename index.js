const express = require("express");

const app = express();

app.use("/user",require("./routes/user"))
app.use("/courses",require("./routes/courses"))

app.listen(3000,()=>{
    console.log("Server is rinning in the localhost 3000")
})