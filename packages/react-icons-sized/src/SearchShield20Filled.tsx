import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 3a5.5 5.5 0 014.38 8.82l4.15 4.15a.75.75 0 01-.98 1.13l-.08-.07-4.15-4.15c-.54.41-1.15.72-1.82.91V12.21a4 4 0 10-5.48-4.12c-.2.07-.37.18-.52.34-.32.33-.63.58-.96.78A5.5 5.5 0 018.5 3z" fill={primaryFill} /><path d="M7 10.35a4.63 4.63 0 01-1-.59c-.24-.18-.48-.4-.72-.64a.39.39 0 00-.56 0 4.5 4.5 0 01-3.32 1.55.4.4 0 00-.4.41v2.77c.03.8.18 1.51.44 2.15A4.81 4.81 0 003 18c.52.4 1.15.73 1.87.98.09.03.17.03.26 0C7.69 18.09 9 16.27 9 13.58V11a.4.4 0 00-.4-.33 4.23 4.23 0 01-1.6-.32z" fill={primaryFill} /></svg>;
}

const SearchShield20Filled = wrapIcon(rawSvg({}), 'SearchShield20Filled');
export default SearchShield20Filled;
      