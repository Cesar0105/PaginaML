//para modulos locales utilizamos ./ para los nativos no 
const express=require('express');
const app=express();
const path=require('path');
//app.use('/static', express.static(__dirname+'public'))
app.use(express.static('public'));

const port=3030;

app.listen(port,()=>console.log('Servidor arriba'));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/home.html'));
} );

app.get('/',(req,res)=>{
    res.sendFile(__dirname,'/views/home.html');
} );




//Ruta 404
app.get('*',(req,res)=>{
    res.status(404).send('404 not found.<br>!Houston, tenemos un problema!');
} );