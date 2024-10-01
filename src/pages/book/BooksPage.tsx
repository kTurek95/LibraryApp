import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';
import { BooksTsx } from '../../types/book/books';
import { BooksItem, BooksCategoriesItem } from './Bookstem';
import { BooksCategories } from '../../types/book/books';
import { BookTsx, BookChoose } from '../../types/book/book';
import { BookItem, BookChooseItem } from './BookItem';
import * as Yup from 'yup';
import { Formik, Form as FormikForm } from 'formik';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export const Books = () => {
    const [books, setBooks] = useState<BooksTsx[]>([
    ]);

    useEffect(() => {
        const booksFetchedFromApi: BooksTsx[] = [
            {
                code: 1,
                title: "SavBook",
                category: "Romance",
                onlinePrice: 20,
                price: 25
            },
            {
                code: 2,
                title: "Save Me",
                category: "Romance",
                onlinePrice: 20,
                price: 25
            },
            {
                code: 3,
                title: "Save Us",
                category: "Romance",
                onlinePrice: 20,
                price: 25
            },
            {
                code: 4,
                title: "Criminal History of the Vatican",
                category: "Thriller",
                onlinePrice: 20,
                price: 25
            },
        ];
        setBooks(booksFetchedFromApi);
    }, []);

    const [booksCategories, setBooksCategories] = useState<BooksCategories[]>([
    ]);

    useEffect(() => {
        const booksCategoriesFetchedFromApi: BooksCategories[] = [
            {
                title: "Romance",
                name: "Top 5 Romance",
                description: "Top 5 books recommended by users in the romance genre",
                button: "Check"
            },
            {
                title: "Drama",
                name: "Top 5 Drama",
                description: "Top 5 books recommended by users in the drama genre",
                button: "Check"
            },
            {
                title: "Fantasy",
                name: "Top 5 Fantasy",
                description: "Top 5 books recommended by users in the fantasy genre",
                button: "Check"
            },
            {
                title: "Thriller",
                name: "Top 5 Thriller",
                description: "Top 5 books recommended by users in the thriller genre",
                button: "Check"
            },
            {
                title: "Horror",
                name: "Top 5 Horror",
                description: "Top 5 books recommended by users in the horror genre",
                button: "Check"
            },
        ];
        setBooksCategories(booksCategoriesFetchedFromApi);
    }, []);

    const [bookFiltering, setBookFiltering] = useState<BookTsx[]>([
    ]);

    useEffect(() => {
        const bookFilteringFetchedFromApi: BookTsx[] = [
            {
                label: "Search by author",
                control: "text",
            },
            {
                label: "Year of publication from",
                control: "number",
            },
            {
                label: "Year of publication to",
                control: "number",
            },
        ];
        setBookFiltering(bookFilteringFetchedFromApi);
    }, []);

    const [bookChoose, setBookChoose] = useState<BookChoose[]>([
    ]);

    useEffect(() => {
        const bookChooseFetchedFromApi: BookChoose[] = [
            {
                label: "Category",
                select: "Default select example",
                options: ["Choose", "Romance", "Drama", "Crime", "Thriller", "Horror"]
            }
        ];
        setBookChoose(bookChooseFetchedFromApi);
    }, []);

    const initialValue = {
        "Search by author": "",
        "Year of publication from": null,
        "Year of publication to": null,
        Category: "",
    }

    const validationSchema = Yup.object().shape({
        "Search by author": Yup.string()
            .required("Field is required"),
        "Year of publication from": Yup.number()
            .required("Field is required"),
        "Year of publication to": Yup.number()
            .required("Field is required"),
        Category: Yup.string()
            .required("Field is required"),
    })

    return (
        <Container>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Filter List</Accordion.Header>
                    <Accordion.Body>
                        <Formik
                            initialValues={initialValue}
                            validationSchema={validationSchema}
                            onSubmit={(values, { setSubmitting, resetForm }) => {
                                console.log(values);
                                resetForm();
                                setSubmitting(false);
                            }}
                        >
                        {({ isSubmitting }) => (
                            <FormikForm>
                                <Row>
                                    {bookFiltering.map((item, index) =>
                                        <BookItem key={index} book={item} />
                                    )}
                                    {bookChoose.map((item, index) =>
                                        <BookChooseItem key={index} bookChoose={item} />
                                    )}
                                </Row>
                                <Row>
                                    <Col xs="auto" className="pb-3">
                                        <Button variant="primary" type="submit" disabled={isSubmitting}>Filter</Button>{' '}
                                    </Col>
                                </Row>
                            </FormikForm>
                        )}
                        </Formik>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Online Price</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((item, index) =>
                        <BooksItem key={index} books={item} />
                    )}
                </tbody>
            </Table>
            <Row className="books-page-last-row">
                {booksCategories.map((item, index) =>
                    <BooksCategoriesItem key={index} booksCategories={item} />
                )}
            </Row>
        </Container>
    )
}
