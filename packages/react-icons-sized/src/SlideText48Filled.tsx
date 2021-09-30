import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 12.75A4.75 4.75 0 018.75 8h30.5A4.75 4.75 0 0144 12.75v22.5A4.75 4.75 0 0139.25 40H8.75A4.75 4.75 0 014 35.25v-22.5zm9.25 9.75a1.25 1.25 0 100 2.5h17.5a1.25 1.25 0 100-2.5h-17.5zM12 30.25c0 .69.56 1.25 1.25 1.25h13.5a1.25 1.25 0 100-2.5h-13.5c-.69 0-1.25.56-1.25 1.25zM13.25 16a1.25 1.25 0 100 2.5h9.5a1.25 1.25 0 100-2.5h-9.5z" fill={primaryFill} /></svg>;
}

const SlideText48Filled = wrapIcon(rawSvg({}), 'SlideText48Filled');
export default SlideText48Filled;
      