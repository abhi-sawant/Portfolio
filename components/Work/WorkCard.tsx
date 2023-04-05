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
    <div>
      <div>
        <Image src={image} alt={title} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <Button href={link}>Visit</Button>
      </div>
    </div>
  );
}

export default WorkCard;
