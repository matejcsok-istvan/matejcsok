import React, { FunctionComponent } from "react";
import styled from "styled-components";

import Header from "../../ui/layout/Header";

const RootDiv = styled.div`
  background: lightgray;
  height: 100vh;
`;

const IndexPageContainer: FunctionComponent<{}> = () => (
  <RootDiv>
    <Header page="home" title="Home" />
    <div>matejcsok</div>
  </RootDiv>
);

export default IndexPageContainer;
