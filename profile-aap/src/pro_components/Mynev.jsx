import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// box icons 

function Mynev() {
    return (
        <div className="border-bottom border-secondary">
            <Navbar bg="dark" data-bs-theme="dark" className="navbar-toggler">
                <Container>
                    <Navbar.Brand href="/">My Portfolio</Navbar.Brand>
                    <Navbar.Toggle />
                    
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/About">About</Nav.Link>
                            <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
                            <Nav.Link href="/Contact">Contact</Nav.Link>
                            {/* <Nav.Link href="#Menu"><i class='bx bx-menu fs-4' ></i></Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Mynev;