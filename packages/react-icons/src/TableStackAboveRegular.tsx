import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 3.5c0-.28.22-.5.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5zm0 5c0-.28.22-.5.5-.5h13c.28 0 .5.22.5.5V15a2 2 0 01-2 2H5a2 2 0 01-2-2V8.5zM4 13v2a1 1 0 001 1h2v-3H4zm8 3v-3H8v3h4zm1 0h2a1 1 0 001-1v-2h-3v3zm0-4h3V9h-3v3zm-1-3H8v3h4V9zM4 9v3h3V9H4z" fill={primaryFill} /></svg>;
}

const TableStackAboveRegular = wrapIcon(rawSvg({}), 'TableStackAboveRegular');
export default TableStackAboveRegular;
      