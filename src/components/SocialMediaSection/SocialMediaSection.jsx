import React from "react";
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
                  <InstagramIcon sx={{ fontSize: 30, color: "red" }} />
                  <Handle>{instagramHandle}</Handle>
                </Link>
                <Link href={facebookLink} target="_blank" rel="noreferrer">
                  <FacebookIcon sx={{ fontSize: 30, color: "blue" }} />
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

export default SocialMediaSection;
