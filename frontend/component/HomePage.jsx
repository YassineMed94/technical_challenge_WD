import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function HomePage() {
  const [phones, setPhoes] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const getPhoes = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/phones`) 
      .then((response) => {
        setPhoes(response.data);
        setLoading(false);
      })
      
      .catch((error) => {
        console.log("Error getting Phoes from the API...");
        console.log(error);
      });
  };

  useEffect(() => {
    getPhoes();
  }, []);
  if (loading) {
    return <p>Loading...</p>;
}
  return (
    <>
      <div className="d-flex align-content-start  flex-wrap ">
        {phones.map((phone) => (
            
          <div class="col-3 ">
            
            <br/>
            <Card className="d-flex flex-nowrap" style={{ width: "18rem" }}>
              <Card.Img variant="top" width="100" height="300" src={`/images/${phone.imageFileName}`}   />
              <Card.Body>
                <Card.Title>{phone.name}</Card.Title>
                <Link to={`/detail/${phone.id}`}>
                  <Button>Phone Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}

export default HomePage;
