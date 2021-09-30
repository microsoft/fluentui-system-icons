import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 1c.28 0 .5.22.5.5v3.8l1.15-1.15a.5.5 0 11.7.7l-2 2a.5.5 0 01-.7 0l-2-2a.5.5 0 11.7-.7L5.5 5.29V1.5c0-.28.22-.5.5-.5zm0 10a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill={primaryFill} /></svg>;
}

const ArrowStepIn12Filled = wrapIcon(rawSvg({}), 'ArrowStepIn12Filled');
export default ArrowStepIn12Filled;
      