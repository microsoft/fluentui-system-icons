import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 00-1.06 1.06l1.25 1.25A3.25 3.25 0 002 7.25v9.5C2 18.55 3.46 20 5.25 20h13.69l1.78 1.78a.75.75 0 001.06-1.06L3.28 2.22zM17.44 18.5H5.25c-.97 0-1.75-.78-1.75-1.75v-9.5c0-.73.44-1.35 1.07-1.61L7.4 8.46C6.3 9.04 5.5 10.3 5.5 12c0 3.14 2.72 4.77 5.12 3.4a.75.75 0 00-.74-1.3C8.48 14.9 7 14 7 12c0-1.37.69-2.22 1.57-2.37l8.87 8.87zm2.99-1.25c.05-.16.07-.32.07-.5v-9.5c0-.97-.78-1.75-1.75-1.75H8.68L7.18 4h11.57C20.55 4 22 5.46 22 7.25v9.5c0 .6-.16 1.15-.44 1.63l-1.13-1.13zm-5.88-5.88l-1.2-1.2a3.26 3.26 0 014.77-1.57.75.75 0 01-.74 1.3c-1.24-.7-2.55-.08-2.83 1.47z" fill={primaryFill} /></svg>;
}

const ClosedCaptionOff24Regular = wrapIcon(rawSvg({}), 'ClosedCaptionOff24Regular');
export default ClosedCaptionOff24Regular;
      