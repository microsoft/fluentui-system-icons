import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.42 16.39a1 1 0 01-1.84 0l-5.5-13a1 1 0 011.84-.78l4.58 10.82 4.58-10.82a1 1 0 011.84.78l-5.5 13z" fill={primaryFill} /><path d="M8.5 2a1 1 0 01.92.61l5.5 13a1 1 0 11-1.84.78L11.65 13h-6.3L3.92 16.4a1 1 0 01-1.84-.78l5.5-13A1 1 0 018.5 2zm-2.3 9h4.6L8.5 5.57 6.2 11z" fill={primaryFill} /><path d="M21.23 19.36a1 1 0 011.41-.13l3 2.5a1 1 0 010 1.54l-3 2.5a1 1 0 01-1.28-1.54l.88-.73H5.76l.88.73a1 1 0 01-1.28 1.54l-3-2.5a1 1 0 010-1.54l3-2.5a1 1 0 011.28 1.54l-.88.73h16.48l-.88-.73a1 1 0 01-.13-1.41z" fill={primaryFill} /></svg>;
}

const FontSpaceTrackingOut28Filled = wrapIcon(rawSvg({}), 'FontSpaceTrackingOut28Filled');
export default FontSpaceTrackingOut28Filled;
      