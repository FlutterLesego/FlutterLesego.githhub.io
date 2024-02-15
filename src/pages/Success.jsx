import { useParams } from "react-router-dom";
import styled from "styled-components";

const StyledSuccess = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
`;

const ContentContainer = styled.div`
  width: min(88%, 128rem);
  margin: 0 auto;
  display: grid;
  justify-items: center;
  gap: ${({ theme }) => theme.spacing.xxl};

  ${({ theme }) => theme.breakpoints.laptop} {
    grid-template-columns: 1fr 1fr;
    place-items: center;
    gap: 0;
  }
`;

const Content = styled.div`
  background-image: url(${confetti});
  background-repeat: no-repeat;
  background-size: contain;
`;

const SuccessImage = styled.img`
  height: 60rem;
  margin-left: 1.6rem;

  ${({ theme }) => theme.breakpoints.laptop} {
    margin-left: 0;
    height: 68rem;
  }
`;

const BadgeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xl};

  ${({ theme }) => theme.breakpoints.laptop} {
    justify-content: flex-start;
    gap: ${({ theme }) => theme.spacing.xxl};
  }
`;

const Badge = styled.img`
  height: 5.2rem;
  box-shadow: rgba(145, 158, 171, 0.2) 0px 0px 2px 0px,
    rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;
`;

const Heading = styled.h1`
  font-size: 4rem;
  margin-bottom: ${({ theme }) => theme.spacing.xl};

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
  width: 100%;
  height: 0.4rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: none;
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  ${({ theme }) => theme.breakpoints.laptop} {
    width: 50rem;
  }
`;

const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.light};
  line-height: 1.4;

  &:nth-child(3) {
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }
  &:nth-child(4) {
    margin-bottom: ${({ theme }) => theme.spacing.xxl};
  }
`;

export function Success() {
  const { user, siteName } = useParams();
  return (
    <StyledSuccess>
      <ContentContainer>
        {/* <Content>
          <Heading>Coming Soon</Heading>
          <Hr />
          <Paragraph>
            Thank you {user}, for successfully registering {siteName} for our 60 day free trail. You
            can now go ahead and download our free app!
          </Paragraph>
          <Paragraph>
            Once you have downloaded the app you can login with the email and password that you
            created when you registered.
          </Paragraph>
          <BadgeContainer>
            <Badge src={apple} alt="apple" />
            <a
              href="https://play.google.com/store/apps/details?id=com.erovik.savvyrad&pli=1"
              target="_blank"
              rel="noreferrer"
            >
              <Badge src={google} alt="google" />
            </a>
          </BadgeContainer>
        </Content> */}
        {/* <SuccessImage src={center} alt="center" /> */}
      </ContentContainer>
    </StyledSuccess>
  );
}
