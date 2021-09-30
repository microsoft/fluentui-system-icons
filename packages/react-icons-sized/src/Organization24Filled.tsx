import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 5.75a3.75 3.75 0 114.5 3.68v2.07h3.25c1.24 0 2.25 1 2.25 2.25v.82a3.75 3.75 0 11-1.5 0v-.82a.75.75 0 00-.75-.75h-8a.75.75 0 00-.75.75v.82a3.75 3.75 0 11-1.5 0v-.82c0-1.24 1-2.25 2.25-2.25H11V9.43a3.75 3.75 0 01-3-3.68z" fill={primaryFill} /></svg>;
}

const Organization24Filled = wrapIcon(rawSvg({}), 'Organization24Filled');
export default Organization24Filled;
      