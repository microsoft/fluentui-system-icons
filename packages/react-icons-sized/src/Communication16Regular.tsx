import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 3a6 6 0 00-4.25 10.24.5.5 0 11-.7.7 7 7 0 119.9 0 .5.5 0 11-.7-.7A6 6 0 008 3z" fill={primaryFill} /><path d="M8 5.5a3.5 3.5 0 00-2.47 5.97.5.5 0 11-.71.71A4.49 4.49 0 018 4.5a4.5 4.5 0 013.18 7.68.5.5 0 01-.7-.7A3.5 3.5 0 008 5.5z" fill={primaryFill} /><path d="M8 7a2 2 0 100 4 2 2 0 000-4zM7 9a1 1 0 112 0 1 1 0 01-2 0z" fill={primaryFill} /></svg>;
}

const Communication16Regular = wrapIcon(rawSvg({}), 'Communication16Regular');
export default Communication16Regular;
      