import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import { NameInput, MailInput, TextAreaInput } from '../Form/FormInput';
import ContactButton from '../Form/SubmitButton';


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
						<NameInput />
						<MailInput />
					</Row>
					<TextAreaInput />
					<ContactButton />
				</Form>
			</div>
		</>
	);
}

export default ContactForm;