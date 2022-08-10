import Carousel from 'react-bootstrap/Carousel';

function MyCarousel() {
  return (
    <div style={{ marginLeft:'1%', marginRight:'1%', borderRadius:25}}>
    <Carousel fade >
      <Carousel.Item style={{ borderRadius:25}}>
        <img
          className="d-block w-100"
          src="/images/hotel1.jpg"
          alt="First slide"
          height="400"
        />
        <Carousel.Caption>
          <h3>Floral Weddings</h3>
          <p>We work to fullfil your dream.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src="/images/hotel2.jpg"
          alt="Second slide"
          height='400'
        />

        <Carousel.Caption>
          <h3>Floral Weddings</h3>
          <p>We work to fullfil your dream.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/hotel1.jpg"
          alt="Third slide"
          height='400'
        />

        <Carousel.Caption>
          <h3>Classic Music Band</h3>
          <p>
           Give your wedding a classic touch
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default MyCarousel;