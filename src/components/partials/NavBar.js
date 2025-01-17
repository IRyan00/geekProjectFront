import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function CustomNavbar() {
	return (
		<Navbar className='sticky-top' bg="light" expand="lg">
			<Navbar.Brand href="/">
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFxn-0Kp4Qgppjz51V6gjqMpW0OeBP3mmfwA&s"
					alt="Logo"
					height="30"
					className="d-inline-block align-top"
				/>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
				<Nav className="ml-auto text-center">
					<Nav.Link href="/">Home</Nav.Link>
					<Nav.Link href="/about">About</Nav.Link>
					<Nav.Link href="/articles">Articles</Nav.Link>
					<Nav.Link href="/contact">Contact</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default CustomNavbar;