import React from 'react'

const ArticleID = (props) => {
	return (
		<>
			<h1>{props.title}</h1>

			<div className='row col-10 mx-auto'>
				<img src="src/logo.svg" alt="test" />
				<p>{props.prix}</p>
				<div>
					<button type="button">Vente</button>
					<button type="button">Don</button>
				</div>
				<button type="button">Supprimmer l'annonce</button>
			</div>
		</>
	)
}

export default ArticleID