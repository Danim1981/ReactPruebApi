import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavDropdown } from 'react-bootstrap';

function Buscador({ sol, setSol, rover, setRover, cameraType, setCameraType }) {

  const handleSelect = (eventKey) => { setRover(eventKey); };
  const handleSelect2 = (eventKey) => { setCameraType(eventKey); };
  
  return (
    <div>
      <Navbar className="bs-tertiary-color justify-content-between fixed=top bg- ">
        <Form className="d-inline">
          <Navbar.Brand className='m-4' href="#home">Imágenes de Marte.</Navbar.Brand>
        </Form>
        <NavDropdown title={`Rover: ${rover}`} id="basic-nav-dropdown" onSelect={handleSelect}>
          <NavDropdown.Item eventKey="Curiosity">Curiosity</NavDropdown.Item>
          <NavDropdown.Item eventKey="Opportunity">Opportunity</NavDropdown.Item>
          <NavDropdown.Item eventKey="Spirit">Spirit</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title={`Cámara: ${cameraType}`} id="basic-nav-dropdown" onSelect={handleSelect2}>
        <NavDropdown.Item eventKey=''>TODAS</NavDropdown.Item>
          <NavDropdown.Item eventKey="FHAZ">FHAZ</NavDropdown.Item>
          <NavDropdown.Item eventKey="NAVCAM">NAVCAM</NavDropdown.Item>
          <NavDropdown.Item eventKey="PANCAM">PANCAM</NavDropdown.Item>
          <NavDropdown.Item eventKey="MINITES">MINITES</NavDropdown.Item>
          <NavDropdown.Item eventKey="ENTRY">ENTRY</NavDropdown.Item>
          <NavDropdown.Item eventKey="RHAZ">RHAZ</NavDropdown.Item>
          <NavDropdown.Item eventKey="MAST">MAST</NavDropdown.Item>
        </NavDropdown>

        <Form className="d-inline">
          <Row>
            <Col xs="auto">
              <h5>Dia Solar de la misión</h5>
            </Col>
            <Col xs="4">
              <Form.Control
                value={sol}
                type="number"
                placeholder="Dia Solar"
                onChange={e => setSol(e.target.value)}
                className=" mr-sm-4"
              />
            </Col>
          </Row>
        </Form>
      </Navbar>
    </div>
  );
}

export default Buscador;

