import { HomeTsx } from "../types/home/home"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


type HomeProps = {
    home: HomeTsx
}

export const HomeItem = (props: HomeProps) => {
    const { home } = props;
    return (
        <Card className="card-menu" style={{ width: '18rem' }}>
            <Card.Img className="card-image" variant="top" src={home.photo} />
            <Card.Body>
                <Card.Text className="card-text-layout">
                    {home.description}
                </Card.Text>
                <div className="home-item-card-div-button">
                    <Button>
                        <Link to="/dodomu">
                            <span className="card-link">{home.button}</span>
                        </Link>
                    </Button>
                </div>
            </Card.Body>
        </Card>
    )
}