const EventEmitter = require('events');

const event = new EventEmitter();

event.on('sayMyName', (sc, msg) => {
    console.log(`status code is ${sc} and the page is ${msg}`);
})

event.emit('sayMyName', 200, 'ok');