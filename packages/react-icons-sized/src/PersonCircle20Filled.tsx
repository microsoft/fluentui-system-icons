import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a2 2 0 114 0 2 2 0 01-4 0zm-.5 3h5c.83 0 1.5.67 1.5 1.5 0 1.12-.46 2.01-1.21 2.61-.74.6-1.74.89-2.79.89a4.43 4.43 0 01-2.79-.89A3.25 3.25 0 016 11.5c0-.83.67-1.5 1.5-1.5z" fill={primaryFill} /></svg>;
}

const PersonCircle20Filled = wrapIcon(rawSvg({}), 'PersonCircle20Filled');
export default PersonCircle20Filled;
      