import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 2a2 2 0 00-2 2v5c0 1.1.9 2 2 2h1v1c0 1.1.9 2 2 2h5a2 2 0 002-2V7a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H4zm1.14 1L3 5.14V4a1 1 0 011-1h1.14zM3 6.56L6.56 3h1.58L3 8.14V6.56zM9.45 3.1A1 1 0 0110 4v.3L4.3 10H4a1 1 0 01-.9-.55l6.35-6.34zM10 5.7V6h1.3L6 11.3V10h-.3L10 5.7zm-3.84 6.84l6.39-6.39A1 1 0 0113 7v.3L7.3 13H7a1 1 0 01-.84-.45zM13 8.7v1.58L10.3 13H8.7L13 8.7zm0 3V12a1 1 0 01-1 1h-.3l1.3-1.3z" fill={primaryFill} /></svg>;
}

const ShapeUnion16Regular = wrapIcon(rawSvg({}), 'ShapeUnion16Regular');
export default ShapeUnion16Regular;
      