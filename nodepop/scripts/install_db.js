/**
 * Created by Jose on 05/04/2017.
 */


var mongodb = require('mongodb');
var client = mongodb.MongoClient;

client.connect('mongodb://localhost:27017/nodepop', function(err, db) {
    if (err) {
        return console.log(err, 'Error al conectar con MongoDB');
    }

    console.log('CONECTADO A MONGO');

    //Borro los datos existentes
    db.collection('usuarios').removeMany();
    db.collection('anuncios').removeMany();


    // Creo datos iniciales en la BBDD

    //Usuario de prueba email: admin@demonode.es   pass: supersegura
    db.collection('usuarios').insertMany([
        {
            name: "admin",
            email: "admin@demonode.es",
            pass: "$2a$06$kNJ95eIcIqioRiYmzxp0JOypl19wu.JbrNwdaP8gBANPh8PRr3nz6",
        }
    ],function (err, result) {
        if(err){
            console.log('error:',err);
            return;
        }
        console.log('Usuarios añadidos',result);
    });


    db.collection('anuncios').insertMany([
        {
            nombre: "Disco SSD",
            venta: true,
            precio: 150,
            foto: "ssd.jpg",
            tags: [ "lifestyle", "tech"]
        },
        {
            nombre: "Monitor 24 inch",
            venta: false,
            precio: 120,
            foto: "monitor.jpg",
            tags: [ "lifestyle", "tech"]
        },
        {
            nombre: "Motorcycle",
            venta: true,
            precio: 6000,
            foto: "motorcycle.jpg",
            tags: [ "lifestyle", "motor"]
        },
        {
            nombre: "Montain Bike",
            venta: false,
            precio: 455,
            foto: "montain_bike.jpg",
            tags: [ "lifestyle", "sport"]
        },{

            nombre: "Laptop MSI i7",
            venta: false,
            precio: 1100,
            foto: "laptop.jpg",
            tags: [ "geek", "tech"]
        },
        {
            nombre: "Kindle Fire",
            venta: true,
            precio: 110,
            foto: "kindle.jpg",
            tags: [ "lifestyle", "culture"]
        },
        {
            nombre: "Office chair",
            venta: false,
            precio: 160,
            foto: "chair.jpg",
            tags: [ "job", "furniture"]
        },
        {
            nombre: "Sofa chaise lounge",
            venta: true,
            precio: 2550,
            foto: "sofa.jpg",
            tags: [ "home", "furniture"]
        }
    ],function (err, result) {
        if(err){
            console.log('error:',err);
            return;
        }
        console.log('Anuncios añadidos',result);
    });

    db.close();

});