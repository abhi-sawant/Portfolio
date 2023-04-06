import { StaticImageData } from 'next/image';
import Image from 'next/image';
import Button from '../Button';

interface WorkCardProps {
  image: string | StaticImageData;
  title: string;
  description: string;
  link: string;
}

function WorkCard(props: WorkCardProps) {
  const { image, title, description, link } = props;
  return (
    <div className='flex flex-col rounded border-[3px] border-[rgba(0,0,0,0.1)] p-4 shadow-[5px_5px_0_0_rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)] dark:shadow-[5px_5px_0_0_rgba(255,255,255,0.1)]'>
      <div>
        <Image className='rounded' src={image} alt={title} />
      </div>
      <div className='h-100 mt-4 flex flex-grow flex-col'>
        <h3 className='mb-2 text-center text-xl font-bold'>{title}</h3>
        <p className='mb-4 text-sm text-slate-500 dark:text-slate-400'>{description}</p>
        <div className='mt-auto text-center'>
          <Button size='small' target='_blank' href={link}>
            Visit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
