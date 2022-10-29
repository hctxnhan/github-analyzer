import FollowerCard from '../components/FollowerCard';
import { useGithubContext } from '../context/GithubContext';

export default function Followers() {
  const { followers } = useGithubContext();
  console.log(followers);
  return (
    <div>
      <h1 className='text-2xl text-slate-800 mt-6 mb-4'>Followers</h1>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        {followers.map((follower) => (
          <FollowerCard follower={follower} key={follower.id} />
        ))}
      </div>
    </div>
  );
}
