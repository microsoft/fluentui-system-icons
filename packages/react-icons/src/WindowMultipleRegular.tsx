import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 2A2.5 2.5 0 002 4.5v8A2.5 2.5 0 004.5 15h8a2.5 2.5 0 002.5-2.5v-8A2.5 2.5 0 0012.5 2h-8zM3 4.5C3 3.67 3.67 3 4.5 3h8c.83 0 1.5.67 1.5 1.5V5H3v-.5zM3 6h11v6.5c0 .83-.67 1.5-1.5 1.5h-8A1.5 1.5 0 013 12.5V6zm4.5 12a2.5 2.5 0 01-2.45-2h1.04c.2.58.76 1 1.41 1h6a3.5 3.5 0 003.5-3.5v-6c0-.65-.42-1.2-1-1.41V5.05a2.5 2.5 0 012 2.45v6a4.5 4.5 0 01-4.5 4.5h-6z" fill={primaryFill} /></svg>;
}

const WindowMultipleRegular = wrapIcon(rawSvg({}), 'WindowMultipleRegular');
export default WindowMultipleRegular;
      