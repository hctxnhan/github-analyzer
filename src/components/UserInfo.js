import { useGithubContext } from '../context/GithubContext';
import InfoCard from './InfoCard';
import { Link } from 'react-router-dom';

export default function UserInfo() {
  const { user } = useGithubContext();
  if (!user) return <div></div>;
  const { following, followers, public_repos, public_gists } = user;
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-between items-start'>
      <Link to={'/repos'}>
        <InfoCard title='Repos' number={public_repos} />
      </Link>
      <Link to={'/followers'}>
        <InfoCard title='Followers' number={followers} />
      </Link>
      <Link>
        <InfoCard title='Following' number={following} />
      </Link>
      <Link>
        <InfoCard title='Gists' number={public_gists} />
      </Link>
    </div>
  );
}
