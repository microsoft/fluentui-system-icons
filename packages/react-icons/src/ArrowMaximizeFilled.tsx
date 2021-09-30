import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 3a1 1 0 011 1v5.25a.75.75 0 01-1.5 0v-3.7L5.56 15.5h3.69a.75.75 0 010 1.5H4a1 1 0 01-1-1v-5.25a.75.75 0 011.5 0v3.69l9.94-9.94h-3.69a.75.75 0 010-1.5H16z" fill={primaryFill} /></svg>;
}

const ArrowMaximizeFilled = wrapIcon(rawSvg({}), 'ArrowMaximizeFilled');
export default ArrowMaximizeFilled;
      