import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.25 2c.41 0 .75.34.75.75V3h7.75C24.55 3 26 4.46 26 6.25V16h-.33a3.75 3.75 0 00-1.17-2.04V6.25c0-.97-.78-1.75-1.75-1.75H5.25c-.97 0-1.75.78-1.75 1.75v12.5c0 .97.78 1.75 1.75 1.75H16.5c-.32.42-.5.94-.5 1.5h-5.41L7.3 25.74a.75.75 0 01-1.13-.98L8.6 22H5.25A3.25 3.25 0 012 18.75V6.25C2 4.45 3.46 3 5.25 3h8.25v-.25c0-.41.33-.75.75-.75zM17 22c0-.82.66-1.5 1.48-1.5h7.02c.83 0 1.5.67 1.5 1.5v.5c0 1.97-1.86 4-5 4-3.14 0-5-2.03-5-4V22zm7.5-6.4a2.72 2.72 0 01.25 1.15 2.75 2.75 0 11-.25-1.15zM6.75 7.5a.75.75 0 100 1.5h5.5a.75.75 0 100-1.5h-5.5zM6 12.25c0-.41.33-.75.75-.75h10.5a.75.75 0 110 1.5H6.75a.75.75 0 01-.75-.75zm.75 3.25a.75.75 0 100 1.5h8.5a.75.75 0 000-1.5h-8.5z" fill={primaryFill} /></svg>;
}

const ChartPerson28Regular = wrapIcon(rawSvg({}), 'ChartPerson28Regular');
export default ChartPerson28Regular;
      