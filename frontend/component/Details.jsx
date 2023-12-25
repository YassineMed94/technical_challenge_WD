import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
function Details() {

    const [phones, setPhones] = useState([]);
    const { id } = useParams();
    const getPhones = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/phones/${id}`)
      .then((reponse) => setPhones(reponse.data))

      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getPhones();
  }, []);

  return (
    <div className="container d-flex align-items-center justify-content-center">
     {phones && (
        <>
        <Card  style={{ width: '22rem' }}>
      <Card.Img variant="top" src={`/images/${phones.imageFileName}`}  />
      <Card.Body>
        <Card.Title>{phones.name}</Card.Title>
        <Card.Text className="d-flex align-items-center justify-content-center">
          {phones.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush d-flex align-items-center">
        <ListGroup.Item><text className="fw-bold">manufacturer : </text>{phones.manufacturer}</ListGroup.Item>
        <ListGroup.Item><text className="fw-bold">Colro : </text>{phones.color}</ListGroup.Item>
        <ListGroup.Item><text className="fw-bold">price : </text>{phones.price}$</ListGroup.Item>
        <ListGroup.Item><text className="fw-bold">screen : </text>{phones.screen}</ListGroup.Item>
        <ListGroup.Item><text className="fw-bold">processor : </text>{phones.processor}</ListGroup.Item>
        <ListGroup.Item><text className="fw-bold">ram : </text>{phones.ram}</ListGroup.Item>
      </ListGroup>
     
    </Card>
        </>
     )}
    </div>
  )
}

export default Details
