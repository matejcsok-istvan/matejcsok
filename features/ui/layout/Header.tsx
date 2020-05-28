import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Anchor from "../Anchor";

interface IHeaderProps {
  title: string;
}

const RootDiv = styled.div`
  with: 100%;
  height: 4rem;
  padding: 0 2rem;
  background: lightblue;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div``;

const Menu = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
const MenuItem = styled.div`
  padding: 0 1rem 0 1rem;
  height: 100%;
  display: flex;
  align-items: center;
  :hover {
    background: lightgrey;
  }
`;

const Header: FunctionComponent<IHeaderProps> = props => {
  return (
    <RootDiv>
      <Title>{props.title}</Title>
      <Menu>
        <Anchor href="/">
          <MenuItem>Home</MenuItem>
        </Anchor>
        <Anchor href="/post">
          <MenuItem>Blog</MenuItem>
        </Anchor>
      </Menu>
    </RootDiv>
  );
};

export default Header;
