import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 3A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h9a2.5 2.5 0 002.5-2.5V8.83c0-.66-.26-1.3-.73-1.77l-3.33-3.33A2.5 2.5 0 0011.17 3H5.5zM4 5.5C4 4.67 4.67 4 5.5 4H11v3.5c0 .83.67 1.5 1.5 1.5H16v5.5c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 014 14.5v-9zM15.75 8H12.5a.5.5 0 01-.5-.5V4.25c.08.05.16.12.23.19l3.33 3.33.2.23z" fill={primaryFill} /></svg>;
}

const PageRegular = wrapIcon(rawSvg({}), 'PageRegular');
export default PageRegular;
      