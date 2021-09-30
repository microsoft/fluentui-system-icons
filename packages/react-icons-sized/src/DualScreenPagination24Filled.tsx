import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.25 4C21.2 4 22 4.8 22 5.75v12.5c0 .96-.79 1.75-1.75 1.75H13c-.09 0-.17 0-.26-.02V4.02L13 4h7.25zM11 4c.08 0 .16 0 .24.02v15.96L11 20H3.75C2.78 20 2 19.2 2 18.25V5.75C2 4.78 2.78 4 3.75 4H11zm6.63 12.5a.75.75 0 100 1.5.75.75 0 000-1.5zm2.5 0a.75.75 0 100 1.5.75.75 0 000-1.5zm-5 0a.75.75 0 100 1.5.75.75 0 000-1.5z" fill={primaryFill} /></svg>;
}

const DualScreenPagination24Filled = wrapIcon(rawSvg({}), 'DualScreenPagination24Filled');
export default DualScreenPagination24Filled;
      