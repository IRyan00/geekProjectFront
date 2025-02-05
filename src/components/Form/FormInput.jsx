import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const NameInput = () => (
	<Form.Group as={Col} md="6" controlId="validationCustom01">
		{/* {<Form.Label>First name</Form.Label>} */}
		<InputGroup hasValidation className='mb-3'>
			<InputGroup.Text id="inputGroupPrepend"></InputGroup.Text>
			<Form.Control
				required
				type="text"
				placeholder="Your name"
			/>
			<Form.Control.Feedback type="invalid">
				Please choose a username.
			</Form.Control.Feedback>
		</InputGroup>

		<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
	</Form.Group>
);

const MailInput = () => (
	<Form.Group as={Col} md="6" controlId="validationCustomUsername">
		{/* {<Form.Label>Mail</Form.Label>} */}
		<InputGroup hasValidation>
			<InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
			<Form.Control
				required
				type="text"
				placeholder="Mail"
				aria-describedby="inputGroupPrepend"
			/>
			<Form.Control.Feedback type="invalid">
				Please choose an email.
			</Form.Control.Feedback>
		</InputGroup>
	</Form.Group>
);

const TextAreaInput = () => {
	return (
		<FloatingLabel controlId="floatingTextarea2" label="Comments">
			<Form.Control
				as="textarea"
				placeholder="Leave a comment here"
				style={{ height: '100px' }}
			/>
		</FloatingLabel>
	);
};

export { NameInput, MailInput, TextAreaInput };