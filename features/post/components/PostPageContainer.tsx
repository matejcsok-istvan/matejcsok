import React, { FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

import * as matter from "gray-matter";
import Header from "../../ui/layout/Header";

interface IPostPageContainer {
  title: string | undefined;
}

const RootDiv = styled.div`
  background: lightgray;
  height: 100vh;
  display: flex;
  flex-direction: column;>w

`;

const Wrapper = styled.div`
  background: white;
  border-radius: 4px;
  margin-bottom: 1rem;
  width: 80%;
  padding: 2rem;
  align-self: center;
  overflow-y: auto;
`;

const PostPageContainer: FunctionComponent<IPostPageContainer> = props => {
  const [markdown, setMarkdown] = useState<matter.GrayMatterFile<
    Buffer
  > | null>(null);
  useEffect(() => {
    if (props.title) {
      import(`../../../content/${props.title}.md`).then(data => {
        // @ts-ignore
        setMarkdown(matter(data.default));
      });
    }
  }, [props.title]);
  return markdown && markdown.content ? (
    <RootDiv>
      <Header page="blog" title={markdown.data.title} />
      <Wrapper>
        <ReactMarkdown source={markdown.content} />
      </Wrapper>
    </RootDiv>
  ) : null;
};

export default PostPageContainer;
