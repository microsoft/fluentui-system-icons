import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 2a2 2 0 00-2 2v8c0 1.1.9 2 2 2h8a2 2 0 002-2V4a2 2 0 00-2-2H4zM3 4a1 1 0 011-1h.82L3 5.16V4zm0 2.72L6.12 3H7.5L3 8.36V6.72zM8.8 3h1.39L3 11.57V9.92L8.8 3zm2.7 0h.5a1 1 0 01.66.25L4.48 13H4a1 1 0 01-.68-.26L11.5 3zM13 4.4v1.65L7.17 13H5.79L13 4.4zm0 3.2v1.65L9.85 13H8.47L13 7.6zm0 3.2V12a1 1 0 01-1 1h-.84L13 10.8z" fill={primaryFill} /></svg>;
}

const TabInPrivate16Regular = wrapIcon(rawSvg({}), 'TabInPrivate16Regular');
export default TabInPrivate16Regular;
      