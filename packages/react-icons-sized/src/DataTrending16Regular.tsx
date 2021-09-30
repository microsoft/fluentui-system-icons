import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.5 2c.28 0 .5.22.5.5v10c0 .28.22.5.5.5h10a.5.5 0 010 1h-10A1.5 1.5 0 012 12.5v-10c0-.28.22-.5.5-.5zm8 3a.5.5 0 010-1h3c.28 0 .5.22.5.5v3.08a.5.5 0 01-1 0V5.7L9.35 9.35a.5.5 0 01-.7 0L7 7.71 4.85 9.85a.5.5 0 01-.7-.7l2.5-2.5c.2-.2.5-.2.7 0L9 8.29 12.3 5h-1.8z" fill={primaryFill} /></svg>;
}

const DataTrending16Regular = wrapIcon(rawSvg({}), 'DataTrending16Regular');
export default DataTrending16Regular;
      