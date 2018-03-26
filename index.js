const express = require('express')
const bodyParse = require('body-parser')

/**
 * Servidor express
 */
const app = express()

/**
 * Puerto
 */
const PORT = 5678
app.listen(PORT, () => {
	console.log('Servidor corriendo!!')
})
