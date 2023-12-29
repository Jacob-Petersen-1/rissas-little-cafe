import React from "react";
import PropTypes from "prop-types";
import {
  SocialMediaGridContainer,
  Image,
  SocialText,
} from "./SocialMediaGrid.styles";

const SocialMediaGrid = ({ images, socialHeadline }) => {
  return (
    <>
      <SocialMediaGridContainer>
        <SocialText>{socialHeadline}</SocialText>
        {images?.map(({ frontmatter: { title, link }, image }, index) => (
          <a href={link} target="_blank" rel="noopener noreferrer" key={index}>
            <Image
              image={image?.childImageSharp?.gatsbyImageData}
              alt={title}
            />
          </a>
        ))}
      </SocialMediaGridContainer>
    </>
  );
};

SocialMediaGrid.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
      }).isRequired,
      image: PropTypes.object.isRequired,
    })
  ),
  socialHeadline: PropTypes.string.isRequired,
};

export default SocialMediaGrid;
