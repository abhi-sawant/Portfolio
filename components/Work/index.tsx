import SectionTitle from '../SectionTitle';
import WorkCard from './WorkCard';
import { workdata } from './workdata';

function Work() {
  return (
    <section className='py-8 lg:py-16'>
      <div className='container mx-auto px-4'>
        <SectionTitle>Work</SectionTitle>
        <div className='sm grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
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
      </div>
    </section>
  );
}

export default Work;
