import React, { useEffect, useState } from "react";
import AOS from "aos";
import texture from "../../images/textureBG.png";
import homegirl from "../../images/GirlHome.jpg";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import braids from "../../images/girl3.jpg";
import weave from "../../images/girl4.jpg";
import natural from "../../images/girl5.jpg";

import { getUserId } from "../../services/userServices";

import { Link } from "react-router-dom";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { BiSearchAlt2 } from "react-icons/bi";

import "aos/dist/aos.css";
import "./home.css";

const FeatureCardData = [
  {
    heading: "Braids",
    subheading: "Be Inpired",
    imageSrc: braids,
    id: "card-one",
    url: "/landing-braids",
  },
  {
    heading: "Natural",
    subheading: "Be Inpired",
    imageSrc: natural,
    id: "card-two",
    url: "/landing-natural",
  },
  {
    heading: "Weave",
    subheading: "Be Inpired",
    imageSrc: weave,
    id: "card-three",
    url: "/landing-weave",
  },
];

const Home = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null); // this is the user objet from the DB
  // console.log(isUserLoggedIn);
  const [loggedInUsername, setLoggedInUsername] = useState("");

  const getLoggedInUser = async () => {
    // const getUser = async () => {
    const response = await getUserId();
    // console.log(response);
    // };
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    console.log("home useeffect");

    // get user id
    const user = getLoggedInUser();

    console.log("user response", user);
    const userSessionToken = localStorage.getItem("userToken");
    if (userSessionToken) {
      setIsUserLoggedIn(true);
    }
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="nav-section">
          <Link to="/">
            <div className="nav-item">LOGO</div>
          </Link>
          <Link to="/">
            <div className="nav-item">About</div>
          </Link>

          <Link to="/landing-braids">
            <div className="nav-item">Be Insipired</div>
          </Link>
        </div>
        <div className="nav-section">
          <Link to="/search">
            <div className="nav-item">
              <BiSearchAlt2 />
            </div>
          </Link>
          <Link to="/signup">
            <div className="nav-item">Sign up</div>
          </Link>
          <div>/</div>
          <Link to="/signin">
            <div className="nav-item">Sign in</div>
          </Link>
        </div>
      </nav>
      <div className="container">
        <div className="background-white">
          <div>
            <h1 className="home-title">Salon</h1>
            <h1 className="home-title">Search</h1>
            <h3 className="subtitle">
              Finally all your fav Afro hair salons in one place!
            </h3>
            {isUserLoggedIn ? (
              <Link to="/search">
                <button className="btn-flat">Search salons now</button>
              </Link>
            ) : (
              <Link to="/signup">
                <button className="btn-flat">Sign up</button>
              </Link>
            )}
          </div>
        </div>
        <div className="background-image">
          <img alt="backgroundCover" src={texture}></img>
        </div>
      </div>
      <img
        alt="girl-with-twists"
        className="homepage-girl"
        src={homegirl}
      ></img>
      <h1 className="sub-title">Find Inspo</h1>
      <div className="home-feature-cards-container">
        {FeatureCardData.map((data) => {
          const { heading, subheading, imageSrc, id, url } = data;
          // console.log(heading, subheading, imageSrc);
          return (
            <FeatureCard
              heading={heading}
              subheading={subheading}
              imageSrc={imageSrc}
              id={id}
              url={url}
            />
          );
        })}
      </div>
      <h1 className="sub-title left margin-top">Featured Salons</h1>
      <div data-aos="fade-right" className="home-featured-salons-container">
        <div className="home-featured-salon">
          <img
            alt="curlbarsalon"
            src="https://images.squarespace-cdn.com/content/v1/5dac83bb29c3100c9dc5eed2/1578691509736-1LL1WB30ZPBELR3YA8MC/200102_Nia_Salon_Capture_034.jpg?format=1500w"
          />
        </div>
        <div className="home-salon-ratings">
          <h2 className="featured-salon-heading">The Curl Bar London</h2>
          <p className="featured-salon-blurb">
            The Curl Bar London is a safe space for women with natural hair to
            feel embraced.
          </p>
          <div className="thumnail-container">
            <div className="thumbnail">
              <img
                alt="curlbarsalon"
                src="https://res.cloudinary.com/dnsof9xnr/image/upload/v1645486218/Screenshot_2022-02-21_at_23.29.24.png"
              />
            </div>
            <div className="thumbnail">
              <img
                alt="curlbarsalon"
                src="https://res.cloudinary.com/dnsof9xnr/image/upload/v1645481279/curlbar.jpg"
              />
            </div>
            <div className="thumbnail">
              <img
                alt="curlbarsalon"
                src="https://images.squarespace-cdn.com/content/v1/5dac83bb29c3100c9dc5eed2/1578691509736-1LL1WB30ZPBELR3YA8MC/200102_Nia_Salon_Capture_034.jpg?format=1500w"
              />
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-left" className="home-featured-salons-container">
        <div className="home-featured-salon">
          <img
            src="https://scontent-lhr8-1.xx.fbcdn.net/v/t1.6435-9/42303770_2140561949493011_9088340060364865536_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeH6DaEy1iyvGBMfHBsNPUCli8hsAmqYcjuLyGwCaphyOw9R3UpyShi8T-mz2b-WAkM&_nc_ohc=OLT79EaRviAAX9_wWey&_nc_ht=scontent-lhr8-1.xx&oh=00_AT-wtedsYlLOh97rj9wpxjcMf2eOpAiOfmV9FCZKAqHVIA&oe=62314EEA"
            alt="elite-girl"
          />
        </div>
        <div className="home-salon-ratings">
          <h2 className="featured-salon-heading">Elite Hair Lounge London</h2>
          <p className="featured-salon-blurb">
            With locations in Stockwell, Lewisham, and our newest branch Archway
            in London, Elite Hair Lounge has stylists dedicated to providing
            clients with healthy hair.
          </p>
          <div className="thumnail-container">
            <div className="thumbnail">
              <img
                src="https://res.cloudinary.com/dnsof9xnr/image/upload/v1645486841/WhatsApp_Image_2022-02-21_at_23.36.53.jpg"
                alt="elite-girl"
              />
            </div>
            <div className="thumbnail">
              <img
                src="https://res.cloudinary.com/dnsof9xnr/image/upload/v1645486583/ang_braids.jpg"
                alt="elite-girl"
              />
            </div>
            <div className="thumbnail">
              <img
                src="https://scontent-lhr8-1.xx.fbcdn.net/v/t1.6435-9/42303770_2140561949493011_9088340060364865536_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeH6DaEy1iyvGBMfHBsNPUCli8hsAmqYcjuLyGwCaphyOw9R3UpyShi8T-mz2b-WAkM&_nc_ohc=OLT79EaRviAAX9_wWey&_nc_ht=scontent-lhr8-1.xx&oh=00_AT-wtedsYlLOh97rj9wpxjcMf2eOpAiOfmV9FCZKAqHVIA&oe=62314EEA"
                alt="elite-girl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer-links">
          <Link className="link-footer" to="">
            About{" "}
          </Link>
          <Link className="link-footer" to="/">
            Inspo
          </Link>
          <Link className="link-footer" to="/search">
            Search
          </Link>
        </div>
        <div className="social-links">
          <div>
            <h3>Follow us</h3>
          </div>
          <div>
            <a>
              {" "}
              <FaFacebook />
            </a>
            <a href="">
              <FaInstagram />
            </a>
            <a href="">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* <SignUp />
      <SignIn/> */}
    </>
  );
};
export default Home;
// homepage loads
// if the user is logged in - useffect on page load to check if user is logged in - ie has a token
// if the user is logged in show the regular home page and button saying search salons
// if user is not lgged in put "sign up button linking to sign up page"
