import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 4A3.25 3.25 0 002 7.25v9.5C2 18.55 3.46 20 5.25 20h6.87a4.31 4.31 0 01-.12-1v-.5a2.5 2.5 0 012.5-2.5h.95A3.74 3.74 0 0118 9.5a3.75 3.75 0 013.74 3.5H22V7.25C22 5.45 20.54 4 18.75 4H5.25zM21.5 17c.83 0 1.5.67 1.5 1.5v.5c0 1.97-1.86 4-5 4-3.14 0-5-2.03-5-4v-.5c0-.83.67-1.5 1.5-1.5h7zM18 10.5a2.75 2.75 0 110 5.5 2.75 2.75 0 010-5.5z" fill={primaryFill} /></svg>;
}

const ShareScreenPerson24Filled = wrapIcon(rawSvg({}), 'ShareScreenPerson24Filled');
export default ShareScreenPerson24Filled;
      