import React, { FunctionComponent } from "react";
import styled from "styled-components";

import Header from "../../ui/layout/Header";

const RootDiv = styled.div``;

const IndexPageContainer: FunctionComponent<{}> = props => (
  <RootDiv>
    <Header title="Home" />
    <div>matejcsok</div>
  </RootDiv>
);

export default IndexPageContainer;
