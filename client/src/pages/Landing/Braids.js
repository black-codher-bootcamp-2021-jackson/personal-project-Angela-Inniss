import { React, useEffect } from "react";
import AOS from 'aos';
import PhotoGallery from "../../components/HeroPageTemplate/PhotoGallery";
import HeroPageTemplate from "../../components/HeroPageTemplate/HeroPageTemplate";
import braidsImage from "../../images/girl3.jpg";
import "./Braids.css";

import leonieBraids from "../../images/LeonieBraids1.jpg";
import braids1 from "../../images/ang_braids_insta.jpg";
import braids2 from "../../images/Braids2.jpg";
import cainrow from "../../images/Braids1.jpg";
import braids3 from "../../images/Braids3.jpg";
import leonieBraids2 from "../../images/LeonieBraids2.jpeg";
import "aos/dist/aos.css";


const Braids = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, []);
    return (
        <>
            <HeroPageTemplate title="Braids"
                title2="Inspo"
                subtitle="What will it be today?"
                cta="Be Inspired"
                backgroundImageRight={braidsImage}
            />
            <h1 className="sub-title">Knotless Braids - how to </h1>

            <div data-aos="fade-up" id="inspo-container" className="frame-contianer">
                <iframe width="560" height="315"
                    src="https://www.youtube.com/embed/eS64yozs10U"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>

            <h1 className="sub-title">Be Inspired</h1>
            <div data-aos="fade-up" className="gallery-container"><PhotoGallery /></div>



        </>);
}

export default Braids;
