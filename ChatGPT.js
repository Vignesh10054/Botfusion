const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const { RsnChat } = require("rsnchat");
const rsnchat = new RsnChat("rsnai_2SKqDygNpqmZOUNkngX5vxgv");
const { Hercai } = require('hercai');
const herc = new Hercai();

app.use(express.text())

// app.get('/', (req, res) => {

//     res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
//     res.send('Hello from Express.js server!');
//     rsnchat.gpt('Hello, what is your name?')
//         .then(response => {
//             console.log(response.message);
//         })
// });


app.post('/chatGPT', (req, res) => {

    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');

    rsnchat.gpt(req.body)
        .then(response => {
            res.send(response)
            
        })

})

app.post('/bing', (req, res) => {

    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');

    herc.question({ model: "v3-beta", content: req.body }).then(response => {
        res.send(response)
    });

})

app.post('/bard', (req, res) => {

    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');    
    
    rsnchat.bard(req.body)
        .then(response => {
            res.send(response);
        })

})

app.post('/openChat', (req, res) => {

    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');    
    
    rsnchat.openchat(req.body)
        .then(response => {
            res.send(response);
        })

})

app.post('/gemini', (req, res) => {

    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');    
    
    rsnchat.gemini(req.body)
        .then(response => {
            res.send(response);
        })

})

app.post('/llama', (req, res) => {

    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');    
    
    rsnchat.llama(req.body)
        .then(response => {
            res.send(response);
        })

})

app.post('/mixtral', (req, res) => {

    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');    
    
    rsnchat.mixtral(req.body)
        .then(response => {
            res.send(response);
        })

})


app.use(cors({
    origin: 'http://localhost:4200' // Allow requests from this origin
}));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});




