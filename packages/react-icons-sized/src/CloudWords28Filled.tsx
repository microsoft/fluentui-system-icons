import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.52 12a6.5 6.5 0 0112.96 0h.27a4.75 4.75 0 110 9.5H7.25a4.75 4.75 0 110-9.5h.27zm4.23-1a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5zM6 16.75c0 .41.34.75.75.75h5.5a.75.75 0 000-1.5h-5.5a.75.75 0 00-.75.75zm9.75-.75a.75.75 0 000 1.5h5.5a.75.75 0 000-1.5h-5.5z" fill={primaryFill} /></svg>;
}

const CloudWords28Filled = wrapIcon(rawSvg({}), 'CloudWords28Filled');
export default CloudWords28Filled;
      