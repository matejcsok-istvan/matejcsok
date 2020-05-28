import Document, {
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
margin:0;
}
*{
box-sizing:border-box;
}
`;

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body
          style={{
            width: "100%",
            height: "100vh",
            margin: 0,
            padding: 0,
            overflow: "hidden",
          }}
        >
          <GlobalStyle />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
