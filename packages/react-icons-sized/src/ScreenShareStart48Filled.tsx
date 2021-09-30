import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.25 8A4.25 4.25 0 004 12.25v23.5C4 38.1 5.9 40 8.25 40h31.5C42.1 40 44 38.1 44 35.75v-23.5C44 9.9 42.1 8 39.75 8H8.25zM24 14.75c.33 0 .65.13.88.37l6 6a1.25 1.25 0 01-1.76 1.76l-3.87-3.86v12.73a1.25 1.25 0 11-2.5 0V19.02l-3.87 3.86a1.25 1.25 0 01-1.76-1.76l6-6c.23-.24.55-.37.88-.37z" fill={primaryFill} /></svg>;
}

const ScreenShareStart48Filled = wrapIcon(rawSvg({}), 'ScreenShareStart48Filled');
export default ScreenShareStart48Filled;
      