import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 10V4c0-1.1.9-2 2-2h8a2 2 0 012 2v6a2 2 0 01-2 2H3a2 2 0 01-2-2zm10-7H3a1 1 0 00-1 1v.74l5 2.7 5-2.7V4a1 1 0 00-1-1zM6.76 8.44L2 5.88V10a1 1 0 001 1h8a1 1 0 001-1V5.88L7.24 8.44a.5.5 0 01-.48 0zM5 14a2 2 0 01-1.73-1H11a3 3 0 003-3V4.27c.6.34 1 .99 1 1.73v4a4 4 0 01-4 4H5z" fill={primaryFill} /></svg>;
}

const MailAll16Regular = wrapIcon(rawSvg({}), 'MailAll16Regular');
export default MailAll16Regular;
      