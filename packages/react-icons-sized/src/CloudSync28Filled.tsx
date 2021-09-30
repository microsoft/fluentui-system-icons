import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 4a6.5 6.5 0 00-6.48 6h-.27a4.75 4.75 0 100 9.5H13a7.5 7.5 0 0112.41-5.67A4.75 4.75 0 0020.75 10h-.27A6.5 6.5 0 0014 4zm0 15.5a6.5 6.5 0 1013 0 6.5 6.5 0 00-13 0zm5.35-4.08a4 4 0 014.65 1.9v-.82a.5.5 0 011 0v2a.5.5 0 01-.5.5h-2a.5.5 0 010-1h.73a3 3 0 00-4.85-.87.5.5 0 01-.7-.7 4 4 0 011.67-1.01zm2.3 8.16a4 4 0 01-4.65-1.9v.82a.5.5 0 01-1 0v-2c0-.28.22-.5.5-.5h2a.5.5 0 010 1h-.73a3 3 0 004.85.87.5.5 0 01.7.7 4 4 0 01-1.67 1.01z" fill={primaryFill} /></svg>;
}

const CloudSync28Filled = wrapIcon(rawSvg({}), 'CloudSync28Filled');
export default CloudSync28Filled;
      