import '../css/estilos.css'
import { firstMessage, delayedMessage } from './message.js'
import udvImg from '../images/udv.png'
import videoPlatzi from '../videos/que-es-core.mp4'

document.write(firstMessage)
delayedMessage()


const img = document.createElement('img')
img.setAttribute('src', udvImg)
document.body.append(img)

const video = document.createElement('video')
video.setAttribute('src', videoPlatzi)
video.setAttribute('width', 480)
video.setAttribute('autoplay', true)
video.setAttribute('controls', true)
document.body.append(video)

console.log('Hola desde el config external')