import { Geist, Geist_Mono,DM_Sans, Playfair_Display  } from 'next/font/google';
import './globals.css';
import Head from 'next/head';
import Script from 'next/script';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata = {
  title: 'The SCHON | Experience the Luxury Custom Home Living Spaces',
  description:
    'Transform your home with The SCHON - a premium customizable living space solution. Elevate your living experience with high quality windows and doors and luxury home decor options.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WBSQRXRG');
          `}
        </Script>

        {/* Facebook Pixel */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '875701817259560');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=875701817259560&ev=PageView&noscript=1"
          />
        </noscript>

        {/* Google Ads (gtag) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-11418786545"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11418786545');
            gtag('event', 'conversion', {'send_to': 'AW-11418786545/VZs0CJ2J8pYZEPG188Qq'});
          `}
        </Script>

      </head>


      <body className={`${dmSans.variable} ${playfair.variable}`}>
              <Script
        strategy='afterInteractive'
        src='https://www.googletagmanager.com/gtag/js?id=G-LZHQVX7WV0'
      />
      <Script
        id='google-analytics'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){ dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-LZHQVX7WV0');
          `,
        }}
      />

      {/* JSON-LD: Organization */}
      <Script
        id='jsonld-organization'
        type='application/ld+json'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'The Schon',
            url: 'https://theschon.com/',
            logo: 'https://theschon.com/images/newimage/Group%20412.png',
            sameAs: [
              'https://www.facebook.com/schondoorways/',
              'https://www.instagram.com/schon_doorways/',
              'https://www.linkedin.com/company/theschon/',
              'https://in.pinterest.com/schon_doorways/',
            ],
          }),
        }}
      />

      {/* JSON-LD: LocalBusiness */}
      <Script
        id='jsonld-localbusiness'
        type='application/ld+json'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'The Schon',
            image: 'https://theschon.com/images/newimage/Group%20412.png',
            '@id': '',
            url: 'https://theschon.com/',
            telephone: '9535359481',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '19 Sharp Building, Queens Road, Vasanth Nagar',
              addressLocality: 'Bengaluru',
              postalCode: '560052',
              addressCountry: 'IN',
            },
            sameAs: [
              'https://www.facebook.com/schondoorways/',
              'https://www.instagram.com/schon_doorways/',
              'https://www.linkedin.com/company/theschon/',
              'https://in.pinterest.com/schon_doorways/',
            ],
          }),
        }}
      />
        {children}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WBSQRXRG"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
      </body>
    </html>
  );
}
