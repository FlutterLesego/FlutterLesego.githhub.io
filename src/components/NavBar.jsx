import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

// components
import { Menu } from "@/components/Menu";
import { Logo } from "@components/Logo";

const StyledNavBar = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6.8rem;
  width: 100%;
  z-index: 1000;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme, $isScrolled }) =>
    $isScrolled ? theme.colors.white : "transparent"};
  transition: ${({ theme }) => theme.transitions.easeInOut};

  ${({ theme }) => theme.breakpoints.laptop} {
    height: 10rem;
    padding: ${({ theme }) => theme.padding.xxlg};
  }
`;

const NavList = styled.ul`
  position: fixed;
  top: 0;
  left: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxl};
  background-color: ${({ theme }) => theme.colors.primaryDark};
  height: 100vh;
  width: 80vw;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  padding: ${({ theme }) => theme.padding.xxlg};
  transition: ${({ theme }) => theme.transitions.easeInOutCubicBezier};
  transform: ${({ $open }) => ($open ? "translateX(0)" : "translateX(-180%)")};

  ${({ theme }) => theme.breakpoints.laptop} {
    all: unset;
    display: flex;
    list-style: none;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.xxl};
  }
`;

const NavItem = styled.li``;

const NavLink = styled.a`
  color: ${({ theme, $active }) =>
    $active ? theme.colors.secondary : theme.colors.primaryDark};
  transition: ${({ theme }) => theme.transitions.easeInOut};

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export function NavBar({ isScrolled }) {
  const [open, setOpen] = useState(false);

  const ref = useRef(null);

  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        !ref.current.contains(event.target) &&
        !menuRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mouseDown", handleOutsideClick);

    return () => {
      document.removeEventListener("mouseDown", handleOutsideClick);
    };
  }, []);

  return (
    <StyledNavBar $isScrolled={isScrolled}>
      <Menu setOpen={setOpen} menuRef={menuRef} />
      <Logo />
      <NavList $open={open} ref={ref}>
        <NavItem>
          <NavLink href="#home" $active={true}>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#how">How It Works</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#features">Features</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#pricing">Pricing</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#faqs">FAQs</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#subscribe">Subscribe</NavLink>
        </NavItem>
      </NavList>
    </StyledNavBar>
  );
}
