import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.4 3c1.39 0 2.52 1.19 2.6 2.68v8.48c0 1.51-1.09 2.75-2.45 2.84H4.6c-1.39 0-2.52-1.19-2.6-2.68V5.84C2 4.33 3.09 3.1 4.45 3H15.4zM6.85 7C5.18 7 4 8.32 4 10c0 1.64 1.26 3 2.85 3 1.2 0 2.07-.8 2.14-1.63l.01-.12V9.9a.52.52 0 00-.44-.4h-.1l-.92-.01h-.1A.51.51 0 007 10c0 .25.2.45.44.5h.48v.83c-.07.32-.47.67-1.07.67-.96 0-1.77-.88-1.77-2 0-1.17.74-2 1.77-2 .46 0 .83.07 1.1.2.26.12.59.02.72-.23.14-.24.03-.55-.24-.67C8 7.1 7.47 7 6.85 7zM11 7a.5.5 0 00-.5.41v5.18a.5.5 0 001 0V7.41A.5.5 0 0011 7zm4.5 0h-2a.5.5 0 00-.5.41v5.18a.5.5 0 001 0V11h1.59a.5.5 0 000-1H14V8h1.59a.5.5 0 000-1h-.09z" fill={primaryFill} /></svg>;
}

const Gif20Filled = wrapIcon(rawSvg({}), 'Gif20Filled');
export default Gif20Filled;
      