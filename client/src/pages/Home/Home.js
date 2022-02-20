import React, { useEffect } from "react";
import AOS from 'aos';
import texture from "../../images/textureBG.png";
import homegirl from "../../images/GirlHome.jpg"
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import braids from "../../images/girl3.jpg";
import weave from "../../images/girl4.jpg";
import natural from "../../images/girl5.jpg";
import { Link } from 'react-router-dom';

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

import "aos/dist/aos.css";
import "./home.css";

const FeatureCardData = [
    {
        heading: "Braids",
        subheading: "subheading",
        imageSrc: braids,
        id: "card-one",
        url: "/landing-braids"
    },
    {
        heading: "Natural",
        subheading: "subheading",
        imageSrc: natural,
        id: "card-two",
        url: "/landing-natural"
    },
    {
        heading: "Weave",
        subheading: "subheading",
        imageSrc: weave,
        id: "card-three",
        url: "/landing-weave"
    }
];


const Home = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, []);

    return (
        <>
            <nav className="navbar">
                <Link to="/">
                    <div className="nav-item">About</div>
                </Link>

                <Link to="/landing-braids">
                    <div className="nav-item" >Be Insipired</div>
                </Link>

                <Link to="/search">
                    <div className="nav-item">
                        Search
                    </div>
                </Link>
            </nav>
            <div className="container">
                <div className="background-white">
                    <div>
                        <h1 className="home-title">Salon</h1>
                        <h1 className="home-title">Search</h1>
                        <h3 className="subtitle">Finally all your fav Afro hair salons in one place!</h3>
                        <Link to="/search">
                            <button className="btn-flat">
                                Search salons now
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="background-image">
                    <img alt="backgroundCover" src={texture}></img>
                </div>
            </div>
            <img alt="girl-with-twists" className="homepage-girl" src={homegirl}></img>
            <h1 className="sub-title">Find Inspo</h1>
            <div className="home-feature-cards-container">
                {FeatureCardData.map((data) => {
                    const { heading, subheading, imageSrc, id, url } = data;
                    console.log(heading, subheading, imageSrc)
                    return (<FeatureCard
                        heading={heading}
                        subheading={subheading}
                        imageSrc={imageSrc}
                        id={id}
                        url={url} />
                    )
                })}
            </div>
            <h1 className="sub-title left margin-top">Featured Salons</h1>
            <div data-aos="fade-left" className="home-featured-salons-container">
                <div className="home-featured-salon"><img src="https://scontent-lhr8-1.xx.fbcdn.net/v/t1.6435-9/42303770_2140561949493011_9088340060364865536_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeH6DaEy1iyvGBMfHBsNPUCli8hsAmqYcjuLyGwCaphyOw9R3UpyShi8T-mz2b-WAkM&_nc_ohc=OLT79EaRviAAX9_wWey&_nc_ht=scontent-lhr8-1.xx&oh=00_AT-wtedsYlLOh97rj9wpxjcMf2eOpAiOfmV9FCZKAqHVIA&oe=62314EEA" alt="elite-girl" /></div>
                <div className="home-salon-ratings">
                    <h2 className="featured-salon-heading">Elite Hair Lounge London</h2>
                    <p className="featured-salon-blurb">With locations in Stockwell, Lewisham, and our newest branch Archway in London,
                        Elite Hair Lounge has stylists dedicated to providing clients with healthy hair.</p>
                    <div className="thumnail-container">
                        <div className="thumbnail"><img src="https://scontent-lhr8-1.xx.fbcdn.net/v/t1.6435-9/42303770_2140561949493011_9088340060364865536_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeH6DaEy1iyvGBMfHBsNPUCli8hsAmqYcjuLyGwCaphyOw9R3UpyShi8T-mz2b-WAkM&_nc_ohc=OLT79EaRviAAX9_wWey&_nc_ht=scontent-lhr8-1.xx&oh=00_AT-wtedsYlLOh97rj9wpxjcMf2eOpAiOfmV9FCZKAqHVIA&oe=62314EEA" alt="elite-girl" /></div>
                        <div className="thumbnail"><img src="https://scontent-lhr8-1.xx.fbcdn.net/v/t1.6435-9/42303770_2140561949493011_9088340060364865536_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeH6DaEy1iyvGBMfHBsNPUCli8hsAmqYcjuLyGwCaphyOw9R3UpyShi8T-mz2b-WAkM&_nc_ohc=OLT79EaRviAAX9_wWey&_nc_ht=scontent-lhr8-1.xx&oh=00_AT-wtedsYlLOh97rj9wpxjcMf2eOpAiOfmV9FCZKAqHVIA&oe=62314EEA" alt="elite-girl" /></div>
                        <div className="thumbnail"><img src="https://scontent-lhr8-1.xx.fbcdn.net/v/t1.6435-9/42303770_2140561949493011_9088340060364865536_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeH6DaEy1iyvGBMfHBsNPUCli8hsAmqYcjuLyGwCaphyOw9R3UpyShi8T-mz2b-WAkM&_nc_ohc=OLT79EaRviAAX9_wWey&_nc_ht=scontent-lhr8-1.xx&oh=00_AT-wtedsYlLOh97rj9wpxjcMf2eOpAiOfmV9FCZKAqHVIA&oe=62314EEA" alt="elite-girl" /></div>
                    </div>
                </div>
            </div>
            <div data-aos="fade-right" className="home-featured-salons-container">
                <div className="home-featured-salon"><img alt="curlbarsalon" src="https://images.squarespace-cdn.com/content/v1/5dac83bb29c3100c9dc5eed2/1578691509736-1LL1WB30ZPBELR3YA8MC/200102_Nia_Salon_Capture_034.jpg?format=1500w" /></div>
                <div className="home-salon-ratings">
                    <h2 className="featured-salon-heading">thecurlbarlondon</h2>
                    <p className="featured-salon-blurb">THE CURL BAR LONDON IS A SAFE SPACE FOR WOMEN WITH NATURAL HAIR TO FEEL EMBRACED.
                    </p>
                    <div className="thumnail-container">
                        <div className="thumbnail"><img alt="curlbarsalon" src="https://images.squarespace-cdn.com/content/v1/5dac83bb29c3100c9dc5eed2/1578691509736-1LL1WB30ZPBELR3YA8MC/200102_Nia_Salon_Capture_034.jpg?format=1500w" /></div>
                        <div className="thumbnail"><img alt="curlbarsalon" src="https://images.squarespace-cdn.com/content/v1/5dac83bb29c3100c9dc5eed2/1578691509736-1LL1WB30ZPBELR3YA8MC/200102_Nia_Salon_Capture_034.jpg?format=1500w" /></div>
                        <div className="thumbnail"><img alt="curlbarsalon" src="https://images.squarespace-cdn.com/content/v1/5dac83bb29c3100c9dc5eed2/1578691509736-1LL1WB30ZPBELR3YA8MC/200102_Nia_Salon_Capture_034.jpg?format=1500w" /></div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="footer-links">
                    <Link className="link-footer" to="">About </Link>
                    <Link className="link-footer" to="/">Inspo</Link>
                    <Link className="link-footer" to="/search">Search</Link>
                </div>
                <div className="social-links">
                    <div>
                        <h3>Follow us</h3>
                    </div>
                    <div>
                        <a> <FaFacebook /></a>
                        <a href=""><FaInstagram /></a>
                        <a href=""><FaTwitter /></a>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Home;
