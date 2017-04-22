# Nodepop 2017

Pr�ctica M�dulo MEAN - NodeJS & MongoDB

# Instalacion

La aplicaci�n est� desarrollada sobre la versi�n de Node 7.8.0. 

 *git clone <ruta_proyecto>
 *npm install


Lanzar fichero inicial de bbdd que guardar� un usuario por defecto (email: admin@demonode.es  -  pass: supersegura): 

```
npm run installDB
```

Arrancar aplicaci�n por defecto en el puerto 3000: 

```
npm start
```

***

#Documentaci�n de uso:

*Para peticiones POST utilizar x-www-form-urlencoded*
*Para utilizar lenguaje deseado --> Accept-Language [en - es]


#Ejemplo de request para listar todos los anuncios:

*http://localhost:3000/apiv1/anuncios?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNThlN2U1MmJmNzI5NGEyNjgwMzliYTQxIiwiaWF0IjoxNDkxNzczMzM3LCJleHAiOjE0OTIyMDUzMzd9.dahlYK8tqvxKJyOcpoy7rcY7X96Uo4E5QyIYXoNkQuM


***

###Login de usuario (conseguir autenticaci�n)
* URL


*Para peticiones POST utilizar x-www-form-urlencoded*
*Para utilizar lenguaje deseado --> Accept-Language [en - es]

```
POST /apiv1/users/login
```

* PAR�METROS (*OBLIGATORIOS)

```
	username: email del usuario
	password: contrase�a del usuario

```

###A�adir usuarios:
* URL


*Para peticiones POST utilizar x-www-form-urlencoded*
*Para utilizar lenguaje deseado --> Accept-Language [en - es]

```
POST /apiv1/users/signup
```

* PAR�METROS (* OBLIGATORIOS)

```
	*name: nombre
	*email: email del usuario
	*pass: contrase�a

```



	- *Jos� Antonio Maldonado*