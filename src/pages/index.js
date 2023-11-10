import * as React from "react";
import { Link, graphql } from "gatsby";
import { Box } from "@mui/system";
import { MainLayout, LandingHero } from "../components";

const HomePage = ({ data }) => {
  console.log(data);
  return (
    <MainLayout>
      <LandingHero />
    </MainLayout>
  );
};
export const Head = () => <head title="Home" />;

export default HomePage;

export const query = graphql`
  query {
    file(relativePath: { eq: "static/images/truck.jpg" }) {
      childImageSharp {
        fixed(width: 800, height: 800) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
