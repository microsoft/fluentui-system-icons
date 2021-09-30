import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 2.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5V3h.5c.28 0 .5.22.5.5v1.53A6.5 6.5 0 0113.96 17h2.54a.5.5 0 010 1h-13a.5.5 0 010-1h7A5.5 5.5 0 0011 6.02v5.48a.5.5 0 01-.5.5H10v.5a1.5 1.5 0 01-3 0V12h-.5a.5.5 0 01-.5-.5v-8c0-.28.22-.5.5-.5H7v-.5zM8 12v.5a.5.5 0 001 0V12H8zm-2.5 3a.5.5 0 000 1h6a.5.5 0 000-1h-6z" fill={primaryFill} /></svg>;
}

const Microscope20Filled = wrapIcon(rawSvg({}), 'Microscope20Filled');
export default Microscope20Filled;
      