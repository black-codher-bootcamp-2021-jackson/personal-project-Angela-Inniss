import React from "react";
import SalonCard from "../../components/SalonCard/SalonCard";

const Home = () => {
    return (
        <SalonCard
            image="test"
            name="Snippers"
            location="Manchester"
            socials={[]}
            description="this is a description of the salon"
            services={[]} />
    )
}
export default Home;