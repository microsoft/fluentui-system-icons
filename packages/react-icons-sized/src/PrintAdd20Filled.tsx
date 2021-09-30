import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19 5.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V5h-1.5a.5.5 0 000 1H14v1.5a.5.5 0 001 0V6h1.5a.5.5 0 000-1H15V3.5zm-.5 7.5c1.33 0 2.55-.47 3.5-1.26v3.76c0 .83-.67 1.5-1.5 1.5H15v1.5c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 015 16.5V15H3.5A1.5 1.5 0 012 13.5v-5A2.5 2.5 0 014.5 6H5v-.5C5 4.67 5.67 4 6.5 4h2.7c-.08.32-.15.66-.18 1H6.5a.5.5 0 00-.5.5V6h3.02c.26 2.8 2.61 5 5.48 5zM6 12.5v4c0 .28.22.5.5.5h7a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5h-7a.5.5 0 00-.5.5z" fill={primaryFill} /></svg>;
}

const PrintAdd20Filled = wrapIcon(rawSvg({}), 'PrintAdd20Filled');
export default PrintAdd20Filled;
      