import '../css/main.less'
import '../css/estilos.css'
import { firstMessage, delayedMessage } from './message.js'
import udvImg from '../images/udv.png'
import data from './teachers.json'
import renderToDom from './render-to-dom'
import React from 'react'
import { render } from 'react-dom'
import Teachers from './containers/teachers'


const $button = document.getElementById('dynamic-import')

$button.addEventListener('click', async () => {
  const { default: alerta } = await import('./alerta.js')
  alerta()
})

render(<Teachers data={data} />, document.getElementById('container'))

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