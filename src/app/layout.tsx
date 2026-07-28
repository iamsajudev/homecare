// import { Rubik, Rajdhani } from 'next/font/google'
import "../styles/index.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDev = process.env.NODE_ENV === "development";

  return (
    <html lang="en" suppressHydrationWarning={isDev}>
      <head>
        <meta
          name="description"
          content="IHope & Cherish Home Care L.L.C. - IT Solutions and Services React Next js Template"
        />
        <link rel="icon" href="/favicon.webp" sizes="any" />
      </head>
      <body suppressHydrationWarning={true} className="sc5">
        {children}
      </body>
    </html>
  );
}
