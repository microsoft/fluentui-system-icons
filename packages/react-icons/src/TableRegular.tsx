import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 5.5A2.5 2.5 0 0014.5 3h-9A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h9a2.5 2.5 0 002.5-2.5v-9zm-13 9V13h3v3H5.36A1.5 1.5 0 014 14.5zm8-1.5v3H8v-3h4zm2.5 3H13v-3h3V14.64A1.5 1.5 0 0114.5 16zM12 8v4H8V8h4zm1 0h3v4h-3V8zm-1-4v3H8V4h4zm1 0H14.64A1.5 1.5 0 0116 5.5V7h-3V4zM7 4v3H4V5.36A1.5 1.5 0 015.5 4H7zm0 4v4H4V8h3z" fill={primaryFill} /></svg>;
}

const TableRegular = wrapIcon(rawSvg({}), 'TableRegular');
export default TableRegular;
      