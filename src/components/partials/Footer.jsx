import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function SimpleFooter() {
	return (
		<footer className="py-3 bg-primary">
			<Container>
				<Row>
					<Col className="text-center">
						<p className="mb-0">&copy; 2025 Your Company. All rights reserved.</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
}

export default SimpleFooter;