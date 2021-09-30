import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 10.66v2.84A2.5 2.5 0 004.5 16h11a2.5 2.5 0 002.5-2.5v-7A2.5 2.5 0 0015.5 4H9.48l.67.67c.1.1.2.22.28.33h5.07c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 013 13.5v-1.84l-1-1z" fill={primaryFill} /><path d="M5 1.5a.5.5 0 011 0v1.17a2 2 0 011.32.59l2.12 2.12a2 2 0 010 2.83l-2.83 2.83a2 2 0 01-2.82 0L1.66 8.9a2 2 0 010-2.82L4.5 3.26A2 2 0 015 2.89V1.5zm0 4V4.16L2.66 6.5h6.32a1 1 0 00-.25-.41L6.61 3.96A1 1 0 006 3.68V5.5a.5.5 0 01-1 0zm-2.92 2c0 .26.1.51.3.7l2.11 2.13a1 1 0 001.42 0L8.73 7.5H2.08z" fill={primaryFill} /><path d="M10.16 8.43l.22-.26a.5.5 0 01.74 0l.22.26c.12.15.29.38.46.64.31.5.7 1.23.7 1.93 0 1-.67 2-1.75 2S9 12 9 11c0-.7.39-1.44.7-1.93.17-.26.34-.49.46-.64zm.59.88c-.07.09-.14.19-.2.3-.31.47-.55 1-.55 1.39 0 .3.1.57.25.75.13.17.3.25.5.25s.37-.08.5-.25c.15-.18.25-.46.25-.75 0-.4-.24-.92-.55-1.4l-.2-.3z" fill={primaryFill} /></svg>;
}

const ColorBackgroundRegular = wrapIcon(rawSvg({}), 'ColorBackgroundRegular');
export default ColorBackgroundRegular;
      