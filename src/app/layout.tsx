import "../styles/index.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDev = process.env.NODE_ENV === "development";
  // import logo from "/public/assets/img/logos/asdasd.png";

  return (
    <html lang="en" suppressHydrationWarning={isDev}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="IHope & Cherish Home Care L.L.C. -  and Services React Next js Template"
        />
        <meta
          name="keywords"
          content=", home care services, tech services, software, web development, nextjs template"
        />
        <meta name="author" content="IHope & Cherish Home Care L.L.C." />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="IHope & Cherish Home Care L.L.C. -  and Services"
        />
        <meta
          property="og:description"
          content="Professional  and home care services tailored to your needs."
        />
        <meta
          property="og:url"
          content="https://homecare-74h7rwkv2-szamansajus-projects.vercel.app/"
        />
        <meta property="og:site_name" content="IHope & Cherish Home Care" />
        <meta
          property="og:image"
          content="https://homecare-74h7rwkv2-szamansajus-projects.vercel.app//favicon.webp"
        />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="IHope & Cherish Home Care L.L.C. -  and Services"
        />
        <meta
          name="twitter:description"
          content="Professional  and home care services tailored to your needs."
        />
        <meta name="twitter:image" content="" />

        <link rel="icon" href="/favicon.webp" sizes="any" />
      </head>
      <body suppressHydrationWarning={true} className="sc5">
        {children}
      </body>
    </html>
  );
}
