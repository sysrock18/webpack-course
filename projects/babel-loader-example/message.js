import renderToDom from './render-to-dom'
import makeMessage from './make-message'

// new Promise(Funcion todoOK, Funcion todoMal)
const waitTime = new Promise((todoOK, todoMal) => {
  setTimeout(() => {
    todoOK('han pasado 3 segundos')
  }, 3000)
})

module.exports = {
	firstMessage: 'Hola mundo desde un modulo',
  delayedMessage: async () => {
    const message = await waitTime;
    console.log('Hola este es un mensaje tardado')

    renderToDom(makeMessage(message))
  }
}