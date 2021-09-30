import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 14.25C4 10.8 6.8 8 10.25 8h27.5C41.2 8 44 10.8 44 14.25v19.5C44 37.2 41.2 40 37.75 40h-27.5A6.25 6.25 0 014 33.75v-19.5zm6.25-3.75a3.75 3.75 0 00-3.75 3.75v19.5a3.75 3.75 0 003.75 3.75h27.5a3.75 3.75 0 003.75-3.75v-19.5a3.75 3.75 0 00-3.75-3.75h-27.5z" fill={primaryFill} /></svg>;
}

const RectangleLandscape48Regular = wrapIcon(rawSvg({}), 'RectangleLandscape48Regular');
export default RectangleLandscape48Regular;
      