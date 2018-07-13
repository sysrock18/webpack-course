import '../css/estilos.css'
import { firstMessage, delayedMessage } from './message.js'
import udvImg from '../images/udv.png'
import data from './teachers.json'
import renderToDom from './render-to-dom'

console.log(data)

data.teachers.forEach(teacher => {
  const el = document.createElement('li')
  el.textContent = teacher.name
  renderToDom(el)
})

document.write(firstMessage)
delayedMessage()


const img = document.createElement('img')
img.setAttribute('src', udvImg)
document.body.append(img)

console.log('Hola desde el config external')