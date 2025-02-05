import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { Alert } from "react-bootstrap";

function FormTextExample() {
	return (
		<>
			<div className='my-5 col-10 mx-auto'>
				<h1 className='text-center my-5'>Connexion</h1>

				<Form.Label htmlFor="inputPassword5">Mail</Form.Label>
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

				<Button type="submit" className='my-3 d-flex mx-auto'>Connexion</Button>

				<Button>

				</Button>

				<Alert variant="secondary" dismissible className='my-5'>
					<Alert.Heading>Je n'ai pas de compte</Alert.Heading>
					Pour vous connecter veuillez en créer un <a href="/register" className="alert-link">ici</a>.
				</Alert>
			</div>
		</>
	);
}

export default FormTextExample;