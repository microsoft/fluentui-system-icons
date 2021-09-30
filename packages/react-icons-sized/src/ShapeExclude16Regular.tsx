import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4c0-1.1.9-2 2-2h5a2 2 0 012 2v1h1a2 2 0 012 2v5a2 2 0 01-2 2H7a2 2 0 01-2-2v-1H4a2 2 0 01-2-2V4zm1 2.56v1.58L8.14 3H6.56L3 6.56zM5.14 3H4a1 1 0 00-1 1v1.14L5.14 3zm4.31.1L7.55 5H9.3l.71-.7V4a1 1 0 00-.55-.9zM5 7.57L3.1 9.45A1 1 0 004 10h.3l.7-.7V7.55zM11.7 13h.3a1 1 0 001-1v-.3L11.7 13zm1.3-2.7V8.7L8.7 13h1.6l2.7-2.7zm0-3V7a1 1 0 00-.45-.84L11 7.71V9c0 .1 0 .21-.03.32L13 7.29zm-3.68 3.67C9.22 11 9.1 11 9 11H7.7l-1.54 1.55A1 1 0 007 13h.3l2.02-2.03zM6 7v3h3a1 1 0 001-1V6H7a1 1 0 00-1 1z" fill={primaryFill} /></svg>;
}

const ShapeExclude16Regular = wrapIcon(rawSvg({}), 'ShapeExclude16Regular');
export default ShapeExclude16Regular;
      