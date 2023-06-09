import heroImg from '../../public/hero.svg';
import Image from 'next/image';
import Button from '../Button';

function Hero() {
  return (
    <section className='py-8 lg:py-16'>
      <div className='container mx-auto grid items-center justify-center gap-8 px-4 text-center lg:grid-cols-2'>
        <h1 className='text-2xl font-bold leading-normal md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight xl:p-8'>
          Hi, I&apos;m <span className='text-blue-500 dark:text-blue-400'>Abhishek</span>. I am a{' '}
          <span className='text-blue-500 dark:text-blue-400'>frontend</span> web developer. I help people make their
          corner of internet look <span className='text-blue-500 dark:text-blue-400'>beautiful</span>.
        </h1>
        <div className='relative text-center'>
          <Image className='mx-auto' src={heroImg} alt='Illustration of a person working with a laptop' />
          <Button className='mt-4'>Hire Me!</Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
