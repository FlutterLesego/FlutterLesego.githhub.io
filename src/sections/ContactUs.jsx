import styled from "styled-components";

// Icons
import { Email, Mobile, Location } from "@icons";

// Components
import { Input } from "@components/Input";
import { TextArea } from "@components/TextArea";

const StyledContactUs = styled.section`
  position: relative;
  padding-bottom: 16rem;
`;

const LargeCircle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 50px solid ${({ theme }) => theme.colors.primary};
  position: absolute;
  right: -100px;
  top: 150px;
  z-index: -1;

  ${({ theme }) => theme.breakpoints.tablet} {
    width: 400px;
    height: 400px;
    border: 120px solid ${({ theme }) => theme.colors.primary};
    right: -200px;
  }
`;

const HeadingContainer = styled.div`
  width: min(88%, 128rem);
  margin: 0 auto;
  text-align: center;
  margin-top: 8rem;
  margin-bottom: 12rem;
  display: grid;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const Heading = styled.h1`
  font-size: 4rem;
  text-align: center;

  ${({ theme }) => theme.breakpoints.tablet} {
    font-size: 4.8rem;
  }
  ${({ theme }) => theme.breakpoints.laptop} {
    font-size: 6rem;
  }
  ${({ theme }) => theme.breakpoints.desktop} {
    font-size: 6.8rem;
  }
`;

const Hr = styled.hr`
  width: 10rem;
  height: 0.4rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: none;
  margin: 0 auto;
`;

const Subheading = styled.h3`
  font-size: 2.4rem;
`;

const SectionDescription = styled.p`
  font-size: 1.6rem;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.light};

  ${({ theme }) => theme.breakpoints.laptop} {
    font-size: 1.8rem;
  }
`;

const ContactContainer = styled.div`
  width: min(88%, 128rem);
  margin: 0 auto;
  display: grid;
  align-items: start;
  gap: ${({ theme }) => theme.spacing.xxl};

  ${({ theme }) => theme.breakpoints.tablet} {
    grid-template-columns: 1fr 1fr;
    gap: ${({ theme }) => theme.spacing.xxl};
  }
`;

const Details = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

const FormContainer = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};

  ${({ theme }) => theme.breakpoints.laptop} {
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

const Button = styled.button`
  height: 4.4rem;
  border: none;
  background-color: ${({ theme, $popular }) =>
    $popular ? theme.colors.secondary : theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: 1.48rem;
  transition: ${({ theme }) => theme.transitions.easeInOut};

  &:hover {
    background-color: ${({ theme, $popular }) =>
      $popular ? theme.colors.secondaryDark : theme.colors.primaryDark};
  }
`;

export function ContactUs() {
  return (
    <StyledContactUs id="contact">
      <LargeCircle />
      <HeadingContainer>
        <Heading>Contact Us</Heading>
        <Hr />
        <Subheading>Your Queries, Our Dedication</Subheading>
        <SectionDescription>
          Reach out to our responsive customer support team who are always ready
          to assist you, allowing you to focus on what's most important -
          commuting safely.
        </SectionDescription>
      </HeadingContainer>
      <ContactContainer>
        {/* <Details>
          <DetailsContainer>
            <Email />
            <p>info@savvyrad.com</p>
          </DetailsContainer>
          <DetailsContainer>
            <Mobile />
            <p>+27 83 310 3234</p>
          </DetailsContainer>
          <DetailsContainer>
            <Location />
            <p>Langenhoven Park, Bloemfontein, South Africa</p>
          </DetailsContainer>
        </Details> */}
        <FormContainer>
          <Input label="Name" placeholder="Name" />
          <Input label="Email" placeholder="Email" />
          <Input label="Subject" placeholder="Subject" />
          <TextArea label="Message" placeholder="Message" />
          <Button>Send Message</Button>
        </FormContainer>
      </ContactContainer>
    </StyledContactUs>
  );
}
