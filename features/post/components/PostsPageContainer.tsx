import React, { useEffect, useState } from "react";
import styled from "styled-components";

import PostCard from "./PostCard";
import { readPosts } from "../modules/utils";
import Header from "../../ui/layout/Header";

export interface IPost {
  title: string;
  date: string;
  image: string;
  writer: string;
}

const RootDiv = styled.div`
  display: flex;
  flex-direction: column;
  background: lightgray;
  height: 100vh;
`;

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
`;

export default () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  useEffect(() => {
    readPosts().then(data => {
      console.log("aaa", data);
      setPosts(data);
    });
  }, []);
  return (
    <RootDiv>
      <Header page="blog" title="Blog Posts" />
      <Wrapper>
        {posts && posts.map(post => <PostCard key={post.title} post={post} />)}
      </Wrapper>
    </RootDiv>
  );
};
