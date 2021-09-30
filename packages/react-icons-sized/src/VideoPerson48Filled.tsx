import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M30 20a6 6 0 11-12 0 6 6 0 0112 0z" fill={primaryFill} /><path d="M4 11.75A3.75 3.75 0 017.75 8h32.5A3.75 3.75 0 0144 11.75v24.5A3.75 3.75 0 0140.25 40H7.75A3.75 3.75 0 014 36.25v-24.5zm3.75-1.25c-.69 0-1.25.56-1.25 1.25v24.5c0 .69.56 1.25 1.25 1.25H14v-6.25c0-1.8 1.46-3.25 3.25-3.25h13.5c1.8 0 3.25 1.46 3.25 3.25v6.25h6.25c.69 0 1.25-.56 1.25-1.25v-24.5c0-.69-.56-1.25-1.25-1.25H7.75z" fill={primaryFill} /></svg>;
}

const VideoPerson48Filled = wrapIcon(rawSvg({}), 'VideoPerson48Filled');
export default VideoPerson48Filled;
      