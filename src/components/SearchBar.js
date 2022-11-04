import { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import { useGithubContext } from '../context/GithubContext';
import { useNavigate } from 'react-router-dom';
export default function SearchBar() {
  const { setSearch } = useGithubContext();
  const [input, setInput] = useState('');
  const navigate = useNavigate();
  return (
    <div className='flex gap-2 items-center bg-slate-100 px-4 py-2 rounded-md mb-4'>
      <RiSearchLine />
      <input
        type='text'
        className='bg-transparent focus:outline-none w-full text-lg'
        placeholder='Search github...'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={() => {
          setSearch(input);
          setInput('');
          navigate('/');
        }}
        className='uppercase font-semibold text-slate-400 hover:text-slate-800'
      >
        Search
      </button>
    </div>
  );
}
