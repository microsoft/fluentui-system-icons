import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.04 3.48a3.25 3.25 0 00-5.24.9l-2.55 5.4c-.2.4-.53.72-.95.88l-4.13 1.59a1.75 1.75 0 00-.61 2.87l3.13 3.13L3 23.94V25h1.06l5.69-5.69 3.13 3.13c.9.9 2.42.57 2.87-.6l1.6-4.14c.15-.42.47-.76.88-.95l5.39-2.55a3.25 3.25 0 00.9-5.24l-5.48-5.48z" fill={primaryFill} /></svg>;
}

const Pin28Filled = wrapIcon(rawSvg({}), 'Pin28Filled');
export default Pin28Filled;
      