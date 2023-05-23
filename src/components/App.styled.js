import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const APP = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40;
  color: #010101;
`;

export const StyledLink = styled(NavLink)`
  color: black;
  color: #fff;
  display: inline-block;
  padding: 10px 15px;
  line-height: 1;
  text-decoration: none;
  border-radius: 2px;
  transition: all 0.1s ease;
   &:hover {
    box-shadow: 0 0 0 1px #fff;
  }
  &.active {
    color: orange;
  }
`;



export const Hedder = styled.header`
  width: 100%;
  height: 60px;
  background-color: #3498db;
  text-align: center;
  position: fixed;
  top: 0;
  overflow: hidden;
  z-index: 99999;
  display: flex;
  box-shadow: 0 3px 2px -2px rgba(0, 0, 0, 0.1);
`;
export const Nav = styled.nav`
    position: absolute;
    bottom: 0;
    height: 60px;
    line-height: 60px;
    width: 100%;
    display: flex;
    gap: 10px;
    align-items: center;
    background-color: rgba(0,0,0,.1);
    padding: 0 25px;
`



		
