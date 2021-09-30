import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.25 3H3.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5z" fill={primaryFill} /><path d="M3 9.75C3 8.51 4 7.5 5.25 7.5h13.5c1.24 0 2.25 1 2.25 2.25v4.5c0 1.24-1 2.25-2.25 2.25H5.25c-1.24 0-2.25-1-2.25-2.25v-4.5zM5.25 9a.75.75 0 00-.75.75v4.5c0 .41.34.75.75.75H8.5V9H5.25zM14 15V9h-4v6h4zm1.5 0h3.25c.41 0 .75-.34.75-.75v-4.5a.75.75 0 00-.75-.75H15.5v6z" fill={primaryFill} /><path d="M3.75 19.5h16.5a.75.75 0 010 1.5H3.75a.75.75 0 010-1.5z" fill={primaryFill} /></svg>;
}

const TableInsertRow24Regular = wrapIcon(rawSvg({}), 'TableInsertRow24Regular');
export default TableInsertRow24Regular;
      