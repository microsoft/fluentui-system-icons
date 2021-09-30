import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 10.13c.07-.64.6-1.13 1.25-1.13h6a1.25 1.25 0 110 2.5h-4.87l-.23 2.3 1.2-.18a4.96 4.96 0 11.69 9.88h-.21a5.17 5.17 0 01-3.77-1.63l-.72-.76a1.25 1.25 0 111.82-1.72l.72.77c.5.54 1.21.84 1.95.84h.2a2.46 2.46 0 10-.34-4.9l-2.77.39a1.25 1.25 0 01-1.41-1.36l.5-5zm10.37 6.24a1.25 1.25 0 011.76 0l1.37 1.36 1.37-1.36a1.25 1.25 0 011.76 1.76l-1.36 1.37 1.36 1.37a1.25 1.25 0 01-1.76 1.76l-1.37-1.36-1.37 1.36a1.25 1.25 0 01-1.76-1.76l1.36-1.37-1.36-1.37a1.25 1.25 0 010-1.76zM7 23a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /></svg>;
}

const Multiplier5X32Filled = wrapIcon(rawSvg({}), 'Multiplier5X32Filled');
export default Multiplier5X32Filled;
      