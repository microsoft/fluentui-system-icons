import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 16a7 7 0 100-14 7 7 0 000 14zm-8.5 2A3.5 3.5 0 004 21.5v.5c0 2.4 1.52 4.42 3.68 5.8A15.67 15.67 0 0016 30c3.2 0 6.14-.82 8.32-2.2C26.48 26.41 28 24.4 28 22v-.5a3.5 3.5 0 00-3.5-3.5h-17z" fill={primaryFill} /></svg>;
}

const Person32Filled = wrapIcon(rawSvg({}), 'Person32Filled');
export default Person32Filled;
      