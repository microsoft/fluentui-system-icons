import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 12a2 2 0 100-4 2 2 0 000 4zm-3 2a1 1 0 011-1h4a1 1 0 011 1v.25A2.75 2.75 0 0116.25 17h-.5A2.75 2.75 0 0113 14.25V14zM6.25 7C5.56 7 5 7.56 5 8.25v3.5c0 .69.56 1.25 1.25 1.25h4.5c.69 0 1.25-.56 1.25-1.25v-3.5C12 7.56 11.44 7 10.75 7h-4.5zm-1-3A3.25 3.25 0 002 7.25v9.5C2 18.55 3.46 20 5.25 20h13.5c1.8 0 3.25-1.46 3.25-3.25v-9.5C22 5.45 20.54 4 18.75 4H5.25zM3.5 7.25c0-.97.78-1.75 1.75-1.75h13.5c.97 0 1.75.78 1.75 1.75v9.5c0 .97-.78 1.75-1.75 1.75H5.25c-.97 0-1.75-.78-1.75-1.75v-9.5z" fill={primaryFill} /></svg>;
}

const ShareScreenPersonOverlayInside24Regular = wrapIcon(rawSvg({}), 'ShareScreenPersonOverlayInside24Regular');
export default ShareScreenPersonOverlayInside24Regular;
      