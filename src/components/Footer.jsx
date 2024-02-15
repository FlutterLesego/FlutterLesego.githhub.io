import styled from "styled-components";

const StyledFooter = styled.footer`
  padding: ${({ theme }) => theme.padding.xl};
  background-color: ${({ theme }) => theme.colors.primaryDark};
  height: 10vh;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Copy = styled.p`
  font-size: 1.4rem;
  font-weight: 300;
  opacity: 0.8;
`;

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <StyledFooter>
      <Copy>&copy; JamiiDrive {year} - All rights reserved.</Copy>
    </StyledFooter>
  );
}
