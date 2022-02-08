import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Gallery = () => {
    return (
        <Carousel autoPlay useKeyboardArrows width={"50vw"} emulateTouch className="carousel">
                <div>
                    <img alt="pic 1" src="https://images.unsplash.com/photo-1640622842223-e1e39f4bf627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80" />
                    <p className="legend"></p>
                </div>
                <div>
                    <img alt="pic 2" src="https://images.unsplash.com/photo-1644329901564-1e47f5d1b81a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img alt="pic 3" src="https://images.unsplash.com/photo-1644289153492-0ed7bd5f5dca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1930&q=80" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    )
}

export default Gallery;
