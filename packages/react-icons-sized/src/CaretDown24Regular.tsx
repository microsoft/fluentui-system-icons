import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.16 10.07C4.46 9.27 5.03 8 6.1 8h11.8c1.07 0 1.65 1.26.94 2.07l-5.52 6.31c-.7.8-1.94.8-2.64 0l-5.52-6.3zm1.5-.57l5.15 5.9c.1.11.28.11.38 0l5.16-5.9H6.65z" fill={primaryFill} /></svg>;
}

const CaretDown24Regular = wrapIcon(rawSvg({}), 'CaretDown24Regular');
export default CaretDown24Regular;
      