import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 4a3 3 0 00-2.96 2.5A2.5 2.5 0 009.73 8.6l-.44 2.66a1.5 1.5 0 01-1.33 1.24 3 3 0 100 1 2.5 2.5 0 002.31-2.08l.44-2.66a1.5 1.5 0 011.33-1.24A3 3 0 1015 4z" fill={primaryFill} /></svg>;
}

const FlowFilled = wrapIcon(rawSvg({}), 'FlowFilled');
export default FlowFilled;
      