import React, { useState } from "react";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import {
  Button,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Snackbar,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  ContactFormContainer,
  ContactFormBody,
  ContactFormHeader,
  StyledInput,
  StyledRadio,
} from "./ContactForm.styles";

// TODO: Add a form validation library like Formik or React Hook Form

const FormImage = ({ showImage, isMobile }) => {
  if (showImage) {
    return (
      <>
        {isMobile ? (
          <StaticImage
            src="../../../../static/images/logo.svg"
            alt="logo"
            placeholder="blurred"
            layout="fixed"
            width={300}
            height={300}
          />
        ) : (
          <StaticImage
            src="../../../../static/images/logo.svg"
            alt="logo"
            placeholder="blurred"
            layout="fixed"
            width={400}
            height={400}
          />
        )}
      </>
    );
  }
  return null;
};

const ContactForm = ({ title, showImage }) => {
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [contactMethod, setContactMethod] = useState("email");
  const contactMethods = ["Email", "Call", "Text"];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleSubmit = (e) => {
    e.preventDefault();
    setAlertMessage("Message Sent!");
    setOpen(true);
  };

  return (
    <>
      <ContactFormContainer>
        <FormImage showImage={showImage} isMobile={isMobile} />
        <ContactFormBody
          component="form"
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <ContactFormHeader>{title}</ContactFormHeader>
          <input type="hidden" name="contact" value="contact" />
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
            error={
              (contactMethod === "call" || contactMethod === "text") &&
              (!phone || phone.length < 14 || !/^[\d()-]+$/.test(phone))
            }
            id="phone"
            name="phone"
            label="Phone"
            variant="outlined"
            margin="normal"
            onChange={(e) => setPhone(e.target.value)}
            fullWidth
            required={contactMethod === "call" || contactMethod === "text"}
            helperText="Please enter a phone number if you selected 'Call' or 'Text"
            value={phone}
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
            onChange={(e) => setContactMethod(e.target.value)}
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
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        message={alertMessage}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      />
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
