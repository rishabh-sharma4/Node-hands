const EventEmitter = require('events');
const customEmitter = new EventEmitter()

customEmitter.on('response', (name,id) =>{
    console.log(`data received ${name} with id: ${id}`)
})

customEmitter.on('response', () =>{
    console.log(`some other logic`)
})
customEmitter.emit('response','Rishabh',34)
// order in which events are listed matters as they are emitted in same order
