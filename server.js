const express = require('express');

const app = express();

// app.post('/test',(req,res)=> {

// })

app.get('/', (req,res) => {
    res.send('Hey, this is test for application deployment');
})
// test
app.get('/test', (req,res)=> {
    res.send('Test route for deployment');
})

const PORT = 8080;

app.listen(PORT, ()=> {
    console.log(`server is listening on port ${PORT}`);
})