import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';


export const Onas = () => {
    return (
        <Container>
            <Row>
                <Tabs
                    defaultActiveKey="profile"
                    id="fill-tab-example"
                    className="mb-3"
                    fill
                >
                    <Tab eventKey="home" title="O instytucji">
                        <Image className="ezbiory-logo" src="/Image/left-nav/miejska-biblioteka.jpg" />
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                        by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,
                        you need to be sure there isn't anything embarrassing hidden in the middle of text.
                        All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                        It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
                        The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                    </Tab>
                    <Tab eventKey="profile" title="Regulamin MBP">
                        <ListGroup>
                            <ListGroup.Item>Polityka prywatnosci</ListGroup.Item>
                            <ListGroup.Item>Deklaracja dostepnosci</ListGroup.Item>
                            <ListGroup.Item>Standardy ochrony maloletnich</ListGroup.Item>
                            <ListGroup.Item>RODO</ListGroup.Item>
                            <ListGroup.Item>Cennik</ListGroup.Item>
                        </ListGroup>
                    </Tab>
                    <Tab eventKey="longer-tab" title="Wspolpraca">
                        <Image className="ezbiory-logo" src="/Image/left-nav/wspolpraca.jpg" />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Tab>
                    <Tab eventKey="contact" title="Wolontariat">
                        <Image className="ezbiory-logo" src="/Image/left-nav/wolontariat.jpg" />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Tab>
                </Tabs>
            </Row>
            <Row className="o-nas-page-row-with-cards">
                <Card className="o-nas-page-card-row">
                    <Card.Body>
                        <Card.Title>Współpraca</Card.Title>
                        <Card.Text>
                            Tutej możesz sprawdzić dostępne pozycje w naszych oddziałach w całej Polsce
                        </Card.Text>
                        <Link to="/wpolpraca" className="o-nas-link-to-p">
                            <p className="row-card-przycisk-p">Sprawdź</p>
                        </Link> 
                    </Card.Body>
                </Card>
                <Card className="o-nas-page-card-row">
                    <Card.Body>
                        <Card.Title>Wolontariat</Card.Title>
                        <Card.Text>
                            Zobacz gdzie i jak możesz pomóc innnym
                        </Card.Text>
                        <Link to="/wolontariat" className="o-nas-link-to-p">
                            <p className="row-card-przycisk-p-wolontariat">Sprawdź</p>
                        </Link> 
                    </Card.Body>
                </Card>
                <Card className="o-nas-page-card-row-last-card">
                    <Card.Body>
                        <Card.Title>Więcej o nas</Card.Title>
                        <Card.Text>
                            Jeśli chcesz się dowiedzieć więcej o naszej bibliotece zapraszamy.
                        </Card.Text>
                        <Link to="/wiecejONas" className="o-nas-link-to-p">
                            <p className="row-card-przycisk-p">Sprawdź</p>
                        </Link>                
                    </Card.Body>
                </Card>
            </Row>
            <Row>
                <p className="o-nas-link-to-p-contact-page">
                    Jeśli chcesz się z nami skontaktować przejdź <Link to="/">tutaj</Link>
                </p>
            </Row>
        </Container>
    )
}