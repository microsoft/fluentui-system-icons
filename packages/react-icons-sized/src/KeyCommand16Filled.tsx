import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1.5 4a2.5 2.5 0 015 0v1h3V4A2.5 2.5 0 1112 6.5h-1v3h1A2.5 2.5 0 119.5 12v-1h-3v1A2.5 2.5 0 114 9.5h1v-3H4A2.5 2.5 0 011.5 4zm9.5 7v1a1 1 0 101-1h-1zM9.5 9.5v-3h-3v3h3zM12 5a1 1 0 10-1-1v1h1zm-7 6H4a1 1 0 101 1v-1zm0-7a1 1 0 10-1 1h1V4z" fill={primaryFill} /></svg>;
}

const KeyCommand16Filled = wrapIcon(rawSvg({}), 'KeyCommand16Filled');
export default KeyCommand16Filled;
      