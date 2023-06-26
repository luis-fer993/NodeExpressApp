const { Router } = require("express");
const router = Router();
const Movies = require("../sample.json");

const _ = require("underscore"); //underscore es una libreria de javascript que nos permite hacer operaciones con arreglos y objetos de una manera mas facil y se puede crear la constante _ para usar sus metodos


// HTTP METHODS 

// GET , USE TO GET DATA FROM SERVER
router.get("/", (req, res) => {
  res.json(Movies);
});

// POST , USE TO SEND DATA TO SERVER
router.post("/", (req, res) => {
  const { title, director, year, rating } = req.body; //destructuring the object req.body to get the data
  if (title && director && year && rating) {          // req.body es el objeto que se envia desde el cliente
    const id = Movies.length + 1;
    const newMovie = { id, ...req.body };
    Movies.push(newMovie);            // push metodo de los arreglos para agregar un elemento al final del arreglo
    res.json(Movies);              // res.json metodo de express para enviar un objeto json al cliente            
  } else {
    res.status(500).json({ message: "Error" });
  }
});

//DELETE , USE TO DELETE DATA FROM SERVER
router.delete("/:id", (req, res) => {
  const { id } = req.params; //destructuring the object req.params to get the id
  _.each(Movies, (movie, i) => {
    if (movie.id == id) {
      Movies.splice(i, 1);
    }
    res.send(Movies);
  });
});

//PUT , USE TO UPDATE DATA FROM SERVER
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, director, year, rating } = req.body;
  if (title && director && year && rating) {
        _.each(Movies, (movie, i) => { // _.each es un metodo de underscore que recorre un arreglo y ejecuta una funcion por cada elemento del arreglo
        if (movie.id == id) {
            Movies[i].title = title;
            Movies[i].director = director;
            Movies[i].year = year;
            Movies[i].rating = rating;
        }
        res.send(Movies);
        });
    } else {
        res.status(500).json({ message: "Error" });
    }
});


module.exports = router;