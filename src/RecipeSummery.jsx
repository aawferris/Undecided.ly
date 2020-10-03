import React, { useState } from 'react'
import './App.css';

function RecipeSummary(props) {
  const [showMore, setShowMore] = useState(false)

  return (
    <div class='container' id='master-container'>
      <div class='container' id="header">
        <h1>Undecided.ly</h1>
        <p id='subtitle'>Now you <span>don't</span> have to make a decision!</p>
      </div>
      <div class='container' id='intro'>
        <h2>{props.userData.strMeal}</h2>
        <img src={props.userData.strMealThumb} alt='image of the completed dish' />
        <button id='button-show' onClick={() => setShowMore(!showMore)}>{showMore ? "Show Less" : "Show More"}</button>
        {showMore ?
          (
            <p className='container' id='show-more'>
              <p><strong>Meal Category: </strong>{props.userData.strCategory}</p>
              <p><strong>Origin: </strong>{props.userData.strArea}</p>
              <p><strong>Recipe Source: </strong><a href={props.userData.strSource} target='_blank'>{props.userData.strSource}</a></p>
              {/* need something to handle null tags */}
              <p><strong>Tags: </strong>{props.userData.strTags}</p>
            </p>)
          : (<div></div>)}
      </div>
      <div class='container' id='recipe-box'>
        <div class='container' id='ingredients'>
          <h3>Ingredients:</h3>
          <ul>
            {/* I need to make an if statement that hides null measures and ingredients */}
            <li>{props.userData.strMeasure1}  {props.userData.strIngredient1}</li>
            <li>{props.userData.strMeasure2}  {props.userData.strIngredient2}</li>
            <li>{props.userData.strMeasure3}  {props.userData.strIngredient3}</li>
            <li>{props.userData.strMeasure4}  {props.userData.strIngredient4}</li>
            <li>{props.userData.strMeasure5}  {props.userData.strIngredient5}</li>
            <li>{props.userData.strMeasure6}  {props.userData.strIngredient6}</li>
            <li>{props.userData.strMeasure7}  {props.userData.strIngredient7}</li>
            <li>{props.userData.strMeasure8}  {props.userData.strIngredient8}</li>
            <li>{props.userData.strMeasure9}  {props.userData.strIngredient9}</li>
            <li>{props.userData.strMeasure10}  {props.userData.strIngredient10}</li>
            <li>{props.userData.strMeasure11}  {props.userData.strIngredient11}</li>
            <li>{props.userData.strMeasure12}  {props.userData.strIngredient12}</li>
            <li>{props.userData.strMeasure13}  {props.userData.strIngredient13}</li>
            <li>{props.userData.strMeasure14}  {props.userData.strIngredient14}</li>
            <li>{props.userData.strMeasure15}  {props.userData.strIngredient15}</li>
            <li>{props.userData.strMeasure16}  {props.userData.strIngredient16}</li>
            <li>{props.userData.strMeasure17}  {props.userData.strIngredient17}</li>
            <li>{props.userData.strMeasure18}  {props.userData.strIngredient18}</li>
            <li>{props.userData.strMeasure19}  {props.userData.strIngredient19}</li>
            <li>{props.userData.strMeasure20}  {props.userData.strIngredient20}</li>
          </ul>
        </div>
        <div class='container' id='instructions'>
          <h3>Instructions:</h3>
          {props.userData.strInstructions}
          <button
            id='watch'>
            <a href={props.userData.strYoutube} target='_blank' alt='link to YouTube video on how to make the recipe'>
              See How</a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default RecipeSummary