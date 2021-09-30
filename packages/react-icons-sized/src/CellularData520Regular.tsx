import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 12a.5.5 0 01.5.41v3.09a.5.5 0 01-1 .09V12.5c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
}

const CellularData520Regular = wrapIcon(rawSvg({}), 'CellularData520Regular');
export default CellularData520Regular;
      