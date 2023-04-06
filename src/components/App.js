import React from 'react';
import Navbar from './Navbar';
import MovieCard from './MovieCard';  

import { data } from './data';
import { addMovies } from '../actions';

class App extends React.Component{
  
 componentDidMount(){
  //make api call
  //dispatch an action

  const store=this.props.store;

  store.subscribe(()=>{
    console.log("Updated")

    this.forceUpdate();
  })

  store.dispatch(addMovies(data))

  console.log(store.getState());
 }
  render(){
    const movies=this.props.store.getState();
  return (
    <div className="App">
      <Navbar/>
      <div className="main">
        <div className='tabs'>
        <div className='tab'>Movies</div>
        <div className='tab'>Favorites</div>
        </div>
      </div>

      <div className='list'>
        {
          movies.map((movie,index)=>(
            <MovieCard movie={movie} key={`movies_${index}`}/>
          ))
        }
      </div>

    </div>
  );
}
}

export default App;
