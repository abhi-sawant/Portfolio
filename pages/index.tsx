import Head from 'next/head';
import { Readex_Pro } from 'next/font/google';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

const readex = Readex_Pro({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Abhishek Sawant | Curious Learner</title>
        <meta name='author' content='Abhishek Sawant' />
        <meta
          name='description'
          content="Hi, I'm Abhishek. I am a frontend developer. I help people make their corner of internet look beautiful."
        />
        <meta
          name='keywords'
          content='Abhishek, Abhishek Sawant, HTML, CSS, JavaScript, Bootstrap, Tailwind, Materialize, Bulma, SASS, SCSS, PostCSS, ReactJS, React, AngularJS, Angular, MaterialUI, Bulma, ChakraUI, Svelte, SvelteKit, Frontend, Web Development, Web Design, Development, Developer, Web Developer, Frontend Developer. UI/UX, Website Design, Website Development, Website Developer'
        />
        <meta property='og:title' content='Abhishek Sawant | Curious Learner' />
        <meta
          property='og:description'
          content="Hi, I'm Abhishek. I am a frontend developer. I help people make their corner of internet look beautiful."
        />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='Abhishek Sawant | Curious Learner' />
        <meta property='og:url' content='http://abhisawant.me/' />
        <meta name='og:image' content='http://abhisawant.me/favicon.ico' />
        <meta name='twitter:image' content='http://abhisawant.me/favicon.ico' />
        <meta name='twitter:image:alt' content='Brand Logo' />
        <meta name='twitter:card' content='summary_large_image' />
        <link rel='shortcut icon' href='favicon.ico' type='image/x-icon' />
      </Head>
      <Header />
      <main className={`${readex.className} text-slate-700 dark:text-slate-100`}>
        <Hero />
      </main>
    </>
  );
}
