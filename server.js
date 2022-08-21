const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://michellechang02:ileschool1@cluster0.gc7st.mongodb.net/noteDB")

const notesSchema = {
    title: String,
    content: String
}

const Note = mongoose.model("note", notesSchema);

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html")
})

app.post("/", function(req, res) {
    let newNote = new Note({
        title: req.body.title,
        content: req.body.content
    });
    console.log(req.body.title)
    console.log(req.body.content)
    newNote.save();
    res.redirect('/');
})

app.listen(4000, function() {
    console.log("server is running on 4000")
})
