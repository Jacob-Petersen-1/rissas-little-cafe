import React from "react";
import { Facebook, InstagramIcon } from "@mui/icons-material";
import {
  SocialMediaSectionContainer,
  SocialMediaSectionContent,
  SocialMediaSectionText,
  SocialMediaThumnail,
} from "./SocialMediaSection.styles";

const SocialMediaSection = ({
  instagramLink,
  instagramImages,
  facebookLink,
  facebookImages,
}) => {
  return (
    <>
      <SocialMediaSectionContainer>
        <SocialMediaSectionText>
          Follow Us on Social Media
        </SocialMediaSectionText>
        <SocialMediaSectionContent></SocialMediaSectionContent>
      </SocialMediaSectionContainer>
    </>
  );
};

export default SocialMediaSection;
