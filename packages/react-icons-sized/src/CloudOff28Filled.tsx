import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06L8.3 9.37c-.43.79-.7 1.68-.78 2.63h-.27a4.75 4.75 0 100 9.5h13.19l4.28 4.28a.75.75 0 001.06-1.06L3.28 2.22zm7.04 4.92l13.35 13.35A4.74 4.74 0 0020.75 12h-.27a6.5 6.5 0 00-10.16-4.86z" fill={primaryFill} /></svg>;
}

const CloudOff28Filled = wrapIcon(rawSvg({}), 'CloudOff28Filled');
export default CloudOff28Filled;
      