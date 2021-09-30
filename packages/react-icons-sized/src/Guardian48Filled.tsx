import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.8 16.5a5.5 5.5 0 10-4.6-10 5.5 5.5 0 004.6 10zm10.7 9V29a5.98 5.98 0 01-1.5 3.97v6.53a3.5 3.5 0 005.75 2.68 3.5 3.5 0 005.75-2.68v-5.74a3.5 3.5 0 004.5-3.35v-3.63A4.78 4.78 0 0038.22 22H27.71a9.19 9.19 0 01.79 3.5zm2.32-6a4.98 4.98 0 004.36 0 5 5 0 10-4.36 0zm-5.8 2.75c.62 1.02.98 2.22.98 3.5V29a3.28 3.28 0 01-.04.5 3.5 3.5 0 01-4.46 2.86v7a3.63 3.63 0 01-6 2.74 3.63 3.63 0 01-6-2.74v-7A3.5 3.5 0 015 29v-3.25A6.75 6.75 0 0111.75 19h7.5a6.74 6.74 0 015.77 3.25z" fill={primaryFill} /></svg>;
}

const Guardian48Filled = wrapIcon(rawSvg({}), 'Guardian48Filled');
export default Guardian48Filled;
      