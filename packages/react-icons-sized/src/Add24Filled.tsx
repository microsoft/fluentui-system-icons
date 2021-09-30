import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.88 3H12a1 1 0 011 .88V11h7a1 1 0 011 .88V12a1 1 0 01-.88 1H13v7a1 1 0 01-.88 1H12a1 1 0 01-1-.88V13H4a1 1 0 01-1-.88V12a1 1 0 01.88-1H11V4a1 1 0 01.88-1H12h-.12z" fill={primaryFill} /></svg>;
}

const Add24Filled = wrapIcon(rawSvg({}), 'Add24Filled');
export default Add24Filled;
      