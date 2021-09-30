import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 3.5c0-.28.22-.5.5-.5.66 0 1.28.33 1.73.77.44.45.77 1.07.77 1.73a.5.5 0 01-1 0c0-.34-.17-.72-.48-1.02C8.72 4.18 8.34 4 8 4a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M8.5 10.96a4.49 4.49 0 002.64-1.72A6.15 6.15 0 0012.5 5.5C12.5 3.27 10.82 1 8 1a4.44 4.44 0 00-4.5 4.5c0 1.37.55 2.73 1.36 3.74.7.87 1.62 1.55 2.64 1.72V11c0 1.1.9 2 2 2H11a1 1 0 011 1v.5a.5.5 0 001 0V14a2 2 0 00-2-2H9.5a1 1 0 01-1-1v-.04zM8 2c2.18 0 3.5 1.73 3.5 3.5 0 1.12-.45 2.26-1.14 3.12C9.66 9.49 8.79 10 8 10c-.8 0-1.66-.5-2.36-1.38-.69-.86-1.14-2-1.14-3.12C4.5 3.73 5.82 2 8 2z" fill={primaryFill} /></svg>;
}

const Balloon16Regular = wrapIcon(rawSvg({}), 'Balloon16Regular');
export default Balloon16Regular;
      