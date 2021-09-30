import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21 4a1 1 0 10-2 0v16a1 1 0 102 0V4z" fill={primaryFill} /><path d="M3 4.95a1.75 1.75 0 012.77-1.42l10.47 7.5c1 .72.97 2.23-.08 2.9L5.7 20.64A1.75 1.75 0 013 19.17V4.95z" fill={primaryFill} /></svg>;
}

const Next24Filled = wrapIcon(rawSvg({}), 'Next24Filled');
export default Next24Filled;
      