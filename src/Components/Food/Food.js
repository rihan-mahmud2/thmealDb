import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Food({ food }) {
  const { idMeal, strMeal, strMealThumb } = food;
  return (
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={strMealThumb} />
            <Card.Body>
              <Card.Title>{strMeal}</Card.Title>
              <Link to={`/food/${idMeal}`}>
                <Button variant="primary">Go somewhere</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Food;
