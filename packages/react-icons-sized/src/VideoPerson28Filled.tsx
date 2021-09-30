import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 11.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z" fill={primaryFill} /><path d="M2 7a3 3 0 013-3h18a3 3 0 013 3v14a3 3 0 01-3 3H5a3 3 0 01-3-3V7zm3-1.5c-.82 0-1.5.67-1.5 1.5v14c0 .83.68 1.5 1.5 1.5h3.25v-4c0-1.1.9-2 2-2h7.5a2 2 0 012 2v4H23c.83 0 1.5-.67 1.5-1.5V7c0-.83-.67-1.5-1.5-1.5H5z" fill={primaryFill} /></svg>;
}

const VideoPerson28Filled = wrapIcon(rawSvg({}), 'VideoPerson28Filled');
export default VideoPerson28Filled;
      