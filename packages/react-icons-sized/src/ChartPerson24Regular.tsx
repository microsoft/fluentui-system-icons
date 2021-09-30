import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.5 2.75a.75.75 0 00-1.5 0V3H5.25A3.25 3.25 0 002 6.25v9.5C2 17.55 3.46 19 5.25 19h2.4l-1.48 1.77a.75.75 0 001.16.96L9.6 19h2.43a4.29 4.29 0 01-.03-.5V18c0-.17.02-.34.05-.5h-6.8c-.97 0-1.75-.78-1.75-1.75v-9.5c0-.97.78-1.75 1.75-1.75h13.5c.97 0 1.75.78 1.75 1.75v3.7A3.74 3.74 0 0121.74 13H22V6.25C22 4.45 20.54 3 18.75 3H12.5v-.25zM20.74 13a2.8 2.8 0 00-.24-1.4 2.75 2.75 0 10.24 1.4zm.76 3.5A1.5 1.5 0 0123 18v.5c0 1.97-1.86 4-5 4-2.88 0-4.68-1.7-4.96-3.5a3.21 3.21 0 01-.04-.5V18a1.5 1.5 0 011.5-1.5h7zM6 7.75c0-.41.34-.75.75-.75h4a.75.75 0 010 1.5h-4A.75.75 0 016 7.75zM6.75 10a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zM6 13.75c0-.41.34-.75.75-.75h5.5a.75.75 0 010 1.5h-5.5a.75.75 0 01-.75-.75z" fill={primaryFill} /></svg>;
}

const ChartPerson24Regular = wrapIcon(rawSvg({}), 'ChartPerson24Regular');
export default ChartPerson24Regular;
      