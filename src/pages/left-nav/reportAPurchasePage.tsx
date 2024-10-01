import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import { ReportAPurchaseChoose, ReportAPurchaseTsx } from '../../types/left-nav/report-a-purchase/reportAPurchasePage';
import { ReportAPurchaseItem, ReportAPurchaseChooseItem } from './reportAPurchaseItem';
import { Link } from 'react-router-dom';
import { Formik, Form as FormikForm } from 'formik';
import * as Yup from 'yup';

export const ReportAPurchase = () => {
    const [reportPurchase, setReportPurchase] = useState<ReportAPurchaseTsx[]>([]);

    useEffect(() => {
        const reportPurchaseFetchedFromApi: ReportAPurchaseTsx[] = [
            {
                label: "Email address",
                controlId: "formBasicEmail",
                type: "email",
                placeholder: "Enter email"
            },
            {
                label: "First and Last Name",
                controlId: "formBasicFnameLname",
                type: "text",
                placeholder: "First and Last Name"
            },
            {
                label: "Title and Author",
                controlId: "formBasicTytuliAutor",
                type: "text",
                placeholder: "Title and Author"
            },
        ];
        setReportPurchase(reportPurchaseFetchedFromApi);
    }, []);

    const [reportPurchaseChoose, setReportPurchaseChoose] = useState<ReportAPurchaseChoose[]>([]);

    useEffect(() => {
        const reportPurchaseChooseFetchedFromApi: ReportAPurchaseChoose[] = [
            {
                controlId: "formBasicZakupDla",
                label: "Purchase for branch number:",
                defaultValue: "Choose..."
            }
        ];
        setReportPurchaseChoose(reportPurchaseChooseFetchedFromApi);
    }, []);

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("Invalid email address")
            .required("Field is required"),
        name: Yup.string()
            .required("Field is required"),
        title: Yup.string()
            .required("Field is required"),
        filia: Yup.string()
            .required("Field is required")
    });

    const initialValues = {
        email: "",
        name: "",
        title: "",
        filia: "",
    };

    return (
        <Container>
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
                    <Row>
                        <FormikForm>
                            {reportPurchase.map((item, index) =>
                                <ReportAPurchaseItem key={index} reportPurchase={item} />
                            )}
                            {reportPurchaseChoose.map((item, index) =>
                                <ReportAPurchaseChooseItem key={index} reportPurchaseChoose={item} />
                            )}
                            <Button variant="primary" type="submit" disabled={isSubmitting}>
                                Submit
                            </Button>
                        </FormikForm>
                    </Row>
                )}
            </Formik>
            <Row>
                <Card className="report-a-purchase-row-card">
                    <Card.Body>
                        <Card.Title>Pending Reports</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Reported Purchases</Card.Subtitle>
                        <Card.Text>
                            Here you can check the books that have been added to the "Report a Purchase" program
                        </Card.Text>
                        <Link className="report-a-purchase-row-card-link1" to="/sprawdzKsiazki">Check Books</Link>
                        <Link className="report-a-purchase-row-card-link" to="/sprawdzStatus">Check Status</Link>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    )
}
