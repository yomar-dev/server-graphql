/**
 * Estamos indicando que del paquete 'graphql-tools' solo 
 * queremos la función 'makeExecutableSchema'.
 */
const { makeExecutableSchema } = require('graphql-tools')

const schema = `
	type Curso {
		id: ID!
		titulo: String!
	}
`

const schema = makeExecutableSchema({
	typeDefs: schema
})

module.exports = schema