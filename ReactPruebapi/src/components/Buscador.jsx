import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavDropdown } from 'react-bootstrap';

function Buscador({ sol, setSol, rover, setRover }) {

  const handleSelect = (e) => { setRover(e) };
  return (
    <div>
    <Navbar className="bs-tertiary-color justify-content-between fixed=top bg- ">
      <Form inline>
        <Navbar.Brand className='m-4' href="#home">Imágenes de Marte.</Navbar.Brand>
      </Form>
      <NavDropdown title={`Rover: ${rover}`} id="basic-nav-dropdown" onSelect={handleSelect}>
                <NavDropdown.Item eventKey="Curiosity">Curiosity</NavDropdown.Item>
              <NavDropdown.Item eventKey="Opportunity">Opportunity</NavDropdown.Item>
              <NavDropdown.Item eventKey="Spirit">Spirit</NavDropdown.Item>   

      </NavDropdown>

      <Form inline>
        <Row>
        <Col xs="auto">
            <h4>Dia Solar de la misión</h4>
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