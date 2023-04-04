import TimelineCard from './TimelineCard';
import { timelineData } from './timelinedata';

function Timeline() {
  return (
    <section className='before:content=[""] relative py-8 before:absolute  before:inset-0 before:z-[-1] before:animate-bganim before:bg-hero-bg before:bg-[size:10%] before:opacity-50 dark:before:opacity-5 md:before:bg-[size:5%] lg:py-16'>
      <div className='container mx-auto px-4'>
        <h2 className='text-blue mx-auto mb-12 mt-4 text-center text-4xl font-bold text-blue-600 dark:text-blue-400 lg:text-5xl '>
          <span className='after:content[""] relative inline-block after:absolute after:bottom-0 after:left-0 after:-z-10 after:h-4 after:w-full after:bg-[rgba(0,0,0,0.1)] dark:after:bg-[rgba(255,255,255,0.1)] '>
            Timeline
          </span>
        </h2>
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
