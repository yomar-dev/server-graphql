/**
 * Estamos indicando que del paquete 'graphql-tools' solo 
 * queremos la función 'makeExecutableSchema'.
 */
const { makeExecutableSchema } = require('graphql-tools')

const typeDefs = `
	# Entidad Curso
	type Curso {
		id: ID!
		titulo: String!
		descripcion: String!
		profesor: Profesor
		rating: Float @deprecated(reason: "No creemos en los puntajes")
		comentarios: [Comentario]
	}

	# Entidad Profesor
	type Profesor {
		id: ID!
		nombre: String!
		nacionalidad: String!
		genero: Genero
		cursos: [Curso]
	}

	enum Genero {
		MASCULINO
		FEMENINO
	}

	type Comentario {
		id: ID!
		nombre: String!
		cuerpo: String!
	}

	type Query {
		cursos: [Curso]
		profesores: [Profesor]
		curso(id: Int): Curso
		profesor(id: Int): Profesor
	}
`

const resolvers = {
	Query: {
		cursos: () => {
			return [
				{
					id: 1,
					titulo: "GraphQL",
					descripcion: "Aprendiendo GraphQL."
				},
				{
					id: 2,
					titulo: "PHP OOP",
					descripcion: "PHP Orientado a Objetos."
				}
			]
		}
	}
}

const schema = makeExecutableSchema({ typeDefs, resolvers })

module.exports = schema