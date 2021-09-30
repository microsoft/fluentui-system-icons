import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.7 5.3a1 1 0 11-1.4 1.4l-.3-.29V20a1 1 0 11-2 0V6.41l-.3.3a1 1 0 01-1.4-1.42l2-2a1 1 0 011.4 0l2 2zM3.63 17.16l9 3.75a1 1 0 10.76-1.84l-2.38-1v-3.66l2.38-1a1 1 0 00-.76-1.84l-9 3.75a1 1 0 000 1.84zm5.38.08l-2.4-1 2.4-1v2zm1.7-10.54a1 1 0 000-1.42l-2-2a1 1 0 00-1.4 0l-2 2a1 1 0 101.4 1.42l.3-.3V10a1 1 0 102 0V6.41l.3.3a1 1 0 001.4 0z" fill={primaryFill} /></svg>;
}

const TextDirectionRotate270Right24Filled = wrapIcon(rawSvg({}), 'TextDirectionRotate270Right24Filled');
export default TextDirectionRotate270Right24Filled;
      