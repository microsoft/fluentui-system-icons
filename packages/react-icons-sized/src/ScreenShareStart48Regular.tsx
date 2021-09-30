import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 14.75c.33 0 .65.13.88.37l6 6a1.25 1.25 0 01-1.76 1.76l-3.87-3.86v12.73a1.25 1.25 0 11-2.5 0V19.02l-3.87 3.86a1.25 1.25 0 01-1.76-1.76l6-6c.23-.24.55-.37.88-.37zM8.25 8A4.25 4.25 0 004 12.25v23.5C4 38.1 5.9 40 8.25 40h31.5C42.1 40 44 38.1 44 35.75v-23.5C44 9.9 42.1 8 39.75 8H8.25zM6.5 12.25c0-.97.78-1.75 1.75-1.75h31.5c.97 0 1.75.78 1.75 1.75v23.5c0 .97-.78 1.75-1.75 1.75H8.25c-.97 0-1.75-.78-1.75-1.75v-23.5z" fill={primaryFill} /></svg>;
}

const ScreenShareStart48Regular = wrapIcon(rawSvg({}), 'ScreenShareStart48Regular');
export default ScreenShareStart48Regular;
      