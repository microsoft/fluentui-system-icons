import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.02 5h.26c1.16.05 2.24.37 3.13.89C19.98 6.79 21 8.29 21 10c0 1.7-1.03 3.22-2.6 4.12-.96.55-2.14.88-3.4.88h-.5a.75.75 0 110-1.5h.5a5.4 5.4 0 002.59-.64c1.15-.63 1.91-1.68 1.91-2.86s-.76-2.23-1.91-2.86a5.36 5.36 0 00-2.37-.64H8.06l1.72 1.72a.75.75 0 01-.98 1.13l-.08-.07-3-3-.02-.02a.75.75 0 01.02-1.04l3-3 .08-.07a.75.75 0 01.98 1.13L8.06 5h6.96zm5.37 15.07a.5.5 0 01-.25.93H4a1 1 0 01-1-1v-9.13a.5.5 0 01.75-.44l16.64 9.64zm-3.97-.57L4.5 12.6v6.9h11.92z" fill={primaryFill} /></svg>;
}

const RotateLeft24Regular = wrapIcon(rawSvg({}), 'RotateLeft24Regular');
export default RotateLeft24Regular;
      