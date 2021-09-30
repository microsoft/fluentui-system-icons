import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.75 10c.97 0 1.75.78 1.75 1.75v3.5a.75.75 0 01-1.5 0v-3.5a.25.25 0 00-.25-.25h-5.5a.25.25 0 00-.25.25v3.5a.75.75 0 01-1.5 0v-3.5c0-.97.79-1.75 1.75-1.75h5.5z" fill={primaryFill} /><path d="M20.5 11.75v3.5a.75.75 0 001.5 0v-3.5c0-.97-.78-1.75-1.75-1.75h-3.38c.35.41.57.93.62 1.5h2.76c.14 0 .25.11.25.25z" fill={primaryFill} /><path d="M2 15.25a.75.75 0 001.5 0v-3.5c0-.14.11-.25.25-.25h2.76c.05-.57.28-1.09.62-1.5H3.75C2.78 10 2 10.78 2 11.75v3.5z" fill={primaryFill} /><path d="M12 3a3 3 0 110 6 3 3 0 010-6zm0 1.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill={primaryFill} /><path d="M18.5 4a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm0 1.5a1 1 0 100 2 1 1 0 000-2z" fill={primaryFill} /><path d="M5.5 4a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm0 1.5a1 1 0 100 2 1 1 0 000-2z" fill={primaryFill} /><path d="M2.75 17a.75.75 0 00-.75.75v.5A3.75 3.75 0 005.75 22h12.5A3.75 3.75 0 0022 18.25v-.5a.75.75 0 00-.75-.75H2.75zm3 3.5a2.25 2.25 0 01-2.24-2H20.5a2.25 2.25 0 01-2.24 2H5.75z" fill={primaryFill} /></svg>;
}

const PeopleAudience24Regular = wrapIcon(rawSvg({}), 'PeopleAudience24Regular');
export default PeopleAudience24Regular;
      