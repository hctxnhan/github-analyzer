import { useGithubContext } from '../context/GithubContext';
import useSort from '../hooks/useSort';
import InfoCard from './InfoCard';

function languageUsedTimeCalculate(repos) {
  const languages = {};
  if (!repos) return languages;
  repos.forEach((curr) => {
    const language = curr.language;
    if (!language) return;
    if (languages[language])
      languages[language] = {
        ...languages[language],
        value: languages[language].value + 1,
      };
    else
      languages[language] = {
        label: language,
        value: 1,
      };
  });

  return languages;
}

function totalForksCount(repos) {
  if (!repos) return 0;
  const result = repos.reduce((prev, curr) => {
    return curr.forks_count + prev;
  }, 0);
  return result;
}

function totalStarsCount(repos) {
  if (!repos) return 0;

  const result = repos.reduce((prev, curr) => {
    return curr.stargazers_count + prev;
  }, 0);
  return result;
}

export default function AdditionalStatistic() {
  const { repos, errorRepos, loadingRepos } = useGithubContext();
  console.log('===========RERUN STATISTIC FUNCTION');
  const forksCount = totalForksCount(repos);
  const starsCount = totalStarsCount(repos);
  const mostUsedLanguage = Object.values(languageUsedTimeCalculate(repos));
  console.log(mostUsedLanguage);
  const [list] = useSort(mostUsedLanguage, 'value');
  // const list = [];
  // console.log(list);

  return (
    <div>
      <h1 className='text-2xl text-slate-800 mt-6 mb-4'>
        Additional Information
      </h1>
      {errorRepos ? (
        <p>{errorRepos}</p>
      ) : (
        <div className='flex flex-col gap-4 sm:flex-row'>
          {list[0] && (
            <InfoCard
              title={`Most used language (${list[0].value} projects)`}
              number={list[0].label}
            />
          )}
          <InfoCard title={'Stars'} number={starsCount} />
          <InfoCard title={'Forks'} number={forksCount} />
        </div>
      )}
    </div>
  );
}
