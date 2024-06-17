import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardMars from './CardMars';
import Buscador from './Buscador';



function MiApi() {

  const [nasaData, setNasaData] = useState([]);
  const [sol, setSol] = useState(null);
  const [rover, setRover] = useState("Curiosity");

  const getRandomNumber= ()=> {
    return Math.floor(Math.random() * 3400) + 1;

  }
  useEffect(() => {
    if (sol === null) {
      setSol(getRandomNumber());
    }
  }, [sol]);
  



  const consultaDeApi = async () => {

  const apikey = 'AhJwfmttiqA8MJR4waiCbXDvY7jWnmxJl83hBts3'
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&limit=60&api_key=${apikey}`

    try {
      const response = await fetch(url);
      const data = await response.json();
      setNasaData(data.photos);
   

    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    consultaDeApi();
  }, [sol, rover]);

  
  return (

    <>
  <Buscador sol={sol} setSol={setSol} rover= {rover} setRover={setRover}/>

    <Container>    
        <Row className='g-4' >
                {nasaData.map((photo) => (
                    <Col key={photo.id}>
                        <CardMars photo={photo} />
                    </Col>
                ))}
            </Row>
   
    </Container>
    </>
  );
};

export default MiApi;
