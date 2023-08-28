# Challenge Week 6 weekend + week 7 challenge 1

Crea una API REST que se conecte a un fichero JSON. El JSON tendrá una sola propiedad de tipo array, donde almacenarán objetos que representarán cosas que hemos aprendido en el bootcamp.

La API REST debe tener los siguientes endpoints:

[GET] /things -> devuelve el array de cosas que ya sé

[GET] /things/:idThing -> devuelve una cosa que ya sé

[DELETE] /things/:idThing -> borra una cosa que ya sé

[PATCH] /things -> modifica una cosa que ya sé (la recibe en el body)

Usamos express con las capas:

- app
- router
- controller
- repo
- El modelo de datos estará representado como "entity" en una carpeta/fichero independiente.
- El repositorio y el controller son clases que se instancian en el Router.
- El interface del repositorio se inyecta en el controller (inversión de dependencias).
- Les errores se controlan mediante un middleware de errores.
