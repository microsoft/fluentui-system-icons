import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.5 9c0 .65-.42 1.2-1 1.41v2.09a.5.5 0 01-1 0v-2.09a1.5 1.5 0 112-1.41z" fill={primaryFill} /><path d="M10.28 2.08a.5.5 0 00-.56 0 15.05 15.05 0 01-6.3 2.43A.5.5 0 003 5v4.5c0 3.9 2.3 6.73 6.82 8.47a.5.5 0 00.36 0C14.69 16.23 17 13.39 17 9.5V5a.5.5 0 00-.43-.5 15.05 15.05 0 01-6.3-2.42zM4 5.43a15.97 15.97 0 005.6-2.08l.4-.25.4.25A15.97 15.97 0 0016 5.43V9.5c0 3.4-1.97 5.86-6 7.46-4.03-1.6-6-4.07-6-7.46V5.43z" fill={primaryFill} /></svg>;
}

const ShieldKeyhole20Regular = wrapIcon(rawSvg({}), 'ShieldKeyhole20Regular');
export default ShieldKeyhole20Regular;
      