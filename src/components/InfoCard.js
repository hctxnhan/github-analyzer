import { DiGithubBadge } from 'react-icons/di';

export default function InfoCard({ Icon, title, number, color }) {
  return (
    <div className='flex w-full bg-slate-200 px-6 py-2 rounded-md items-center hover:bg-slate-300'>
      <div>
        <DiGithubBadge size='2.5rem' />
      </div>
      <div className='flex flex-col justify-center items-center flex-grow'>
        <p className='text-2xl xl:text-3xl font-bold'>{number}</p>
        <p className='uppercase text-slate-600 text-sm'>{title}</p>
      </div>
    </div>
  );
}
