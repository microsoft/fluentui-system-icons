import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.65 1.15c.2-.2.5-.2.7 0 .27.26 1.41 1.45 2.5 3C11.92 5.68 13 7.67 13 9.5c0 1.78-.58 3.16-1.52 4.1C10.55 14.54 9.3 15 8 15c-1.3 0-2.55-.46-3.48-1.4A5.63 5.63 0 013 9.5c0-1.83 1.08-3.82 2.15-5.35a24.33 24.33 0 012.5-3zM5.97 4.72C4.92 6.23 4 8 4 9.5c0 1.56.5 2.67 1.22 3.4.73.73 1.72 1.1 2.78 1.1 1.06 0 2.05-.37 2.78-1.1A4.64 4.64 0 0012 9.5c0-1.5-.92-3.27-1.97-4.78-.77-1.1-1.57-2-2.03-2.5-.46.5-1.26 1.4-2.03 2.5z" fill={primaryFill} /></svg>;
}

const Drop16Regular = wrapIcon(rawSvg({}), 'Drop16Regular');
export default Drop16Regular;
      