import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 1.75a.75.75 0 00-1.5 0V5H1.75a.75.75 0 000 1.5H5v3.25a.75.75 0 001.5 0V6.5h3.25a.75.75 0 000-1.5H6.5V1.75z" fill={primaryFill} /></svg>;
}

const Add12Filled = wrapIcon(rawSvg({}), 'Add12Filled');
export default Add12Filled;
      