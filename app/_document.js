// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css'
            rel='stylesheet'
            integrity='sha384-KyZXEJdB+M1L0nxJ7pysT0Pq8AlfQXl5j8vhXcklICbtm4Wq70b7j5+06mmFv4ee'
            crossorigin='anonymous'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
