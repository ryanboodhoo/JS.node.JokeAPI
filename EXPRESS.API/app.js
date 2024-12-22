const express = require('express');

const app=express();

app.get('/', (req, res) => {
    res.send("Welcome to the Joke API!");
});

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});