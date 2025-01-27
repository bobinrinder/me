import React from "react";
import { Button, FormGroup, Label, Input } from "reactstrap";
import NetlifyForm from "react-netlify-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const HeaderWrapper: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="row text-center">
      <div className="col-lg-8 col-md-12 col-sm-12 mx-auto">{children}</div>
    </div>
  );
};

const ContactForm = () => {
  const NetlifyFormular = NetlifyForm as any;
  return (
    <div className="pt-5 mt-5" id="contact">
      <div className="container py-5">
        <NetlifyFormular name="contact">
          {({
            loading,
            error,
            success,
          }: {
            loading: boolean;
            error: boolean;
            success: boolean;
          }) => (
            <div>
              {loading && (
                <HeaderWrapper>
                  <h2 className="display-4 mb-4">Loading...</h2>
                </HeaderWrapper>
              )}
              {error && (
                <HeaderWrapper>
                  <h2 className="display-4 mb-4">
                    Sorry, something went wrong. Please try again later.
                  </h2>
                </HeaderWrapper>
              )}
              {success && (
                <HeaderWrapper>
                  <h2 className="display-4 mb-4">Thanks for contacting me!</h2>
                </HeaderWrapper>
              )}
              {!loading && !success && (
                <>
                  <HeaderWrapper>
                    <h2 className="display-4 mb-4">Hit me up!</h2>
                    <p className="lead text-secondary mb-5 pb-2 mx-5">
                      I'm available for freelance and pro-bono work!
                    </p>
                  </HeaderWrapper>

                  <div className="row text-center">
                    <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
                      <FormGroup>
                        <Label for="email">Your Email</Label>
                        <Input type="email" name="email" id="email" required />
                      </FormGroup>
                      <FormGroup>
                        <Label for="message">Your Message</Label>
                        <Input
                          type="textarea"
                          rows="5"
                          name="message"
                          id="message"
                          required
                        />
                      </FormGroup>
                      <Button color="warning" size="lg">
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2" />{" "}
                        Send
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </NetlifyFormular>
      </div>
    </div>
  );
};

export default ContactForm;
