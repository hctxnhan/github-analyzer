import { useState } from 'react';

function sort(listObj, sortKey) {
  if (!listObj) return [];
  const copyList = [...listObj];
  console.log('=========RESORT LIST=========');
  const result = copyList.sort((a, b) => {
    if (a[sortKey] > b[sortKey]) {
      return -1;
    } else if (a[sortKey] < b[sortKey]) {
      return 1;
    } else return 0;
  });
  return result;
}

export default function useSort(listObj, initSortKey) {
  const [sortKey, setSortOption] = useState(initSortKey);

  const result = sort(listObj, sortKey);

  console.log('RESORT LIST WITH', sortKey);

  return [result, setSortOption];
}
