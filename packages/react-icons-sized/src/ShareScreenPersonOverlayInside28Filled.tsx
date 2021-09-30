import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 7.75A3.75 3.75 0 015.75 4h16.5A3.75 3.75 0 0126 7.75v12.5A3.75 3.75 0 0122.25 24H5.75A3.75 3.75 0 012 20.25V7.75zM6.5 7C5.67 7 5 7.67 5 8.5v4c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5h-5zM21 10.5a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0zm-7 5v.25C14 18.1 15.9 20 18.25 20h.5C21.1 20 23 18.1 23 15.75v-.25c0-.83-.67-1.5-1.5-1.5h-6c-.83 0-1.5.67-1.5 1.5z" fill={primaryFill} /></svg>;
}

const ShareScreenPersonOverlayInside28Filled = wrapIcon(rawSvg({}), 'ShareScreenPersonOverlayInside28Filled');
export default ShareScreenPersonOverlayInside28Filled;
      