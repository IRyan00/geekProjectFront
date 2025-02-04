import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

import FloatingLabel from 'react-bootstrap/FloatingLabel';

// A garder au cas où
// function postData() {
	
// 	const handleSubmit = (event) => {
// 			const form = event.currentTarget;
// 			if (form.checkValidity() === false) {
// 					event.preventDefault();
// 					event.stopPropagation();
// 					}
			
// 					setValidated(true);
// 				};

			
// 			// Fonction pour gérer la soumission du formulaire
// 			function handleInput() {
// 				const input = document.getElementById("userInput").value;
// 				const safeInput = sanitizeInput(input);
// 				document.getElementById("output").textContent = `Bonjour, ${safeInput}!`;}
// 			}  				


function ContactForm() {
	const [validated, setValidated] = useState(false);

	const handleSubmit = (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}
		setValidated(true);
	};

	const postData = {
		name: "John Doe",
		email: "email@email.com",
		comments: "message de commentaire"
	};

	axios.post("http://127.0.0.1:5001/api/users", postData)
		.then(response => {
			console.log(response.data);
		}).catch(error => {
			console.log(error.message);
		});

	return (
		<>
			<div className=''>
				<h2 className='text-center my-5 text-light'>Nous contacter</h2>

				<Form noValidate validated={validated} onSubmit={handleSubmit} className='my-5 col-10 mx-auto'>
					<Row className="mb-3">
						<Form.Group as={Col} md="6" controlId="validationCustom01">
							{ <Form.Label>First name</Form.Label> }
							<InputGroup hasValidation>
								<InputGroup.Text id="inputGroupPrepend"></InputGroup.Text>
								<Form.Control
									required
									type="text"
									placeholder="Your name"
									defaultValue="Your name"
								/>
								<Form.Control.Feedback type="invalid">
									Please choose a username.
								</Form.Control.Feedback>
							</InputGroup>

							<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
						</Form.Group>
						<Form.Group as={Col} md="6" controlId="validationCustomUsername">
							{ <Form.Label>Mail</Form.Label> }
							<InputGroup hasValidation>
								<InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
								<Form.Control
									required
									type="text"
									placeholder="Mail"
									aria-describedby="inputGroupPrepend"
								/>
								<Form.Control.Feedback type="invalid">
									Please choose a username.
								</Form.Control.Feedback>
							</InputGroup>
						</Form.Group>
					</Row>
					<FloatingLabel controlId="floatingTextarea2" label="Comments">
						<Form.Control
							as="textarea"
							placeholder="Leave a comment here"
							style={{ height: '100px' }}
						/>
					</FloatingLabel>
					<Button type="submit" className='my-3 d-flex mx-auto btn btn-dark'>Submit</Button>
				</Form>
			</div>
		</>
	);
}

export default ContactForm;