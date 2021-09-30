import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 7.25C4 5.45 5.46 4 7.25 4h33.5C42.55 4 44 5.46 44 7.25v2.5c0 1.35-.83 2.51-2 3V26a18 18 0 01-36 0V12.75a3.25 3.25 0 01-2-3v-2.5zM8.5 13v13a15.5 15.5 0 0031 0V13h-31zm33-3.25v-2.5a.75.75 0 00-.75-.75H7.25a.75.75 0 00-.75.75v2.5c0 .41.34.75.75.75h33.5c.41 0 .75-.34.75-.75zM15.5 27a8.5 8.5 0 1117 0 8.5 8.5 0 01-17 0zM24 16a11 11 0 100 22 11 11 0 000-22zm-6 11a6 6 0 1112 0 6 6 0 01-12 0z" fill={primaryFill} /></svg>;
}

const CameraDome48Regular = wrapIcon(rawSvg({}), 'CameraDome48Regular');
export default CameraDome48Regular;
      