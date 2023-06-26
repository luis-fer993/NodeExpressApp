const { query } = require('express');
const express = require('express');
const router= express.Router();

//routes

router.get('/',(req,res)=>{
    //res.sendFile(path.join(__dirname, 'views/index.html'));
    //eje: http://localhost:3000/?name=juan //envia el parametro name=juan al servidor
    res.render('index.html', { title: 'Welcome', query : req.query.name }); //renderiza el archivo index.html que esta en la carpeta views y le envia un objeto con el titulo 
})

router.all('/info', (req, res,) => { //all es para que acepte cualquier metodo http
    res.send('info general');
});

router.get('/contact',(req,res)=>{
    res.render('contact.html', {title : 'Contactame '});
})


module.exports=router;
