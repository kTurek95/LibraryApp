import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

export const Reports = () => {
    return (
        <Container>
            <Row className="reports-row1">
                <Col className="reports-col-left">
                    <Row>
                        <Col className="reports-col">
                            <Card className="reports-card" border="light">
                                {/*<Card.Header>Header</Card.Header>*/}
                                <Card.Body>
                                    <Card.Title>Number of Sold Books</Card.Title>
                                    <Card.Text>
                                        3000                                     
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="reports-col">
                            <Card className="reports-card" border="light">
                                {/*<Card.Header>Header</Card.Header>*/}
                                <Card.Body>
                                    <Card.Title>Number of Purchased Books</Card.Title>
                                    <Card.Text>
                                        200
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="reports-col">
                            <Card className="reports-card" border="light">
                                {/*<Card.Header>Header</Card.Header>*/}
                                <Card.Body>
                                    <Card.Title>Books on Loan</Card.Title>
                                    <Card.Text>
                                        1500
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col className="reports-col-right">
                    <Card className="reports-card" border="light">
                        {/*<Card.Header>Header</Card.Header>*/}
                        <Card.Body>
                            <Card.Title>Annual Spending Summary</Card.Title>
                            <Card.Text>
                                Amount spent on books
                                <br></br>
                                Amount earned from book sales
                                <br></br>
                                Amount allocated for book restoration
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="reports-row2">
                <Card className="reports-card" border="light">
                    {/*<Card.Header>Header</Card.Header>*/}
                    <Card.Body>
                        <Card.Title>Sponsors</Card.Title>
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
