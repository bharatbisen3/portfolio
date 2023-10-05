import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cube from './cube.jpg';

function Mycard() {
    return (
        <div className=" cont ">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={cube} className="border border-info border-5 rounded-circle" />
                <Card.Body>
                    <Card.Title> Project </Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary"> Github Link </Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Mycard;