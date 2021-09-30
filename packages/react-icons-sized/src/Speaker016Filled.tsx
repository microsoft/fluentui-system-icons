import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 2.5a.5.5 0 00-.85-.36L5.22 5H3.5C2.67 5 2 5.66 2 6.5v3c0 .82.67 1.5 1.5 1.5h1.72l2.93 2.87A.5.5 0 009 13.5v-11z" fill={primaryFill} /></svg>;
}

const Speaker016Filled = wrapIcon(rawSvg({}), 'Speaker016Filled');
export default Speaker016Filled;
      