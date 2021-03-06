import React, {useState , useEffect} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

// import "../App.css";




function AllPokemons (){

const [pokemonList, setPokemonList] = useState<any[]>([]);

useEffect(() => {

axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
  .then(function (response) {
    // handle success
   // console.log(response.data.results);
  setPokemonList(response.data.results);
    //set all pokemons UI
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
    //default
  });


}, [])




return (
   <div style={{display:'flex',flexWrap:'wrap'}}>
  <Button variant="primary">Primary</Button>
{pokemonList.map(({name},index)=>
{


return(

    <div key={index} className="card">
  <img src={`https://img.pokemondb.net/artwork/large/${name}.jpg`} alt="Avatar" style={{width:'100%'}} />
  <div className="container">
    <h4><b>{name}</b></h4> 
    {/* <p>Architect & Engineer</p>  */}
  </div>
</div>
)})}
</div>
)

}


export default AllPokemons


