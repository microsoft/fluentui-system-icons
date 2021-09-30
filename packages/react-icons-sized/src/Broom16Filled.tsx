import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.85 1.15c.2.2.2.5 0 .7L10.9 5.81a4.78 4.78 0 00-.71-.7l3.96-3.96c.2-.2.5-.2.7 0zM4.65 6.19l-.39.36 5.2 5.2.4-.4a3.67 3.67 0 10-5.2-5.16zM1.3 8.04l2.1-.95 5.52 5.52-.95 2.1a.5.5 0 01-.81.14l-6-6a.5.5 0 01.14-.8z" fill={primaryFill} /></svg>;
}

const Broom16Filled = wrapIcon(rawSvg({}), 'Broom16Filled');
export default Broom16Filled;
      