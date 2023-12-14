import React, { useEffect, useState } from "react";
import { getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import Carousel from "react-material-ui-carousel";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  HeroHeaderText,
  HeroBodyText,
  HeroSlide,
  SlideContent,
  ExpandMore,
  HeroImage,
} from "./LandingHero.styles";

// TODO: Make Component More Reusable

const LandingHero = ({ landingContent }) => {
  const [carouselHeight, setCarouselHeight] = useState(300);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 600) {
        setCarouselHeight(280);
      } else if (screenWidth < 980) {
        setCarouselHeight(400);
      } else {
        setCarouselHeight(700);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Carousel
      animation="fade"
      interval={8000}
      indicators={false}
      height={carouselHeight}
      navButtonsAlwaysVisible={true}
      NextIcon={<ArrowForwardIosIcon sx={{ fontSize: "1.5rem" }} />}
      PrevIcon={<ArrowBackIosIcon sx={{ fontSize: "1.5rem" }} />}
      navButtonsProps={{
        style: {
          color: "white",
          backgroundColor: "transparent",

          "&:hover": {
            backgroundColor: "rgba(0,0,0,0.8)",
          },
        },
      }}
    >
      {landingContent?.reverse().map(({ frontmatter, html, image }, index) => (
        <HeroSlide variant="outlined" key={frontmatter?.position || index}>
          <HeroImage
            image={getImage(image?.childImageSharp?.gatsbyImageData)}
            alt="Landing Hero Image"
            loading="eager"
          />

          <SlideContent>
            {frontmatter?.headline && (
              <HeroHeaderText>{frontmatter.headline}</HeroHeaderText>
            )}
            {html && (
              <HeroBodyText dangerouslySetInnerHTML={{ __html: html }} />
            )}
            <ExpandMore />
          </SlideContent>
        </HeroSlide>
      ))}
    </Carousel>
  );
};

export default LandingHero;

LandingHero.defaultProps = {
  landingContent: [
    {
      headline: "Default Headline",
      body: "Default Body",
      position: 1,
      image: {
        gatsbyImageData: {
          layout: "fullWidth",
          placeholder: "blurred",
          formats: ["auto", "webp", "avif"],
        },
      },
      html: "<p>Default HTML</p>",
      image: {
        gatsbyImageData: {
          layout: "fullWidth",
          placeholder: "blurred",
          formats: ["auto", "webp", "avif"],
        },
      },
    },
  ],
};

LandingHero.propTypes = {
  landingContent: PropTypes.arrayOf(
    PropTypes.shape({
      headline: PropTypes.string,
      body: PropTypes.string,
      position: PropTypes.number,
      html: PropTypes.string,
      cloudinaryData: PropTypes.shape({
        gatsbyImageData: PropTypes.object,
      }),
    })
  ),
};
