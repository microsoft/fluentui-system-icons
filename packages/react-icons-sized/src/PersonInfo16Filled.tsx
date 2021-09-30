import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.63 5.07a5.5 5.5 0 00-3.3 1.85 2.75 2.75 0 113.3-1.85zM5.6 8a5.48 5.48 0 00.62 5.96C3.55 13.66 2 11.8 2 10v-.5C2 8.67 2.67 8 3.5 8h2.1zm4.28.5a.62.62 0 111.24 0 .62.62 0 01-1.24 0zm1.12 4a.5.5 0 01-1 0v-2a.5.5 0 011 0v2zm-5-2a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zm1 0a3.5 3.5 0 107 0 3.5 3.5 0 00-7 0z" fill={primaryFill} /></svg>;
}

const PersonInfo16Filled = wrapIcon(rawSvg({}), 'PersonInfo16Filled');
export default PersonInfo16Filled;
      