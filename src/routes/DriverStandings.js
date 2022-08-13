import React, { useState, useEffect} from 'react'
import DriverCard from "../components/DriverCard";
import { fetchDriverStandings } from "../services/ergastAPI";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const DriverStandings = () => {

  const [drivers, setDrivers] = useState([]);


  useEffect(() => {
    fetchDriverStandings()
      .then((data) => {
        setDrivers(data.MRData.StandingsTable.StandingsLists[0].DriverStandings);
      })
  }, []);


  return (
    <>
      <Container>
        <h1 className="text-center mb-4 mt-1">2022 Driver's Championship Standings</h1>
      </Container>

      <Container>
        <Row xs={1} md={2} lg={3} className="g-4" /*style={{ border: "1px solid blue" }}*/>
          {drivers.map((driver) => (
            <Col  className="d-flex justify-content-center my-3" /*style={{ border: "1px solid red" }}*/>
              <DriverCard driver={driver} />
            </Col>
          ))}
        </Row>
      </Container>        
    </>
  )
}

export default DriverStandings