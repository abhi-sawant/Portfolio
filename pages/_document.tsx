import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en' className='scroll-smooth'>
      <Head />
      <body className='before:content=[""] relative bg-slate-50 before:absolute before:inset-0  before:z-[-1] before:animate-bganim before:bg-hero-bg before:bg-[size:10%] before:opacity-70 dark:bg-slate-950 dark:before:opacity-5 md:before:bg-[size:5%]'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
