# Hotel Backend

> **proyecto**
> 
- `Instalar dependencias`
> 
> **npm install**
> 
- `Correr Proyecto modo Desarrollo`
> 
> **npm run dev**
> 
- `Correr Proyecto modo Producccion`
> 
> **npm run prod**
> 
- `Puerto donde corre el backend`
> `http://localhost:2000/api`
#

# package.json
## Configurar dotenv en S.O. UNIX, WINDOWS

- `Unix`
```
 "scripts": {
    "dev": "NODE_ENV=development nodemon server/server.js",
    "prod": "NODE_ENV=production node server/server.js"
  },
```
- `windows`
```
 "scripts": {
    "dev": "set NODE_ENV=development nodemon server/server.js",
    "prod": "set NODE_ENV=production node server/server.js"
  },
```


# Librerias Utilizadas

```
*  dependencies
*    "dotenv": "^16.0.1",
*    "express": "^4.18.1",
*    "morgan": "^1.10.0",
*    "mysql2": "^2.3.3",
*    "sequelize": "^6.21.3",
*    "sequelize-fixtures": "^1.2.0",
*    "swagger-jsdoc": "^5.0.1",
*    "swagger-ui-express": "^4.5.0"
*  "devDependencies"
*    "nodemon": "^2.0.19"
```
# Dotenv 
## Configuracion de entorno de desarrollo y produccion
* Aqui debe colocar su configuracion de MYSQL y los puertos de backend y frontend 
```
 .env.development
    NODE_ENV=development
    MYSQL_HOST=localhost
    MYSQL_USER=root
    MYSQL_PASSWORD=root
    MYSQL_DB=hotel
    PORT_BACKEND=2000
    PORT_FRONTEND=http://localhost:3000
 .env.production
    NODE_ENV=development
    MYSQL_HOST=localhost
    MYSQL_USER=root
    MYSQL_PASSWORD=root
    MYSQL_DB=hotel
    PORT_BACKEND=2000
    PORT_FRONTEND=http://localhost:3000

```
# Sequelize fixtures

* Con esta libreria generamos datos por defecto en la base de datos cuando esta inicializa.

## Modelos
* Cliente
* Cuarto
* Reserva
* PersonaCuarto
* Factura
* Pago

>  URL Swagger ui 
-  `http://localhost:2000/api-docs/`

![](/assets/swaggerm.png)

# Endpoints

## Cliente
CRUD: Cliente crear actualizar listar eliminar
El cliente es necesario en el analisis para poder hacer una reserva como cliente del hotel y tener al cliente en la base de datos para futuras reservacion de habitaciones.
![](/assets/cliente.png)


## Cuarto
CRUD: Cuarto crear actualizr listar eliminar
El cuarto tiene tipo de habitaciones, camas por habitacion, personas por habitacion y diferentes tipos de cuarto para el cliente, como ser cuarto FAMILIAR INDIVUAL DUPLEX COMPARTIDO ETC.
![](/assets/cuarto.png)


## Reserva
CRUD: Reserva crear actualizar listar eliminar, el cliente puede hacer una reserva con diferentes tipos de pago como TARJETA EFECTIVO O TRANSFERENACIA
![](/assets/reserva.png)


## PersonaCuarto
CRUD: PersonaCuarto crear actualizar listar elimnar, el cliente cuando reserva puede ser una persona natural o persona juridica que reserva para terceros, entonces la factura va para la persona natural o juridica, y los cuartos con las personas correspondientes con sus respectivos datos personales.
![](/assets/personacuarto.png)

<!-- CRUD: Factura crear actualizar listar elimnar, La factura es emitida al cliente una vez el cliete haya pagado el monto total de la reserva. -->
## Factura
CRUD: Factura, crear actualizar listar eliminar, La factura tiene el monotototal del pago codigocontrol o depende con que tipo de factura se esta trabajando electronica o computarizada, solo emite el verificante en cualquier momento una vez el cliente pago el monto total de la reserva
![](/assets/factura.png)

## Pago
CRUD: PAGO crear actualizar listar eliminar, El pago puede ser uno o mas pagos hasta llegar al monto total de la reserva y asi la factura se emite la cliente una vez que el pago sea total.
![](/assets/pago.png)


## Proceso para hacer una reserva
> POST, PROCESO DE RESERVAR 
* El proceso de reserva es un endpoint que tiene todos lo datos CLIENTE, RESERVA, CUARTOS, PAGOS, PERSONACUARTO, es un JSON PERSONALIZADO exclusivamente para hacer una reserva en un solo enpoint. 
## Ejemplo de esquema JSON para hacer una reserva
```
{
  "clienteId": 1,
  "reservar": {
    "diasEstadia": 4,
    "estado": "PENDIENTE"
  },
  "cuartos": [
    3
  ],
  "pago": {
    "montoPagado": 100,
    "metodoPago": "TARJETA"
  },
  "personaCuarto": [
    {
      "id": null,
      "nombres": "Carmen",
      "apellidos": "Sanches",
      "ciodni": 23222,
      "pais": "Bolivia",
      "fechaNacimiento": "1999-02-02T00:00:00.000Z",
      "cuartoId": 3
    },
    {
      "id": null,
      "nombres": "Alfredo",
      "apellidos": "Costas Sanches",
      "ciodni": 332322,
      "pais": "Bolivia",
      "fechaNacimiento": "2007-03-03T00:00:00.000Z",
      "cuartoId": 3
    }
  ]
}
```

> GET, MOSTRAR RESERVA
* Mediante el ID de reserva se puede obetener todos los datos de la RESERVA, como ser CLIENTE, PAGOS, CUARTOS, FACTURA, PERSONCACUARTO con este endpoint se puede hacer una facturacion solo llamando este endpoint
>
![](/assets/procesoreserva.png)
