import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 14A1.5 1.5 0 014 12.5v-5C4 6.67 4.67 6 5.5 6h9c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-9zm0-7a.5.5 0 00-.5.5V9h10V7.5a.5.5 0 00-.5-.5h-9zM7 10H5v2.5c0 .28.22.5.5.5H7v-3zm1 3h6.5a.5.5 0 00.5-.5V10H8v3z" fill={primaryFill} /><path d="M2 6.5A2.5 2.5 0 014.5 4h11A2.5 2.5 0 0118 6.5v7a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 012 13.5v-7zM4.5 5C3.67 5 3 5.67 3 6.5v7c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5h-11z" fill={primaryFill} /></svg>;
}

const SlideLayoutRegular = wrapIcon(rawSvg({}), 'SlideLayoutRegular');
export default SlideLayoutRegular;
      