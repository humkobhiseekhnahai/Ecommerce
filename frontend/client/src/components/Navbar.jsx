import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

// Define styled component
const Container = styled.div`
  height: 60px;
  margin-top: 0;
  ${mobile({ height: "50px"})};
  
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display:flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0;
  ${mobile({ padding: "10px 0px"})};

  
`;

const Left = styled.div`
  flex:1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex:1;
  text-align:center;
`;

const Logo = styled.h1`
  font-weight:bold;
  ${mobile({ fontsize: "24px"})};

`;
const Right = styled.div`
  flex:1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center"})};

`;

const MenuItem = styled.div`
  font-size:14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft:"10px"})};

`;

const Language = styled.span`
  font-size:14px;
  cursor: pointer; 
  ${mobile({ display: "none"})};
 
`;

const SearchContainer = styled.div`
  border: 1px solid lightgrey;
  display: flex;
  align-items: center;
  margin: 0 25px; /* Update from margin-left: 25px to margin: 0 25px; */
  padding: 5px; 
`;


const Input = styled.input`
  border:none;
  ${mobile({ width: "50px"})};

`;

// Functional component Navbar
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>En</Language>
          <SearchContainer>
            <Input placeholder="search"/>
            <Search style={{color: "grey", fontSize:16}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>LAMA</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
