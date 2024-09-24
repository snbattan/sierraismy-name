import type { Metadata } from 'next';
import {
  Montserrat,
  Shadows_Into_Light_Two as Shadows,
} from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import React, { Suspense } from 'react';
// eslint-disable-next-line import/extensions
import Loading from './loading';
import Arch from '../components/arch';

const montserrat = Montserrat({ subsets: ['latin'] });
const shadows = Shadows({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Sierra Battan',
  description:
    "Sierra Battan's personal website. Visit to view her journey as a senior full-stack software engineer.",
};

// function oldMetadata() {
//   return (
//     <Head>
//       <title>Sierra Battan</title>
//       <link rel="apple-touch-icon" href="https://sierraismy.name/s-icon.svg" />
//       <link rel="canonical" href="https://sierraismy.name" />
//       <link rel="icon" href="https://sierraismy.name/s-icon.svg" />
//       <link rel="shortcut icon" href="https://sierraismy.name/s-icon.svg" />
//       <link rel="preconnect" href="https://fonts.googleapis.com" />
//       <link rel="preconnect" href="https://fonts.gstatic.com" />
//       <link
//         as="font"
//         href="https://fonts.googleapis.com/css?family=Shadows Into Light Two|Montserrat:300,400,600&display=swap"
//         rel="stylesheet"
//         type="text/css"
//       />
//       {/* <link href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@100&family=Italiana&family=Julius+Sans+One&family=Lexend+Deca:wght@200&family=Poiret+One&display=swap" rel="stylesheet" crossOrigin="true" /> */}
//       <link
//         href="https://fonts.googleapis.com/icon?family=Material+Icons"
//         rel="stylesheet"
//       />
//       <meta charSet="utf-8" />
//       <meta content="width=device-width, initial-scale=1" name="viewport" />
//       <meta
//         content="Sierra Battan's personal website. Visit to view her journey as a senior full-stack software engineer."
//         name="description"
//       />
//       <meta content="#80b0f8" name="theme-color" />
//       <meta
//         name="keywords"
//         content="Sierra Battan, Software Engineer Personal Website, Full-Stack Software Engineer, React Software Engineer, JavaScript Software Engineer"
//       />
//       <meta name="author" content="Sierra Battan" />
//       <meta property="og:type" content="website" />
//       <meta name="title" property="og:title" content="Sierra Battan" />
//       <meta property="og:type" content="website" />
//       <meta
//         name="description"
//         property="og:description"
//         content="Sierra Battan"
//       />
//       <meta
//         name="publish_date"
//         property="og:publish_date"
//         content="2019-10-31T14:45:00-0700"
//       />
//       <meta
//         name="update_date"
//         property="og:update_date"
//         content="2021-12-03T05:00:00-0700"
//       />
//       <meta name="theme-color" content="#80b0f8" />
//       <meta property="og:site_name" content="Personal Website" />
//       <meta
//         name="image"
//         property="og:image"
//         content="https://sierraismy.name/s-icon.svg"
//       />
//       <meta property="og:url" content="https://sierraismy.name" />
//       <meta property="twitter:card" content="summary" />
//       <meta property="twitter:creator" content="@sierrabattan" />
//       <meta property="twitter:title" content="Sierra Battan" />
//       <meta
//         property="twitter:description"
//         content="Sierra Battan's personal website. Visit to view her journey as a senior full-stack software engineer."
//       />
//     </Head>
//   );
// }

type Page = { title: string; path: string };
const pages: Page[] = [
  { title: 'Home', path: '/' },
  { title: 'Resume', path: '/resume' },
];

function LinkedIn() {
  return (
    <a
      aria-label="Linked In"
      href="https://www.linkedin.com/in/snbattan/"
      rel="noopener noreferrer"
      target="_blank"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        className="SocialBar_icon__RB7bp"
        width="1em"
        height="1em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </g>
      </svg>
    </a>
  );
}

function GitHub() {
  return (
    <a
      aria-label="Git Hub"
      href="https://github.com/snbattan"
      rel="noopener noreferrer"
      target="_blank"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        className="SocialBar_icon__RB7bp"
        width="1em"
        height="1em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M21.035 5.257c.91 1.092 1.364 2.366 1.364 3.822c0 5.277-3.002 6.824-5.823 7.279c.364.637.455 1.365.455 2.093v3.73c0 .455-.273.728-.637.728a.718.718 0 0 1-.728-.728v-3.73a2.497 2.497 0 0 0-.728-2.093l.455-1.183c2.821-.364 5.733-1.274 5.733-6.187c0-1.183-.455-2.275-1.274-3.185l-.182-.727a4.04 4.04 0 0 0 .09-2.73c-.454.09-1.364.273-2.91 1.365l-.547.09a13.307 13.307 0 0 0-6.55 0l-.547-.09C7.57 2.71 6.66 2.437 6.204 2.437c-.273.91-.273 1.91.09 2.73l-.181.727c-.91.91-1.365 2.093-1.365 3.185c0 4.822 2.73 5.823 5.732 6.187l.364 1.183c-.546.546-.819 1.274-.728 2.002v3.821a.718.718 0 0 1-.728.728a.718.718 0 0 1-.728-.728V20.18c-3.002.637-4.185-.91-5.095-2.092c-.455-.546-.819-1.001-1.274-1.092c-.09-.091-.364-.455-.273-.819c.091-.364.455-.637.82-.455c.91.182 1.455.91 2 1.547c.82 1.092 1.639 2.092 4.095 1.547v-.364c-.09-.728.091-1.456.455-2.093c-2.73-.546-5.914-2.093-5.914-7.279c0-1.456.455-2.73 1.365-3.822c-.273-1.273-.182-2.638.273-3.73l.455-.364C5.749 1.073 7.023.8 9.66 2.437a13.673 13.673 0 0 1 6.642 0C18.851.708 20.216.98 20.398 1.072l.455.364c.455 1.274.546 2.548.182 3.821z"
        />
      </svg>
    </a>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <body className="flex min-h-screen flex-col place-items-center bg-blue-200 bg-[url(https://grainy-gradients.vercel.app/noise.svg)] px-8 text-center font-light text-blue-900 dark:bg-blue-900 dark:text-blue-100">
        <header className="flex w-screen place-items-center justify-between gap-4 p-8">
          <LinkedIn />
          <div className="flex flex-col place-items-center">
            <h1
              className={`${shadows.className} text-3xl font-bold tracking-widest text-blue-500 dark:text-blue-300`}
            >
              Sierra Battan
            </h1>
            <nav className="flex place-items-center gap-4">
              {pages.map(({ title, path }) => (
                <Link
                  key={path}
                  href={path}
                  className="hover:font-medium hover:text-blue-500 dark:hover:text-blue-300"
                  // className={router.pathname === href ? 'active' : ''}
                >
                  {title}
                </Link>
              ))}
            </nav>
          </div>
          <GitHub />
        </header>
        <Arch>
          <main className="flex w-7/12 grow flex-col items-center gap-4">
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </main>
          <footer className="flex justify-center pb-8 pt-16 text-xs">
            Created by Sierra
          </footer>
        </Arch>
      </body>
    </html>
  );
}
