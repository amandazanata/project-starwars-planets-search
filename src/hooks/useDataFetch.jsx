import { useEffect } from 'react';

export const useDataFetch = (requestApi, apiCallback) => {
  useEffect(() => {
    requestApi().then(({ results }) => apiCallback(results));
  }, [apiCallback, requestApi]);
};

// https://stackoverflow.com/questions/57845853/using-useeffect-and-usecontext-while-fetching-data
