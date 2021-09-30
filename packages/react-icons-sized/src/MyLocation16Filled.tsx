import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 10.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm.75-8.75a.75.75 0 00-1.5 0v1.3a5 5 0 00-4.2 4.2h-1.3a.75.75 0 000 1.5h1.3a5 5 0 004.2 4.2v1.3a.75.75 0 001.5 0v-1.3a5 5 0 004.2-4.2h1.3a.75.75 0 000-1.5h-1.3a5 5 0 00-4.2-4.2v-1.3zM8 11.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7z" fill={primaryFill} /></svg>;
}

const MyLocation16Filled = wrapIcon(rawSvg({}), 'MyLocation16Filled');
export default MyLocation16Filled;
      