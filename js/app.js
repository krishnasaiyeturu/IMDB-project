let search=document.getElementById('searchtext');
let b=document.getElementById('button');
search.addEventListener('keypress',e=>{
    let searchtext=e.target.value;
    
    getMovies(searchtext);
});



function getMovies(searchtext) 
{
        let api= `http://www.omdbapi.com/?s=${searchtext}&apikey=4bfa66dc`;
    
        window.fetch(api)
        .then(data =>{
        console.log(data);

        data.json().then(movie =>{
            console.log(movie.Search);
            let movies= movie.Search;
            let output='';
            for(let imdbMovie of movies)
            {
                output +=`
                <h2>${imdbMovie.Title}<h2>
                <p>${imdbMovie.Year}</p>
                <p>${imdbMovie.imdbID}</p>
                <p>${imdbMovie.Type}</p>
                <img src="${imdbMovie.Poster}"/>`;
                
                document.getElementById('template').innerHTML=output;            
            }
        })
        .catch(err =>console.log(err) );
        })
        .catch(err => console.log(err));
   
}

