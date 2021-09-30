import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 2A2.5 2.5 0 002 4.5v6A2.5 2.5 0 004.3 13H7v2.5A2.5 2.5 0 009.5 18h6.22a2.5 2.5 0 002.27-2.28v-.01l.01-.21v-6A2.5 2.5 0 0015.5 7H13V4.5a2.52 2.52 0 00-.5-1.5 2.5 2.5 0 00-2-1h-6zm6.65 1.15l-8 8A1.5 1.5 0 013 10.5v-.94L9.56 3h.94c.23 0 .45.05.65.15zm-7.3 8.7l8-8c.1.2.15.42.15.65v.8L5.3 12h-.8a1.5 1.5 0 01-.65-.15zM12 6.71v.79c0 .21.13.4.32.47l-4.35 4.35A.5.5 0 007.5 12h-.8L12 6.7zM13.7 8h1.6L8 15.3v-1.6L13.7 8zm2.7.3c.32.24.53.6.59 1L9.3 17a1.5 1.5 0 01-1-.59l8.1-8.1zm.6 2.4v1.6L12.3 17h-1.6l6.3-6.3zm0 3v1.6L15.3 17h-1.6l3.3-3.3zM3 8.15V6.56L6.56 3h1.58L3 8.14zm0-3V4.5C3 3.67 3.67 3 4.5 3h.64L3 5.14z" fill={primaryFill} /></svg>;
}

const ShapeUnion20Regular = wrapIcon(rawSvg({}), 'ShapeUnion20Regular');
export default ShapeUnion20Regular;
      