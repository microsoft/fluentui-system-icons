import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.8 9.19A4.25 4.25 0 0120.52 7h6.96c1.55 0 2.97.84 3.72 2.19l1.29 2.31h3.76A5.75 5.75 0 0142 17.25v6.8a12.94 12.94 0 00-10.41-1.6 8 8 0 10-9.4 10.34 13.09 13.09 0 00.8 7.21H11.76A5.75 5.75 0 016 34.25v-17a5.75 5.75 0 015.75-5.75h3.76l1.29-2.31z" fill={primaryFill} /><path d="M24 19.5a5.5 5.5 0 00-1.15 10.88 13.05 13.05 0 016.4-7.04A5.5 5.5 0 0024 19.5z" fill={primaryFill} /><path d="M35 46a11 11 0 100-22 11 11 0 000 22zm0-18a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5h-5a1 1 0 110-2h5v-5a1 1 0 011-1z" fill={primaryFill} /></svg>;
}

const CameraAdd48Filled = wrapIcon(rawSvg({}), 'CameraAdd48Filled');
export default CameraAdd48Filled;
      