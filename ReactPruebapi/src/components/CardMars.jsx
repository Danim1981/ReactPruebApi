import React from 'react';
import { Card } from 'react-bootstrap';
import { CardImg } from 'react-bootstrap';
import { CardBody } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


function CardMars({photo}) {

    if (!photo || !photo.camera || !photo.rover) {
        return null;
    }

    const irafoto = (imageSrc) => {
        window.open(imageSrc, '_blank');
      };

    console.log("mars",photo);

    return (                
                <Card className="card-base" key={photo.id} >
                    <CardImg
                        
                        src={photo.img_src}
                        alt={photo.camera.full_name}
                        className="card-img-top img-fluid"
                        style={{ maxHeight: 200, maxWidth: 400 }}
                    />
                    <CardBody>
                        <p className='cardtitle'>Cámara: {photo.camera.name}</p>
                        <p className='mb-2 text-muted small'>Fecha terrestre:{photo.earth_date}</p>
                        <p className='cardsol'>Dia solar:{photo.sol}</p>
                        <Button variant='primary' onClick={()=> irafoto(photo.img_src)}  >Ir</Button>
                    </CardBody>
                </Card>
                 
    );
};

export default CardMars;
