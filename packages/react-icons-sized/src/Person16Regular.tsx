import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.5 8c.83 0 1.5.67 1.5 1.5v.5c0 1.97-1.86 4-5 4-3.14 0-5-2.03-5-4v-.5C3 8.67 3.67 8 4.5 8h7zm0 1h-7a.5.5 0 00-.5.5v.5c0 1.44 1.43 3 4 3 2.57 0 4-1.56 4-3v-.5a.5.5 0 00-.5-.5zM8 1.5A2.75 2.75 0 118 7a2.75 2.75 0 010-5.5zm0 1A1.75 1.75 0 108 6a1.75 1.75 0 000-3.5z" fill={primaryFill} /></svg>;
}

const Person16Regular = wrapIcon(rawSvg({}), 'Person16Regular');
export default Person16Regular;
      