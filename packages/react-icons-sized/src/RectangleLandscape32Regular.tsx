import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 8.5A4.5 4.5 0 016.5 4h19A4.5 4.5 0 0130 8.5v15a4.5 4.5 0 01-4.5 4.5h-19A4.5 4.5 0 012 23.5v-15zM6.5 6A2.5 2.5 0 004 8.5v15A2.5 2.5 0 006.5 26h19a2.5 2.5 0 002.5-2.5v-15A2.5 2.5 0 0025.5 6h-19z" fill={primaryFill} /></svg>;
}

const RectangleLandscape32Regular = wrapIcon(rawSvg({}), 'RectangleLandscape32Regular');
export default RectangleLandscape32Regular;
      