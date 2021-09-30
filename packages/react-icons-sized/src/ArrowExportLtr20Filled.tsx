import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.75 3.75c.41 0 .75.34.75.75v11a.75.75 0 01-1.5 0v-11c0-.41.34-.75.75-.75zM5 10c0-.41.34-.75.75-.75h10.19l-2.72-2.72a.75.75 0 011.06-1.06l4 4a.77.77 0 01.15.22.75.75 0 01-.15.84l-4 4a.75.75 0 11-1.06-1.06l2.72-2.72H5.75A.75.75 0 015 10z" fill={primaryFill} /></svg>;
}

const ArrowExportLtr20Filled = wrapIcon(rawSvg({}), 'ArrowExportLtr20Filled');
export default ArrowExportLtr20Filled;
      