export const ADD_MOVIES='ADD_MOVIES';
export const ADD_FAVOURITES='ADD_FAVOURITES';
export const REMOVE_FAVOURITES='REMOVE_FAVOURITES';
export const SET_SHOW_FAVOURTIES='SET_SHOW_FAVOURTIES';
export const ADD_MOVIE_TO_LIST='ADD_MOVIE_TO_LIST';
export const ADD_SEARCH_RESULT='ADD_SEARCH_RESULT';

export function setShowFavourites(val){
    return{
        type:SET_SHOW_FAVOURTIES,
        val
    }
}

export function addFavourites(movie){
    
    return{
        type:ADD_FAVOURITES,
        movie
    }

}

export function removeFavourites(movie){
    
    return{
        type:REMOVE_FAVOURITES,
        movie
    }

}
export function addMovies(movies){
    return{
        type:ADD_MOVIES,
        movies:movies
    }
}

export function addMovieToList(movie){
    return{
        type:ADD_MOVIE_TO_LIST,
        movie:movie
    }
}

export function handleMovieSearch(movie){
    const url=`http://www.omdbapi.com/?apikey=3ca5df7&t=${movie}`;
    //console.log(movie);

    return function(dispatch){
        fetch(url)
        .then(response=>response.json()
        .then(movie=>{
            console.log('movie',movie);

            //dispatch an action
            dispatch(addMovieSearchResult(movie));
        }))
    }
}

export function addMovieSearchResult(movie){
    return{
        type:ADD_SEARCH_RESULT,
        movie:movie
    }
}