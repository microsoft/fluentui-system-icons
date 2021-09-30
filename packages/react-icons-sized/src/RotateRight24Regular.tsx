import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.98 5h-.26a6.79 6.79 0 00-3.13.89A4.82 4.82 0 003 10c0 1.7 1.03 3.22 2.6 4.12.96.55 2.14.88 3.4.88h.5a.75.75 0 000-1.5H9a5.4 5.4 0 01-2.59-.64C5.26 12.23 4.5 11.18 4.5 10s.76-2.23 1.91-2.86c.68-.37 1.49-.6 2.37-.64h7.16l-1.72 1.72a.75.75 0 00.98 1.13l.08-.07 3-3 .02-.02a.75.75 0 00-.02-1.04l-3-3-.08-.07a.75.75 0 00-.98 1.13L15.94 5H9h-.02zM3.61 20.07a.5.5 0 00.25.93H20a1 1 0 001-1v-9.13a.5.5 0 00-.75-.44L3.6 20.07zm3.97-.57l11.92-6.9v6.9H7.58z" fill={primaryFill} /></svg>;
}

const RotateRight24Regular = wrapIcon(rawSvg({}), 'RotateRight24Regular');
export default RotateRight24Regular;
      