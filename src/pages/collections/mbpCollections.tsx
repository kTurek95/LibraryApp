import Image from 'react-bootstrap/Image';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import { CollectionsMBPAudiobooks, CollectionsMBPMovies, CollectionsMBPMusics } from '../../types/collections/mbpCollections';
import { CollectionsMBPAudiobooksItem, CollectionsMBPFMoviesItem, CollectionsMBPMusicItem } from './mbpCollectionPage';

export const MBPCollections = () => {
    const [collectionsMBPAudiobooks, setCollectionsMBPAudiobooks] = useState<CollectionsMBPAudiobooks[]>([
    ])

    useEffect(() => {
        const collectionsMBPAudiobooksFetchFromApi: CollectionsMBPAudiobooks[] = [
            {
                numberOfAudiobooks: 500,
                levelOfInterest: 320,
            },
        ];
        setCollectionsMBPAudiobooks(collectionsMBPAudiobooksFetchFromApi)
    }, [])

    const [collectionsMBPMovies, setCollectionsMBPMovies] = useState<CollectionsMBPMovies[]>([
    ])

    useEffect(() => {
        const collectionsMBPMoviesFetchFromApi: CollectionsMBPMovies[] = [
            {
                numberOfMovies: 300,
                interest: 180
            },
        ];
        setCollectionsMBPMovies(collectionsMBPMoviesFetchFromApi)
    }, [])

    const [collectionsMBPMusic, setCollectionsMBPMusic] = useState<CollectionsMBPMusics[]>([
    ])

    useEffect(() => {
        const collectionsMBPMusicFechFromApi: CollectionsMBPMusics[] = [
            {
                numberOfDiscs: 600,
                levelOfInterest: 580
            }
        ];
        setCollectionsMBPMusic(collectionsMBPMusicFechFromApi)
    }, [])
    return (
        <Container>
            <Row>
                <Tabs
                    defaultActiveKey="profile"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="home" title="Audiobooks">
                        <div>
                            <Image className="e-collections-logo" src="/Image/mbp-collections/audiobook.jpg" />
                        </div>
                        <div>
                            Contrary to popular belief, Lorem Ipsum is not simply random text.
                            It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                            Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
                            looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
                            and going through the cites of the word in classical literature, discovered the undoubtable source.
                            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                            de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                            written in 45 BC. This book is a treatise on the theory of ethics,
                            very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                            comes from a line in section 1.10.32.
                        </div>
                    </Tab>
                    <Tab eventKey="profile" title="Movies">
                        <div>
                            <Image className="e-collections-logo" src="/Image/mbp-collections/movie.jpg" />
                        </div>
                        <div>
                            Contrary to popular belief, Lorem Ipsum is not simply random text.
                            It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                            Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
                            looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
                            and going through the cites of the word in classical literature, discovered the undoubtable source.
                            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                            de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                            written in 45 BC. This book is a treatise on the theory of ethics,
                            very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                            comes from a line in section 1.10.32.
                        </div>
                    </Tab>
                    <Tab eventKey="contact" title="Music">
                        <div>
                            <Image className="e-collections-logo" src="/Image/mbp-collections/music.jpg" />
                        </div>
                        <div>
                            Contrary to popular belief, Lorem Ipsum is not simply random text.
                            It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                            Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
                            looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
                            and going through the cites of the word in classical literature, discovered the undoubtable source.
                            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                            de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                            written in 45 BC. This book is a treatise on the theory of ethics,
                            very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                            comes from a line in section 1.10.32.
                        </div>
                    </Tab>
                </Tabs>
            </Row>
            <Row className="mbp-collections-card-row">
                <Col>
                    {collectionsMBPAudiobooks.map((item, index) =>
                        <CollectionsMBPAudiobooksItem key={index} collectionsMBPAudiobooks={item} />
                    )}
                </Col>
                <Col>
                    {collectionsMBPMovies.map((item, index) =>
                        <CollectionsMBPFMoviesItem key={index} collectionsMBPMovie={item} />
                    )}
                </Col>
                <Col>
                    {collectionsMBPMusic.map((item, index) =>
                        <CollectionsMBPMusicItem key={index} collectionsMBPMusic={item} />
                    )}
                </Col>
            </Row>
        </Container>
    )
}