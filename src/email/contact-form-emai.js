import React from 'react';
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';


export default function ContactFormEmail({ message, senderEmail , senderName}) {
  return (
    <Html>
      <Head></Head>
      <Preview>New message from your portfolio</Preview>
      <Tailwind>
        <Body className='bg-gray-100 text-gray-800'>
          <Container>
            <Section className='bg-white borderBlack my-10 px-10 py-4 rounded-md'>
                <Heading className='leading-tight'>
                    You received the following message from the contact form
                </Heading>
                <Text>{message}</Text>
                <Hr/>
                <Text>This is from sender: {senderEmail},{senderName}</Text>

            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}