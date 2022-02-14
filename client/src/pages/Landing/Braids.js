import { React } from "react";
import HeroPageTemplate from "../../components/HeroPageTemplate/HeroPageTemplate";
import braidsImage from "../../images/girl3.jpg";

const Braids = (props) => {
    return (<HeroPageTemplate title="Braids"
        title2="Inspo"
        subtitle="thisis the subtitle"
        cta="Be Inspired"
        backgroundImageRight={braidsImage}
    />);
}

export default Braids;