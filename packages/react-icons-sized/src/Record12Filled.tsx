import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 11A5 5 0 106 1a5 5 0 000 10zm0-2a3 3 0 110-6 3 3 0 010 6z" fill={primaryFill} /></svg>;
}

const Record12Filled = wrapIcon(rawSvg({}), 'Record12Filled');
export default Record12Filled;
      