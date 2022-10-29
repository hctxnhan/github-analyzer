import { useEffect, useState } from 'react';
import ReposList from '../components/ReposList';
import { useGithubContext } from '../context/GithubContext';
import useSort from '../hooks/useSort';

export default function Repos() {
  const { repos } = useGithubContext();

  const [sortOption, setSort] = useState('stargazers_count');

  const [list, setSortOption] = useSort(repos, sortOption);

  function handleChangeSortOption(e) {
    setSort(e.target.value);
  }

  useEffect(() => {
    setSortOption(sortOption);
  }, [sortOption, setSortOption]);

  return (
    <div>
      <div className='flex justify-between focus:outline-none mt-6 mb-4'>
        <h1 className='text-2xl text-slate-800'>All Repositories</h1>
        <select
          name=''
          id=''
          value={sortOption}
          onChange={handleChangeSortOption}
        >
          <option value='stargazers_count'>Stars</option>
          <option value='forks_count'>Forks</option>
        </select>
      </div>
      <ReposList list={list} />
    </div>
  );
}
