import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.25 5.18c-.25.33-.19.8.14 1.05a7.24 7.24 0 01-3.6 12.98l.68-.68a.75.75 0 00-.98-1.13l-.08.07-2 2a.75.75 0 00-.07.98l.07.08 2 2a.75.75 0 001.13-.98l-.07-.08-.75-.75A8.75 8.75 0 0017.3 5.04a.75.75 0 00-1.05.14zm-5.72-3.71c-.3.3-.3.77 0 1.06l.75.75a8.75 8.75 0 00-4.85 15.47.75.75 0 10.96-1.16A7.23 7.23 0 0111.2 4.8l-.68.68a.75.75 0 101.06 1.06l2-2c.3-.3.3-.77 0-1.06l-2-2a.75.75 0 00-1.06 0z" fill={primaryFill} /></svg>;
}

const ArrowSync24Regular = wrapIcon(rawSvg({}), 'ArrowSync24Regular');
export default ArrowSync24Regular;
      