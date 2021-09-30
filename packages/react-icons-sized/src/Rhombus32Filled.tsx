import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.52 5C9.2 5 8 5.8 7.51 7.04l-6.2 15.5A3.25 3.25 0 004.32 27h17.16c1.33 0 2.52-.8 3.01-2.04l6.2-15.5A3.25 3.25 0 0027.68 5H10.52z" fill={primaryFill} /></svg>;
}

const Rhombus32Filled = wrapIcon(rawSvg({}), 'Rhombus32Filled');
export default Rhombus32Filled;
      