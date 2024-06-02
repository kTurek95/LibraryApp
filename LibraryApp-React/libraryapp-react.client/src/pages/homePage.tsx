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
                opis: "Osobom niewychodz�cym z domu polecamy biblioteczn� us�ug� 'Ksi��ka do domu'!Z us�ugi 'Ksi��ka do domu' mog� korzysta� osoby starsze, chore lub niepe�nosprawne zamieszka�e na terenie Wroc�awia",
                przycisk: "Ksi��ka do domu",
                zdjecie: "/Image/homePage/ksiazka-do-domu.jpg",
            },
            {
                opis: "Sprawd�, jakie nowo�ci ksi��kowe i nie tylko czekaj� na Ciebie w bibliotekach! Na pro�b� Czytelnik�w powsta�a baza link�w, w kt�rej znajdziecie nowo�ci wydawnicze oraz recenzje i polecenia przygotowane przez naszych Bibliotekarzy.",
                przycisk: "Nowo�ci w bibliotece",
                zdjecie: "/Image/homePage/nowosci.jpg",
            },
            {
                opis: "Miejska Biblioteka Publiczna im. Tadeusza R�ewicza we Wroc�awiu oraz Wroc�awskie Centrum Rozwoju Spo�ecznego � Wroc�awskiego Centrum Seniora przedstawiaj� wsp�lny projekt mi�dzypokoleniowy Poczytajki Babci i Dziadka.",
                przycisk: "Poczytajki Babci i Dziadka",
                zdjecie: "/Image/homePage/poczytajki.jpg",
            },
            {
                opis: "W wybranych filiach Miejskiej Biblioteki Publicznej im. T. R�ewicza we Wroc�awiu udzielana jest pomoc z zakresu IT. Zach�camy do korzystania z wiedzy wolontariuszy podczas darmowych konsultacji.",
                przycisk: "Pomoc IT w bibliotekach",
                zdjecie: "/Image/homePage/pomoc-it.jpg",
            },
            {
                opis: "Z rado�ci� prezentujemy gad�ety Miejskiej Biblioteki Publicznej im. Tadeusza R�ewicza we Wroc�awiu, kt�re w�a�nie trafi�y do sprzeda�y: biblioteczne butelki na wod� (40 z�) i grube, bawe�niane torby Festiwalu Feminatywa (50 z�).",
                przycisk: "Biblioteczne gad�ety",
                zdjecie: "/Image/homePage/gadzety.jpg",
            },
            {
                opis: "Zapraszamy na kolejne spotkanie Mediatecznego Klubu Filmowego, kt�re odbywa si� w ka�dy czwartek",
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