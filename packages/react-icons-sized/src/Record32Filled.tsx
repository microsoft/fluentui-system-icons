import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 2a14 14 0 100 28 14 14 0 000-28zm0 23a9 9 0 110-18 9 9 0 010 18z" fill={primaryFill} /></svg>;
}

const Record32Filled = wrapIcon(rawSvg({}), 'Record32Filled');
export default Record32Filled;
      