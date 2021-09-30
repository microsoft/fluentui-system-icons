import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.5 3c.28 0 .5.22.5.5v13a.5.5 0 01-1 0v-13c0-.28.22-.5.5-.5zm-5 0c.28 0 .5.22.5.5v13a.5.5 0 01-.5.5H5a2 2 0 01-2-2V5c0-1.1.9-2 2-2h6.5zM7 4H5a1 1 0 00-1 1v2h3V4zm-3 8h3V8H4v4zm0 1v2a1 1 0 001 1h2v-3H4zm4 0v3h3v-3H8zm3-1V8H8v4h3zm0-8H8v3h3V4z" fill={primaryFill} /></svg>;
}

const TableStackRightRegular = wrapIcon(rawSvg({}), 'TableStackRightRegular');
export default TableStackRightRegular;
      