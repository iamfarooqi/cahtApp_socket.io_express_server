const url = 'http://localhost:5000'
const socket = io(url)


const onEnter = () =>{
  let userInput = document.getElementById('msg').value
  socket.emit('NEW_MESSAGE',userInput)


  return false
}


socket.on('NEW_USER_MESSAGE',msg=>{
  let li = document.createElement('li')
  li.innerHTML = `<p>${msg}</p>`
  document.getElementById('message-container').appendChild(li)
})