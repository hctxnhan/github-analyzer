import { useGithubContext } from '../context/GithubContext';
import { GrRun } from 'react-icons/gr';
import { MdLocationOn } from 'react-icons/md';
import { RiUserAddFill } from 'react-icons/ri';
import { BiWorld } from 'react-icons/bi';

export default function UserBio() {
  const { user, errorUser } = useGithubContext();

  return (
    <div className='w-full h-full bg-slate-100 flex flex-col p-10 gap-6 shadow-lg shadow-slate-300'>
      {errorUser ? (
        <p>{errorUser}</p>
      ) : (
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col items-center gap-1'>
            <div>
              <img
                className='w-24 h-24 rounded-full'
                src={user.avatar_url}
                alt=''
              />
            </div>
            <p className='text-lg font-bold'>{user.name}</p>
            <p className='text-slate-400 text-sm'>@{user.login}</p>
            <p className='text-slate-600 text-sm text-center'>{user.bio}</p>
          </div>
          <div className='flex flex-col gap-2 flex-grow'>
            {user.company && (
              <div className='flex items-center gap-2'>
                <GrRun />
                <p>{user.company}</p>
              </div>
            )}
            {user.location && (
              <div className='flex items-center gap-2'>
                <MdLocationOn />
                <p>{user.location}</p>
              </div>
            )}
            {user.created_at && (
              <div className='flex items-center gap-2'>
                <RiUserAddFill />
                <p>{new Date(user.created_at).toUTCString()}</p>
              </div>
            )}
            {user.blog && (
              <div className='flex items-center gap-2'>
                <BiWorld />
                <p>{user.blog}</p>
              </div>
            )}
          </div>

          <a
            href={user.html_url}
            className='px-5 py-1 border-2 border-slate-900 rounded-md hover:bg-slate-800 hover:text-slate-50 items-self-end inline-block text-center'
          >
            Follow
          </a>
        </div>
      )}
    </div>
  );
}
