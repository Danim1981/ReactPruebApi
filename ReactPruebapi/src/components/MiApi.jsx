import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardMars from './CardMars';
import Buscador from './Buscador';
import Spinner from 'react-bootstrap/Spinner';



function MiApi() {

  const [nasaData, setNasaData] = useState([]);
  const [sol, setSol] = useState(null);
  const [rover, setRover] = useState("Curiosity");
  const [cameraType, setCameraType] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const getRandomNumber = () => {
    return Math.floor(Math.random() * 3400) + 1;
  }
  useEffect(() => {
    if (sol === null) {
      setSol(getRandomNumber());
    }
  }, [sol]);

  const apikey = 'AhJwfmttiqA8MJR4waiCbXDvY7jWnmxJl83hBts3'
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&limit=40&api_key=${apikey}`
  console.log(url);


  const consultaDeApi = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setNasaData(data.photos);
    } catch (error) {
      setError('Falló el fetch a la Api');
      console.error('Error:', error);
    }finally{
      setLoading(false);
    }
  };

  useEffect(() => {
    consultaDeApi();
  }, [sol, rover]);

  console.log(nasaData)

  const filteredNasa = cameraType? nasaData.filter((photo) => photo.camera.name === cameraType) : nasaData;
  console.log(filteredNasa)

  if (loading) {
    return <div>
      <Spinner animation="border" variant="danger" />
      Loading...
      <Spinner animation="border" variant="danger" />
      </div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Buscador sol={sol} setSol={setSol} rover={rover} setRover={setRover} cameraType={cameraType} setCameraType={setCameraType} />

      <Container>
        <Row className='g-4' >
          {filteredNasa.map((photo) => (
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
