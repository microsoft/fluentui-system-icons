import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 2a12 12 0 100 24 12 12 0 000-24zm0 19.5a7.5 7.5 0 110-15 7.5 7.5 0 010 15z" fill={primaryFill} /></svg>;
}

const Record28Filled = wrapIcon(rawSvg({}), 'Record28Filled');
export default Record28Filled;
      