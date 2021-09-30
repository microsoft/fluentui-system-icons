import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 4a1 1 0 00-1 1v1.75a1 1 0 002 0V5a1 1 0 00-1-1zm0 5.25a1 1 0 00-1 1v3.5a1 1 0 102 0v-3.5a1 1 0 00-1-1zm0 7a1 1 0 00-1 1V19a1 1 0 102 0v-1.75a1 1 0 00-1-1zM21 4a1 1 0 00-1 1v14a1 1 0 102 0V5a1 1 0 00-1-1zM5.3 12.7a1 1 0 010-1.4l5-5a1 1 0 111.4 1.4L8.42 11H18a1 1 0 110 2H8.41l3.3 3.3a1 1 0 01-1.42 1.4l-5-5z" fill={primaryFill} /></svg>;
}

const PaddingLeft24Filled = wrapIcon(rawSvg({}), 'PaddingLeft24Filled');
export default PaddingLeft24Filled;
      