import React from 'react';
import Navbar from './Navbar';
import MovieCard from './MovieCard';  

import { data } from './data';
import { addMovies, setShowFavourites } from '../actions';

class App extends React.Component{
  
 componentDidMount(){
  //make api call
  //dispatch an action

  const store=this.props.store;

  store.subscribe(()=>{
    console.log("Updated")
    console.log(store.getState())
    this.forceUpdate();
  })

  store.dispatch(addMovies(data))

  console.log(store.getState());
 }

 isMovieFavourite=(movie)=>{
  const {favourites}=this.props.store.getState().movies;

  const index=favourites.indexOf(movie);

  if(index!=-1){
    return true;
  }
  return false;
}

onChangeTab=(val)=>{
  this.props.store.dispatch(setShowFavourites(val))
}

  render(){
    //const movies=this.props.store.getState().list;

    const {movies,search}=this.props.store.getState();
    const {list,favourites,showFavourites}=movies;

   
    const displayMovies=showFavourites?favourites:list;
  return (
    <div className="App">
      <Navbar dispatch={this.props.store.dispatch} search={search}/>
      <div className="main">
        <div className='tabs'>
        <div className={`tab ${showFavourites ? '' : 'active-tabs' }`} onClick={()=>this.onChangeTab(false)}>Movies</div>
        <div className={`tab ${showFavourites ? 'active-tabs' : '' }`} onClick={()=>this.onChangeTab(true)}>Favorites</div>
        </div>
      </div>

      <div className='list'>
        {
          displayMovies.map((movie,index)=>(
            <MovieCard movie={movie} key={`movies_${index}`} dispatch={this.props.store.dispatch} 
            isFavourite={this.isMovieFavourite(movie)}/>
          ))
        }
      </div>
      {displayMovies.length===0?<div className='no-movies'>No Movies to display</div>:null}

    </div>
  );
}
}

export default App;
