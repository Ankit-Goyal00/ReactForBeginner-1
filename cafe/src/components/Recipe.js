import React from 'react';
import RecipeItem from './RecipeItem';

export default function Recipe(props){
	const {recipes}= props;
	return(
		<div className="card-columns">
		{
			recipes.map(recipe => <RecipeItem name={recipe.recipe.label} image={recipe.recipe.image}
				ingredientLines={recipe.recipe.ingredientLines}/>)
		}

		</div>
		)
}