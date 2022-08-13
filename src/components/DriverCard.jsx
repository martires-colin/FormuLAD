import { ListGroupItem } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function DriverCard({ driver }) {
  return (
    <>
      <Card className="text-center bg-light text-dark" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={`assets/drivers/${driver.Driver.code}.png`}
          alt={driver.Driver.driverId}
          class="background-image"
        />
        <Card.Body>
          <Card.Title className="mb-0">
            <h3 className="mb-0">
              {`${driver.Driver.givenName} ${driver.Driver.familyName}`}
            </h3>
          </Card.Title>
          <ListGroup className="list-group-flush">
            <ListGroupItem className="h5 mb-0 bg-light text-dark">{driver.Constructors[0].name}</ListGroupItem>
            <ListGroupItem className="list-group-item-dark bg-light text-dark">Position: <strong>{driver.position}</strong></ListGroupItem>
            <ListGroupItem className="list-group-item-dark bg-light text-dark">PTS: <strong>{driver.points}</strong></ListGroupItem>
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  )
}

// const tempDriver = {
//     "position": "1",
//     "positionText": "1",
//     "points": "208",
//     "wins": "6",
//     "Driver": {
//         "driverId": "max_verstappen",
//         "permanentNumber": "33",
//         "code": "VER",
//         "url": "http://en.wikipedia.org/wiki/Max_Verstappen",
//         "givenName": "Max",
//         "familyName": "Verstappen",
//         "dateOfBirth": "1997-09-30",
//         "nationality": "Dutch"
//     },
//     "Constructors": [
//         {
//             "constructorId": "red_bull",
//             "url": "http://en.wikipedia.org/wiki/Red_Bull_Racing",
//             "name": "Red Bull",
//             "nationality": "Austrian"
//         }
//     ]
// }