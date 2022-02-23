import { React } from "react";
import HeroPageTemplate from "../../components/HeroPageTemplate/HeroPageTemplate";
import braidsImage from "../../images/girl3.jpg";

import leonieBraids from "../../images/LeonieBraids1.jpg";
import braids1 from "../../images/ang_braids_insta.jpg";
import braids2 from "../../images/Braids2.jpg";
import cainrow from "../../images/Braids1.jpg";
import braids3 from "../../images/Braids3.jpg";
import leonieBraids2 from "../../images/LeonieBraids2.jpeg";


const Braids = () => {
    return (<HeroPageTemplate title="Braids"
        title2="Inspo"
        subtitle="this is the subtitle"
        cta="Be Inspired"
        backgroundImageRight={braidsImage}
        image1={leonieBraids2}
        image2={braids3}
        image3={braids1}
        image4={cainrow}
        image5={leonieBraids}
        image6={braids2}
    />);
}

export default Braids;
