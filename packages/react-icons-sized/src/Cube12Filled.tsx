import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.43 2.07a1.5 1.5 0 00-.86 0l-2.85.84a1 1 0 00-.72.96v4.26c0 .44.3.83.72.96l2.85.84c.28.09.58.09.86 0l2.85-.84a1 1 0 00.72-.96V3.87a1 1 0 00-.72-.96l-2.85-.84zm-2.4 2.77a.5.5 0 01.63-.31L6 4.97l1.34-.44a.5.5 0 11.32.94l-1.16.39V7a.5.5 0 01-1 0V5.86l-1.16-.39a.5.5 0 01-.31-.63z" fill={primaryFill} /></svg>;
}

const Cube12Filled = wrapIcon(rawSvg({}), 'Cube12Filled');
export default Cube12Filled;
      