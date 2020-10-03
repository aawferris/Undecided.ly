import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import RecipeSummary from './RecipeSummery';

function App() {
  const [currentRecipe, setCurrentRecipe] = useState('')

  useEffect(() => {
    const url = 'https://www.themealdb.com/api/json/v1/1/random.php'
    const fetchData = async () => {
      const response = await axios.get(url)
      console.log(response.data.meals[0]);
      setCurrentRecipe(response.data.meals[0])
    }
    fetchData()
    document.title = `Undecided.ly`
  }, [])

  if (currentRecipe === null) {
    return <h1>Yelling at the chef...</h1>
  }

  return (
    <div className="App">
      <RecipeSummary userData={currentRecipe} />
    </div>
  )
}

export default App;
