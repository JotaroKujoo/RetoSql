<div align="center" id="top"> 
  &#xa0;

  <!-- <a href="https://retosql.netlify.app">Demo</a> -->
</div>

<h1 align="center">Series and Movies API</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/JotaroKujoo/retosql?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/JotaroKujoo/retosql?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/JotaroKujoo/retosql?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/JotaroKujoo/retosql?color=56BEB8">

  <!-- <img alt="Github issues" src="https://img.shields.io/github/issues/{{JotaroKujoo}}/retosql?color=56BEB8" /> -->

  <!-- <img alt="Github forks" src="https://img.shields.io/github/forks/{{JotaroKujoo}}/retosql?color=56BEB8" /> -->

  <!-- <img alt="Github stars" src="https://img.shields.io/github/stars/{{JotaroKujoo}}/retosql?color=56BEB8" /> -->
</p>

<!-- Status -->

<!-- <h4 align="center"> 
	🚧  Retosql 🚀 Under construction...  🚧
</h4> 

<hr> -->

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#sparkles-relations">DB Relations</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
  <a href="https://github.com/JotaroKujoo" target="_blank">Author</a>
</p>

<br>

## :dart: About ##

Se nos pide realizar una base de datos de Películas y Series, con usuarios y roles diferentes, los cuales 
van a poder realizar pedidos de películas y series. Debe existir el rol admin que pueda gestionar la baja 
de usuarios y poder visualizar los pedidos en marcha y todos los pedidos existentes. 

## :sparkles: Relations ##

<img src="./assets\CapturaRelationsBD.jpg">

## :rocket: Technologies ##

The following tools were used in this project:

- [Node.js](https://nodejs.org/en/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Sequelize](https://sequelize.org/)
- [SQL](https://dev.mysql.com/doc/)

## :white_check_mark: Requirements ##

Antes de empezar :checkered_flag:, necesitas tener [Git](https://git-scm.com) y [Node](https://nodejs.org/en/) instalados.


## :checkered_flag: Starting ##

```bash
# Clone this project
$ git clone https://github.com/JotaroKujoo/retosql

# Access
$ cd retosql

# Install dependencies
$ npm i

# Run the project
$ npm run dev

# The server will initialize in the <http://localhost:3000>
```

## :mailbox: Rutas  ##
Aquí vengo a explicar como serán las rutas get, post, patch y delete:

- Movies
  - Obtener todas las películas `GET http://localhost:3000/movies/`
  - Obtener película por id `GET http://localhost:3000/movies/getmoviesid/:id`
  - Obtener películas por genero `GET http://localhost:3000/movies/getmoviesgenre/:genre`
  - Obtener las películas mejor valoradas `GET http://localhost:3000/movies/getmoviesrating/`
  - Obtener las películas por título `GET http://localhost:3000/movies/getmoviestitulo/:title`

- Series
  - Obtener todas las series `GET http://localhost:3000/series/`
  - Obtener serie por id `GET http://localhost:3000/series/getserieid/:id`
  - Obtener series por genero `GET http://localhost:3000/series/getseriegenre/:genre`
  - Obtener las series mejor valoradas `GET http://localhost:3000/series/getseriesrating/`
  - Obtener las series por título `GET http://localhost:3000/series/getseriestitulo/:title`

- Authenticate
  - Registrar usuario con el body los valores (mail,name,password,birthDate,roleIdRole). En caso de ser user normal el rol será 2 y en caso de ser admin el rol será 1 `POST http://localhost:3000/auth/register` 
  - Iniciar sesión de usuario con el body los valores (mail,password) Nos devolverá un token en formato Bearer con el que podremos validar las acciones en el resto del programa `POST http://localhost:3000/auth/login`
- Orders
  - Para hacer el pedido de una película con el body los valores (mail,title) `POST http://localhost:3000/order/movie`
  - Para hacer el pedido de una serie con el body los valores (mail,title) `POST http://localhost:3000/order/serie`
  - Para terminar el pedido de una película con el body los valores (mail,title) `POST http://localhost:3000/order/endorder`
  - Para obtener mis pedidos, con el body los valores (mail,title) `POST http://localhost:3000/order/movie`
- User
  - Para obtener los datos de uno mismo como usuario `GET http://localhost:3000/users/`
  - Para actualizar los datos de uno mismo como usuario con el body los valores que desees cambiar y la password como obligatorio `PATCH http://localhost:3000/users/`
  - Para eliminar usuarios (solo admin) `DELETE http://localhost:3000/users/:mail`

## :memo: License ##

This project is under license from MIT. For more details, see the [LICENSE](LICENSE.md) file.


Made with :heart: by <a href="https://github.com/JotaroKujoo" target="_blank">Jose Rodriguez Calero</a>

&#xa0;

<a href="#top">Back to top</a>
