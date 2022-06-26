//Import our data
const movies = require('../seeds/movies.seed');

// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

//Import and use our model
const Movie = require('../models/movie.model');

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-cinema";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    return Movie.deleteMany()
  })
  .then((response)=>{
    console.log(`Database cleaned and ready to go`);
    return Movie.insertMany(movies)
  })
  .then((response)=>{
    for(film of response){
      console.log(`${film.title} added succesfuly`);
    }
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
