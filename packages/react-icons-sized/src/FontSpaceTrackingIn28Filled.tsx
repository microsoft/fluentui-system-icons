import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.5 17a1 1 0 00.92-.61l5.5-13a1 1 0 10-1.84-.78L18.5 13.43 13.92 2.61a1 1 0 00-1.84.78l5.5 13a1 1 0 00.92.61z" fill={primaryFill} /><path d="M10.42 2.61a1 1 0 00-1.84 0l-5.5 13a1 1 0 101.84.78L6.35 13h6.3l1.43 3.39a1 1 0 001.84-.78l-5.5-13zm1.38 8.4H7.2l2.3-5.44L11.8 11z" fill={primaryFill} /><path d="M9.64 19.23a1 1 0 00-1.28 1.54l.88.73H4a1 1 0 100 2h5.24l-.88.73a1 1 0 001.28 1.54l3-2.5a1 1 0 000-1.54l-3-2.5z" fill={primaryFill} /><path d="M19.77 25.64a1 1 0 01-1.41.13l-3-2.5a1 1 0 010-1.54l3-2.5a1 1 0 011.28 1.54l-.88.73h5.21a1 1 0 110 2h-5.2l.87.73a1 1 0 01.13 1.41z" fill={primaryFill} /></svg>;
}

const FontSpaceTrackingIn28Filled = wrapIcon(rawSvg({}), 'FontSpaceTrackingIn28Filled');
export default FontSpaceTrackingIn28Filled;
      