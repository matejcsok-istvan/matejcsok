import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Anchor from "../Anchor";

interface IHeaderProps {
  title: string;
  page: "home" | "blog";
}

const RootDiv = styled.div`
  with: 100%;
  height: 4rem;
  padding: 0 2rem;
  background: cadetblue;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
`;

const Title = styled.div``;

const Menu = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
const MenuItem = styled.div<{ selected: boolean }>`
  padding: 0 1rem 0 1rem;
  height: 100%;
  color: white;
  display: flex;
  align-items: center;
  background: ${({ selected }) => selected && "powderblue"};
  color: ${({ selected }) => selected && "cadetblue"};
  :hover {
    color: ${({selected})=> !selected && "lightblue"};
  }
`;

const Header: FunctionComponent<IHeaderProps> = props => {
  return (
    <RootDiv>
      {console.log(props.page === "home")}
      <Title>{props.title}</Title>
      <Menu>
        <Anchor href="/">
          <MenuItem selected={props.page === "home"}>Home</MenuItem>
        </Anchor>
        <Anchor href="/post">
          <MenuItem selected={props.page === "blog"}>Blog</MenuItem>
        </Anchor>
      </Menu>
    </RootDiv>
  );
};

export default Header;
