import React, { useState, useEffect } from 'react'
import ConstructorCard from '../components/ConstructorCard';
import { fetchConstructorStandings } from "../services/ergastAPI";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const ConstructorStandings = () => {

  const [constructors, setConstructors] = useState([]);


  useEffect(() => {
    fetchConstructorStandings()
      .then((data) => {
        // console.log(data)
        setConstructors(data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings);
      })
  }, []);

  console.log(constructors)

  return (
    <>
      <Container>
        <h1 className="text-center mb-4 mt-1">2022 Constructor's Championship Standings</h1>
      </Container>

      <Container>
        <Row xs={1} md={2} lg={3} xl={4} className="g-4 justify-content-center" /*style={{ border: "1px solid blue" }}*/>
          {constructors.map((constructor) => (
            <Col className="d-flex justify-content-center my-3" /*style={{ border: "1px solid red" }}*/>
              <ConstructorCard constructor={constructor} />
            </Col>
          ))}
        </Row>
      </Container>
    </>

  )
}

export default ConstructorStandings