import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 5.25c0-.97.78-1.75 1.75-1.75h3a.75.75 0 000-1.5h-3A3.25 3.25 0 002 5.25v3a.75.75 0 001.5 0v-3zm17 0c0-.97-.78-1.75-1.75-1.75h-3a.75.75 0 010-1.5h3C20.55 2 22 3.46 22 5.25v3a.75.75 0 01-1.5 0v-3zM5.25 20.5c-.97 0-1.75-.78-1.75-1.75v-3a.75.75 0 00-1.5 0v3C2 20.55 3.46 22 5.25 22h3a.75.75 0 000-1.5h-3zm15.25-1.75c0 .97-.78 1.75-1.75 1.75h-3a.75.75 0 000 1.5h3c1.8 0 3.25-1.46 3.25-3.25v-3a.75.75 0 00-1.5 0v3zM11.29 6.42c.26-.61 1.06-1.4 2.18-1.11.7.18 1.2.6 1.49 1.18.25.5.29 1.05.3 1.46 0 .4-.06.83-.14 1.22h.2c1.55 0 2.82 1.43 2.33 2.99L16.5 15.8a2.88 2.88 0 01-3.58 1.82L8.4 16.3a2.4 2.4 0 01-1.56-1.4l-.44-1.08a2.27 2.27 0 011.06-2.84L9 10.14l.03-.03.26-.24c.24-.25.6-.7.96-1.43l.46-.87c.22-.4.38-.7.57-1.15z" fill={primaryFill} /></svg>;
}

const ScanThumbUp24Filled = wrapIcon(rawSvg({}), 'ScanThumbUp24Filled');
export default ScanThumbUp24Filled;
      