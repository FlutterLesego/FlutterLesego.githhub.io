import styled from "styled-components";

// Components
import { Button } from "@/components/Button";

const Line = styled.div`
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
`;

const LeftContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryLight};
  position: absolute;
  margin: 0 auto;
  top: 0;
  bottom: 0;
  width: min(40%, 576px);
  border-top-right-radius: 60px;
  border-bottom-right-radius: 60px;

  ${({ theme }) => theme.breakpoints.mobile} {
  }
`;

const StyledHero = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;

  ${LeftContainer}:nth-child(0) {
    background-color: ${({ theme }) => theme.colors.primaryLight};
  }

  // circle
  ${Line}:nth-child(1) {
    left: calc(100% / 7 * 1);
    background-color: rgba(255, 255, 255, 0.24);

    &:before {
      position: absolute;
      top: 80%;
      left: 50%;
      transform: translate(-50%, -50%);
      content: "";
      width: 50px;
      height: 50px;
      border-radius: 30%;
      border: 0px solid white;
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }

  ${Line}:nth-child(2) {
    left: calc(100% / 7 * 2);
    background-color: rgba(255, 255, 255, 0.08);
  }

  ${Line}:nth-child(3) {
    left: calc(100% / 7 * 3);
    background-color: rgba(255, 255, 255, 0.08);
  }

  ${Line}:nth-child(4) {
    right: calc(100% / 7 * 3);
    background-color: rgba(255, 255, 255, 0.08);
  }

  // circle
  ${Line}:nth-child(5) {
    right: calc(100% / 7 * 2);
    background-color: rgba(255, 255, 255, 0.08);

    &:before {
      position: absolute;
      top: 62%;
      left: 50%;
      transform: translate(-50%, -50%);
      content: "";
      width: 250px;
      height: 250px;
      border-radius: 50%;
      border: 3px solid white;
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }

  // circle
  ${Line}:nth-child(6) {
    right: calc(100% / 7 * 1);
    background-color: rgba(255, 255, 255, 0.24);

    &:before {
      position: absolute;
      top: 20%;
      left: 50%;
      transform: translate(-50%, -50%);
      content: "";
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: white;
    }
  }
`;

const LargeCircle = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 50px solid rgba(255, 255, 255, 0.2);
  right: -100px;
  top: -100px;

  ${({ theme }) => theme.breakpoints.tablet} {
    width: 400px;
    height: 400px;
    border: 120px solid rgba(255, 255, 255, 0.2);
    right: -200px;
    top: -200px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  position: relative;
  width: min(88%, 128rem);
  margin: 0 auto;
  height: 100px;
`;

const Content = styled.div`
  display: grid;
  text-align: start;
  align-content: start;
  z-index: 10;
  padding: 10rem;
  transform: translate(-5%, 25%);
  ${({ theme }) => theme.breakpoints.tablet} {
    height: 56vh;
  }

  h1 {
    font-size: 3.2rem;
    color: ${({ theme }) => theme.colors.primaryDark};
    font-weight: 500;
    line-height: 1.1;
    margin-bottom: 1.2rem;

    &:nth-child(2) {
      margin-bottom: 2.8rem;
    }

    ${({ theme }) => theme.breakpoints.tablet} {
      font-size: 4.8rem;
    }
    ${({ theme }) => theme.breakpoints.laptop} {
      font-size: 6rem;
    }
    ${({ theme }) => theme.breakpoints.desktop} {
      font-size: 6.8rem;
    }
  }

  p {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 400;
    line-height: 1.48;
    margin-bottom: 4rem;
    opacity: 0.84;

    ${({ theme }) => theme.breakpoints.tablet} {
      font-size: 1.8rem;
    }

    ${({ theme }) => theme.breakpoints.laptop} {
      font-size: 2rem;
    }
  }
`;

const ButtonWrapper = styled.div`
  width: min(88%, 108rem);
  padding-bottom: 2rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const ImageContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  width: min(88%, 132rem);
  margin: 0 auto;
  top: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;

  ${({ theme }) => theme.breakpoints.tablet} {
    top: 44vh;
  }

  ${({ theme }) => theme.breakpoints.laptop} {
    justify-content: space-between;
  }
`;

function Hero({ heroRef }) {
  return (
    <StyledHero id="home" ref={heroRef}>
      <LeftContainer>
        <Content>
          <h1>Convenient and Efficient Transportation</h1>
          <h1></h1>
          <p>Connecting users with reliable drivers for shared rides.</p>
          <ButtonWrapper>
            <Button>Download</Button>
            <Button outline>Read More</Button>
          </ButtonWrapper>
        </Content>
      </LeftContainer>
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
      <LargeCircle />
      <ContentContainer>
        {/* <Content>
          <h1>Reliable, Convenient, Affordable!</h1>
          <h1></h1>
          <h2>Reliable, Convenient, Affordable</h2>
          <h1></h1>
        </Content> */}
      </ContentContainer>
    </StyledHero>
  );
}

export { Hero };
