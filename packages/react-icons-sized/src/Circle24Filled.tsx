import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 12a10 10 0 1120 0 10 10 0 01-20 0z" fill={primaryFill} /></svg>;
}

const Circle24Filled = wrapIcon(rawSvg({}), 'Circle24Filled');
export default Circle24Filled;
      