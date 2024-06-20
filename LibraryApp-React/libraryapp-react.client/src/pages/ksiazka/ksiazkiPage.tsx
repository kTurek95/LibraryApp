import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';
import { KsiazkiTsx } from '../types/ksiazka/ksiazki';
import { KsiazkiItem, KsiazkiKategorieItem } from './ksiazkiItem';
import { KsiazkiKategorie } from '../../types/ksiazka/ksiazki';
import { KsiazkaTsx, KsiazkaChoose } from '../../types/ksiazka/ksiazka';
import { KsiazkaItem, KsiazkaChooseItem } from './ksiazkaItem';
import * as Yup from 'yup';
import { Formik, Form as FormikForm } from 'formik';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export const Ksiazki = () => {
    const [ksiazki, setKsiazki] = useState<KsiazkiTsx[]>([
    ]);

    useEffect(() => {
        const ksiazkiPobraneZApi: KsiazkiTsx[] = [
            {
                kod: 1,
                tytul: "Save You",
                kategoria: "Romans",
                cenaOnline: 20,
                cena: 25
            },
            {
                kod: 2,
                tytul: "Save Me",
                kategoria: "Romans",
                cenaOnline: 20,
                cena: 25
            },
            {
                kod: 3,
                tytul: "Save Us",
                kategoria: "Romans",
                cenaOnline: 20,
                cena: 25
            },
            {
                kod: 4,
                tytul: "Kryminalna historia Watykanu",
                kategoria: "Thriller",
                cenaOnline: 20,
                cena: 25
            },
        ];
        setKsiazki(ksiazkiPobraneZApi);
    }, []);

    const [ksiazkiKategorie, setKsiazkiKategorie] = useState<KsiazkiKategorie[]>([
    ]);

    useEffect(() => {
        const ksiazkiKategoriePobraneZApi: KsiazkiKategorie[] = [
            {
                tytul: "Romans",
                nazwa: "Top 5 Romans",
                opis: "Top 5 ksiązek polecanych przez użytkowników z gatunku romans",
                przycisk: "Sprawdź"
            },
            {
                tytul: "Dramat",
                nazwa: "Top 5 Dramat",
                opis: "Top 5 ksiązek polecanych przez użytkowników z gatunku dramat",
                przycisk: "Sprawdź"
            },
            {
                tytul: "Kryminał",
                nazwa: "Top 5 Kryminał",
                opis: "Top 5 ksiązek polecanych przez użytkowników z gatunku kryminał",
                przycisk: "Sprawdź"
            },
            {
                tytul: "Thriller",
                nazwa: "Top 5 Thriller",
                opis: "Top 5 ksiązek polecanych przez użytkowników z gatunku thriller",
                przycisk: "Sprawdź"
            },
            {
                tytul: "Horror",
                nazwa: "Top 5 Horror",
                opis: "Top 5 ksiązek polecanych przez użytkowników z gatunku horror",
                przycisk: "Sprawdź"
            },
        ];
        setKsiazkiKategorie(ksiazkiKategoriePobraneZApi);
    }, []);

    const [ksiazkaFiltrowanie, setKsiazkaFiltrowanie] = useState<KsiazkaTsx[]>([
    ]);

    useEffect(() => {
        const ksiazkaFiltrowaniePobraneZApi: KsiazkaTsx[] = [
            {
                label: "Szukaj po autorze",
                control: "text",
            },
            {
                label: "Rok wydania od",
                control: "number",
            },
            {
                label: "Rok wydania do",
                control: "number",
            },
        ];
        setKsiazkaFiltrowanie(ksiazkaFiltrowaniePobraneZApi);
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

    const initialValue = {
        "Szukaj po autorze": "",
        "Rok wydania od": null,
        "Rok wydania do": null,
        Kategoria: "",
    }

    const validationSchema = Yup.object().shape ({
        "Szukaj po autorze": Yup.string()
            .required("Pole jest wymagane"),
        "Rok wydania od": Yup.number()
            .required("Pole jest wymagane"),
        "Rok wydania do": Yup.number()
            .required("Pole jest wymagane"),
        Kategoria: Yup.string()
            .required("Pole jest wymagane"),
    })

    return (
        <Container>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Filtrowanie listy</Accordion.Header>
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
                                    {ksiazkaFiltrowanie.map((item, index) =>
                                        <KsiazkaItem key={index} ksiazka={item} />
                                    )}
                                    {ksiazkaChoose.map((item, index) =>
                                        <KsiazkaChooseItem key={index} ksiazkaChoose={item} />
                                    )}
                                    </Row>
                                    <Row>
                                        <Col xs="auto" className="pb-3">
                                            <Button variant="primary" type="submit" disabled={isSubmitting}>Filtruj</Button>{' '}
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
                        <th>Kod</th>
                        <th>Tytul</th>
                        <th>Kategoria</th>
                        <th>Cena online</th>
                        <th>Cena</th>
                    </tr>
                </thead>
                <tbody>
                    {ksiazki.map((item, index) =>
                        <KsiazkiItem key={index} ksiazki={item} />
                    )}
                </tbody>
            </Table>
            <Row className="ksiazki-page-last-row">
                {ksiazkiKategorie.map((item, index) =>
                    <KsiazkiKategorieItem key={index} ksiazkiKategorie={item} />
                )}
            </Row>
        </Container>
    )
}