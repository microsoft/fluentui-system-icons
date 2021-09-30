import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 17.75v1.5a.75.75 0 001.5 0v-1.5a.75.75 0 00-1.5 0z" fill={primaryFill} /></svg>;
}

const CellularData524Regular = wrapIcon(rawSvg({}), 'CellularData524Regular');
export default CellularData524Regular;
      