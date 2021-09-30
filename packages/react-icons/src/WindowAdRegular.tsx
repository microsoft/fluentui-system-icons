import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5.5A2.5 2.5 0 015.5 3h9A2.5 2.5 0 0117 5.5v9a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5v-9zM16 6v-.5c0-.83-.67-1.5-1.5-1.5h-9C4.67 4 4 4.67 4 5.5V6h12zM4 7v7.5c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V7H4z" fill={primaryFill} /><path d="M5.5 8a.5.5 0 00-.5.5v4c0 .28.22.5.5.5h4a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5h-4zM9 9v3H6V9h3z" fill={primaryFill} /></svg>;
}

const WindowAdRegular = wrapIcon(rawSvg({}), 'WindowAdRegular');
export default WindowAdRegular;
      