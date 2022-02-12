import React, { useEffect } from "react";
import AOS from 'aos';
import texture from "../../images/textureBG.png";
import homegirl from "../../images/GirlHome.jpg"
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import braids from "../../images/girl3.jpg";
import weave from "../../images/girl4.jpg";
import natural from "../../images/girl5.jpg";

import "aos/dist/aos.css";
import "./home.css";

const FeatureCardData = [
    {
        heading: "Braids",
        subheading: "subheading",
        imageSrc: braids,
        id: "card-one"
    },
    {
        heading: "Natural",
        subheading: "subheading",
        imageSrc: natural,
        id: "card-two"
    },
    {
        heading: "Weave",
        subheading: "subheading",
        imageSrc: weave,
        id: "card-three"
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
                <div className="nav-item">About</div>
                <div className="nav-item" >Be Insipired</div>
                <div className="nav-item">Search</div>
            </nav>
            <div className="container">
                <div className="background-white">
                    <div>
                        <h1 className="home-title">Salon</h1>
                        <h1 className="home-title">Search</h1>
                        <h3 className="subtitle">this is a subheading with text about webiste </h3>
                        <button className="btn-flat">Search salons now</button>
                    </div>
                </div>
                <div className="background-image">
                    <img src={texture}></img>

                </div>
            </div>
            <img className="homepage-girl" src={homegirl}></img>
            <h1 className="sub-title">Find Inspo</h1>
            <div className="home-feature-cards-container">
                {FeatureCardData.map((data) => {
                    const { heading, subheading, imageSrc, id } = data;
                    console.log(heading, subheading, imageSrc)
                    return (<FeatureCard
                        heading={heading}
                        subheading={subheading}
                        imageSrc={imageSrc}
                        id={id} />)
                })}
            </div>
            <h1 className="sub-title left margin-top">Featured Salons</h1>
            <div data-aos="fade-left" className="home-featured-salons-container">
                <div className="home-featured-salon"></div>
                <div className="home-salon-ratings">
                    <h2 className="featured-salon-heading">This is a h2 featured salon</h2>
                    <p className="featured-salon-blurb">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum! Provident similique accusantium nemo autem.</p>
                    <div className="thumnail-container">
                        <div className="thumbnail"></div>
                        <div className="thumbnail"></div>
                        <div className="thumbnail"></div>
                    </div>
                </div>
            </div>
            <div data-aos="fade-right" className="home-featured-salons-container">
                <div className="home-featured-salon"></div>
                <div className="home-salon-ratings">
                    <h2 className="featured-salon-heading">This is a h2 featured salon</h2>
                    <p className="featured-salon-blurb">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum! Provident similique accusantium nemo autem.</p>
                    <div className="thumnail-container">
                        <div className="thumbnail"></div>
                        <div className="thumbnail"></div>
                        <div className="thumbnail"></div>
                    </div>
                </div>
            </div>
            <footer className="footer-image"><img src={texture} /></footer>


        </>
    )
}
export default Home;