import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 4c0-1.1.9-2 2-2h8a2 2 0 012 2v.2L7 7.43 1 4.2V4zm6.24 4.44L13 5.34V10a2 2 0 01-2 2H3a2 2 0 01-2-2V5.34l5.76 3.1a.5.5 0 00.48 0zM5 14a2 2 0 01-1.73-1H11a3 3 0 003-3V4.27c.6.34 1 .99 1 1.73v4a4 4 0 01-4 4H5z" fill={primaryFill} /></svg>;
}

const MailAll16Filled = wrapIcon(rawSvg({}), 'MailAll16Filled');
export default MailAll16Filled;
      