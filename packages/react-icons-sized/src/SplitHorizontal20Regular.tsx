import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 10a.5.5 0 000-1h-15a.5.5 0 000 1h15zM16 4a2 2 0 00-2-2H6a2 2 0 00-2 2v4h1V4a1 1 0 011-1h8a1 1 0 011 1v4h1V4zm0 7h-1v4a1 1 0 01-1 1H6a1 1 0 01-1-1v-4H4v4c0 1.1.9 2 2 2h8a2 2 0 002-2v-4z" fill={primaryFill} /></svg>;
}

const SplitHorizontal20Regular = wrapIcon(rawSvg({}), 'SplitHorizontal20Regular');
export default SplitHorizontal20Regular;
      