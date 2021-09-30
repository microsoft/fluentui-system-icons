import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.75 1.75c.41 0 .75.34.75.75v9.75c0 .14.11.25.25.25h9.75a.75.75 0 010 1.5H3.75C2.78 14 2 13.22 2 12.25V2.5c0-.41.34-.75.75-.75zM10.5 5.5a.75.75 0 010-1.5h2.75c.41 0 .75.34.75.75v2.83a.75.75 0 01-1.5 0V6.56L9.53 9.53c-.3.3-.77.3-1.06 0L7 8.06l-.97.97a.75.75 0 01-1.06-1.06l1.5-1.5c.3-.3.77-.3 1.06 0L9 7.94l2.44-2.44h-.94z" fill={primaryFill} /></svg>;
}

const DataTrending16Filled = wrapIcon(rawSvg({}), 'DataTrending16Filled');
export default DataTrending16Filled;
      