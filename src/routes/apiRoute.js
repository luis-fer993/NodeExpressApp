const { Router } = require("express");
const router = Router();
const Movies = require("../sample.json");

const _ = require("underscore");

router.get("/", (req, res) => {
  res.json(Movies);
});

router.post("/", (req, res) => {
  const { title, director, year, rating } = req.body;
  if (title && director && year && rating) {
    const id = Movies.length + 1;
    const newMovie = { id, ...req.body };
    Movies.push(newMovie);
    res.json(Movies);
  } else {
    res.status(500).json({ message: "Error" });
  }
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  _.each(Movies, (movie, i) => {
    if (movie.id == id) {
      Movies.splice(i, 1);
    }
    res.send(Movies);
  });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, director, year, rating } = req.body;
  if (title && director && year && rating) {
        _.each(Movies, (movie, i) => {
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