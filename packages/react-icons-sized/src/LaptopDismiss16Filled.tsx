import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 5.5a5.5 5.5 0 01-6.97 5.3c.14.69.74 1.2 1.47 1.2h7c.83 0 1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5h-1.52l.02.5zm-8 8c0-.28.22-.5.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zM5.5 10a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm1.85-6.35c.2.2.2.5 0 .7L6.21 5.5l1.14 1.15a.5.5 0 11-.7.7L5.5 6.21 4.35 7.35a.5.5 0 11-.7-.7L4.79 5.5 3.65 4.35a.5.5 0 11.7-.7L5.5 4.79l1.15-1.14c.2-.2.5-.2.7 0z" fill={primaryFill} /></svg>;
}

const LaptopDismiss16Filled = wrapIcon(rawSvg({}), 'LaptopDismiss16Filled');
export default LaptopDismiss16Filled;
      