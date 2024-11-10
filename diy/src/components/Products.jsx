import { useEffect, useState } from 'react'; 
import axios from 'axios';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Products.css';

const product_api = '/api/v1/products';

const Products = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const placeholderImage = '../images/placeholder.jpg';

  useEffect(() => {
    axios
      .get(product_api)
      .then((response) => {
        setProducts(response.data.items);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching the products:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <Container className="my-5">
      <div className="table-total">
        <th className="col-total">
          <h3>สินค้าทั้งหมด</h3>
          </th>
      </div>
      <Row className="d-flex flex-wrap justify-content-center">
        {products.map((product) => {

          const primaryImage = product.images.find((img) => img.is_primary)?.image_url;

          return (
            <Col key={product.id} className="d-flex justify-content-center product-card">
              <Card className="mb-4 product-hover" style={{ width: '100%', height: 'auto' }}>
              <Link to={`product/detail/${product.id}`} style={{ textDecoration: 'none' }}>
                <Card.Img
                  variant="top"
                  src={primaryImage}
                  alt={product.product_name}
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = placeholderImage;
                  }}
                />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title className="text-truncate" style={{ fontSize: '20px', color: 'black' }}>{product.product_name}</Card.Title>
                    <Card.Text className="text-truncate" style={{ fontSize: '0.8rem', color: 'black' }}>{product.description}</Card.Text>
                  </div>
                  <div>
                    <Card.Text style={{ fontSize: '0.9rem', color: 'black' }}>
                      <strong>฿{product.price}.00</strong>
                    </Card.Text>
                  </div>
                </Card.Body>
                </Link>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Products;
