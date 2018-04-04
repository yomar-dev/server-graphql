/**
 * Estamos indicando que del paquete 'graphql-tools' solo 
 * queremos la función 'makeExecutableSchema'.
 */
const { makeExecutableSchema, addMockFunctionsToSchema } = require('graphql-tools')
const casual = require('casual')

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
	},
	// Resolver Curso: Indicamos que cuando alguien pida un profesor vamos a devolver algo
	Curso: {
		profesor: () => {
			return {
				id: 1,
				nombre: "Pedro",
				nacionalidad: "Argentino"
			}
		},
		comentarios: () => {
			return[
				{
					id: 1,
					nombre: "Desafio",
					cuerpo: "Esta es la solucion al desafio de la clase."
				},
				{
					id: 2,
					nombre: "Buen curso",
					cuerpo: "Para ser un curso introductorio está muy bien eleborado."
				}
			]
		}
	}

}

const schema = makeExecutableSchema({ typeDefs, resolvers })

addMockFunctionsToSchema({
	schema,
	mocks: {
		Curso: () => {
			return {
				id: casual.uuid,
				titulo: casual.word,
				descripcion: casual.sentences(2)
			}
		},
		Profesor: () => {
			return {
				nombre: casual.full_name,
				nacionalidad: casual.country
			}
		}
	},
	/**
	 * Si cambiamos esta bandera a TRUE se va mostrar la información definida
	 * en nuestros resolver, de lo contrario seguira mostrando la información
	 * generada por CASUAL.
	 */
	preserveResolvers: false
})

module.exports = schema