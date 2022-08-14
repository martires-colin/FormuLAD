
import { ListGroupItem } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function ConstructorCard({ constructor }) {
  return (
    <>
      <Card className="text-center bg-light text-dark" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={`./assets/constructors/${constructor.Constructor.constructorId}.png`}
          alt={constructor.Constructor.name}
          class="background-image"
        />
        <Card.Body>
          <Card.Title className="mb-0">
            <h3 className="mb-0">
              {constructor.Constructor.name}
            </h3>
          </Card.Title>
          <ListGroup className="list-group-flush">
            <ListGroupItem className="h5 mb-0 bg-light text-dark">Position: <strong>{constructor.position}</strong></ListGroupItem>
            <ListGroupItem className="list-group-item-dark bg-light text-dark">Wins: <strong>{constructor.wins}</strong></ListGroupItem>
            <ListGroupItem className="list-group-item-dark bg-light text-dark">PTS: <strong>{constructor.points}</strong></ListGroupItem>
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  )
}

// 0:
//    Constructor:
//        constructorId: "red_bull"
//        name: "Red Bull"
//        nationality: "Austrian"
//        url: "http://en.wikipedia.org/wiki/Red_Bull_Racing"
//        [[Prototype]]: Object
//    points: "431"
//    position: "1"
//    positionText: "1"
//    wins: "9"
