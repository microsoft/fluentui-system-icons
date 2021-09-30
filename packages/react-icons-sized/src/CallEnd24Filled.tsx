import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.95 13l-.2 1.03a1.92 1.92 0 01-2.12 1.52l-2.05-.2a2.16 2.16 0 01-1.87-1.56l-.64-2.35a8.1 8.1 0 00-6.23.18l-.39 2.2a1.9 1.9 0 01-1.7 1.55l-2.04.2a2.17 2.17 0 01-2.28-1.5l-.3-1.04a2.82 2.82 0 01.71-2.86c1.78-1.73 4.75-2.6 8.9-2.6 4.17 0 7.23.86 9.2 2.59.82.73 1.2 1.8 1 2.83z" fill={primaryFill} /></svg>;
}

const CallEnd24Filled = wrapIcon(rawSvg({}), 'CallEnd24Filled');
export default CallEnd24Filled;
      