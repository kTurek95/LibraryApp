import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { HomeTsx } from '../types/home/home';
import { useEffect, useState } from 'react';
import { HomeItem } from './homeItem';

export const Home = () => {
    const [home, setHome] = useState<HomeTsx[]>([]);

    useEffect(() => {
        const homeFetchedFromApi: HomeTsx[] = [
            {
                description: "For those who do not leave home, we recommend the library service 'Book to Home'! The 'Book to Home' service is available for elderly, sick, or disabled individuals residing in Wrocław.",
                button: "Book to Home",
                photo: "/Image/homePage/book-to-take-home.jpg",
            },
            {
                description: "Check what new books and more are waiting for you in libraries! At the request of readers, a database of links has been created, where you will find new publications as well as reviews and recommendations prepared by our librarians.",
                button: "New Arrivals in the Library",
                photo: "/Image/homePage/news.jpg",
            },
            {
                description: "The Tadeusz Różewicz Municipal Public Library in Wrocław and the Wrocław Social Development Center – Wrocław Senior Center present a joint intergenerational project 'Grandma's and Grandpa's Reading.'",
                button: "Grandma's and Grandpa's Reading",
                photo: "/Image/homePage/reading-material.jpg",
            },
            {
                description: "Selected branches of the T. Różewicz Municipal Public Library in Wrocław provide IT assistance. We encourage you to take advantage of the volunteers' knowledge during free consultations.",
                button: "IT Help in Libraries",
                photo: "/Image/homePage/it-help.jpg",
            },
            {
                description: "We are pleased to present gadgets from the Tadeusz Różewicz Municipal Public Library in Wrocław, which have just gone on sale: library water bottles (40 PLN) and thick, cotton bags from the Feminatywa Festival (50 PLN).",
                button: "Library Gadgets",
                photo: "/Image/homePage/gadgets.jpg",
            },
            {
                description: "We invite you to the next meeting of the Media Club, which takes place every Thursday.",
                button: "Media Club",
                photo: "/Image/homePage/film-club.jpg",
            },
        ];
        setHome(homeFetchedFromApi);
    }, []);

    return (
        <Container>
            <Row>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/Image/homePage/work.jpg"
                            alt="First slide"
                            style={{ height: '500px' }}
                        />
                        <Carousel.Caption>
                            <h3>
                                <Link to="/praca" >
                                    <a className="carousel-link">Work</a>
                                </Link>
                            </h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/Image/homePage/literary-meetings.jpg"
                            alt="Second slide"
                            style={{ height: '500px' }}
                        />

                        <Carousel.Caption>
                            <h3>
                                <Link to="/spotkania" >
                                    <a className="carousel-link">Literary Meetings</a>
                                </Link>
                            </h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/Image/homePage/challenges.jpg"
                            alt="Third slide"
                            style={{ height: '500px' }}
                        />

                        <Carousel.Caption>
                            <h3>
                                <Link to="/wyzwania" >
                                    <a className="carousel-link">Challenges</a>
                                </Link>
                            </h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Row>
            <Row>
                <h1 className="my-custom-header">News</h1>
            </Row>
            <Row className="row-card">
                {home.map((item, index) =>
                    <HomeItem key={index} home={item} />
                )}
            </Row>
        </Container>
    )
}

export default Home;
