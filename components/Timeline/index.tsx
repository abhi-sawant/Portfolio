import SectionTitle from '../SectionTitle';
import TimelineCard from './TimelineCard';
import { timelineData } from './timelinedata';

function Timeline() {
  return (
    <section className='py-8 lg:py-16' id='about'>
      <div className='container mx-auto px-4'>
        <SectionTitle>Timeline</SectionTitle>
        <div className='grid gap-y-8 lg:grid-cols-2'>
          {timelineData.map((item, index) => {
            return (
              <TimelineCard key={index} index={index} title={item.title} location={item.location} year={item.year} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Timeline;
