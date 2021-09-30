import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.5 3.69a2.98 2.98 0 00-4.5.34 3.6 3.6 0 00-3.2 6.11l1.52 1.52-1.6 1.6 2.05 2.05 1.6-1.6 1.52 1.51a3.61 3.61 0 006.1-3.18 2.99 2.99 0 00.35-4.5l-.9-.9.79-.79a1.45 1.45 0 00-2.05-2.05l-.79.79-.9-.9zm.4 6.38c-.3.3-.77.3-1.06 0l-1.91-1.9a.75.75 0 011.06-1.07l1.9 1.91c.3.3.3.77 0 1.06zm-5.68 7.82l-5.08-5.09A3.61 3.61 0 004.03 16a3 3 0 00-.34 4.5l.9.9-.82.8a1.45 1.45 0 102.05 2.05l.82-.8.9.89a2.98 2.98 0 004.5-.34 3.6 3.6 0 003.18-6.11zm-5.78 2.58a.75.75 0 01-1.06 1.06l-1.9-1.91a.75.75 0 111.05-1.06l1.91 1.9z" fill={primaryFill} /></svg>;
}

const Dumbbell28Filled = wrapIcon(rawSvg({}), 'Dumbbell28Filled');
export default Dumbbell28Filled;
      