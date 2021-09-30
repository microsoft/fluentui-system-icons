import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 3a1 1 0 011-1h1.75a1 1 0 010 2H5a1 1 0 01-1-1zm5.25 0a1 1 0 011-1h3.5a1 1 0 110 2h-3.5a1 1 0 01-1-1zm7 0a1 1 0 011-1H19a1 1 0 110 2h-1.75a1 1 0 01-1-1zM4 21a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zm8.7-15.7a1 1 0 00-1.4 0l-5 5a1 1 0 101.4 1.4L11 8.42V18a1 1 0 102 0V8.41l3.3 3.3a1 1 0 001.4-1.42l-5-5z" fill={primaryFill} /></svg>;
}

const PaddingTop24Filled = wrapIcon(rawSvg({}), 'PaddingTop24Filled');
export default PaddingTop24Filled;
      