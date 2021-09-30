import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 17.5c0-1.29.37-2.5 1.02-3.5H6.25C5 14 4 15 4 16.25v.92c0 .57.18 1.13.51 1.6 1.4 1.96 3.62 3.03 6.58 3.2l.52-1.7A6.48 6.48 0 0111 17.5zM12 2a5 5 0 110 10 5 5 0 010-10zm11 15.5a5.5 5.5 0 01-8.17 4.81l-2.19.67a.5.5 0 01-.62-.63l.67-2.18A5.5 5.5 0 1123 17.5zM15.5 16a.5.5 0 100 1h4a.5.5 0 100-1h-4zm-.5 2.5c0 .28.22.5.5.5h2a.5.5 0 100-1h-2a.5.5 0 00-.5.5z" fill={primaryFill} /></svg>;
}

const PersonChat24Filled = wrapIcon(rawSvg({}), 'PersonChat24Filled');
export default PersonChat24Filled;
      