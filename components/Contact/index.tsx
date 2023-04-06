import Button from '../Button';
import Link from 'next/link';
import SectionTitle from '../SectionTitle';

function Contact() {
  return (
    <section className='py-8 lg:py-16'>
      <div className='container mx-auto px-4'>
        <SectionTitle>Contact</SectionTitle>
        <form action='mail.php' method='post' className='mx-auto grid max-w-[900px] gap-6'>
          <div className='grid gap-1'>
            <label htmlFor='visitorName' className='text-lg'>
              Your Name
            </label>
            <input
              className=' rounded border-[3px] border-[rgba(0,0,0,0.1)] bg-slate-100 p-4 shadow-[5px_5px_0_0_rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)] dark:bg-slate-900 dark:shadow-[5px_5px_0_0_rgba(255,255,255,0.1)]'
              type='text'
              name='visitorName'
              placeholder='Richard Hendricks'
              id='visitorName'
              required
            />
          </div>
          <div className='grid gap-1'>
            <label htmlFor='visitorEmail' className='text-lg'>
              Your email address
            </label>
            <input
              className=' rounded border-[3px] border-[rgba(0,0,0,0.1)] bg-slate-100 p-4 shadow-[5px_5px_0_0_rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)] dark:bg-slate-900 dark:shadow-[5px_5px_0_0_rgba(255,255,255,0.1)]'
              type='email'
              name='visitorEmail'
              placeholder='richard@piedpiper.com'
              id='visitorEmail'
              required
            />
          </div>
          <div className='grid gap-1'>
            <label htmlFor='visitorSubject' className='text-lg'>
              Subject
            </label>
            <input
              className=' rounded border-[3px] border-[rgba(0,0,0,0.1)] bg-slate-100 p-4 shadow-[5px_5px_0_0_rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)] dark:bg-slate-900 dark:shadow-[5px_5px_0_0_rgba(255,255,255,0.1)]'
              type='text'
              name='visitorSubject'
              placeholder='Something important'
              id='visitorSubject'
              required
            />
          </div>
          <div className='grid gap-1'>
            <label htmlFor='visitorMessage' className='text-lg'>
              Message
            </label>
            <textarea
              className=' rounded border-[3px] border-[rgba(0,0,0,0.1)] bg-slate-100 p-4 shadow-[5px_5px_0_0_rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)] dark:bg-slate-900 dark:shadow-[5px_5px_0_0_rgba(255,255,255,0.1)]'
              name='visitorMessage'
              id='visitorMessage'
              placeholder='A story I would to like tell...'
              cols={30}
              rows={10}
              required
            ></textarea>
          </div>
          <div>
            <Button type='submit'>Send</Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
