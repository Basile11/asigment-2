const express = require('express');
const path = require('path');
const app = express();

app.get('/', (_, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/api/ping', (req, res) => {
    console.log('Someone ping this API:\nResponse '+'TIC-TAC ! '.repeat(req.query.value))
    res.send({ message: 'BOOOOOM !  '.repeat(req.query.value), value: req.query.value });
});

app.use(express.static('public'))

app.listen(3000, () => {
    console.log('Listening on port 3000');
}); 
