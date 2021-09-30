import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 1.5a.5.5 0 00-1 0v13a.5.5 0 001 0v-13zM6 13v-1H3a1 1 0 01-1-1V5a1 1 0 011-1h3V3H3a2 2 0 00-2 2v6c0 1.1.9 2 2 2h3zm6 0H9v-1h3a1 1 0 001-1V5a1 1 0 00-1-1H9V3h3a2 2 0 012 2v6a2 2 0 01-2 2z" fill={primaryFill} /></svg>;
}

const SplitVertical16Regular = wrapIcon(rawSvg({}), 'SplitVertical16Regular');
export default SplitVertical16Regular;
      