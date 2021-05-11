import React,{useState,useEffect} from 'react';
import Card from './Card'
import './App.css';

function App() {
  const [search,setsearch] = useState("");
  const [m,setm]=useState([]);
  const [query,setquery] = useState("coffee");

  const APP_ID = "8f74cca3";
  const APP_KEY = "7802f83408b86ca7dcb6e884597f4166";
  const example_URL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;


  useEffect(() => {
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[query]);



  async function  getData() {

      const data = await fetch(example_URL);
      const x = await data.json();
      setm(x.hits);
      
  }
  function inputs(e){
      setsearch(e.target.value);
  }
  function info(e){
    e.preventDefault();
    setquery(search);
    setsearch("");
}
  return (
    <div className="App">
      <h1>Food Recipe</h1>
      <form onSubmit={info}>
      <input type="text" onChange={inputs} id="inp"/>
      <button type="submit">Get</button>
      </form>
      <div className="container">
        {m.map(recipe => 
        <Card
         title={recipe.recipe.label}
          img={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />)}
      </div>
    </div>
  );
}

export default App;


