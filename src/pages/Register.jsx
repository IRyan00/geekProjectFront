import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function FormTextExample() {
	return (
		<>
			<div className='my-5 col-10 mx-auto'>
				<h1 className='text-center my-5'>Inscription</h1>

				<Form.Label>Nom</Form.Label>
				<InputGroup className="mb-3">
					<InputGroup.Text id="basic-addon1"></InputGroup.Text>
					<Form.Control
						placeholder="Nom"
						aria-label="Nom"
						aria-describedby="basic-addon1"
					/>
				</InputGroup>

				<Form.Label>Mail</Form.Label>
				<InputGroup className="mb-3">
					<InputGroup.Text id="basic-addon1">@</InputGroup.Text>
					<Form.Control
						placeholder="Email"
						aria-label="Email"
						aria-describedby="basic-addon1"
					/>
				</InputGroup>

				<Form.Label htmlFor="inputPassword5">Password</Form.Label>
				<Form.Control
					type="password"
					id="inputPassword5"
					aria-describedby="passwordHelpBlock"
				/>
				<Form.Text id="passwordHelpBlock" muted>
					Your password must be 8-20 characters long, contain letters and numbers,
					and must not contain spaces, special characters, or emoji.
				</Form.Text>

				<Form.Label htmlFor="inputPassword5">Confirm Password</Form.Label>
				<Form.Control
					type="password"
					id="inputPassword5"
					aria-describedby="passwordHelpBlock"
				/>

				<Button type="submit" className='my-3 d-flex mx-auto' href="/">Inscription</Button>
			</div >
		</>
	);
}

export default FormTextExample;