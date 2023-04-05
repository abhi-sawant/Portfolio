import SectionTitle from '../SectionTitle';
import WorkCard from './WorkCard';
import { workdata } from './workdata';

function Work() {
  return (
    <section className='py-8 lg:py-16'>
      <div className='container mx-auto px-4'>
        <SectionTitle>Work</SectionTitle>
      </div>
      <div>
        {workdata.map((item, index) => {
          return (
            <WorkCard
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              link={item.link}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Work;
