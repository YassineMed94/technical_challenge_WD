import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function HomePage() {

    const [phones, setPhoes] = useState([]);
    const getPhoes = () => {
        axios
          .get(`${import.meta.env.VITE_API_URL}/phones`)
          .then((response) => {
            setPhoes(response.data);
          })
          .catch((error) => {
            console.log("Error getting Phoes from the API...");
            console.log(error);
          });
      };
      useEffect(() => {
        getPhoes();
      }, []);
  return (
    <>
    <div>
      {phones.map((phone)=>(
        <div>
            <h2></h2>
          
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`/images/${phone.imageFileName}`} />
      <Card.Body>
        <Card.Title>{phone.name}</Card.Title>
        <Link to={'/'}>
        <Button>Phone Details</Button>
        </Link>
      </Card.Body>
    </Card>
        
        
        </div>
    
      ))}
    </div>
    </>
  )
}

export default HomePage