import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.75 3a1 1 0 01.92.62l3.75 9a1 1 0 11-1.84.76l-1-2.38H5.92l-1 2.38a1 1 0 01-1.84-.76l3.75-9A1 1 0 017.75 3zm0 3.6l-1 2.4h2l-1-2.4zm9.54-1.3a1 1 0 011.42 0l1.92 1.93a1 1 0 010 1.55l-1.92 1.93a1 1 0 01-1.42-1.42l.3-.29H13a1 1 0 010-2h4.59l-.3-.3a1 1 0 010-1.4zm1.42 9a1 1 0 00-1.42 1.4l.3.3H4a1 1 0 100 2h13.59l-.3.3a1 1 0 001.42 1.4l2-2a1 1 0 000-1.4l-2-2z" fill={primaryFill} /></svg>;
}

const TextDirectionHorizontalRight24Filled = wrapIcon(rawSvg({}), 'TextDirectionHorizontalRight24Filled');
export default TextDirectionHorizontalRight24Filled;
      