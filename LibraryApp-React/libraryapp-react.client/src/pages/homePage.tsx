import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { HomeTsx } from '../types/home/home';
import { useEffect, useState } from 'react';
import { HomeItem } from './homeItem';


export const Home = () => {
    const [home, setHome] = useState<HomeTsx[]>([
    ]);

    useEffect(() => {
        const homePobraneZApi: HomeTsx[] = [
            {
                opis: "Osobom niewychodz¹cym z domu polecamy biblioteczn¹ us³ugê 'Ksi¹¿ka do domu'!Z us³ugi 'Ksi¹¿ka do domu' mog¹ korzystaæ osoby starsze, chore lub niepe³nosprawne zamieszka³e na terenie Wroc³awia",
                przycisk: "Ksi¹¿ka do domu",
                zdjecie: "/Image/homePage/ksiazka-do-domu.jpg",
            },
            {
                opis: "SprawdŸ, jakie nowoœci ksi¹¿kowe i nie tylko czekaj¹ na Ciebie w bibliotekach! Na proœbê Czytelników powsta³a baza linków, w której znajdziecie nowoœci wydawnicze oraz recenzje i polecenia przygotowane przez naszych Bibliotekarzy.",
                przycisk: "Nowoœci w bibliotece",
                zdjecie: "/Image/homePage/nowosci.jpg",
            },
            {
                opis: "Miejska Biblioteka Publiczna im. Tadeusza Ró¿ewicza we Wroc³awiu oraz Wroc³awskie Centrum Rozwoju Spo³ecznego – Wroc³awskiego Centrum Seniora przedstawiaj¹ wspólny projekt miêdzypokoleniowy Poczytajki Babci i Dziadka.",
                przycisk: "Poczytajki Babci i Dziadka",
                zdjecie: "/Image/homePage/poczytajki.jpg",
            },
            {
                opis: "W wybranych filiach Miejskiej Biblioteki Publicznej im. T. Ró¿ewicza we Wroc³awiu udzielana jest pomoc z zakresu IT. Zachêcamy do korzystania z wiedzy wolontariuszy podczas darmowych konsultacji.",
                przycisk: "Pomoc IT w bibliotekach",
                zdjecie: "/Image/homePage/pomoc-it.jpg",
            },
            {
                opis: "Z radoœci¹ prezentujemy gad¿ety Miejskiej Biblioteki Publicznej im. Tadeusza Ró¿ewicza we Wroc³awiu, które w³aœnie trafi³y do sprzeda¿y: biblioteczne butelki na wodê (40 z³) i grube, bawe³niane torby Festiwalu Feminatywa (50 z³).",
                przycisk: "Biblioteczne gadŸety",
                zdjecie: "/Image/homePage/gadzety.jpg",
            },
            {
                opis: "Zapraszamy na kolejne spotkanie Mediatecznego Klubu Filmowego, które odbywa siê w ka¿dy czwartek",
                przycisk: "Mediateczny klub filmowy",
                zdjecie: "/Image/homePage/klub-filmowy.jpg",
            },
        ];
        setHome(homePobraneZApi)
    })
    return (
        <Container>
            <Row>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/Image/homePage/praca.jpg"
                            alt="First slide"
                            style={{ height: '500px' }}
                        />
                        <Carousel.Caption>
                            <h3>
                                <Link to="/praca" >
                                    <a className="carousel-link">Praca</a>
                                </Link>
                            </h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/Image/homePage/spotkania_literackie.jpg"
                            alt="Second slide"
                            style={{ height: '500px' }}
                        />

                        <Carousel.Caption>
                            <h3>
                                <Link to="/spotkania" >
                                    <a className="carousel-link">Spotkania literackie</a>
                                </Link>
                            </h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/Image/homePage/wyzwania.jpg"
                            alt="Second slide"
                            style={{ height: '500px' }}
                        />

                        <Carousel.Caption>
                            <h3>
                                <Link to="/wyzwania" >
                                    <a className="carousel-link">Wyzwania</a>
                                </Link>
                            </h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Row>
            <Row>
                <h1 className="my-custom-header">Aktualnosci</h1>
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