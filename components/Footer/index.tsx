import Link from 'next/link';

function Footer() {
  return (
    <footer className='mt-4 bg-blue-600 py-4'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap items-center justify-center gap-x-6 gap-y-3'>
          <Link className='font-medium text-neutral-50' href='tel:+918000670336'>
            Phone
          </Link>
          <Link className='font-medium text-neutral-50' href='https://github.com/abhi-sawant'>
            Github
          </Link>
          <Link className='font-medium text-neutral-50' href='https://twitter.com/mr_abhi_sawant'>
            LinkedIn
          </Link>
          <Link className='font-medium text-neutral-50' href='https://wa.me/918000670336?text=Hello'>
            WhatsApp
          </Link>
          <Link className='font-medium text-neutral-50' href='https://twitter.com/mr_abhi_sawant'>
            Twitter
          </Link>
          <Link className='font-medium text-neutral-50' href='https://www.instagram.com/mr.abhi_sawant/'>
            Instagram
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
