import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.16 14.9c-.7.82-.13 2.08.94 2.08h11.8c1.07 0 1.65-1.26.94-2.07L13.32 8.6c-.7-.8-1.94-.8-2.64 0l-5.52 6.3zm1.5.58l5.15-5.9c.1-.1.28-.1.38 0l5.16 5.9H6.65z" fill={primaryFill} /></svg>;
}

const CaretUp24Regular = wrapIcon(rawSvg({}), 'CaretUp24Regular');
export default CaretUp24Regular;
      