import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 4A4.5 4.5 0 002 8.5v15A4.5 4.5 0 006.5 28h19a4.5 4.5 0 004.5-4.5v-15A4.5 4.5 0 0025.5 4h-19zM9 16c0 1.79 1.24 3 2.5 3 .46 0 .9-.15 1.27-.42a1 1 0 111.17 1.63c-.7.5-1.53.79-2.44.79C8.9 21 7 18.63 7 16s1.9-5 4.5-5c.95 0 1.82.33 2.54.87a1 1 0 11-1.21 1.6c-.4-.3-.85-.47-1.33-.47-1.26 0-2.5 1.21-2.5 3zm12.5-3c-1.26 0-2.5 1.21-2.5 3s1.24 3 2.5 3c.46 0 .9-.15 1.27-.42a1 1 0 111.17 1.63c-.7.5-1.53.79-2.44.79-2.6 0-4.5-2.37-4.5-5s1.9-5 4.5-5c.95 0 1.82.33 2.54.87a1 1 0 11-1.21 1.6c-.4-.3-.85-.47-1.33-.47z" fill={primaryFill} /></svg>;
}

const ClosedCaption32Filled = wrapIcon(rawSvg({}), 'ClosedCaption32Filled');
export default ClosedCaption32Filled;
      