import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 11.5a1 1 0 100-2 1 1 0 000 2zm0-9c-.83 0-1.5.67-1.5 1.5v2h5c.83 0 1.5.67 1.5 1.5v6c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 013 13.5v-6C3 6.67 3.67 6 4.5 6h1V4a2.5 2.5 0 015 0 .5.5 0 01-1 0c0-.83-.67-1.5-1.5-1.5zM4.5 7a.5.5 0 00-.5.5v6c0 .28.22.5.5.5h7a.5.5 0 00.5-.5v-6a.5.5 0 00-.5-.5h-7z" fill={primaryFill} /></svg>;
}

const LockOpen16Regular = wrapIcon(rawSvg({}), 'LockOpen16Regular');
export default LockOpen16Regular;
      