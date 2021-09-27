const express = require('express');

const app = express();
const PORT = 4000;

app.get('/', (req, res)=>{
    console.log("hello");
});

app.listen(PORT, ()=>{
    console.log(`app running on port ${PORT}`)
})