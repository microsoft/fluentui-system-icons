import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 5.5a.5.5 0 100-1 .5.5 0 000 1zm2.5 0a.5.5 0 11-1 0 .5.5 0 011 0zM11.5 7a.5.5 0 11-1 0 .5.5 0 011 0zM11 9.5a.5.5 0 100-1 .5.5 0 000 1zm-.5 1.5a.5.5 0 11-1 0 .5.5 0 011 0zM8 2a6 6 0 00-6 6c0 1.1.9 2 2 2 .7 0 1.09-.38 1.34-.63l.01-.02C5.6 9.11 5.72 9 6 9a1 1 0 011 1v1a3 3 0 003 3c1.33 0 2.35-.75 3.02-1.85.65-1.1.98-2.57.98-4.15a6 6 0 00-6-6zM3 8a5 5 0 0110 0c0 1.46-.3 2.74-.84 3.63C11.63 12.52 10.9 13 10 13a2 2 0 01-2-2v-1a2 2 0 00-2-2c-.7 0-1.09.38-1.34.63l-.01.02C4.4 8.89 4.28 9 4 9a1 1 0 01-1-1z" fill={primaryFill} /></svg>;
}

const Color16Regular = wrapIcon(rawSvg({}), 'Color16Regular');
export default Color16Regular;
      