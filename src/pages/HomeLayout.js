import { Outlet } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import UserBio from '../components/UserBio';
import UserInfo from '../components/UserInfo';

export default function HomeLayout() {
  return (
    <div>
      <div className='hidden w-0 md:block md:w-[250px] lg:w-[350px] fixed top-0 left-0 bottom-0 rounded-md overflow-hidden'>
        <UserBio />
      </div>
      <div className='p-3 sm:p-10 ml-0 md:ml-[250px] lg:ml-[350px]'>
        <SearchBar />
        <div className='block md:hidden mb-4'>
          <UserBio />
        </div>
        <UserInfo />
        <Outlet />
      </div>
    </div>
  );
}
