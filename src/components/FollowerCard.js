export default function FollowerCard({ follower }) {
  const { avatar_url, login, html_url } = follower;

  return (
    <div className='bg-slate-100 p-5 rounded-md flex gap-4 items-center shadow-md shadow-slate-200'>
      <div className='rounded-full overflow-hidden'>
        <img
          className='h-[60px] w-[60px] object-cover object-center'
          src={avatar_url}
          alt=''
        />
      </div>
      <div>
        <p className='text-lg font-semibold'>{login}</p>
        <a href={html_url} className='text-slate-500'>
          {html_url}
        </a>
      </div>
    </div>
  );
}
