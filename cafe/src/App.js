import React, {useState , useEffect} from 'react';
import Header from './components/Header';
import Recipe from './components/Recipe';
import './App.css';
import Axios from 'axios';



function App() {
 


  const[search, setSearch]= useState("chicken");

  const[recipes, setRecipes]= useState([]);

  const APP_ID = "75c43e8f";
  const APP_KEY = "101f899cfc24bd0c8678b24d36473a3d";

  useEffect(()=>{
    getRecipes();
    
  },[]);

  const getRecipes= async () =>{
    const result = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    

    setRecipes(result.data.hits);

  };

  const onInputChange= (e)=>{
    setSearch(e.target.value);

  }

  const onSearchClick = () =>{
    getRecipes();
  }
  return (
    <div className="App">
    
    <Header search={search} onInputChange={onInputChange} onSearchClick={onSearchClick}/>
    <div className="container">
      <Recipe recipes= {recipes}/>
    </div>
      
    </div>
  );
}

export default App;
