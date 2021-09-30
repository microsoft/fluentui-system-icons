import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 12.25C9 10.45 10.46 9 12.25 9h3.5c1.8 0 3.25 1.46 3.25 3.25 0 .97-.78 1.75-1.75 1.75h-6.5C9.78 14 9 13.22 9 12.25zm3.25-1.75c-.97 0-1.75.78-1.75 1.75 0 .14.11.25.25.25h6.5c.14 0 .25-.11.25-.25 0-.97-.78-1.75-1.75-1.75h-3.5z" fill={primaryFill} /><path d="M14 2a5 5 0 00-4.94 4.2A9.75 9.75 0 004 14.75v7.5A3.75 3.75 0 007.75 26h12.5A3.75 3.75 0 0024 22.25v-7.5c0-3.69-2.05-6.9-5.06-8.55A5 5 0 0014 2zm-.25 3c-1 0-1.97.15-2.88.43a3.5 3.5 0 016.26 0A9.75 9.75 0 0014.25 5h-.5zm0 1.5h.5c4.56 0 8.25 3.7 8.25 8.25V16h-17v-1.25c0-4.56 3.7-8.25 8.25-8.25zM9 17.5v1.75a.75.75 0 001.5 0V17.5h12v4.75c0 1.24-1 2.25-2.25 2.25H7.75c-1.24 0-2.25-1-2.25-2.25V17.5H9z" fill={primaryFill} /></svg>;
}

const Backpack28Regular = wrapIcon(rawSvg({}), 'Backpack28Regular');
export default Backpack28Regular;
      