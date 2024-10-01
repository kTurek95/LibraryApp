import { Link } from 'react-router-dom';
import { BooksCategories } from '../../types/book/books';
import { BooksTsx } from '../../types/book/books';
import Card from 'react-bootstrap/Card';

type BooksProps = {
    books: BooksTsx
}

export const BooksItem = (props: BooksProps) => {
    const { books } = props;
    return (
        <tr>
            <td>{books.code}</td>
            <td>{books.title}</td>
            <td>{books.category}</td>
            <td>{books.onlinePrice}</td>
            <td>{books.price}</td>
        </tr>
    )
}

type BooksCategoriesProps = {
    booksCategories: BooksCategories
}

export const BooksCategoriesItem = (props: BooksCategoriesProps) => {
    const { booksCategories: booksCategories } = props;
    return (
        <Card className="books-row-card">
            <Card.Header as="h5">{booksCategories.title}</Card.Header>
            <Card.Body>
                <Card.Title>{booksCategories.name}</Card.Title>
                <Card.Text>
                    {booksCategories.description}
                </Card.Text>
                <Link className="books-page-row-card-categories" to={`/${booksCategories.title}`}>{booksCategories.button}</Link>
            </Card.Body>
        </Card>
    )
}