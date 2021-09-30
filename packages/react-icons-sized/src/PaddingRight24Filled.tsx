import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 4a1 1 0 011 1v14a1 1 0 11-2 0V5a1 1 0 011-1zm18 0a1 1 0 011 1v1.75a1 1 0 11-2 0V5a1 1 0 011-1zm0 5.25a1 1 0 011 1v3.5a1 1 0 11-2 0v-3.5a1 1 0 011-1zm0 7a1 1 0 011 1V19a1 1 0 11-2 0v-1.75a1 1 0 011-1zm-2.3-3.54a1 1 0 000-1.42l-5-5a1 1 0 10-1.4 1.42L15.58 11H6a1 1 0 100 2h9.59l-3.3 3.3a1 1 0 001.42 1.4l5-5z" fill={primaryFill} /></svg>;
}

const PaddingRight24Filled = wrapIcon(rawSvg({}), 'PaddingRight24Filled');
export default PaddingRight24Filled;
      