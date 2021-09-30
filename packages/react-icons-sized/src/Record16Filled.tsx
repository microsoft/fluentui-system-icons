import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 8a7 7 0 1114 0A7 7 0 011 8zm7 4a4 4 0 100-8 4 4 0 000 8z" fill={primaryFill} /></svg>;
}

const Record16Filled = wrapIcon(rawSvg({}), 'Record16Filled');
export default Record16Filled;
      