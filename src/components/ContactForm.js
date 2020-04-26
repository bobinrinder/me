import React from "react"
import { Button, Form, FormGroup, Label, Input } from "reactstrap"
import NetlifyForm from "react-netlify-form"

const ContactForm = () => {
  return (
    <NetlifyForm name="contact">
      {({ loading, error, success }) => (
        <div>
          {loading && <div>Loading...</div>}
          {error && (
            <div>Your information was not sent. Please try again later.</div>
          )}
          {success && <div>Thank you for contacting us!</div>}
          {!loading && !success && (
            <div>
              <FormGroup>
                <Label for="email">Your Email</Label>
                <Input type="email" name="email" id="email" required />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Your Message</Label>
                <Input
                  type="textarea"
                  rows="5"
                  name="message"
                  id="message"
                  required
                />
              </FormGroup>
              <Button color="warning" size="lg">
                Submit
              </Button>
            </div>
          )}
        </div>
      )}
    </NetlifyForm>
  )
}

export default ContactForm
