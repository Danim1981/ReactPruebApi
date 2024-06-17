import React from 'react'


function DiaSolar({ sol, setSol }) {
    return (
        <div>
            <input
                type="number"
                placeholder='Día Solar'
                value={sol}
                onChange={e => setSol(e.target.value)} /> ;

<NavDropdown title="Cámara" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">CHEMCAM</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">FHAZ</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">MARDI</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">RHAZ</NavDropdown.Item>
            </NavDropdown>
        </div>
    )
}


