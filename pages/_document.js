import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    const meta = {
      title: 'Program toko software kasir murah lengkap dan mudah digunakan',
      description: 'Aplikasi toko software program kasir untuk toko minimarket supermarket dengan technology barcode dan touchscreen dalam bepos solutions.',
      image:
        'https://1.bp.blogspot.com/-9Pdq9dGEeiM/YJ933DwYNJI/AAAAAAAAN8U/vVFGF8tKkvMNolnyemkoDtECRwaggUcSwCLcBGAsYHQ/s1356/aplikasi%2Btoko%2Bkasir%2Bmurah%2Blengkap.png'
    }

    return (
      <Html lang="en">
        <Head>
          <meta name="robots" content="follow, index" />
          <meta name="description" content={meta.description} />
          <meta property="og:site_name" content={meta.title} />
          <meta property="og:description" content={meta.description} />
          <meta property="og:title" content={meta.title} />
          <meta property="og:image" content={meta.image} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@yourname" />
          <meta name="twitter:title" content={meta.title} />
          <meta name="twitter:description" content={meta.description} />
          <meta name="twitter:image" content={meta.image} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
