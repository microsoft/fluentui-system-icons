import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.57 11.84A1 1 0 016 11.02V4.98a1 1 0 011.57-.82l3.79 2.62c.85.59.85 1.85 0 2.44l-3.79 2.62zM7 11.02l3.78-2.61a.5.5 0 000-.82L7 4.98v6.04z" fill={primaryFill} /></svg>;
}

const CaretRight16Regular = wrapIcon(rawSvg({}), 'CaretRight16Regular');
export default CaretRight16Regular;
      