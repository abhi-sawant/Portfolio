interface TimelineCardProps {
  title: React.ReactNode;
  location: string;
  year: string;
  index: number;
}

function TimelineCard(props: TimelineCardProps) {
  const { title, location, year, index } = props;
  const forTailwind =
    'lg:row-start-1 lg:row-start-2 lg:row-start-3 lg:row-start-4 lg:row-start-5 lg:row-start-6 lg:row-start-7 lg:row-start-8 lg:row-end-1 lg:row-end-2 lg:row-end-3 lg:row-end-4 lg:row-end-5 lg:row-end-6 lg:row-end-7 lg:row-end-8';
  const rowPos = `lg:row-start-${index + 1} lg:row-end-${index + 2}`;

  // === Leaving all this here to understand the calculation in future ===
  // const colPos = index % 2 === 0 ? 'lg:col-start-1 lg:col-end-2' : 'lg:col-start-2 lg:col-end-3';
  // const borderClass =
  //   index % 2 === 0
  //     ? 'border-0 border-s-4 border-dashed hover:border-solid border-s-blue-500 lg:border-0 lg:border-e-4 lg:border-dashed lg:border-e-blue-500'
  //     : 'border-0 border-s-4 border-dashed hover:border-solid border-s-blue-500 ';
  // const paddingClass = index % 2 === 0 ? 'pb-4 ps-6 lg:ps-0 lg:pe-6' : 'pb-4 ps-6 ';
  // const beforeClass =
  //   index % 2 === 0
  //     ? 'before:left-[-11px] before:top-[-28px] lg:before:left-auto lg:before:right-[-11px] lg:right-[-2px] lg:text-end'
  //     : 'before:left-[-11px] before:top-[-28px] lg:left-[-2px]';

  const classname =
    index % 2 === 0
      ? 'relative border-0 border-s-4 border-dashed border-s-blue-500 pb-4 ps-6 before:absolute before:left-[-11px] before:top-[-28px] before:text-3xl before:text-blue-500 before:content-["o"] hover:border-solid lg:right-[-2px] lg:col-start-1 lg:col-end-2 lg:border-0 lg:border-e-4 lg:border-dashed lg:border-e-blue-500 lg:pe-6 lg:ps-0 lg:text-end lg:before:left-auto lg:before:right-[-11px] '
      : 'relative border-0 border-s-4 border-dashed border-s-blue-500 pb-4 ps-6 before:absolute before:left-[-11px] before:top-[-28px] before:text-3xl before:text-blue-500 before:content-["o"] hover:border-solid lg:left-[-2px] lg:col-start-2 lg:col-end-3 ';
  return (
    <div className={classname + rowPos}>
      {/* Leaving this here for classname sorting */}
      {/* <div className='relative border-0 border-s-4 border-dashed border-s-blue-500 pb-4 ps-6 before:absolute before:left-[-11px] before:top-[-28px] before:text-3xl before:text-blue-500 before:content-["o"] hover:border-solid lg:right-[-2px] lg:col-start-1 lg:col-end-2 lg:border-0 lg:border-e-4 lg:border-dashed lg:border-e-blue-500 lg:pe-6 lg:ps-0 lg:text-end lg:before:left-auto lg:before:right-[-11px]'></div>
      <div className='relative border-0 border-s-4 border-dashed border-s-blue-500 pb-4 ps-6 before:absolute before:left-[-11px] before:top-[-28px] before:text-3xl before:text-blue-500 before:content-["o"] hover:border-solid lg:left-[-2px] lg:col-start-2 lg:col-end-3'></div> */}
      <h3 className='mb-4 text-xl font-bold md:mb-6 md:text-2xl lg:text-3xl'>{title}</h3>
      <p className='mb-2 text-slate-500'>{location}</p>
      <p className='text-slate-500'>{year}</p>
    </div>
  );
}

export default TimelineCard;
