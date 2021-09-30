import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 3a1 1 0 011 1v6h2a1 1 0 110 2h-2v5.05a2.51 2.51 0 00-2 .45V4a1 1 0 011-1zm.5 15a1.5 1.5 0 110 0zM4 5a1 1 0 011-1h7a1 1 0 011 1c0 1.77-.37 4.44-1.5 6.7C10.33 14 8.3 16 5 16a1 1 0 110-2c2.3 0 3.76-1.33 4.7-3.2A13.36 13.36 0 0010.97 6H5a1 1 0 01-1-1zm8.5 16a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm9.5-1.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill={primaryFill} /></svg>;
}

const SlideDesign24Filled = wrapIcon(rawSvg({}), 'SlideDesign24Filled');
export default SlideDesign24Filled;
      