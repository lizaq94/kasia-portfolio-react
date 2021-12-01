import { useMediaQuery } from 'react-responsive';

export const useOnMobile = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' });

  return { isMobile };
};
