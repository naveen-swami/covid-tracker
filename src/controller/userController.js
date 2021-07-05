const express = require('express');
const user = require("../database/user");
const usersymptoms = require("../database/usersymptoms");
const userService = require("../services/userService");
const server = express();

server.use(require('body-parser').urlencoded({ extended: false }));
server.get("/", (req, res) => {
    console.log(user);
    res.send("hello ....")
}
)

server.post("/register", (req, res) => {
    const headers = req.headers;
    // console.log(JSON.parse(JSON.stringify(headers['user'])));
    // console.log(headers.get('user'))
    // console.log(req.body);
    // res.json(req.body)
    const userInfo = req.body;
    //userTable
    let id = user.length+1;
    
    userInfo.id = id;
    user.push(userInfo);
    res.sendStatus(200).json({"userId": id});
}
)

server.get("/user-symptoms", (req, res) => {
    try{
        const usersymptomsDetails = req.body;
        //  usersymptoms.push(usersymptomsDetails);
        const riskPercentage = userService.riskFinder(usersymptomsDetails);
        res.sendStatus(200).json({"riskPercentage": riskPercentage});
        } catch(e) {
            res.sendStatus(400).json("invalid details");
        }
})

server.post("/admin", (req, res) => {

})

server.listen(3100, () => {
    console.log("server is running at port 3100");
})

