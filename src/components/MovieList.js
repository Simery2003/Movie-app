import React from 'react';

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;
	console.log(props.movies)
	return (
		<>
			{props.movies.map((movie, index) => (
				movie.Poster!=='N/A'?
				<div className='image-container d-flex justify-content-start m-3'>
					<img src={movie.Poster} alt='movie'	></img>
					<div
						onClick={() => props.handleFavouritesClick(movie)}
						className='overlay d-flex align-items-center justify-content-center'
					>
						<FavouriteComponent />
					</div>
				</div>
				:null
			))}
		</>
	);
};

export default MovieList;
