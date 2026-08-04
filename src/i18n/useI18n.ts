import { useMemo } from 'react';
import getBundle from './index';
import { useTheme } from '../context/ThemeContext';

export const useI18n = () => {
  const { locale } = useTheme();
  const bundle = useMemo(() => getBundle((locale as any) || 'en'), [locale]);
  // attach locale for downstream components
  return { ...bundle, locale } as any;
};

export default useI18n;
