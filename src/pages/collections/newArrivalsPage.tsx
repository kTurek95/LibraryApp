import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { NewCollectionOfItemsTsx } from '../../types/collections/newCollections';
import { NewArrivalsAudiobooksItem, NewArrivalsMoviesItem, NewArrivalsComicsItem, NewArrivalsBooksItem, NewArrivalsMusicItem, NewArrivalsBoardGamesItem } from './newArrivalsItem';
import { ReportAPurchaseChoose, ReportAPurchaseTsx } from '../../types/left-nav/report-a-purchase/reportAPurchasePage';
import { ReportAPurchaseChooseItem, ReportAPurchaseItem } from '../left-nav/reportAPurchaseItem';
import * as Yup from 'yup';
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';

export const NewArrivalsCollections = () => {
    const [listNewArrivalsBooksCollections, setListNewArrivalsBooksCollections] = useState<NewCollectionOfItemsTsx[]>([
    ]);

    useEffect(() => {
        const listNewArrivalsBooksCollectionsFetchFromApi: NewCollectionOfItemsTsx[] = [
            {
                title: "Footprints of the Night"
            },
            {
                title: "The Landscape of a Good Woman"
            },
            {
                title: "The Fifth Season"
            },
        ]
        setListNewArrivalsBooksCollections(listNewArrivalsBooksCollectionsFetchFromApi)
    }, [])

    const [listaZbioryNowosciFilmowe, setListaZbioryNowosciFilmowe] = useState<NewCollectionOfItemsTsx[]>([
    ]);

    useEffect(() => {
        const listaZbioryNowosciFilmowePobranaZApi: NewCollectionOfItemsTsx[] = [
            {
                title: "Wonka"
            },
            {
                title: "The Color Purple"
            },
            {
                title: "The Creator"
            },
        ]
        setListaZbioryNowosciFilmowe(listaZbioryNowosciFilmowePobranaZApi)
    }, [])

    const [listaZbioryNowosciAudiobooki, setListaZbioryNowosciAudiobooki] = useState<NewCollectionOfItemsTsx[]>([
    ]);

    useEffect(() => {
        const listaZbioryNowosciAudiobookiPobranaZApi: NewCollectionOfItemsTsx[] = [
            {
                title: "Tomorrow, Tomorrow, Again Tomorrow"
            },
            {
                title: "On a Leash"
            },
            {
                title: "The Consultant"
            },
        ]
        setListaZbioryNowosciAudiobooki(listaZbioryNowosciAudiobookiPobranaZApi)
    }, [])

    const [listaZbioryNowosciMuzyczne, setListaZbioryNowosciMuzyczne] = useState<NewCollectionOfItemsTsx[]>([
    ]);

    useEffect(() => {
        const listaZbioryNowosciMuzycznePobranaZApi: NewCollectionOfItemsTsx[] = [
            {
                title: "Tension"
            },
            {
                title: "Wind and Sun"
            },
            {
                title: "MTV Unplugged"
            },
        ]
        setListaZbioryNowosciMuzyczne(listaZbioryNowosciMuzycznePobranaZApi)
    }, [])

    const [listaZbioryNowosciKomiksowe, setListaZbioryNowosciKomiksowe] = useState<NewCollectionOfItemsTsx[]>([
    ]);

    useEffect(() => {
        const listaZbioryNowosciKomiksowePobranaZApi: NewCollectionOfItemsTsx[] = [
            {
                title: "The Lost Prince"
            },
            {
                title: "Keep Your Head Up"
            },
            {
                title: "The Colors of Our Life"
            },
        ]
        setListaZbioryNowosciKomiksowe(listaZbioryNowosciKomiksowePobranaZApi)
    }, [])

    const [listaZbioryNowosciPlanszowe, setListaZbioryNowosciPlanszowe] = useState<NewCollectionOfItemsTsx[]>([
    ]);

    useEffect(() => {
        const listaZbioryNowosciPlanszowePobranaZApi: NewCollectionOfItemsTsx[] = [
            {
                title: "Secrets of the Wilderness"
            },
            {
                title: "Carnegie"
            },
            {
                title: "Secrets of the Wilderness"
            },
        ]
        setListaZbioryNowosciPlanszowe(listaZbioryNowosciPlanszowePobranaZApi)
    }, [])

    const [rekomendujZakup, setRekomendujZakup] = useState<ReportAPurchaseTsx[]>([
    ]);

    useEffect(() => {
        const rekomendujZakupPobraneZApi: ReportAPurchaseTsx[] = [
            {
                label: "First and Last Name",
                controlId: "exampleForm.ControlInput1",
                type: "text",
                placeholder: "Enter your first and last name"
            },
            {
                label: "Email Address",
                controlId: "exampleForm.ControlInput2",
                type: "email",
                placeholder: "Enter your email"
            },
            {
                label: "Title and Author",
                controlId: "exampleForm.ControlInput3",
                type: "text",
                placeholder: "Enter the author's name"
            },
        ];
        setRekomendujZakup(rekomendujZakupPobraneZApi)
    }, [])

    const [rekomendujZakupChoose, setRekomendujZakupChoose] = useState<ReportAPurchaseChoose[]>([
    ]);

    useEffect(() => {
        const rekomendujZakupChoosePobraneZApi: ReportAPurchaseChoose[] = [
            {
                controlId: "exampleForm.ControlInput4",
                label: "Purchase for branch no:",
                defaultValue: "Default select example"
            }
        ];
        setRekomendujZakupChoose(rekomendujZakupChoosePobraneZApi)
    }, [])

    const initialValue = {
        name: "",
        email: "",
        title: "",
        branch: "",
        consent: false,
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required("Field is required"),
        email: Yup.string()
            .required("Field is required"),
        title: Yup.string()
            .required("Field is required"),
        branch: Yup.string()
            .required("Field is required"),
        consent: Yup.boolean().oneOf([true], "Field is required")
    })

    return (
        <Container>
            <Row className="news-row">
                <Card className="card-menu" style={{ width: '18rem' }}>
                    <Card.Img className="card-image" variant="top" src="/Image/new-collections/new-books.jpg" />
                    <Card.Body>
                        <Card.Title>New Books</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                    {listNewArrivalsBooksCollections.map((item, index) => 
                        <NewArrivalsBooksItem key={index} newArrivalsCollection={item} />
                    )}
                    <Card.Body>
                        <Link className='news-page-list-group-link-to' to='/nowosciKsiazkowe'>
                            <p className="news-collections-p">Check more titles</p>
                        </Link>
                    </Card.Body>
                </Card>
                <Card className="card-menu" style={{ width: '18rem' }}>
                    <Card.Img className="card-image" variant="top" src="/Image/new-collections/new-movies.png" />
                    <Card.Body>
                        <Card.Title>New Movies</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                    {listaZbioryNowosciFilmowe.map((item, index) =>
                        <NewArrivalsMoviesItem key={index} newArrivalsCollection={item} />
                    )}
                    <Card.Body>
                        <Link className='news-page-list-group-link-to' to='/nowosciFilmowe'>
                            <p className="news-colllections-p">Check more titles</p>
                        </Link>
                    </Card.Body>
                </Card>
                <Card className="card-menu" style={{ width: '18rem' }}>
                    <Card.Img className="card-image" variant="top" src="/Image/new-collections/new-Audiobooks.png" />
                    <Card.Body>
                        <Card.Title>New Audiobooks</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                    {listaZbioryNowosciAudiobooki.map((item, index) =>
                        <NewArrivalsAudiobooksItem key={index} newArrivalsCollection={item} />
                    )}
                    <Card.Body>
                        <Link className='news-page-list-group-link-to' to='/noweAudiobooki'>
                            <p className="news-collections-p">Check more titles</p>
                        </Link>
                    </Card.Body>
                </Card>
            </Row>
            <Row className="news-row">
                <Card className="card-menu" style={{ width: '18rem' }}>
                    <Card.Img className="card-image" variant="top" src="/Image/new-collections/new-musics.png" />
                    <Card.Body>
                        <Card.Title>New Music</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                    {listaZbioryNowosciMuzyczne.map((item, index) =>
                        <NewArrivalsMusicItem key={index} newArrivalsCollection={item} />
                    )}
                    <Card.Body>
                        <Link className='news-page-list-group-link-to' to='/nowosciMuzyczne'>
                            <p className="news-collections-p">Check more titles</p>
                        </Link>
                    </Card.Body>
                </Card>
                <Card className="card-menu" style={{ width: '18rem' }}>
                    <Card.Img className="card-image" variant="top" src="/Image/new-collections/new-comics.png" />
                    <Card.Body>
                        <Card.Title>New Comics</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                    {listaZbioryNowosciKomiksowe.map((item, index) =>
                        <NewArrivalsComicsItem key={index} newArrivalsCollection={item} />
                    )}
                    <Card.Body>
                        <Link className='news-page-list-group-link-to' to='/nowosciKomiksowe'>
                            <p className="news-collections-p">Check more titles</p>
                        </Link>
                    </Card.Body>
                </Card>
                <Card className="card-menu" style={{ width: '18rem' }}>
                    <Card.Img className="card-image" variant="top" src="/Image/new-collections/new-board-games.png" />
                    <Card.Body>
                        <Card.Title>New Board Games</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                    {listaZbioryNowosciPlanszowe.map((item, index) =>
                        <NewArrivalsBoardGamesItem key={index} newArrivalsCollection={item} />
                    )}
                    <Card.Body>
                        <Link className='news-page-list-group-link-to' to='/noweGryPlanszowe'>
                            <p className="news-collections-p">Check more titles</p>
                        </Link>
                    </Card.Body>
                </Card>
            </Row>
            <Row>
                <Container className="news-collections-container">
                    <h1 className="news-collections-h1">Recommend Purchase</h1>
                    <p>Fill out the form and enjoy the new arrivals</p>
                    <Formik
                        initialValues={initialValue}
                        validationSchema={validationSchema}
                        onSubmit={(values, { setSubmitting, resetForm }) => { 
                            console.log(values)
                            resetForm();
                            setSubmitting(false);
                    }}
                    >
                        {({ isSubmitting }) => (
                            <FormikForm>
                                {rekomendujZakup.map((item, index) =>
                                    <ReportAPurchaseItem key={index} reportPurchase={item} />
                                )}
                                {rekomendujZakupChoose.map((item, index) =>
                                    <ReportAPurchaseChooseItem key={index} reportPurchaseChoose={item} />
                                )}
                                <Field
                                    type="checkbox"
                                    as={Form.Check}
                                    name="consent"
                                    label="I consent to the processing of personal data as specified in the information clause and Privacy Policy *">
                                </Field> 
                                <ErrorMessage className="errorMessage" name="consent" component="Row"></ErrorMessage>
                                <br></br>
                                <Button className="news-collections-button" type="submit" disabled={isSubmitting }>Submit</Button>
                            </FormikForm> 
                        )}
                     </Formik>
                </Container>  
            </Row>
        </Container>
    )
}
