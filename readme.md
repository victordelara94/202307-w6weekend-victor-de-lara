# Back-end del Proyecto de Personajes de Anime
Este repositorio contiene la parte de back-end de un proyecto de personajes de anime desarrollado con Express.js, Node.js, MongoDB. El servidor de back-end se encarga de gestionar las solicitudes HTTP y las interacciones con la base de datos MongoDB. Las responsabilidades del repositorio están divididas en varias capas:

# Capa Repository
El repositorio es el intermediario entre la base de datos y nuestro Back, usando los distintos métodos que nos aporta el modelo de mongoose. Y devuelve a nuestro controller la información de MongoDB para que retorne la respuesta que hayamos decidido en nuestro controller. 

# Capa Controller
La capa de controlador es responsable de procesar las solicitudes HTTP y de gestionar la lógica de la aplicación. Aquí es donde se definen y exportan las funciones que manejan las operaciones CRUD en los personajes de anime.

# Capa Router
La capa de enrutador se encarga de dirigir las solicitudes HTTP a los controladores y middlewares correspondientes para ciertas rutas. 
