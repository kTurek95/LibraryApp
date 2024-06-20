import { Link } from 'react-router-dom';
import { KsiazkiKategorie } from '../../types/ksiazka/ksiazki';
import { KsiazkiTsx } from '../pages/ksiazka/ksiazki';
import Card from 'react-bootstrap/Card';

type KsiazkiProps = {
    ksiazki: KsiazkiTsx
}

export const KsiazkiItem = (props: KsiazkiProps) => {
    const { ksiazki } = props;
    return (
        <tr>
            <td>{ksiazki.kod}</td>
            <td>{ksiazki.tytul}</td>
            <td>{ksiazki.kategoria}</td>
            <td>{ksiazki.cenaOnline}</td>
            <td>{ksiazki.cena}</td>
        </tr>
    )
}

type KsiazkiKategorieProps = {
    ksiazkiKategorie: KsiazkiKategorie
}

export const KsiazkiKategorieItem = (props: KsiazkiKategorieProps) => {
    const { ksiazkiKategorie } = props;
    return (
        <Card className="ksiazki-row-card">
            <Card.Header as="h5">{ksiazkiKategorie.tytul}</Card.Header>
            <Card.Body>
                <Card.Title>{ksiazkiKategorie.nazwa}</Card.Title>
                <Card.Text>
                    {ksiazkiKategorie.opis}
                </Card.Text>
                <Link className="ksiazki-page-row-card-kategorie" to='/romans'>{ksiazkiKategorie.przycisk}</Link>
            </Card.Body>
        </Card>
    )
}