import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 14v3.94a8 8 0 118.97-8.69h-4.22A4.75 4.75 0 009 14zm4.75-3.75A3.75 3.75 0 0010 14v8.5a3.75 3.75 0 003.75 3.75h8.5A3.75 3.75 0 0026 22.5V14a3.75 3.75 0 00-3.75-3.75h-8.5z" fill={primaryFill} /></svg>;
}

const Shapes28Filled = wrapIcon(rawSvg({}), 'Shapes28Filled');
export default Shapes28Filled;
      