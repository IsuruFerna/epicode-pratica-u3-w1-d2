import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const AllTheBooks = function (prop) {
   //  console.log("fantacy", fantacy);
   return (
      <Container>
         <Row className="row-cols-2 row-cols-md-3 row-cols-lg-4">
            {prop.bookGenre.map((book) => {
               return (
                  <Col key={book.asin}>
                     <Card>
                        <Card.Img variant="top" src={book.img} />
                        <Card.Body>
                           <Card.Title>{book.title}</Card.Title>
                           <Card.Text>Price: $ {book.price}</Card.Text>
                           <Button variant="primary">Order</Button>
                        </Card.Body>
                     </Card>
                  </Col>
               );
            })}
         </Row>
      </Container>
   );
};

export default AllTheBooks;
