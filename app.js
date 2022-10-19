const { json } = require('express');
const express = require('express');
const app = express();

const path = require('path');
const publicFolderPath = path.resolve('public');

app.use(express.json());
//app.use(express.urlencoded());

app.use(express.static(publicFolderPath));


const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log ('estoy funcionando')});




    //DEFINO LAS RUTAS A LOS HTML
    app.get('/', (req, res) => {
        res.sendFile(path.resolve('views/home.html'));
    });

    app.get('/registro', (req, res) => {
        res.sendFile(path.resolve('views/register.html'));
    });
    
    app.get('/login', (req, res) => {
        res.sendFile(path.resolve('views/login.html'));
    });
    //app.post('/', (res,req) =>{
    //})

