import { BookTsx as BookTsx } from '../../types/book/book';
import { Field, ErrorMessage } from 'formik';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { BookChoose as BookChoose, BookCheck as BookCheck } from '../../types/book/book';

type BookProps = {
    book: BookTsx,
}

type BookChooseProps = {
    bookChoose: BookChoose
}

type BookCheckProps = {
    bookCheck: BookCheck;
}

export const BookItem = (props: BookProps) => {
    const { book: book } = props;
    return (
        <Col>
            <Form.Group className="mb-3">
                <Form.Label>{book.label}</Form.Label>
                <Field name={book.label} type={book.control} className="form-control"></Field>
                <ErrorMessage className="errorMessage" name={book.label} component="Row"></ErrorMessage>
            </Form.Group>
        </Col>
    )
}

export const BookChooseItem = (props: BookChooseProps) => {
    const { bookChoose: bookChoose } = props;
    return (
        <Col>
            <Form.Group className="mb-3">
                <Form.Label>{ bookChoose.label }</Form.Label>
                <Field as="select" name={bookChoose.label} className="form-control">
                    <option value="">Choose...</option>
                    {bookChoose.options.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </Field>
                <ErrorMessage className="errorMessage" name={bookChoose.label} component="Row"></ErrorMessage>
            </Form.Group>
        </Col>
    )
}

export const BookCheckItem = (props: BookCheckProps) => {
    const { bookCheck: bookCheck } = props;
    return (
        <Form.Group className="mb-3">
            <Field
                type="checkbox"
                name={bookCheck.id}
                id={bookCheck.id}
                as={Form.Check}
                label={bookCheck.label}
            />
            <ErrorMessage className="errorMessage" name={bookCheck.label} component="Row"></ErrorMessage>
        </Form.Group>
    )
}

