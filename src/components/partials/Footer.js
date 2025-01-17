import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function SimpleFooter() {
	return (
		<footer className="bg-dark py-3">
			<Container>
				<Row>
					<Col className="text-center">
						<p className="mb-0 text-light">&copy; 2025 Groupe 3 Bayonne. All rights reserved.</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
}

export default SimpleFooter;