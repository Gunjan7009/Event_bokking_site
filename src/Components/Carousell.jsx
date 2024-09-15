import Carousel from 'react-bootstrap/Carousel';
import firstSlide from '../assets/Slider.jpg';
import secondSlide from '../assets/Slider2.jpg'

function Carousell() {
    return (
        <Carousel data-bs-theme="dark" interval={2000} prevIcon={null} nextIcon={null}>
            <Carousel.Item>
                <img
                    className="d-block w-100  h-80 w-64"
                    src={firstSlide}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100  h-80 w-64"
                    src={secondSlide}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carousell;