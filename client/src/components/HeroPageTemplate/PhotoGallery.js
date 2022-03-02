import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";

/* popout the browser and maximize to see more rows! -> */
const PhotoGallery = () =>
    <Gallery data-aos="fade-up" direction="row" margin="2" targetRowHeight={300} photos={photos} />



export default PhotoGallery;