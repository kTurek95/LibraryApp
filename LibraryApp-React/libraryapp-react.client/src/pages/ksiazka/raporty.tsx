import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

export const Raporty = () => {
    return (
        <Container>
            <Row className="raporty-row1">
                <Col className="raporty-col-left">
                    <Row>
                        <Col className="raporty-col">
                            <Card className="raporty-card" border="light">
                                {/*<Card.Header>Header</Card.Header>*/}
                                <Card.Body>
                                    <Card.Title>Ilość sprzedanych książek</Card.Title>
                                    <Card.Text>
                                        3000                                     
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="raporty-col">
                            <Card className="raporty-card" border="light">
                                {/*<Card.Header>Header</Card.Header>*/}
                                <Card.Body>
                                    <Card.Title>Ilość zakupionych książek</Card.Title>
                                    <Card.Text>
                                        200
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="raporty-col">
                            <Card className="raporty-card" border="light">
                                {/*<Card.Header>Header</Card.Header>*/}
                                <Card.Body>
                                    <Card.Title>Książki na wypożeczniu</Card.Title>
                                    <Card.Text>
                                        1500
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col className="raporty-col-right">
                    <Card className="raporty-card" border="light">
                        {/*<Card.Header>Header</Card.Header>*/}
                        <Card.Body>
                            <Card.Title>Roczne podsumowanie wydatków</Card.Title>
                            <Card.Text>
                                Kwota wydana na książki
                                <br></br>
                                Kwota zarobiona ze sprzedaży książek
                                <br></br>
                                Kwota przeznaczona na renowację książek
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="raporty-row2">
                <Card className="raporty-card" border="light">
                    {/*<Card.Header>Header</Card.Header>*/}
                    <Card.Body>
                        <Card.Title>Sponsorzy</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    )
}