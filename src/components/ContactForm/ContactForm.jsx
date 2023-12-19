import React from "react";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import { Button, RadioGroup, FormLabel, FormControlLabel } from "@mui/material";
import {
  ContactFormContainer,
  ContactFormBody,
  ContactFormHeader,
  StyledInput,
  StyledRadio,
} from "./ContactForm.styles";

const ContactForm = ({ title, showImage }) => {
  const contactMethods = ["Email", "Call", "Text"];
  return (
    <>
      <ContactFormContainer>
        {showImage ? (
          <StaticImage
            src="../../../static/images/logo.svg"
            alt="logo"
            placeholder="blurred"
            layout="fixed"
            width={400}
            height={400}
          />
        ) : null}

        <ContactFormBody
          name="contact"
          component="form"
          method="post"
          data-netlify="true"
        >
          <ContactFormHeader>{title}</ContactFormHeader>
          <StyledInput
            id="name"
            name="name"
            label="Name"
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />
          <StyledInput
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />
          <StyledInput
            id="phone"
            name="phone"
            label="Phone"
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <FormLabel sx={{ color: "black", textAlign: "left", width: "100%" }}>
            Preferred Contact Method
          </FormLabel>
          <RadioGroup
            aria-label="contact-method"
            defaultValue="email"
            name="contact-method"
            row
            sx={{ width: "100%" }}
          >
            {contactMethods.map((method) => (
              <FormControlLabel
                key={method}
                value={method.toLowerCase()}
                control={<StyledRadio />}
                label={method}
              />
            ))}
          </RadioGroup>

          <StyledInput
            id="message"
            name="message"
            label="Message"
            variant="outlined"
            margin="normal"
            fullWidth
            multiline
            rows={4}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Send
          </Button>
        </ContactFormBody>
      </ContactFormContainer>
    </>
  );
};

ContactForm.defaultProps = {
  title: "",
  showImage: false,
};

ContactForm.propTypes = {
  title: PropTypes.string,
  showImage: PropTypes.bool,
};

export default ContactForm;
