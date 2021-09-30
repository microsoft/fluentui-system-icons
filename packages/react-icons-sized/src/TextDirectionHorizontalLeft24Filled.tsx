import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.25 3a1 1 0 00-.92.62l-3.75 9a1 1 0 101.84.76l1-2.38h3.66l1 2.38a1 1 0 001.84-.76l-3.75-9a1 1 0 00-.92-.62zm0 3.6l1 2.4h-2l1-2.4zM6.71 5.3a1 1 0 00-1.42 0L3.37 7.22a1 1 0 000 1.55l1.92 1.93a1 1 0 001.42-1.42L6.4 9H11a1 1 0 000-2H6.41l.3-.3a1 1 0 000-1.4zm-1.42 9a1 1 0 011.42 1.4l-.3.3H20a1 1 0 010 2H6.41l.3.3a1 1 0 11-1.42 1.4l-2-2a1 1 0 010-1.4l2-2z" fill={primaryFill} /></svg>;
}

const TextDirectionHorizontalLeft24Filled = wrapIcon(rawSvg({}), 'TextDirectionHorizontalLeft24Filled');
export default TextDirectionHorizontalLeft24Filled;
      