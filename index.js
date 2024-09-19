const express = require('express');
const app = express();
const { port } = require('./_config/config');
const cors = require('cors');

const http = require('http');
const server = http.createServer(app);

const io = require('socket.io')(server);


app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    return res.json({ message: '!' })
});

io.on("connection", (socket) => {
    console.log('socket connected ', socket.id);

    socket.on("disconnect", () => {
        console.log('socket disconnected ', socket.id);
    });
});

server.listen(port, () => {
    console.log(`server up on port ${port}`)
});