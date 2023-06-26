//JS
const express = require("express");
const morgan = require("morgan");
//import  express  from 'express';
const app = express();
const path = require("path");

const { PORT } = require("./config");



//settings
app.set("views", path.join(__dirname, "views"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");
app.set('json spaces', 2)

//app.set('port', process.env.PORT || 3000); //otra forma de configurar el puerto del servidor
//app.get('port'); //otra forma de obtener el puerto del servidor

//middlewares
// middlewares son funciones que se ejecutan antes de que lleguen a las rutas del servidor
//utiles para validar datos, autenticar usuarios, guardar logs, etc
/* 
app.use((req,res,next)=>{
    console.log(`${req.url} - ${req.method}`);  
    next(); //next es una funcion que se ejecuta para que el servidor continue con la siguiente funcion
})

app.use((req,res,next)=>{                   //ejemplo de validacion de usuario  
    if(req.query.login == 'email@email.com'){
        next(); 
    }else{
        res.send('no autorizado');
    }
})

app.route('/dashboard') ...
*/
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//routes
app.use(require("./routes/index")); //importa el archivo index.js de la carpeta routes y ejecuta las rutas del servidor



app.use("/api/movies",require("./routes/apiRoute")); //api del servidor 
app.use("/api/users", require("./routes/users")); //api de usuarios desde otro servidor 
app.use('/api/mysql', require('./routes/mysql.routes')); 
app.use((req, res, next) => {   
    res.status(404).render("404.html", { req: req.url });
});


//static files
app.use(express.static(path.join(__dirname, "public")));

//listen the server
app.listen(PORT, () => {
  console.log(`server on http://localhost:${PORT}`);
});

