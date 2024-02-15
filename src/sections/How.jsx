import styled from "styled-components";

const StyledHow = styled.div`
  padding-bottom: 16rem;

  ${({ theme }) => theme.breakpoints.tablet} {
    margin-top: 30vh;
  }
`;

const BadgeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xxl};
`;

const HeadingContainer = styled.div`
  width: min(88%, 128rem);
  margin: 0 auto;
  text-align: center;
  margin-top: 20rem;
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

function How() {
  return (
    <StyledHow id="how">
      <BadgeContainer></BadgeContainer>
      <HeadingContainer>
        <Heading>How Does It Work?</Heading>
        <Hr />
        <Subheading>Ride Sharing, Reinvented</Subheading>
        <SectionDescription>
          Discover how we're revolutionizing ride sharing for individuals
          seeking a comfortable and affordable commute for any occasion.
        </SectionDescription>
      </HeadingContainer>
    </StyledHow>
  );
}

export { How };
