import { useLocation } from 'react-router-dom';

function useQuery(): URLSearchParams {
  return new URLSearchParams(useLocation().search);
}

export { useQuery };
