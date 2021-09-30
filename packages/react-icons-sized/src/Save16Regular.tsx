import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 3a1 1 0 00-1 1v8a1 1 0 001 1V9.5C4 8.67 4.67 8 5.5 8h5c.83 0 1.5.67 1.5 1.5V13a1 1 0 001-1V5.62a1 1 0 00-.3-.7L11.1 3.28a1 1 0 00-.71-.29H10v1.5C10 5.33 9.33 6 8.5 6h-2A1.5 1.5 0 015 4.5V3H4zm2 0v1.5c0 .28.22.5.5.5h2a.5.5 0 00.5-.5V3H6zm5 10V9.5a.5.5 0 00-.5-.5h-5a.5.5 0 00-.5.5V13h6zM2 4c0-1.1.9-2 2-2h6.38a2 2 0 011.41.59l1.62 1.62A2 2 0 0114 5.62V12a2 2 0 01-2 2H4a2 2 0 01-2-2V4z" fill={primaryFill} /></svg>;
}

const Save16Regular = wrapIcon(rawSvg({}), 'Save16Regular');
export default Save16Regular;
      