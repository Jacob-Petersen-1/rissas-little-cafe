import React from "react";
import PropTypes from "prop-types";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Box, Button } from "@mui/material";
import {
  SocialMediaGridContainer,
  Image,
  ImageGrid,
  ImageItem,
  SocialText,
  SocialDescription,
  SocialContainer,
} from "./SocialMediaGrid.styles";

const SocialButton = ({ link, icon, text }) => (
  <Button
    variant="contained"
    color="primary"
    size="large"
    fullWidth
    sx={{ marginTop: 3 }}
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    startIcon={icon}
  >
    {text}
  </Button>
);

const SocialMediaGrid = ({
  images,
  socialHeadline,
  socialDescription,
  instagramLink,
  facebookLink,
}) => {
  return (
    <>
      <SocialMediaGridContainer>
        <SocialContainer>
          <SocialText>{socialHeadline}</SocialText>
          <SocialDescription>{socialDescription}</SocialDescription>
        </SocialContainer>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            maxWidth: 750,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ImageGrid container spacing={2}>
            {images?.map(({ frontmatter: { title, link }, image }, index) => (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                <ImageItem item>
                  <Image
                    image={image?.childImageSharp?.gatsbyImageData}
                    alt={title}
                  />
                </ImageItem>
              </a>
            ))}
          </ImageGrid>

          {facebookLink && (
            <SocialButton
              link={facebookLink}
              icon={<FacebookIcon />}
              text="Follow Us On Facebook"
            />
          )}
          {instagramLink && (
            <SocialButton
              link={instagramLink}
              icon={<InstagramIcon />}
              text="Follow Us On Instagram"
            />
          )}
        </Box>
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
