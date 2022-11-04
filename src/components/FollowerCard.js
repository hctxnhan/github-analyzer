import { useNavigate } from 'react-router-dom';
import { useGithubContext } from '../context/GithubContext';

export default function FollowerCard({ follower }) {
  const { avatar_url, login, html_url } = follower;
  const { setSearch } = useGithubContext();

  const navigate = useNavigate();
  const handleClick = () => {
    setSearch(login);
    navigate('/');
  };

  return (
    <button
      onClick={handleClick}
      className='bg-slate-100 p-5 rounded-md flex gap-4 items-center shadow-md shadow-slate-200'
    >
      <div className='rounded-full overflow-hidden'>
        <img
          className='h-[60px] w-[60px] object-cover object-center'
          src={avatar_url}
          alt=''
        />
      </div>
      <div className='text-left'>
        <p className='text-lg font-semibold'>{login}</p>
        <p className='text-slate-500'>{html_url}</p>
      </div>
    </button>
  );
}
