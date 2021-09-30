import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.75 17c.38 0 .7.28.74.65l.01.1v1.5a.75.75 0 01-1.5.1v-1.6c0-.41.34-.75.75-.75zm4-3c.38 0 .7.28.74.65l.01.1v4.5a.75.75 0 01-1.5.1v-4.6c0-.41.34-.75.75-.75z" fill={primaryFill} /></svg>;
}

const CellularData424Regular = wrapIcon(rawSvg({}), 'CellularData424Regular');
export default CellularData424Regular;
      