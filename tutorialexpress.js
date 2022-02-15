const express = require('express');
const res = require('express/lib/response');

//initalize express
const app = express;
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("My first use of express");
});

//listen in on the port
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}!`)
});