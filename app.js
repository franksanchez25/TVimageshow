const express = require('express');
const { listImagePath } = require('./helpers/listImagePath');


require('dotenv').config();
const app = express();
const port = process.env.PORT


app.set('view engine', 'hbs');

app.get('/getImagen', async (req, res)=>{

    console.log(req.url);
const piso1Folder = '/Users/newowner/Desktop/Projects/ImageViewerTV/images/piso1'

    const imageRoutes  = await listImagePath(piso1Folder);
    res.json({
        imageRoutes
    })

    // console.log(__dirname+'/views/piso1.html');
    // app.use(express.static(__dirname + '/views/piso1.html'))

    // res.render('piso1',{imageRoutes})

    // res.sendfile


})


app.get('/piso1', (req, res)=>{
   res.sendFile(__dirname + '/views/piso1.html');
})

app.get('/piso3', (req, res)=>{
    res.send('Imagenes desde el piso 3')
})

app.get('/piso4', (req, res)=>{
    res.send('Imagenes desde el piso 4')
})

app.get('/piso5', (req, res)=>{
    res.send('Imagenes desde el piso 5')
})
app.get('/piso6', (req, res)=>{
    res.send('Imagenes desde el piso 6')
})



app.listen( port, ()=>{
    console.log(`Escuchando en el puerto: ${port} `);
} )