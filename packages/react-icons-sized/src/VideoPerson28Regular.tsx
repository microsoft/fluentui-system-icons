import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 15a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm0-1.5a2 2 0 110-4 2 2 0 010 4z" fill={primaryFill} /><path d="M2 7a3 3 0 013-3h18a3 3 0 013 3v14a3 3 0 01-3 3H5a3 3 0 01-3-3V7zm3-1.5c-.82 0-1.5.67-1.5 1.5v14c0 .83.68 1.5 1.5 1.5h3.25v-4c0-1.1.9-2 2-2h7.5a2 2 0 012 2v4H23c.83 0 1.5-.67 1.5-1.5V7c0-.83-.67-1.5-1.5-1.5H5zm13.25 17v-4a.5.5 0 00-.5-.5h-7.5a.5.5 0 00-.5.5v4h8.5z" fill={primaryFill} /></svg>;
}

const VideoPerson28Regular = wrapIcon(rawSvg({}), 'VideoPerson28Regular');
export default VideoPerson28Regular;
      