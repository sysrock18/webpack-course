import '../css/estilos.css'
import { firstMessage, delayedMessage } from './message.js'
import udvImg from '../images/udv.png'

document.write(firstMessage)
delayedMessage()


const img = document.createElement('img')
img.setAttribute('src', udvImg)
document.body.append(img)

console.log('Hola desde el config external')