import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';


export function Layout() {
    return (
        <div className="app">
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand>
                        <Link to="/" className="d-block">
                            <Image className="logo" src="/Image/image1.png" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link>
                                <Badge className="link-badge" pill bg="light">
                                    <Link to="/">
                                        <a className="layout-link">Home</a>
                                    </Link>
                                </Badge>
                            </Nav.Link>
                            <NavDropdown title=<Badge className="link-badge" pill bg="light">
                                <a className="layout-link">Ksiazki</a>
                            </Badge> id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">
                                    <Link to="/ksiazka">Dodawanie ksiazki</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    <Link to="/ksiazki">Dostepne ksiazki</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    <Link to="/raporty">Raporty</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title=<Badge className="link-badge" pill bg="light">
                                <a className="layout-link">Zbiory</a>
                            </Badge> id="navbarScrollingDropdown">
                                <NavDropdown.Item>
                                    <Link to="/ezbiory" className="d-block">e-Zbiory</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/zbiorymbp" className="d-block">Zbior MBP</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/zbioryNowosci" className="d-block">Nowosci</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/polecane" className="d-block">Polecane</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link>
                                <Badge className="link-badge" pill bg="light">
                                    <Link to="/filie">
                                        <a className="layout-link">Filie</a>
                                    </Link>
                                </Badge>
                            </Nav.Link>
                            <Nav.Link>
                                <Badge className="link-badge" pill bg="light">
                                    <Link to="/jakkorzystac">
                                        <a className="layout-link">Jak Korzystac</a>
                                    </Link>
                                </Badge>
                            </Nav.Link>
                            <Nav.Link>
                                <Badge className="link-badge" pill bg="light">
                                    <Link to="/kontakt">
                                        <a className="layout-link">Kontakt</a>
                                    </Link>
                                </Badge>
                            </Nav.Link>
                            <Nav.Link>
                                <Badge className="link-badge" pill bg="light">
                                    <Link to="/onas">
                                        <a className="layout-link">O nas</a>
                                    </Link>
                                </Badge>
                            </Nav.Link>
                            <Nav.Link>
                                <Badge className="link-badge" pill bg="light">
                                    <Link to="/projekty">
                                        <a className="layout-link">Projekty</a>
                                    </Link>
                                </Badge>
                            </Nav.Link>
                            <Nav.Link>
                                <Badge className="link-badge" pill bg="light">
                                    <Link to="/wydarzenia">
                                        <a className="layout-link">Wydarzenia</a>
                                    </Link>
                                </Badge>
                            </Nav.Link>
                            <Nav.Link>
                                <Badge className="link-badge" pill bg="light">
                                    <Link to="/zgloszakup">
                                        <a className="layout-link">Zglos Zakup</a>
                                    </Link>
                                </Badge>
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Szukaj"
                                className="me-2"
                                aria-label="Szukaj"
                            />
                            <Button variant="outline-success">Szukaj</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="d-flex">
                <Container className="flex-grow-1">
                    <Container>
                        <Outlet />
                    </Container>
                </Container>
            </div>

            <Container className="layout-container">
                <Card className="text-center">
                    <Card.Header>
                        <Link to="https://www.facebook.com" target="_blank">
                            <img className="footer-img" src="/Image/homePage/facebook.png" />
                        </Link>
                        <Link to="https://www.instagram.com" target="_blank">
                            <img className="footer-img" src="/Image/homePage/twitter.png" />
                        </Link>
                        <Link to="https://www.linkedin.com" target="_blank">
                            <img className="footer-img" src="/Image/homePage/instagram.png" />
                        </Link>
                        <Link to="https://www.twitter.com" target="_blank">
                            <img className="footer-img" src="/Image/homePage/linkedin.png" />
                        </Link>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Container className="footer-container">
                            <Form>
                                <Form.Label className="signup">
                                    Sign up for our newsleter
                                </Form.Label>
                                <Form.Control className="email-label" type="email" placeholder="Enter email address" />
                                <Button className="signup-button" variant="primary">Go</Button>
                            </Form>
                        </Container>
                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                </Card>
            </Container>
        </div>
    );
}