
const peliculas = require ("./peliculas") ;

function mostrarTodo (peliculas) {
for (let i = 0; i < peliculas.length; i++) {
    console.log("id de la pelicula:",peliculas[i].id);
    console.log("El nombre de la pelicula :",peliculas[i].name);
    console.log("la calificacion de los usuarios :",peliculas[i].rating + "puntos");
    console.log("la cantidad de premios ganados:",peliculas[i].awards);
    console.log("el tiempo que dura la pelicula:",peliculas[i].length + " min");
    console.log("valor de la pelicula: $",peliculas[i].price);
    console.log("el genero de la pelicula:",peliculas[i].genre,"\n\n----------------------------------\n");
    
}
}



mostrarTodo(peliculas);