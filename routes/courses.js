const { Router } = require("express");
const coursesRouter = Router();

coursesRouter.post('/purchage', (req, res) => {
    res.send("to purchage a course")
})

coursesRouter.get('/purchage-a-course', (req, res) => {
    res.send("purchage-a-course")
})

module.exports = {
    coursesRouter: coursesRouter
};