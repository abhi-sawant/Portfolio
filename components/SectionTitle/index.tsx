interface SectionTitleProps {
  children: React.ReactNode;
}

function SectionTitle(props: SectionTitleProps) {
  const { children } = props;
  return (
    <h2 className='text-blue mx-auto mb-12 mt-4 text-center text-4xl font-bold text-blue-500 dark:text-blue-400 lg:text-5xl '>
      <span className='after:content[""] relative inline-block after:absolute after:bottom-0 after:left-0 after:-z-10 after:h-4 after:w-full after:bg-[rgba(0,0,0,0.1)] dark:after:bg-[rgba(255,255,255,0.1)] '>
        {children}
      </span>
    </h2>
  );
}

export default SectionTitle;
