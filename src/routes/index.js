const express = require('express');
const router= express.Router();

//routes

router.get('/',(req,res)=>{
    //res.sendFile(path.join(__dirname, 'views/index.html'));
    res.render('index.html', {title : 'Bienvenido a mi pagina'});
})


router.get('/contact',(req,res)=>{
    res.render('contact.html', {title : 'Contactame '});
})


module.exports=router;
