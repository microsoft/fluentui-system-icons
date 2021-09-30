import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 4.25a.75.75 0 00-1.5 0v14.5c0 .97.78 1.75 1.75 1.75h14.5a.75.75 0 000-1.5H5.25a.25.25 0 01-.25-.25V4.25zm9 2.5c0-.41.34-.75.75-.75h5c.42 0 .75.34.75.75v5a.75.75 0 11-1.5 0v-3.2l-5.22 5.23c-.3.3-.77.3-1.06 0l-1.97-1.97-3.22 3.22a.75.75 0 01-1.06-1.06l3.75-3.75c.3-.3.77-.3 1.06 0l1.97 1.97 4.69-4.69h-3.19a.75.75 0 01-.75-.75z" fill={primaryFill} /></svg>;
}

const DataTrending24Regular = wrapIcon(rawSvg({}), 'DataTrending24Regular');
export default DataTrending24Regular;
      