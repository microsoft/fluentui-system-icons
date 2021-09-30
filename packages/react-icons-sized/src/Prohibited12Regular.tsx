import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 1a5 5 0 100 10A5 5 0 006 1zM2 6a4 4 0 016.45-3.16l-5.6 5.61A3.98 3.98 0 012 6zm1.55 3.16l5.61-5.61a4 4 0 01-5.61 5.61z" fill={primaryFill} /></svg>;
}

const Prohibited12Regular = wrapIcon(rawSvg({}), 'Prohibited12Regular');
export default Prohibited12Regular;
      