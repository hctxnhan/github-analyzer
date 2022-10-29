import RepoCard from './RepoCard';

export default function ReposList({ list }) {
  return (
    <div className='grid gap-5 gap-y-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {list.map((repo) => (
        <RepoCard data={repo} key={repo.id} />
      ))}
    </div>
  );
}
