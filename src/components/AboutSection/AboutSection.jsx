import React from "react";
import Markdown from "react-markdown";
import PropTypes from "prop-types";
import { getImage } from "gatsby-plugin-image";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Box } from "@mui/material";
import {
  AboutSectionContainer,
  AboutSectionImage,
  AboutSectionSocials,
  AboutSectionText,
  Link,
  Handle,
} from "./AboutSection.styles";

const AboutSection = ({
  headline,
  aboutImage,
  aboutText,
  instagramHandle,
  instagramLink,
  facebookHandle,
  facebookLink,
}) => {
  return (
    <>
      <AboutSectionContainer>
        <AboutSectionSocials>
          <AboutSectionImage
            image={getImage(aboutImage?.childImageSharp?.gatsbyImageData)}
            alt={headline}
          />
          <Box
            sx={{
              display: "flex",
              marginTop: "1rem",
              width: "100%",
              justifyContent: "space-around",
            }}
          >
            {instagramHandle && instagramLink && (
              <Link href={instagramLink} target="_blank" rel="noreferrer">
                <InstagramIcon sx={{ fontSize: "1.5rem", color: "#E4405F" }} />
                <Handle>{instagramHandle}</Handle>
              </Link>
            )}
            {facebookHandle && facebookLink && (
              <Link href={facebookLink} target="_blank" rel="noreferrer">
                <FacebookIcon sx={{ fontSize: "1.5rem", color: "#1877f2" }} />
                <Handle>{facebookHandle}</Handle>
              </Link>
            )}
          </Box>
        </AboutSectionSocials>
        <AboutSectionText>
          <Markdown>{aboutText}</Markdown>
        </AboutSectionText>
      </AboutSectionContainer>
    </>
  );
};

AboutSection.propTypes = {
  instagramHandle: PropTypes.string,
  facebookHandle: PropTypes.string,
  instagramLink: PropTypes.string,
  facebookLink: PropTypes.string,
  aboutImage: PropTypes.object.isRequired,
  aboutText: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
};

AboutSection.defaultProps = {
  instagramHandle: "",
  facebookHandle: "",
  instagramLink: "",
  facebookLink: "",
};

export default AboutSection;
