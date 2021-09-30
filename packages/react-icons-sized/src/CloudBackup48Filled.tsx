import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 6a11 11 0 00-10.96 10h-.29a7.75 7.75 0 000 15.5h7.34a13 13 0 0122.86-6.87 7.75 7.75 0 00-7.7-8.63h-.3A11 11 0 0024 6zm20 27a11 11 0 10-22 0 11 11 0 0022 0zm-11-8a1 1 0 01.7.3l5 5a1 1 0 01-1.4 1.4L34 28.42V40a1 1 0 11-2 0V28.41l-3.3 3.3a1 1 0 01-1.4-1.42l5-5A1 1 0 0133 25z" fill={primaryFill} /></svg>;
}

const CloudBackup48Filled = wrapIcon(rawSvg({}), 'CloudBackup48Filled');
export default CloudBackup48Filled;
      