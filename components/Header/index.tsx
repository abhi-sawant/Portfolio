import { Readex_Pro } from 'next/font/google';
import Link from 'next/link';
const readex = Readex_Pro({ subsets: ['latin'] });

interface HeaderLinkProps {
  children: React.ReactNode;
  href: string;
}

function HeaderLink(props: HeaderLinkProps) {
  const { children, href } = props;
  return (
    <Link
      className='after:content=[""] relative text-xl font-bold text-blue-500 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-blue-300 after:transition-all hover:after:w-full dark:text-blue-400'
      href={href}
    >
      {children}
    </Link>
  );
}

function Header() {
  return (
    <header className={`${readex.className} container mx-auto px-4`}>
      <nav className='mt-4 rounded border-[3px] border-[rgba(0,0,0,0.1)] py-4 shadow-[5px_5px_0_0_rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)] dark:shadow-[5px_5px_0_0_rgba(255,255,255,0.1)]'>
        <ul className='flex flex-wrap items-center justify-center gap-4 md:gap-8'>
          <li>
            <HeaderLink href='/'>About</HeaderLink>
          </li>
          <li>
            <HeaderLink href='/'>Work</HeaderLink>
          </li>
          <li>
            <HeaderLink href='/'>Contact</HeaderLink>
          </li>
          <li>
            <HeaderLink href='/'>Blog</HeaderLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
