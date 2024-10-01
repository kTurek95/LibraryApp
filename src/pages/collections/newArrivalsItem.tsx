import { NewCollectionOfItemsTsx } from '../../types/collections/newCollections';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

type NewArrivalsCollectionProps = {
    newArrivalsCollection: NewCollectionOfItemsTsx
}

export const NewArrivalsBooksItem = (props: NewArrivalsCollectionProps) => {
    const { newArrivalsCollection} = props;
    return (
        <ListGroup className="list-group-flush">
            <ListGroup.Item>
                <Link className='news-page-list-group-link-to' to="#">{ newArrivalsCollection.title }</Link>
            </ListGroup.Item>
        </ListGroup>
    )
}

export const NewArrivalsMoviesItem = (props: NewArrivalsCollectionProps) => {
    const { newArrivalsCollection} = props;
    return (
        <ListGroup className="list-group-flush">
            <ListGroup.Item>
                <Link className='news-page-list-group-link-to' to="#">{ newArrivalsCollection.title }</Link>
            </ListGroup.Item>
        </ListGroup>
    )
}

export const NewArrivalsAudiobooksItem = (props: NewArrivalsCollectionProps) => {
    const { newArrivalsCollection} = props;
    return (
        <ListGroup className="list-group-flush">
            <ListGroup.Item>
                <Link className='news-page-list-group-link-to' to="#">{newArrivalsCollection.title}</Link>
            </ListGroup.Item>
        </ListGroup>
    )
}

export const NewArrivalsMusicItem = (props: NewArrivalsCollectionProps) => {
    const { newArrivalsCollection} = props;
    return (
        <ListGroup className="list-group-flush">
            <ListGroup.Item>
                <Link className='news-page-list-group-link-to' to="#">{newArrivalsCollection.title}</Link>
            </ListGroup.Item>
        </ListGroup>
    )
}

export const NewArrivalsComicsItem = (props: NewArrivalsCollectionProps) => {
    const { newArrivalsCollection} = props;
    return (
        <ListGroup className="list-group-flush">
            <ListGroup.Item>
                <Link className='news-page-list-group-link-to' to="#">{newArrivalsCollection.title}</Link>
            </ListGroup.Item>
        </ListGroup>
    )
}

export const NewArrivalsBoardGamesItem = (props: NewArrivalsCollectionProps) => {
    const { newArrivalsCollection} = props;
    return (
        <ListGroup className="list-group-flush">
            <ListGroup.Item>
                <Link className='news-page-list-group-link-to' to="#">{newArrivalsCollection.title}</Link>
            </ListGroup.Item>
        </ListGroup>
    )
}