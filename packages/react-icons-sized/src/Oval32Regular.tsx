import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 8a8 8 0 100 16h8a8 8 0 100-16h-8zM2 16A10 10 0 0112 6h8a10 10 0 010 20h-8A10 10 0 012 16z" fill={primaryFill} /></svg>;
}

const Oval32Regular = wrapIcon(rawSvg({}), 'Oval32Regular');
export default Oval32Regular;
      