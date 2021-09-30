import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 7a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0-1a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0 11.62A1.5 1.5 0 014 16.5v-3.05a1.5 1.5 0 01-2-1.42V10.5A2.5 2.5 0 014.5 8h4c.82 0 1.54.4 2 1h5a2.5 2.5 0 012.5 2.5v1a1.5 1.5 0 01-2 1.41v2.59a1.5 1.5 0 01-2.5 1.12A1.5 1.5 0 0111 16.5v-4.46a1.5 1.5 0 01-2 1.4v3.06a1.5 1.5 0 01-2.5 1.12zM3 10.5v1.53a.5.5 0 001 0V10.5a.5.5 0 011 0v6a.5.5 0 001 0v-3a.5.5 0 011 0v3a.5.5 0 001 0v-6a.5.5 0 011 0v1.53a.5.5 0 001 0V10.5C10 9.67 9.33 9 8.5 9h-4C3.67 9 3 9.67 3 10.5zm7.95-.5c.03.16.05.33.05.5v.5h1v5.5a.5.5 0 001 0v-2a.5.5 0 011 0v2a.5.5 0 001 0v-5a.5.5 0 011 0v1a.5.5 0 001 0v-1c0-.83-.67-1.5-1.5-1.5h-4.55zM16 6a2 2 0 11-4 0 2 2 0 014 0zm-1 0a1 1 0 10-2 0 1 1 0 002 0z" fill={primaryFill} /></svg>;
}

const Guardian20Regular = wrapIcon(rawSvg({}), 'Guardian20Regular');
export default Guardian20Regular;
      