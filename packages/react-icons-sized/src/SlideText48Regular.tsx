import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 17.25c0-.69.56-1.25 1.25-1.25h9.5a1.25 1.25 0 110 2.5h-9.5c-.69 0-1.25-.56-1.25-1.25z" fill={primaryFill} /><path d="M13.25 22.5a1.25 1.25 0 100 2.5h17.5a1.25 1.25 0 100-2.5h-17.5z" fill={primaryFill} /><path d="M13.25 29a1.25 1.25 0 100 2.5h13.5a1.25 1.25 0 100-2.5h-13.5z" fill={primaryFill} /><path d="M8.75 8A4.75 4.75 0 004 12.75v22.5A4.75 4.75 0 008.75 40h30.5A4.75 4.75 0 0044 35.25v-22.5A4.75 4.75 0 0039.25 8H8.75zM6.5 12.75c0-1.24 1-2.25 2.25-2.25h30.5c1.24 0 2.25 1 2.25 2.25v22.5c0 1.24-1 2.25-2.25 2.25H8.75c-1.24 0-2.25-1-2.25-2.25v-22.5z" fill={primaryFill} /></svg>;
}

const SlideText48Regular = wrapIcon(rawSvg({}), 'SlideText48Regular');
export default SlideText48Regular;
      