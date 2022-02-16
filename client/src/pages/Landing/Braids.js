import { React } from "react";
import HeroPageTemplate from "../../components/HeroPageTemplate/HeroPageTemplate";
import braidsImage from "../../images/girl3.jpg";

const Braids = () => {
    return (<HeroPageTemplate title="Braids"
        title2="Inspo"
        subtitle="this is the subtitle"
        cta="Be Inspired"
        backgroundImageRight={braidsImage}
    />);
}

export default Braids;
