import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import { ContactTsx } from '../../types/left-nav/contact/contact';
import { ContactItem } from './contactItem';
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { BookChoose, BookTsx } from '../../types/book/book';
import { BookChooseItem, BookItem } from '../book/BookItem';

const validationSchema = Yup.object().shape({
    Email: Yup.string()
        .email("Invalid email address")
        .required("Field is required")
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "Invalid email address"),
    "First and Last Name": Yup.string()
        .required("Field is required")
        .min(10, "Minimum 10 characters")
        .max(25, "Maximum 25 characters"),
    "Message Title": Yup.string()
        .required("Field is required"),
    Branch: Yup.string()
        .required("Field is required"),
    checkbox: Yup.boolean().oneOf([true], "Field is required")
})

const initialValues = {
    Email: "",
    "First and Last Name": "",
    "Message Title": "",
    Branch: "",
    checkbox: false,
}

export const Contact = () => {
    const [contact, setContact] = useState<ContactTsx[]>([
    ]);

    useEffect(() => {
        const contactFetchedFromApi: ContactTsx[] = [
            {
                title: "Director",
                description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                photo: "/Image/left-nav/director.jpg"
            },
            {
                title: "Deputy Director",
                description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                photo: "/Image/left-nav/deputy-director.jpg"
            },
        ];
        setContact(contactFetchedFromApi);
    }, []);

    const [form, setForm] = useState<BookTsx[]>([
    ]);

    useEffect(() => {
        const formFetchedFromApi: BookTsx[] = [
            {
                label: "Email",
                control: "email",
            },
            {
                label: "First and Last Name",
                control: "text",
            },
            {
                label: "Message Title",
                control: "text",
            },
        ];
        setForm(formFetchedFromApi);
    }, []);

    const [formChoose, setFormChoose] = useState<BookChoose[]>([
    ]);

    useEffect(() => {
        const formChooseFetchedFromApi: BookChoose[] = [
            {
                label: "Branch",
                select: "Default select example",
                options: ["1", "2", "3"],
            }
        ];
        setFormChoose(formChooseFetchedFromApi);
    }, []);
    
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
                            {form.map((item, index) => (
                                <BookItem key={index} book={item} />
                            ))}

                            {formChoose.map((item, index) => (
                                <BookChooseItem key={index} bookChoose={item} />
                            ))}

                            <Field
                                type="checkbox"
                                as={Form.Check}
                                name="checkbox"
                                label="I consent to the processing of personal data as specified in the information clause and Privacy Policy *">
                            </Field>
                            <ErrorMessage className="errorMessage" name="checkbox" component="Row"></ErrorMessage>
                            <br></br>
                            <Button variant="primary" type="submit" className="mb-4" disabled={isSubmitting}>
                                Submit
                            </Button>
                        </FormikForm>
                    )}
                </Formik>
            </Row>
            <Row className="contact-pictures-row">
                {contact.map((item, index) =>
                    <ContactItem key={index} contact={item} />
                )}
            </Row>
        </Container>
    )
}
