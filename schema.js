/**
 * Estamos indicando que del paquete 'graphql-tools' solo 
 * queremos la función 'makeExecutableSchema'.
 */
const { makeExecutableSchema } = require('graphql-tools')

const typeDefs = `
	type Curso {
		id: ID!
		titulo: String!
	}

	type Query {
		cursos: [Curso]
	}
`

const schema = makeExecutableSchema({ typeDefs })

module.exports = schema