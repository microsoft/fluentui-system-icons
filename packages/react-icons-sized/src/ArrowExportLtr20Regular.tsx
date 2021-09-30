import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.5 4c.28 0 .5.22.5.5v11a.5.5 0 01-1 0v-11c0-.28.22-.5.5-.5zM5 10c0-.28.22-.5.5-.5h10.8l-3.15-3.15a.5.5 0 01.7-.7l4 4a.5.5 0 010 .7l-4 4a.5.5 0 01-.7-.7l3.14-3.15H5.5A.5.5 0 015 10z" fill={primaryFill} /></svg>;
}

const ArrowExportLtr20Regular = wrapIcon(rawSvg({}), 'ArrowExportLtr20Regular');
export default ArrowExportLtr20Regular;
      