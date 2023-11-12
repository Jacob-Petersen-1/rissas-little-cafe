import React from "react";
import { HeroBlock, HeroHeaderText, HeroBodyText } from "./HeroHeader.styles";

const HeroHeader = ({ heroHeadline, heroBodyText }) => {
  return (
    <>
      <HeroBlock>
        {heroHeadline ? <HeroHeaderText>{heroHeadline}</HeroHeaderText> : null}
        {heroBodyText ? <HeroBodyText>{heroBodyText}</HeroBodyText> : null}
      </HeroBlock>
    </>
  );
};

export default HeroHeader;
