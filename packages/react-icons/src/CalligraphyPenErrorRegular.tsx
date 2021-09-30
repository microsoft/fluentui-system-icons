import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.5 10a4.5 4.5 0 100-9 4.5 4.5 0 000 9zM14 3.5a.5.5 0 011 0v2a.5.5 0 01-1 0v-2zm1.13 4a.62.62 0 11-1.25 0 .62.62 0 011.24 0zm-.28 3.49a5.64 5.64 0 01-1.09-.04l-3.26 5.56v-5.64a1 1 0 10-1 0v5.64l-3.28-5.6a1.5 1.5 0 01-.07-1.4L7.82 6h1.2a5.57 5.57 0 010-1H6.5a.5.5 0 01-.5-.5v-2a.5.5 0 00-1 0v2C5 5.33 5.67 6 6.5 6h.21L5.25 9.08a2.5 2.5 0 00.1 2.33l3.47 5.91a1.37 1.37 0 002.36 0l3.47-5.9c.08-.14.14-.28.2-.43z" fill={primaryFill} /></svg>;
}

const CalligraphyPenErrorRegular = wrapIcon(rawSvg({}), 'CalligraphyPenErrorRegular');
export default CalligraphyPenErrorRegular;
      