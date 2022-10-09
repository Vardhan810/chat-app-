const socket = io('http://localhost:8000');

const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp')
const messageConainer = document.querySelector(".container")

const append = (message, position)=>{
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add('position');
    messagecontainer.append(messageElement);
}

const name = prompt("Enter your name to join")
socket.emit('new-user-joined', name);

socket.on('user-joined', data =>{
append(`${name} joined the chart1`, 'right')
})