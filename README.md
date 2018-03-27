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