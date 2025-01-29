import React from 'react';
import "./Home.css";
import Contact from '../../components/partials/Contact';
import Article from '../../components/cards/AdCard';
// import Carousel from '../../components/partials/Carousel';

const Home = () => {
	return (
		<>
			<div className=''>
				<h1 className="my-5 text-center" >GEEK PROJETOS</h1>

				<div className="d-flex justify-content-center mx-auto">
					<img
						src="https://www.londressecret.com/wp-content/uploads/2020/02/Forbidden-Planet-Londres-22.jpg"
						alt="Logo"
						height=""
						className="d-inline-block align-top img-fluid"
					/>

					{/* <Carousel /> */}
				</div>

				<div className='col-10 mx-auto row justify-content-center gap-5'>
					<h2 className="my-5 text-center">Articles populaires</h2>
					<Article />
					<Article />
					<Article />
				</div>

				<div id='contact'>
					<Contact />
				</div>
			</div>
		</>
	)
}

export default Home 