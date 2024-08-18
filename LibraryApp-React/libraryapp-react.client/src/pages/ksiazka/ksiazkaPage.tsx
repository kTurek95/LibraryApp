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
import { KsiazkaChoose, KsiazkaTsx, KsiazkaCheck } from '../../types/ksiazka/ksiazka';
import { useEffect, useState } from 'react';
import { KsiazkaCheckItem, KsiazkaChooseItem, KsiazkaItem } from './ksiazkaItem';
import * as Yup from 'yup';
import { Formik, Form as FormikForm} from 'formik';


export const Ksiazka = () => {
    const [ksiazka, setKsiazka] = useState<KsiazkaTsx[]>([
    ]);

    useEffect(() => {
        const ksiazkaPobraneZApi: KsiazkaTsx[] = [
            {
                label: "Tytuł",
                control: "text",
            },
            {
                label: "Autor",
                control: "text",
            },
            {
                label: "Rok wydania",
                control: "text",
            },
        ];
        setKsiazka(ksiazkaPobraneZApi);
    }, []);

    const [ksiazkaChoose, setKsiazkaChoose] = useState<KsiazkaChoose[]>([
    ]);

    useEffect(() => {
        const ksiazkaChoosePobraneZApi: KsiazkaChoose[] = [
            {
                label: "Kategoria",
                select: "Default select example",
                options: ["Wybierz", "Romans", "Dramat", "Kryminał", "Thriller", "Horror"]
            }
        ];
        setKsiazkaChoose(ksiazkaChoosePobraneZApi);
    }, []);

    const [ksiazkaCheck, setKsiazkaCheck] = useState<KsiazkaCheck[]>([
    ]);

    useEffect(() => {
        const ksiazkaCheckPobraneZApi: KsiazkaCheck[] = [
            {
                type: "checkbox",
                id: "custom-switch",
                label: "Nowa"
            }
        ];
        setKsiazkaCheck(ksiazkaCheckPobraneZApi);
    }, []);

    const [ksiazkaSecondTab, setKsiazkaSecondTab] = useState<KsiazkaTsx[]>([
    ]);

    useEffect(() => {
        const ksiazkaSecondTabPorabneZApi: KsiazkaTsx[] = [
            {
                label: "Cena online",
                control: "number",
            },
            {
                label: "VAT zakupu",
                control: "number",
            },
            {
                label: "VAT sprzedaży",
                control: "number",
            },
            {
                label: "Cena domyślna",
                control: "number",
            },
        ]

        setKsiazkaSecondTab(ksiazkaSecondTabPorabneZApi);
    }, []);

    const [ksiazkaThirdTab, setKsiazkaThirdTab] = useState<KsiazkaTsx[]>([
    ]);

    useEffect(() => {
        const ksiazkaThirdTabPobraneZApi: KsiazkaTsx[] = [
            {
                label: "Dodatkowe informacje",
                control: "textarea",
            },
            {
                label: "Uwagi",
                control: "textarea",
            },
            {
                label: "Add file",
                control: "file",
            },
        ];
        setKsiazkaThirdTab(ksiazkaThirdTabPobraneZApi);
    }, []);

    const initialDaneValue = {
        Tytuł: "",
        Autor: "",
        "Rok wydania": "",
        Kategoria: "",
        Nowa: false,
    }

    const danePodstawoweSchema = Yup.object().shape({
        Tytuł: Yup.string()
            .required("Pole jest wymagane"),
        Autor: Yup.string()
            .required("Pole jest wymagane"),
        "Rok wydania": Yup.number()
            .required("Pole jest wymagane")
            .typeError("Rok wydania musi byc liczbą"),
        Kategoria: Yup.string()
            .required("Pole jest wymagane"),
        Nowa: Yup.boolean().oneOf([true], "Pole jest wymagane"),
    })

    const initialCenaValue = {
        "Cena online": null,
        "VAT zakupu": null,
        "VAT sprzedaży": null,
        "Cena domyślna": null,
    }


    const cenaSchema = Yup.object().shape({
        "Cena online": Yup.number()
            .required("Pole jest wymagane"),
        "VAT zakupu": Yup.number()
            .required("Pole jest wymagane"),
        "VAT sprzedaży": Yup.number()
            .required("Pole jest wymagane"),
        "Cena domyślna": Yup.number()
            .required("Pole jest wymagane"),
    })


    const initialUwagiValue = {
        "Dodatkowe informacje": "",
        Uwagi: "",
        "Add file": "",
    }
   

    const uwagiSchema = Yup.object().shape ({
        "Dodatkowe informacje": Yup.string()
            .required("Pole jest wymagane"),
        Uwagi: Yup.string()
            .required("Pole jest wymagane"),
        "Add file": Yup.mixed()
            .required("Pole jest wymagane"),
    })



    return (
        <Container>
            <Row>
                <Tabs defaultActiveKey="danePodstawowe" id="daneTowaru" className="mb-3">
                    <Tab eventKey="danePodstawowe" title="Dane Podstawowe">
                        <Formik
                            initialValues={initialDaneValue}
                            validationSchema={danePodstawoweSchema}
                            onSubmit={(values, { setSubmitting, resetForm }) => {
                                console.log(values);
                                resetForm();
                                setSubmitting(false);
                            }}
                        >
                            {({ isSubmitting }) => (
                                <FormikForm>
                                    <Row>
                                        {ksiazka.map((item, index) => (
                                            <KsiazkaItem key={index} ksiazka={item} />
                                        ))}
                                    </Row>
                                    <Row>
                                        {ksiazkaChoose.map((item, index) => (
                                            <KsiazkaChooseItem key={index} ksiazkaChoose={item} />
                                        ))}
                                    </Row>
                                    <Row>
                                        {ksiazkaCheck.map((item, index) => (
                                            <KsiazkaCheckItem key={index} ksiazkaCheck={item} />
                                        ))}
                                    </Row>
                                    <Row>
                                        <Col xs="auto" className="pb-3">
                                            <Button variant="primary" type="submit" disabled={isSubmitting}>Zapisz</Button>{' '}
                                            <Button variant="secondary" type="button">Anuluj</Button>
                                        </Col>
                                    </Row>
                                </FormikForm>
                            )}
                        </Formik>
                    </Tab>
                    <Tab eventKey="cena" title="Cena">
                        <Formik
                            initialValues={initialCenaValue}
                            validationSchema={cenaSchema}
                            onSubmit={(values, { setSubmitting, resetForm }) => {
                                console.log(values);
                                resetForm();
                                setSubmitting(false);
                            }}
                        >
                            {({ isSubmitting }) => (
                                <FormikForm>
                                    <Row>
                                        {ksiazkaSecondTab.map((item, index) => (
                                            <KsiazkaItem key={index} ksiazka={item} />
                                        ))}
                                    </Row>
                                    <Row>
                                        <Col xs="auto" className="pb-3">
                                            <Button variant="primary" type="submit" disabled={isSubmitting}>Zapisz</Button>{' '}
                                            <Button variant="secondary" type="button">Anuluj</Button>
                                        </Col>
                                    </Row>
                                </FormikForm>
                            )}
                        </Formik>
                    </Tab>
                    <Tab eventKey="Uwagi" title="Uwagi">
                        <Formik
                            initialValues={initialUwagiValue}
                            validationSchema={uwagiSchema}
                            onSubmit={(values, { setSubmitting, resetForm }) => {
                                console.log(values);
                                resetForm();
                                setSubmitting(false);
                            }}
                        >
                            {({ isSubmitting }) => (
                                <FormikForm>
                                    <Row>
                                        {ksiazkaThirdTab.map((item, index) => (
                                            <KsiazkaItem key={index} ksiazka={item} />
                                        ))}
                                    </Row>
                                    <Row>
                                        <Col xs="auto" className="pb-3">
                                            <Button variant="primary" type="submit" disabled={isSubmitting}>Zapisz</Button>{' '}
                                            <Button variant="secondary" type="button">Anuluj</Button>
                                        </Col>
                                    </Row>
                                </FormikForm>
                            )}
                        </Formik>
                    </Tab>
                </Tabs>
            </Row>
            <Row>
                <Card className="ksiazka-row-card">
                    <Card.Header className="ksiazka-page-row-card-header">Szczegółowy spis książek</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Link to="/dostepneKsiazki" className="ksiazka-page-row-card-link">Lista dostępnych książek</Link>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Link to="/rekomendowaneKsiazki" className="ksiazka-page-row-card-link">Lista książek rekomendowanych przez użytkownika</Link>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Link to="/potrzebneKsiazki" className="ksiazka-page-row-card-link">Lista potrzebnych książek</Link>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Row>
        </Container>
    )
}