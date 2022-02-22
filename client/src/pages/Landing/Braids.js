import { React } from "react";
import HeroPageTemplate from "../../components/HeroPageTemplate/HeroPageTemplate";
import braidsImage from "../../images/girl3.jpg";

import homegirl from "../../images/GirlHome.jpg";
import braids1 from "../../images/ang_braids_insta.jpg";
import braids2 from "../../images/Braids2.jpg";
import cainrow from "../../images/Braids1.jpg";
import braids3 from "../../images/Braids3.jpg";
// import cainrowAng from "../../images/ang_braids.jpeg";


const Braids = () => {
    return (<HeroPageTemplate title="Braids"
        title2="Inspo"
        subtitle="this is the subtitle"
        cta="Be Inspired"
        backgroundImageRight={braidsImage}
        image1={homegirl}
        image2={braids1}
        image3={braids2}
        image4={cainrow}
        image5={braids3}
    // image6={cainrowAng}
    />);
}

export default Braids;
