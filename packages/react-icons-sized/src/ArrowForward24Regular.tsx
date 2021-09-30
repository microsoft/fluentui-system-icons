import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.72 16.22a.75.75 0 001.06 1.06l5-5c.3-.3.3-.77 0-1.06l-5-5a.75.75 0 00-1.06 1.06L18.44 11H10.6c-1.6 0-2.81.24-3.89.76l-.24.13a6.2 6.2 0 00-2.58 2.58A8.4 8.4 0 003 18.6a.75.75 0 001.5 0c0-1.48.23-2.52.71-3.43a4.7 4.7 0 011.96-1.96 6.63 6.63 0 013.1-.7l.33-.01h7.84l-3.72 3.72z" fill={primaryFill} /></svg>;
}

const ArrowForward24Regular = wrapIcon(rawSvg({}), 'ArrowForward24Regular');
export default ArrowForward24Regular;
      