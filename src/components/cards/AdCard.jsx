import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import ArticleID from './pages/ArticleID'

function BasicExample() {
	return (
		<Card style={{ width: '18rem' }}>
			<Card.Img variant="top" src="holder.js/100px180" />
			<Card.Body >
				<Card.Title className='text-center my-3'>Title</Card.Title>
				<div className='d-flex gap-2 my-3'>
					<span class="badge bg-success">Vente</span>
					<span class="badge bg-primary">Don</span>
				</div>
				<Card.Text className='text-justify my-3'>
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
				</Card.Text>
				<div className='d-flex justify-content-center my-3'>
					<Button variant="primary" href='pages/ArticleID.jsx'>Voir les détails</Button>
				</div>
			</Card.Body>
		</Card>
	);
}

export default BasicExample;