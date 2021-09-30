import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 1c.28 0 .5.22.5.5v.93c.16.07.3.17.43.3l3.72 3.7a1.5 1.5 0 010 2.13l-5.07 5.07c-.6.6-1.57.58-2.15-.03L1.31 9.8a1.5 1.5 0 01.03-2.1L6.3 2.74c.2-.2.44-.33.69-.4V1.5c0-.28.22-.5.5-.5zM7 4.5V3.46L2.46 8h8.83l.15-.15a.5.5 0 000-.7L8 3.7v.79a.5.5 0 11-1 0zM1.95 9a.5.5 0 00.09.11l3.62 3.8c.19.2.51.21.71.01L10.3 9H1.95z" fill={primaryFill} /><path d="M12.92 10.22a.56.56 0 00-.84 0l-1.15 1.32a2.09 2.09 0 103.14 0l-1.15-1.32zm-1.24 1.98l.82-.94.82.94a1.09 1.09 0 11-1.64 0z" fill={primaryFill} /></svg>;
}

const PaintBucket16Regular = wrapIcon(rawSvg({}), 'PaintBucket16Regular');
export default PaintBucket16Regular;
      