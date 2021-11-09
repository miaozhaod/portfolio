import { Container, Wrapper } from "app/components";
import React from "react";
import { ContactDetails, ContactForm } from "./components";

export default function Contact() {
  return (
    <Container>
      <Wrapper>
        <ContactDetails />
        <ContactForm />
      </Wrapper>
    </Container>
  );
}
