const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));


mongoose.connect("mongodb+srv://myprofile220:QYCXuhn3AzIAX0FC@cluster0.2hw4ckx.mongodb.net/notesDB")

//create a data schema
const notesSchema = {
    name:String,
    email:String,
    content: String
}

const Note = mongoose.model("Note", notesSchema);

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req,res){
    let newNote = new Note({
        name: req.body.name ,
        email:req.body.email,
        content: req.body.content
    });
    newNote.save();
    res.sendFile(__dirname + "/thanks.html");
    // res.redirect('/')
})


app.listen(3000, function() {
    console.log("Server is running on 3000");
})

//mongoDB:
//myprofile220
//QYCXuhn3AzIAX0FC  
//mongodb+srv://myprofile220:QYCXuhn3AzIAX0FC@cluster0.2hw4ckx.mongodb.net/?retryWrites=true&w=majority



//how i solve the css, image , jvs not render:
//1. add a middleware:
//app.use(express.static(__dirname + '/public'));

//2. in all html, jvs sourse url remove the 'public' folder in url.





