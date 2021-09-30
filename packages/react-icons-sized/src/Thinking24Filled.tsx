import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 18a2 2 0 110 4 2 2 0 010-4zm5.5-3a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM12 2a5.41 5.41 0 015.33 4.47h.08a3.76 3.76 0 110 7.53H6.6a3.76 3.76 0 110-7.53h.08A5.41 5.41 0 0112 2z" fill={primaryFill} /></svg>;
}

const Thinking24Filled = wrapIcon(rawSvg({}), 'Thinking24Filled');
export default Thinking24Filled;
      