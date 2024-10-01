import { ContactTsx } from "../../types/left-nav/contact/contact"
import Card from 'react-bootstrap/Card';


type ContactProps = {
    contact: ContactTsx
}


export const ContactItem = (props: ContactProps) => {
    const { contact} = props;
    return (
        <Card className="contact-item-card" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={contact.photo} />
            <Card.Body>
                <Card.Title>{contact.title}</Card.Title>
                <Card.Text>
                    {contact.description}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}