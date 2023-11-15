import React from "react";
import PropTypes from "prop-types";
import { getImage } from "gatsby-plugin-image";
import { Grid, Box } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import {
  SocialMediaSectionContainer,
  SocialMediaSectionText,
  SocialMediaThumnail,
  SocialMediaWrapper,
  Link,
  ImageLink,
  Handle,
} from "./SocialMediaSection.styles";

const SocialMediaSection = ({
  instagramHandle,
  facebookHandle,
  instagramLink,
  facebookLink,
  socialImages,
}) => {
  return (
    <>
      <SocialMediaSectionContainer>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            {/* Text and Icons */}
            <SocialMediaWrapper>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                <SocialMediaSectionText>
                  Follow Us on Social Media
                </SocialMediaSectionText>
                <Link href={instagramLink} target="_blank" rel="noreferrer">
                  <InstagramIcon sx={{ fontSize: 30, color: "#E4405F" }} />
                  <Handle>{instagramHandle}</Handle>
                </Link>
                <Link href={facebookLink} target="_blank" rel="noreferrer">
                  <FacebookIcon sx={{ fontSize: 30, color: "#1877f2" }} />
                  <Handle>{facebookHandle}</Handle>
                </Link>
              </Box>
            </SocialMediaWrapper>
          </Grid>
          <Grid item xs={12} md={6}>
            {/* Images Grid */}
            <Grid container justifyContent="center" spacing={1}>
              {socialImages?.map((image, index) => (
                <Grid item xs={6} key={image?.id || index}>
                  <ImageLink
                    href={facebookLink || instagramLink}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Social Media Image"
                  >
                    <SocialMediaThumnail
                      image={getImage(image?.gatsbyImageData)}
                      alt={image?.title || "Social Media Image"}
                      placeholder="blurred"
                      quality={80}
                      formats={["auto", "webp", "avif"]}
                    />
                  </ImageLink>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </SocialMediaSectionContainer>
    </>
  );
};

SocialMediaSection.defaultProps = {
  instagramHandle: "Default Handle",
  facebookHandle: "Default Handle",
  instagramLink: "https://www.instagram.com/",
  facebookLink: "https://www.facebook.com/",
  socialImages: [
    {
      id: "1",
      title: "Default Social Media Image",
      gatsbyImageData: {
        layout: "fullWidth",
        placeholder: "blurred",
        formats: ["auto", "webp", "avif"],
      },
    },
  ],
};

SocialMediaSection.propTypes = {
  instagramHandle: PropTypes.string,
  facebookHandle: PropTypes.string,
  instagramLink: PropTypes.string,
  facebookLink: PropTypes.string,
  socialImages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      gatsbyImageData: PropTypes.object,
    })
  ),
};

export default SocialMediaSection;
