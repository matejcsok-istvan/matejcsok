import React, { FunctionComponent } from "react";
import styled from "styled-components";

interface IPostPageContainer {
  title: string;
}

const RootDiv = styled.div``;

const PostPageContainer: FunctionComponent<IPostPageContainer> = props => {
  return <RootDiv>{props.title}</RootDiv>;
};

export default PostPageContainer;
