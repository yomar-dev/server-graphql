const express = require('express')
const bodyParse = require('body-parser')
const { graphqlExpress } = require('graphql-server-express')
const schema = require('./schema.js')

/**
 * Servidor express
 */
const app = express()

/**
 * '/graphql' => End Point
 * bodyParser => Para poder parsear el contenido a JSON
 * graphqlExpress => Middleware
 */
app.use(
	'/graphql',
	bodyParser.json(),
	graphqlExpress({ schema })
)

/**
 * Puerto
 */
const PORT = 5678
app.listen(PORT, () => {
	console.log('Servidor corriendo!!')
})
