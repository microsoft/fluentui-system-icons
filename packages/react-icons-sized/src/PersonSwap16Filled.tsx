import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.44 12.56l1.7 1.69H8c-3.14 0-5-2.03-5-4v-.5c0-.83.67-1.5 1.5-1.5h4.17a1.5 1.5 0 00-.23.19l-2 2a1.5 1.5 0 000 2.12z" fill={primaryFill} /><path d="M8 1.75a2.75 2.75 0 110 5.5 2.75 2.75 0 010-5.5z" fill={primaryFill} /><path d="M8.71 12h4.58l-1.14 1.14a.5.5 0 10.7.7l2-1.99a.5.5 0 000-.7l-2-2a.5.5 0 00-.7.7L13.29 11H8.71l1.15-1.15a.5.5 0 00-.71-.7l-2 2a.5.5 0 000 .7l2 2a.5.5 0 00.7-.7L8.72 12z" fill={primaryFill} /></svg>;
}

const PersonSwap16Filled = wrapIcon(rawSvg({}), 'PersonSwap16Filled');
export default PersonSwap16Filled;
      