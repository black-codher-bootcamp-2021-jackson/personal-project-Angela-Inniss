import { React } from "react";
import HeroPageTemplate from "../../components/HeroPageTemplate/HeroPageTemplate";


import homegirl from "../../images/GirlHome.jpg";
import girl1 from "../../images/girl1.jpg";
import girl2 from "../../images/girl2.jpg"
import girl3 from "../../images/girl3.jpg"
import girl4 from "../../images/girl4.jpg";
import girl5 from "../../images/girl5.jpg"


const Relaxed = () => {
    return (
        <HeroPageTemplate title="Relaxed"
            title2="Inspo"
            subtitle="this is the subtitle"
            cta="Be Inspired"
            buttonUrl="#inspo-container"
            backgroundImageRight={girl5}
            image1={homegirl}
            image2={girl1}
            image3={girl2}
            image4={girl3}
            image5={girl4}
            image6={girl5}
        />);
}

export default Relaxed;
