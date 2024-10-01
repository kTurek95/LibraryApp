import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import { EventsTsx, EventsInfo } from '../../types/events/events';
import { InterestInTheEventsItem, EventsInfoMonthItem, EventsInfoVoivodeshipItem, UpcomingEventsInfoItem, EventsItem } from './eventsItem';
import { BookChoose, BookTsx } from '../../types/book/book';
import { BookChooseItem, BookItem } from '../book/BookItem';
import * as Yup from 'yup';
import { Formik, Form as FormikForm } from 'formik';
import Button from 'react-bootstrap/Button';

export const Events = () => {
    const [eventList, setEventList] = useState<EventsTsx[]>([
        // Initializing array
    ]);

    useEffect(() => {
        const eventsFetchedFromApi: EventsTsx[] = [
            {
                date: "02-12-2022API",
                time: "10:10API",
                events: "book collection API",
                address: "ul.Wrocławska, WrocławAPI",
                category: "category 1API"
            },
            {
                date: "22-11-2022API",
                time: "10:20API",
                events: "book collection API",
                address: "ul.Wrocławska, WrocławAPI",
                category: "category 2API"
            }
        ];
        setEventList(eventsFetchedFromApi);
    }, [])

    const [eventListByMonth, setEventListByMonth] = useState<EventsInfo[]>([]);

    useEffect(() => {
        const eventsByMonthFetchedFromApi: EventsInfo[] = [
            {
                month: "July",
                quantityOfEvents: 10,
                name: '',
                province: '',
                quantityOfTicketsPurchased: 0,
                numberOfQueries: 0
            },
            {
                month: "September",
                quantityOfEvents: 17,
                name: '',
                province: '',
                quantityOfTicketsPurchased: 0,
                numberOfQueries: 0
            },
            {
                month: "December",
                quantityOfEvents: 11,
                name: '',
                province: '',
                quantityOfTicketsPurchased: 0,
                numberOfQueries: 0
            }
        ];
        setEventListByMonth(eventsByMonthFetchedFromApi);
    }, [])

    const [eventListByProvince, setEventListByProvince] = useState<EventsInfo[]>([]);

    useEffect(() => {
        const eventsByProvinceFetchedFromApi: EventsInfo[] = [
            {
                province: "Lower Silesian",
                quantityOfEvents: 9,
                name: '',
                month: '',
                quantityOfTicketsPurchased: 0,
                numberOfQueries: 0
            },
            {
                province: "Masovian",
                quantityOfEvents: 7,
                name: '',
                month: '',
                quantityOfTicketsPurchased: 0,
                numberOfQueries: 0
            },
            {
                province: "Subcarpathian",
                quantityOfEvents: 6,
                name: '',
                month: '',
                quantityOfTicketsPurchased: 0,
                numberOfQueries: 0
            },
        ];
        setEventListByProvince(eventsByProvinceFetchedFromApi);
    }, [])

    const [upcomingEventsList, setUpcomingEventsList] = useState<EventsInfo[]>([]);

    useEffect(() => {
        const upcomingEventsFetchedFromApi: EventsInfo[] = [
            {
                name: "Event 1",
                quantityOfTicketsPurchased: 1900,
                month: '',
                province: '',
                quantityOfEvents: 0,
                numberOfQueries: 0
            },
            {
                name: "Event 2",
                quantityOfTicketsPurchased: 1400,
                month: '',
                province: '',
                quantityOfEvents: 0,
                numberOfQueries: 0
            },
            {
                name: "Event 3",
                quantityOfTicketsPurchased: 1360,
                month: '',
                province: '',
                quantityOfEvents: 0,
                numberOfQueries: 0
            },
        ];
        setUpcomingEventsList(upcomingEventsFetchedFromApi);
    }, [])

    const [interestInEventsList, setInterestInEventsList] = useState<EventsInfo[]>([])

    useEffect(() => {
        const interestInEventsFetchedFromApi: EventsInfo[] = [
            {
                name: "For children",
                numberOfQueries: 1300,
                month: '',
                province: '',
                quantityOfEvents: 0,
                quantityOfTicketsPurchased: 0
            },
            {
                name: "Author meeting",
                numberOfQueries: 1100,
                month: '',
                province: '',
                quantityOfEvents: 0,
                quantityOfTicketsPurchased: 0
            },
            {
                name: "Educational",
                numberOfQueries: 900,
                month: '',
                province: '',
                quantityOfEvents: 0,
                quantityOfTicketsPurchased: 0
            },
        ];
        setInterestInEventsList(interestInEventsFetchedFromApi);
    }, [])

    const [eventFiltering, setEventFiltering] = useState<BookTsx[]>([])

    useEffect(() => {
        const eventFilteringFetchedFromApi: BookTsx[] = [
            {
                label: "Search by date",
                control: "text"
            }
        ];
        setEventFiltering(eventFilteringFetchedFromApi);
    }, []);

    const [searchBranch, setSearchBranch] = useState<BookChoose[]>([])

    useEffect(() => {
        const searchBranchFetchedFromApi: BookChoose[] = [
            {
                label: "Search by branch number",
                select: "Default select example",
                options: ["Choose", "1", "2", "3"]
            },
            {
                label: "Search by event category",
                select: "Default select example",
                options: ["Choose", "Author meetings", "Educational", "For children"]
            }
        ];
        setSearchBranch(searchBranchFetchedFromApi);
    }, []);

    const initialValues = {
        "Search by date": "",
        "Search by branch number": "",
        "Search by event category": "",
    }

    const validationSchema = Yup.object().shape({
        "Search by date": Yup.string()
            .required("Field is required"),
        "Search by branch number": Yup.string()
            .required("Field is required"),
        "Search by event category": Yup.string()
            .required("Field is required"),
    })

    return (
        <Container>
            <Row>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        console.log(values);
                        resetForm();
                        setSubmitting(false);
                    }}
                >
                    {({ isSubmitting }) => (
                        <FormikForm>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Event Filtering</Accordion.Header>
                                    <Accordion.Body>
                                        <Row>
                                            {eventFiltering.map((item, index) =>
                                                <BookItem key={index} book={item} />
                                            )}
                                            {searchBranch.map((item, index) =>
                                                <BookChooseItem key={index} bookChoose={item} />
                                            )}
                                        </Row>
                                        <Row>
                                            <Col xs="auto" className="pb-3">
                                                <Button variant="primary" type="submit" disabled={isSubmitting}>Filter</Button>{' '}
                                            </Col>
                                        </Row>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </FormikForm>
                    )}
                </Formik>
            </Row>
            <Row>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Events</th>
                            <th>Address</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {eventList.map((item, index) =>
                            <EventsItem key={index} events={item} />
                        )}
                    </tbody>
                </Table>
            </Row>
            <Col className="events-page-col-with-cards-and-rows">
                <Row className="events-page-row-with-cards-1">
                    <Card className="events-page-card-with-information-left">
                        <Card.Body>
                            <Card.Title>Months with the Most Events</Card.Title>
                            <Card.Text>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Month</th>
                                            <th>Number of Events</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {eventListByMonth.map((item, index) =>
                                            <EventsInfoMonthItem key={index} eventsInfo={item} />
                                        )}
                                    </tbody>
                                </Table>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="events-page-card-with-information">
                        <Card.Body>
                            <Card.Title>Most Anticipated Events</Card.Title>
                            <Card.Text>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Number of Tickets Purchased</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {upcomingEventsList.map((item, index) =>
                                            <UpcomingEventsInfoItem key={index} eventsInfo={item} />
                                        )}
                                    </tbody>
                                </Table>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
                <Row className="events-page-row-with-cards-2">
                    <Card className="events-page-card-with-information-left">
                        <Card.Body>
                            <Card.Title>Provinces with the Most Events</Card.Title>
                            <Card.Text>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Province</th>
                                            <th>Number of Events</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {eventListByProvince.map((item, index) =>
                                            <EventsInfoVoivodeshipItem key={index} eventsInfo={item} />
                                        )}
                                    </tbody>
                                </Table>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="events-page-card-with-information">
                        <Card.Body>
                            <Card.Title>Categories with the Most Interest</Card.Title>
                            <Card.Text>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Number of Queries</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {interestInEventsList.map((item, index) =>
                                            <InterestInTheEventsItem key={index} eventsInfo={item} />
                                        )}
                                    </tbody>
                                </Table>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
            </Col>
        </Container>
    )
}
