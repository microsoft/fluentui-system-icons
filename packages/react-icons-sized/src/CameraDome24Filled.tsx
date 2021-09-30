import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 3.75C2 2.78 2.78 2 3.75 2h16.5a1.75 1.75 0 110 3.5H3.75C2.78 5.5 2 4.72 2 3.75zM12 17.5a4 4 0 100-8 4 4 0 000 8zm2.5-4a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM3 7h18v6a9 9 0 11-18 0V7zm9 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11z" fill={primaryFill} /></svg>;
}

const CameraDome24Filled = wrapIcon(rawSvg({}), 'CameraDome24Filled');
export default CameraDome24Filled;
      