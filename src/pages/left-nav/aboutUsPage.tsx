import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

export const AboutUs = () => {
    return (
        <Container>
            <Row>
                <Tabs
                    defaultActiveKey="profile"
                    id="fill-tab-example"
                    className="mb-3"
                    fill
                >
                    <Tab eventKey="home" title="About the Institution">
                        <Image className="e-collections-logo" src="/Image/left-nav/city-library.jpg" />
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                        by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,
                        you need to be sure there isn't anything embarrassing hidden in the middle of the text.
                        All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                        It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
                        The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                    </Tab>
                    <Tab eventKey="profile" title="Regulations of MBP">
                        <ListGroup>
                            <ListGroup.Item>Privacy Policy</ListGroup.Item>
                            <ListGroup.Item>Accessibility Statement</ListGroup.Item>
                            <ListGroup.Item>Standards for Minor Protection</ListGroup.Item>
                            <ListGroup.Item>GDPR</ListGroup.Item>
                            <ListGroup.Item>Pricing</ListGroup.Item>
                        </ListGroup>
                    </Tab>
                    <Tab eventKey="longer-tab" title="Cooperation">
                        <Image className="e-collections-logo" src="/Image/left-nav/cooperation.jpg" />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Tab>
                    <Tab eventKey="contact" title="Volunteering">
                        <Image className="e-collections-logo" src="/Image/left-nav/volunteering.jpg" />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Tab>
                </Tabs>
            </Row>
            <Row className="about-us-page-row-with-cards">
                <Card className="about-us-page-card-row">
                    <Card.Body>
                        <Card.Title>Cooperation</Card.Title>
                        <Card.Text>
                            Here you can check the available items in our branches across Poland.
                        </Card.Text>
                        <Link to="/wpolpraca" className="about-us-link-to-p">
                            <p className="row-card-button-p">Check</p>
                        </Link> 
                    </Card.Body>
                </Card>
                <Card className="about-us-page-card-row">
                    <Card.Body>
                        <Card.Title>Volunteering</Card.Title>
                        <Card.Text>
                            See where and how you can help others.
                        </Card.Text>
                        <Link to="/wolontariat" className="about-us-link-to-p">
                            <p className="row-card-button-p-volunteering">Check</p>
                        </Link> 
                    </Card.Body>
                </Card>
                <Card className="about-us-page-card-row-last-card">
                    <Card.Body>
                        <Card.Title>More About Us</Card.Title>
                        <Card.Text>
                            If you want to learn more about our library, we invite you.
                        </Card.Text>
                        <Link to="/wiecejONas" className="about-us-link-to-p">
                            <p className="row-card-button-p">Check</p>
                        </Link>                
                    </Card.Body>
                </Card>
            </Row>
            <Row>
                <p className="about-us-link-to-p-contact-page">
                    If you want to contact us, click <Link to="/kontakt">here</Link>
                </p>
            </Row>
        </Container>
    )
}
