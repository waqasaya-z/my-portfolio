import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

interface ContactForm {
  message: string;
  senderEmail: string;
}

const ContactEmail = ({ message, senderEmail }: ContactForm) => {
  return (
    <Html>
      <Head />
      <Preview> New Message from your portfolio site </Preview>
      <Body className="bg-gray-100 text-black">
        <Container>
          <Section className="bg-white border border-black my-10 px-10 py-4 rounded-md">
            <Heading className="leading-tight">
              {" "}
              Message recieved from the Contact Form{" "}
            </Heading>
            <Text> {message} </Text>
            <Hr />
            <Text> The senders email is: {senderEmail} </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactEmail;
