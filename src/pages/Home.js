import AdditionalStatistic from '../components/AdditionalStatistic';
import Loading from '../components/Loading';
import ReposList from '../components/ReposList';
import SearchBar from '../components/SearchBar';
import UserInfo from '../components/UserInfo';
import { useGithubContext } from '../context/GithubContext';
import useSort from '../hooks/useSort';

export default function Home() {
  const { repos, loadingUser } = useGithubContext();

  const sortOption = 'stargazers_count';

  const [list] = useSort(repos, sortOption);

  const popularRepos = list.slice(0, 9);

  return (
    <div className=''>
      <h1 className='text-2xl text-slate-800 mt-6 mb-4'>
        Popular Repositories
      </h1>
      {loadingUser ? <Loading /> : <ReposList list={popularRepos} />}
      <AdditionalStatistic />
    </div>
  );
}
