import * as React from "react";
import { Button, Typography } from "@mui/material";
import { Seo, Navigation, PageLayout } from "../components";

const NotFoundPage = () => {
  return (
    <>
      <Seo title="404: Not found" />
      <Navigation>
        <PageLayout
          maxWidth="lg"
          topMargin={150}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            marginTop: "10rem",
          }}
        >
          <Typography variant="h1">OOPS! PAGE DOESN'T EXIST</Typography>
          <Typography variant="body1">
            Oh no! You just hit a route that doesn&#39;t exist... the sadness. I
            blame the developer for not making this page yet. If it SHOULD
            exist, that is.
          </Typography>
          <Button variant="contained" color="primary" href="/">
            Go Home
          </Button>
        </PageLayout>
      </Navigation>
    </>
  );
};

export default NotFoundPage;
