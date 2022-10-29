import { createContext, useContext, useState } from 'react';
import useFetch from '../hooks/useFetch';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';

function getUserQuery(username) {
  return `https://api.github.com/users/${username}`;
}

function getReposQuery(username) {
  return `https://api.github.com/users/${username}/repos?per_page=100`;
}

function getFollowerQuery(username) {
  return `https://api.github.com/users/${username}/followers`;
}

const GithubContext = createContext();

function GithubProvider({ children }) {
  const [search, setSearch] = useState('hctxnhan');
  const [loadingUser, errorUser, user] = useFetch(getUserQuery(search));
  const [loadingRepos, errorRepos, repos] = useFetch(getReposQuery(search));
  const [loadingFollowers, errorFollowers, followers] = useFetch(
    getFollowerQuery(search)
  );

  return (
    <GithubContext.Provider
      value={{
        user,
        repos,
        followers,
        search,
        loadingUser,
        loadingRepos,
        loadingFollowers,
        errorUser,
        errorRepos,
        errorFollowers,
        setSearch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
}

export function useGithubContext() {
  return useContext(GithubContext);
}

export { GithubContext, GithubProvider };
