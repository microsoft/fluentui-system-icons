import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 4.5a.75.75 0 00-1.1-.66L4.9 10.1a.75.75 0 00.35 1.41h11.5c.41 0 .75-.34.75-.75V4.5zm-2 5h-5.33l5.33-2.9v2.9z" fill={primaryFill} /><path d="M17.5 19.5a.75.75 0 01-1.1.66L4.9 13.9a.75.75 0 01.35-1.41h11.5c.41 0 .75.34.75.75v6.25z" fill={primaryFill} /></svg>;
}

const FlipVertical24Filled = wrapIcon(rawSvg({}), 'FlipVertical24Filled');
export default FlipVertical24Filled;
      