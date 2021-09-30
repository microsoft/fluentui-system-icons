import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 7.75A3.75 3.75 0 015.75 4h16.5A3.75 3.75 0 0126 7.75v12.5A3.75 3.75 0 0122.25 24H5.75A3.75 3.75 0 012 20.25V7.75zM5.75 5.5c-1.24 0-2.25 1-2.25 2.25v12.5c0 1.24 1.01 2.25 2.25 2.25h16.5c1.24 0 2.25-1 2.25-2.25V7.75c0-1.24-1-2.25-2.25-2.25H5.75z" fill={primaryFill} /></svg>;
}

const RectangleLandscape28Regular = wrapIcon(rawSvg({}), 'RectangleLandscape28Regular');
export default RectangleLandscape28Regular;
      