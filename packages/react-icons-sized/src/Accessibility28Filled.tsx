import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 2a3 3 0 100 6 3 3 0 000-6zm10.53 5.06a2.2 2.2 0 00-2.87-1.39L18.4 6.91a.75.75 0 00-.39.33 4.58 4.58 0 01-7.97.06.75.75 0 00-.4-.33L6.22 5.72a2.14 2.14 0 00-1.5 4l4.79 1.85v4.15l-2.58 7.12a2.28 2.28 0 004.27 1.6l1.96-5.13a.94.94 0 011.76 0l2.05 5.2a2.23 2.23 0 004.17-1.58L18.5 15.7v-4.13l4.72-1.79a2.2 2.2 0 001.31-2.72z" fill={primaryFill} /></svg>;
}

const Accessibility28Filled = wrapIcon(rawSvg({}), 'Accessibility28Filled');
export default Accessibility28Filled;
      