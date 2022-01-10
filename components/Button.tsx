import React from "react";
import Link from 'next/link';
import {css} from "@emotion/react";

interface AppProps {
  href: string,
  children: string
}

const App: React.FunctionComponent<AppProps> = ({ href, children }) => {
  return (
    <Link href={href}>
      <a css={cssButton}>{ children }</a>
    </Link>
  );
}

App.defaultProps = {
  href: '#',
  children: 'Button'
};


// CSS
const cssButton = css`
  cursor: pointer;
  border: 1px solid #000;
  padding: 10px;
  &:hover {
  }
`;

export default App
