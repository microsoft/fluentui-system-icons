import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.03 1.97c.3.3.3.77 0 1.06l-2 2c-.3.3-.77.3-1.06 0l-1-1a.75.75 0 011.06-1.06l.47.47 1.47-1.47c.3-.3.77-.3 1.06 0zM6 3.75c0-.41.34-.75.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 016 3.75zM6 8c0-.41.34-.75.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 016 8zm-.97 2.97c.3.3.3.77 0 1.06l-2 2c-.3.3-.77.3-1.06 0l-1-1a.75.75 0 111.06-1.06l.47.47 1.47-1.47c.3-.3.77-.3 1.06 0zM6 12.25c0-.41.34-.75.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75z" fill={primaryFill} /></svg>;
}

const Multiselect16Filled = wrapIcon(rawSvg({}), 'Multiselect16Filled');
export default Multiselect16Filled;
      