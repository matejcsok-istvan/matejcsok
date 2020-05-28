import React, { ReactChild } from "react";
import Link from "next/link";

import styled from "styled-components";

export const StyledAnchor = styled.a`
  text-decoration: inherit;
  color: inherit;
  cursor: pointer;
  user-select: none;
  display: flex;
  height: inherit;
`;

const Anchor = (props: {
  href: string;
  children: ReactChild;
  handleClick?: () => void;
}) => (
  <Link href={props.href} passHref>
    <StyledAnchor onClick={props.handleClick}>{props.children}</StyledAnchor>
  </Link>
);

export default Anchor;
