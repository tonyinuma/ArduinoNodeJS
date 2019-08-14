const  express = require('express');
const  socketIo = require('socket.io');
const  http = require('http');

const  app = express();
const server = http.createServer(app);
const  io = socketIo.listen(server);

io.on('connection', function (socket) {
    console.log('a new socket connected');
});

app.get('/', (req, res, next) =>{
    res.sendFile(__dirname + '/index.html');
});


const SerialPort = require('serialport');
const Readline = SerialPort.parsers.Readline;
const parser = new Readline();

// Lee el puerto serial activo
const mySerial = new SerialPort('COM9', {
    boudRate: 9600
});

//Confirma con el texto que el puerto esta abierto
mySerial.on('open', function () {
    console.log('Opened Serial Port');
});

//Imprime la data del puerto Serial
mySerial.on('data', function (data) {
    console.log(data.toString());
    io.emit('arduinouno:data',{
        value: data.toString()
    });

});

//Imprime el error
mySerial.on('err', function (err) {
    console.log(err.message);
});

server.listen(3000, ()=>{
    console.log('server on port ', 3000);
});
