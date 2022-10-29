import { GoRepoForked } from 'react-icons/go';
import { AiFillStar } from 'react-icons/ai';

export default function RepoCard({ data }) {
  const {
    name,
    language,
    stargazers_count,
    forks_count,
    html_url,
    description,
  } = data;

  return (
    <a
      href={html_url}
      className='bg-slate-100 p-4 rounded-md shadow-md shadow-slate-200 hover:bg-slate-200'
    >
      <p className='font-semibold'>{name}</p>
      <p>{description}</p>
      <p className='text-slate-500 text-sm'>{language}</p>
      <div className='flex justify-end gap-5 text-slate-600'>
        <div className='flex gap-1 items-center'>
          <GoRepoForked />
          <p>{forks_count}</p>
        </div>
        <div className='flex gap-1 items-center'>
          <AiFillStar />
          <p>{stargazers_count}</p>
        </div>
      </div>
    </a>
  );
}
