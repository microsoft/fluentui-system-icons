import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.99 2.99a2.23 2.23 0 110 4.45 2.23 2.23 0 010-4.45zm0 1a1.23 1.23 0 100 2.45 1.23 1.23 0 000-2.45z" fill={primaryFill} /><path d="M3.02 11.5a.5.5 0 11-1 0V9.01a1 1 0 01.88-.99h2.87c-.14.24-.23.52-.26.81v.18H3v2.49z" fill={primaryFill} /><path d="M17.49 12a.5.5 0 00.5-.5V8.9a1 1 0 00-1-.89h-2.78c.14.26.24.55.26.86V9H17v2.49c0 .28.22.5.5.5z" fill={primaryFill} /><path d="M12.47 8.01a1 1 0 011 .89v2.6a.5.5 0 11-1 0V9.01H7.5v2.49a.5.5 0 11-1 0V9.01a1 1 0 01.89-.99h5.08z" fill={primaryFill} /><path d="M16.89 5.53a1.91 1.91 0 10-3.83 0 1.91 1.91 0 003.83 0zm-2.83 0a.91.91 0 111.83 0 .91.91 0 01-1.83 0z" fill={primaryFill} /><path d="M5.02 3.62a1.91 1.91 0 110 3.82 1.91 1.91 0 010-3.82zm0 1a.91.91 0 100 1.82.91.91 0 000-1.82z" fill={primaryFill} /><path d="M2.5 13a.5.5 0 00-.5.5v1A2.5 2.5 0 004.5 17h11a2.5 2.5 0 002.5-2.5v-1a.5.5 0 00-.5-.5h-15zm.5 1.5V14h14v.5c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 013 14.5z" fill={primaryFill} /></svg>;
}

const PeopleAudience20Regular = wrapIcon(rawSvg({}), 'PeopleAudience20Regular');
export default PeopleAudience20Regular;
      