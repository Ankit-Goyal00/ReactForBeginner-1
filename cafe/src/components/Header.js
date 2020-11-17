import React from 'react';

export default function Header(props){
	const {search , onInputChange , onSearchClick}=props;
	return(
		<div className="jumbotron">
		<h1 className="display-1"><span class="material-icons ico">fastfood</span> Food Recipe</h1>
		<div class="input-group w-50 mx-auto">
  			<input type="text" class="form-control" placeholder="Search Your Recipe....." value={props.search} onChange={props.onInputChange}/>
  			<div class="input-group-append">
    			<button className="btn btn-dark" onClick={onSearchClick}>Search</button>
  			</div>
		</div>
		</div>
		
		)

}