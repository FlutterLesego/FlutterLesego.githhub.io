import styled from "styled-components";

import logo from "@assets/logo.png";

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.padding.xxlg};
  padding: ${({ theme }) => theme.padding.xxlg};
`;

const LogoImage = styled.img`
  height: 15rem;
`;

export function Logo() {
  return (
    <StyledLogo>
      <LogoImage src={logo} alt="JamiiDrive" />
    </StyledLogo>
  );
}
