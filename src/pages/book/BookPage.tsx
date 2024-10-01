import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import { BookChoose, BookTsx, BookCheck } from '../../types/book/book';
import { useEffect, useState } from 'react';
import { BookCheckItem, BookChooseItem, BookItem } from './BookItem';
import * as Yup from 'yup';
import { Formik, Form as FormikForm } from 'formik';

export const Book = () => {
    const [book, setBook] = useState<BookTsx[]>([
    ]);

    useEffect(() => {
        const bookFetchFromAPI: BookTsx[] = [
            {
                label: "Title",
                control: "text",
            },
            {
                label: "Author",
                control: "text",
            },
            {
                label: "Year of publication",
                control: "text",
            },
        ];
        setBook(bookFetchFromAPI);
    }, []);

    const [bookChoose, setBookChoose] = useState<BookChoose[]>([
    ]);

    useEffect(() => {
        const bookChooseFetchFromApi: BookChoose[] = [
            {
                label: "Category",
                select: "Default select example",
                options: ["Choose", "Romance", "Drama", "Crime", "Thriller", "Horror"]
            }
        ];
        setBookChoose(bookChooseFetchFromApi);
    }, []);

    const [bookCheck, setBookCheck] = useState<BookCheck[]>([
    ]);

    useEffect(() => {
        const bookCheckFetchFromApi: BookCheck[] = [
            {
                type: "checkbox",
                id: "custom-switch",
                label: "New"
            }
        ];
        setBookCheck(bookCheckFetchFromApi);
    }, []);

    const [bookSecondTab, setBookSecondTab] = useState<BookTsx[]>([
    ]);

    useEffect(() => {
        const bookSecondTabFetchFromApi: BookTsx[] = [
            {
                label: "Online Price",
                control: "number",
            },
            {
                label: "Purchase VAT",
                control: "number",
            },
            {
                label: "Sale VAT",
                control: "number",
            },
            {
                label: "Default Price",
                control: "number",
            },
        ];

        setBookSecondTab(bookSecondTabFetchFromApi);
    }, []);

    const [bookThirdTab, setBookThirdTab] = useState<BookTsx[]>([
    ]);

    useEffect(() => {
        const bookThirdTabFetchFromApi: BookTsx[] = [
            {
                label: "Additional Information",
                control: "textarea",
            },
            {
                label: "Remarks",
                control: "textarea",
            },
            {
                label: "Add file",
                control: "file",
            },
        ];
        setBookThirdTab(bookThirdTabFetchFromApi);
    }, []);

    const initialDataValue = {
        Title: "",
        Author: "",
        "Year of publication": "",
        Category: "",
        New: false,
    }

    const basicDataSchema = Yup.object().shape({
        Title: Yup.string()
            .required("Field is required"),
        Author: Yup.string()
            .required("Field is required"),
        "Year of publication": Yup.number()
            .required("Field is required")
            .typeError("Year of publication must be a number"),
        Category: Yup.string()
            .required("Field is required"),
        New: Yup.boolean().oneOf([true], "Field is required"),
    })

    const initialPriceValue = {
        "Online Price": null,
        "Purchase VAT": null,
        "Sale VAT": null,
        "Default Price": null,
    }

    const priceSchema = Yup.object().shape({
        "Online Price": Yup.number()
            .required("Field is required"),
        "Purchase VAT": Yup.number()
            .required("Field is required"),
        "Sale VAT": Yup.number()
            .required("Field is required"),
        "Default Price": Yup.number()
            .required("Field is required"),
    })

    const initialRemarksValue = {
        "Additional Information": "",
        Remarks: "",
        "Add file": "",
    }

    const remarksSchema = Yup.object().shape({
        "Additional Information": Yup.string()
            .required("Field is required"),
        Remarks: Yup.string()
            .required("Field is required"),
        "Add file": Yup.mixed()
            .required("Field is required"),
    })

    return (
        <Container>
            <Row>
                <Tabs defaultActiveKey="basicData" id="itemData" className="mb-3">
                    <Tab eventKey="basicData" title="Basic Data">
                        <Formik
                            initialValues={initialDataValue}
                            validationSchema={basicDataSchema}
                            onSubmit={(values, { setSubmitting, resetForm }) => {
                                console.log(values);
                                resetForm();
                                setSubmitting(false);
                            }}
                        >
                            {({ isSubmitting }) => (
                                <FormikForm>
                                    <Row>
                                        {book.map((item, index) => (
                                            <BookItem key={index} book={item} />
                                        ))}
                                    </Row>
                                    <Row>
                                        {bookChoose.map((item, index) => (
                                            <BookChooseItem key={index} bookChoose={item} />
                                        ))}
                                    </Row>
                                    <Row>
                                        {bookCheck.map((item, index) => (
                                            <BookCheckItem key={index} bookCheck={item} />
                                        ))}
                                    </Row>
                                    <Row>
                                        <Col xs="auto" className="pb-3">
                                            <Button variant="primary" type="submit" disabled={isSubmitting}>Save</Button>{' '}
                                            <Button variant="secondary" type="button">Cancel</Button>
                                        </Col>
                                    </Row>
                                </FormikForm>
                            )}
                        </Formik>
                    </Tab>
                    <Tab eventKey="price" title="Price">
                        <Formik
                            initialValues={initialPriceValue}
                            validationSchema={priceSchema}
                            onSubmit={(values, { setSubmitting, resetForm }) => {
                                console.log(values);
                                resetForm();
                                setSubmitting(false);
                            }}
                        >
                            {({ isSubmitting }) => (
                                <FormikForm>
                                    <Row>
                                        {bookSecondTab.map((item, index) => (
                                            <BookItem key={index} book={item} />
                                        ))}
                                    </Row>
                                    <Row>
                                        <Col xs="auto" className="pb-3">
                                            <Button variant="primary" type="submit" disabled={isSubmitting}>Save</Button>{' '}
                                            <Button variant="secondary" type="button">Cancel</Button>
                                        </Col>
                                    </Row>
                                </FormikForm>
                            )}
                        </Formik>
                    </Tab>
                    <Tab eventKey="remarks" title="Remarks">
                        <Formik
                            initialValues={initialRemarksValue}
                            validationSchema={remarksSchema}
                            onSubmit={(values, { setSubmitting, resetForm }) => {
                                console.log(values);
                                resetForm();
                                setSubmitting(false);
                            }}
                        >
                            {({ isSubmitting }) => (
                                <FormikForm>
                                    <Row>
                                        {bookThirdTab.map((item, index) => (
                                            <BookItem key={index} book={item} />
                                        ))}
                                    </Row>
                                    <Row>
                                        <Col xs="auto" className="pb-3">
                                            <Button variant="primary" type="submit" disabled={isSubmitting}>Save</Button>{' '}
                                            <Button variant="secondary" type="button">Cancel</Button>
                                        </Col>
                                    </Row>
                                </FormikForm>
                            )}
                        </Formik>
                    </Tab>
                </Tabs>
            </Row>
            <Row>
                <Card className="book-row-card">
                    <Card.Header className="book-page-row-card-header">Detailed Book List</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Link to="/dostepneKsiazki" className="book-page-row-card-link">List of Available Books</Link>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Link to="/rekomendowaneKsiazki" className="book-page-row-card-link">List of Books Recommended by Users</Link>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Link to="/potrzebneKsiazki" className="book-page-row-card-link">List of Needed Books</Link>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Row>
        </Container>
    )
}
