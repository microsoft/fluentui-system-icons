import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.08 4H10a2 2 0 012 2v4.91c.58-.2 1-.76 1-1.41V6a3 3 0 00-3-3H6.5c-.65 0-1.2.42-1.42 1z" fill={primaryFill} /><path d="M4.5 5C3.67 5 3 5.67 3 6.5v5c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5h-5z" fill={primaryFill} /></svg>;
}

const Restore16Filled = wrapIcon(rawSvg({}), 'Restore16Filled');
export default Restore16Filled;
      