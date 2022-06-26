const { response } = require('express');
const express = require('express');
const router = express.Router();
const Movies = require('../models/movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req,res,next) =>{
    Movies.find()
    .then((movieArray)=>{
        res.render('movies.hbs', {movieArray})
    })
    .catch((err)=>{
        next(err)
    })
})

router.get('/movie/:id', (req,res,next) =>{
    Movies.findById(req.params.id)
    .then((movieDetail)=>{
        console.log("TEST MOVIE DETAIL", movieDetail)
        res.render('movieDetail.hbs', {movieDetail})
    })
    .catch((err)=>{
        next(err)
    })
})

module.exports = router;
