import React from 'react';

const RecipeItem= props => {
	const{name , image , ingredientLines} = props;
	return(
		
					<div class="card my-3">
						<img src={image} class="img-fluid rounded-circle" />
						<div class="card-body">
						<h4>{name}</h4>
						</div>
						<ul class="list-group">
						{
							ingredientLines.map(ingredient => (
								<li class="list-group-item">{ingredient}</li>
								))
						}
						</ul>
					</div>
				
		)


};

export default RecipeItem;