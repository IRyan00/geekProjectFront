import React from 'react'
import { Form, FormControl, Button, FormGroup, FormLabel } from 'react-bootstrap';
import { Pagination } from 'react-bootstrap';
import Article from '../components/cards/AdCard'

const Articles = () => {
	return (
		<>
			<h1 className='text-center my-5'>Tous les articles</h1>

			<Form className="d-flex col-md-6 my-auto py-3 col-10 mx-auto">
				<FormControl
					type="search"
					placeholder="Search"
					className="me-2"
					aria-label="Search"
				/>
				<Button variant="secondary" type="submit">
					Search
				</Button>
			</Form>

			<div className="col-md-6 my-auto py-3 col-10 mx-auto">
				<FormGroup controlId="sort-select">
					<FormLabel>Sort</FormLabel>
					<FormControl as="select" className="form-control">
						<option value="1">Vente</option>
						<option value="2">Don</option>
					</FormControl>
				</FormGroup>
			</div>

			<div className='row col-10 mx-auto gap-5 my-5 justify-content-center'>
				<Article />
				<Article />
				<Article />
				<Article />
				<Article />
				<Article />
				<Article />
				<Article />
				<Article />
				<Article />
				<Article />
				<Article />
				<Article />
				<Article />
				<Article />
				<Article />
			</div>

			<div className='d-flex justify-content-center'>
				<Pagination>
					<Pagination.Prev disabled />
					<Pagination.Item active>{1}</Pagination.Item>
					<Pagination.Item>{2}</Pagination.Item>
					<Pagination.Item>{3}</Pagination.Item>
					<Pagination.Item>{4}</Pagination.Item>
					<Pagination.Item>{5}</Pagination.Item>
					<Pagination.Next />
				</Pagination>
			</div>

			<h2 className='text-center my-5'>Ajouter une annonce</h2>
		</>
	)
}

export default Articles