import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.35 2.65a2.62 2.62 0 00-3.7 0l-5.5 5.5a.5.5 0 00-.14.23l-1 4a.5.5 0 00.61.6l4-1a.5.5 0 00.23-.13l5.5-5.5a2.62 2.62 0 000-3.7z" fill={primaryFill} /><path d="M15.94 9.18a6 6 0 11-5.12-5.12l.86-.86A7.02 7.02 0 003 10a7 7 0 1013.8-1.68l-.86.86z" fill={primaryFill} /></svg>;
}

const Status20Filled = wrapIcon(rawSvg({}), 'Status20Filled');
export default Status20Filled;
      