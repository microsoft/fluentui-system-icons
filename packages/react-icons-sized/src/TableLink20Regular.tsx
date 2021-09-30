import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 5.5A2.5 2.5 0 0014.5 3h-9A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h4.55c-.3-.29-.54-.63-.71-1H8v-3h1.34c.17-.37.42-.71.71-1H8V8h4v3.04c.16-.03.33-.04.5-.04h.5V8h3v3h.5c.17 0 .34.01.5.04V5.5zm-13 9V13h3v3H5.36A1.5 1.5 0 014 14.5zM12 7H8V4h4v3zm1-3H14.64A1.5 1.5 0 0116 5.5V7h-3V4zM4 7V5.36A1.5 1.5 0 015.5 4H7v3H4zm3 1v4H4V8h3zm5.5 4a2.5 2.5 0 000 5h.5a.5.5 0 000-1h-.5a1.5 1.5 0 010-3h.5a.5.5 0 000-1h-.5zm3.5 0a.5.5 0 000 1h.5a1.5 1.5 0 010 3H16a.5.5 0 000 1h.5a2.5 2.5 0 000-5H16zm-4 2.5c0-.28.22-.5.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
}

const TableLink20Regular = wrapIcon(rawSvg({}), 'TableLink20Regular');
export default TableLink20Regular;
      