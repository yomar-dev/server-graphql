# Server GraphQL #



#### Crear package.json ####

Primero ejecutamos el comando: `yarn init -y`

> La opción **-y** establece valores por defecto y crea un archivo `package.json`.


#### Instalar express. ####

> `yarn add express` 


#### Instalar Body Parser. ####

Funciona como **middleware** en **express**, que nos permite tomar el *body* del **request http** y poder *parsearlo.*

> `yarn add body-parser` <br> 


#### Instalar dependencias de GraphQL. ####

- GraphQL: `yarn add graphql`
- Instalar Apollo para express: `yarn add graphql-server-express`
- Instalar herramientas de Apollo: `yarn add graphql-tools`

<br>

### Nodemon ###

Esta dependencia sirve para reiniciar el servidor automaticamente cada vez que haya un cambio, además la vamos a instalar como dependencia de desarrollo con la bandera **-D**.

`yarn add nodemon -D`

<br>

### Ejecutar App ###

Para ejecutar la aplicación debemos utilizar el siguiente comando:

`yarn start`

<br>

### Schema Básico ###

~~~
# Entidad Curso
type Curso {
	id: ID!
	titulo: String!
	descripcion: String!
	profesor: Profesor
	rating: Float
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
~~~

<br>

### Deprecación de Campos ###

La directiva **@deprecated** indica a ***GraphQL*** que el campo con esta directiva es un campo obsoleto o que está en desuso a manera de advertencia, y a pesar que no se muestra en la documentación de ***GraphiQL***, aún se podría consultar y pedir en los resultados porque aún forma parte del esquema (por el momento, aunque no será así en el futuro).


### Resolvers ###

Los **resolvers** pueden devolver o bien los **datos** o bien una **Promesa.** Lo cual es muy conveniente si dichos datos son a su vez extraídos desde otros servidores o incluso desde otros **REST/APIs.**

*Ejemplo 01* <br>

**Entrada:**

~~~
{
  cursos{
    titulo
  }
}
~~~

**Salida:**

~~~
{
  "data": {
    "cursos": [
      {
        "titulo": "GraphQL"
      },
      {
        "titulo": "PHP OOP"
      }
    ]
  }
}
~~~


*Ejemplo 02* <br>

**Entrada:**

~~~
{
  cursos{
    titulo
    descripcion
    profesor {
      nombre
    }
  }
}
~~~

**Salida:**

~~~
{
  "data": {
    "cursos": [
      {
        "titulo": "GraphQL",
        "descripcion": "Aprendiendo GraphQL.",
        "profesor": {
          "nombre": "Pedro"
        }
      },
      {
        "titulo": "PHP OOP",
        "descripcion": "PHP Orientado a Objetos.",
        "profesor": {
          "nombre": "Pedro"
        }
      }
    ]
  }
}
~~~



<br><br><br>

### Enlaces de interes ###
[Apollo GraphQL](https://www.apollographql.com/client/) <br>
[How To GraphQL](https://www.howtographql.com/)