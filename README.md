# Nodepop 2017

Práctica Módulo MEAN - NodeJS & MongoDB

# Instalacion

La aplicación está desarrollada sobre la versión de Node 7.8.0. 

 *git clone <ruta_proyecto>
 *npm install


Lanzar fichero inicial de bbdd que guardará un usuario por defecto (email: admin@demonode.es  -  pass: supersegura): 

```
npm run installDB
```

Arrancar aplicación por defecto en el puerto 3000: 

```
npm start
```

***

#Documentación de uso:

*Para peticiones POST utilizar x-www-form-urlencoded*
*Para utilizar lenguaje deseado --> Accept-Language [en - es]


#Ejemplo de request para listar todos los anuncios:

*http://localhost:3000/apiv1/anuncios?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNThlN2U1MmJmNzI5NGEyNjgwMzliYTQxIiwiaWF0IjoxNDkxNzczMzM3LCJleHAiOjE0OTIyMDUzMzd9.dahlYK8tqvxKJyOcpoy7rcY7X96Uo4E5QyIYXoNkQuM


***

###Login de usuario (conseguir autenticación)
* URL


*Para peticiones POST utilizar x-www-form-urlencoded*
*Para utilizar lenguaje deseado --> Accept-Language [en - es]

```
POST /apiv1/users/login
```

* PARÁMETROS (*OBLIGATORIOS)

```
	username: email del usuario
	password: contraseña del usuario

```

###Añadir usuarios:
* URL


*Para peticiones POST utilizar x-www-form-urlencoded*
*Para utilizar lenguaje deseado --> Accept-Language [en - es]

```
POST /apiv1/users/signup
```

* PARÁMETROS (* OBLIGATORIOS)

```
	*name: nombre
	*email: email del usuario
	*pass: contraseña

```



	- *José Antonio Maldonado*