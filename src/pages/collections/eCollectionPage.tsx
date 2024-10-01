import Image from 'react-bootstrap/Image';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

export const ECollections = () => {
    return (
        <Container>
            <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-6"
            >
                <Tab eventKey="home" title="IBUK LIBRA">
                    <div>
                        <Image className="e-collections-logo" src="/Image/e-colletctions/ibuk_libra.jpeg" />
                    </div>
                    <div>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                        making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                        and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,
                        sometimes on purpose (injected humour and the like).
                    </div>
                </Tab>
                <Tab eventKey="profile" title="EMPIK GO">
                    <div>
                        <Image className="e-collections-logo" src="/Image/e-colletctions/empikgo.jpeg" />
                    </div>
                    <div>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                        making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                        and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,
                        sometimes on purpose (injected humour and the like).
                    </div>
                </Tab>
                <Tab eventKey="contact" title="ACADEMICA">
                    <div>
                        <Image className="e-collections-logo" src="/Image/e-colletctions/academica.jpeg" />
                    </div>
                    <div>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                        making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                        and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,
                        sometimes on purpose (injected humour and the like).
                    </div>
                </Tab>
            </Tabs>
            <Row className="about-us-page-row-with-cards">
                <Card className="about-us-page-card-row">
                    <Card.Body>
                        <Card.Title>EmpikGo</Card.Title>
                        <Card.Text>
                            Here you can see how to create an account on the given service, as well as which books you can access
                            thanks to our cooperation with Empik Go
                        </Card.Text>
                        <Link to="/empicGo" className="about-us-link-to-p">
                            <p className="row-card-button-p">Check</p>
                        </Link>
                    </Card.Body>
                </Card>
                <Card className="about-us-page-card-row">
                    <Card.Body>
                        <Card.Title>IBUK Libra</Card.Title>
                        <Card.Text>
                            Here you can see how to create an account on the given service, as well as which books you can access
                            thanks to our cooperation with IBUK Libra
                        </Card.Text>
                        <Link to="/ibukLibra" className="about-us-link-to-p">
                            <p className="row-card-button-p-volunteering">Check</p>
                        </Link>
                    </Card.Body>
                </Card>
                <Card className="about-us-page-card-row-last-card">
                    <Card.Body>
                        <Card.Title>Academica</Card.Title>
                        <Card.Text>
                            Here you can see how to create an account on the given service, as well as which books you can access
                            thanks to our cooperation with Academica
                        </Card.Text>
                        <Link to="/academica" className="about-us-link-to-p">
                            <p className="row-card-button-p">Check</p>
                        </Link>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    )
}
