import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.3 1.71c.41-.32 1-.32 1.4 0l4.97 3.8c.63.48.3 1.49-.5 1.49H2.83a.83.83 0 01-.5-1.5l4.96-3.79zM8 5.25a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /><path d="M3.5 8v3H5V8H3.5z" fill={primaryFill} /><path d="M6 8v3h1.5V8H6z" fill={primaryFill} /><path d="M8.5 8v3H10V8H8.5z" fill={primaryFill} /><path d="M11 8v3h1.5V8H11z" fill={primaryFill} /><path d="M2 13.25c0-.69.56-1.25 1.25-1.25h9.5c.69 0 1.25.56 1.25 1.25v.25a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-.25z" fill={primaryFill} /></svg>;
}

const BuildingBank16Filled = wrapIcon(rawSvg({}), 'BuildingBank16Filled');
export default BuildingBank16Filled;
      