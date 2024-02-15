import styled from "styled-components";

const DefaultButton = styled.button`
  padding: ${({ theme }) => theme.padding.md};
  background-color: ${({ theme }) => theme.colors.primaryDark};
  transition: all 0.4s ease-in-out;
  color: white;
  border-radius: 20px;

  &:hover {
    border: 1px;
    border-radius: 30px;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;
const OutlinedButton = styled.button`
  padding: ${({ theme }) => theme.padding.md};
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  transition: all 0.4s ease-in-out;
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;
function Button({ outline, children, ...rest }) {
  if (!outline) {
    return <DefaultButton {...rest}>{children}</DefaultButton>;
  } else {
    return <OutlinedButton {...rest}>{children}</OutlinedButton>;
  }
}

export { Button };
