import Card from 'react-bootstrap/Card';
import { CollectionsMBPAudiobooks } from '../../types/collections/mbpCollections';
import { CollectionsMBPMovies } from '../../types/collections/mbpCollections';
import { CollectionsMBPMusics } from '../../types/collections/mbpCollections';

type CollectionsMBPAudiobooksProps = {
    collectionsMBPAudiobooks: CollectionsMBPAudiobooks;
};

type CollectionsMBPMovieProps = {
    collectionsMBPMovie: CollectionsMBPMovies;
};

type CollectionsMBPMusicProps = {
    collectionsMBPMusic: CollectionsMBPMusics;
};

export const CollectionsMBPAudiobooksItem = (props: CollectionsMBPAudiobooksProps) => {
    const { collectionsMBPAudiobooks: collectionsMBPAudiobooks } = props;
    return (
        <Card border="dark" className="zbiory-mbp-card-row-col">
            <Card.Header>Audiobooks</Card.Header>
            <Card.Body>
                <Card.Text>
                    Amount of audiobooks: {collectionsMBPAudiobooks.numberOfAudiobooks}
                    <br></br>
                    Interest: {collectionsMBPAudiobooks.levelOfInterest}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export const CollectionsMBPFMoviesItem = (props: CollectionsMBPMovieProps) => {
    const { collectionsMBPMovie: collectionsMBPMovie } = props;
    return (
        <Card border="dark" className="zbiory-mbp-card-row-col">
            <Card.Header>Movies</Card.Header>
            <Card.Body>
                <Card.Text>
                    Amount of Movie: {collectionsMBPMovie.numberOfMovies}
                    <br></br>
                    Interest: {collectionsMBPMovie.interest}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export const CollectionsMBPMusicItem = (props: CollectionsMBPMusicProps) => {
    const { collectionsMBPMusic: collectionsMBPMusic } = props;
    return (
        <Card border="dark" className="zbiory-mbp-card-row-col">
            <Card.Header>Musics</Card.Header>
            <Card.Body>
                <Card.Text>
                    Aount of CD/DVD: {collectionsMBPMusic.numberOfDiscs}
                    <br></br>
                    Interest: {collectionsMBPMusic.levelOfInterest}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}