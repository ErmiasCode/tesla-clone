import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { selectCars } from "../../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <Container>
      <a href="#section">
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href="#section">
              {car}
            </a>
          ))}
      </Menu>
      <RightMenu>
        <a href="#section">Shop</a>
        <a href="#section">Konto</a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              <a href="#section">{car}</a>
            </li>
          ))}
        <li>
          <a href="#section">Verfügbarer Bestand</a>
        </li>
        <li>
          <a href="#section">Gebrauchtwagen</a>
        </li>
        <li>
          <a href="#section">Firmenwagen</a>
        </li>
        <li>
          <a href="#section">Probefahrt</a>
        </li>
        <li>
          <a href="#section">Roadster</a>
        </li>
        <li>
          <a href="#section">Cybertruck</a>
        </li>
        <li>
          <a href="#section">Energie für Unternehmen</a>
        </li>
        <li>
          <a href="#section">Energieversorger</a>
        </li>
        <li>
          <a href="#section">Energie</a>
        </li>
        <li>
          <a href="#section">Events</a>
        </li>
        <li>
          <a href="#section">Support</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 400;
    text-transform: uppercase;
    margin: 0 15px;
    flex-wrap: nowrap;
  }

  a:hover {
    border-bottom: 2px solid #393c41;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 00;
    text-transform: uppercase;
    margin-right: 15px;
    flex-wrap: nowrap;
  }
  a:hover {
    border-bottom: 2px solid #393c41;
  }
`;

const CustomMenu = styled(MenuIcon)`
  margin-right: 15px;
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s ease-in-out;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;
