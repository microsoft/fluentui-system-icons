import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.07 3.3l1.32.99-1.96 2.05a.5.5 0 01-.36.16H2v-1A2.5 2.5 0 014.5 3h2.67c.32 0 .64.1.9.3z" fill={primaryFill} /><path d="M8.16 7.03l2.4-2.53h4.94A2.5 2.5 0 0118 6.84v3.42A5.5 5.5 0 009.6 17H4.5A2.5 2.5 0 012 14.5v-7h5.07c.41 0 .8-.17 1.09-.47z" fill={primaryFill} /><path d="M19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4.15-2.35a.5.5 0 00-.35-.15.5.5 0 00-.35.15l-2 2a.5.5 0 00.7.7L14 13.71v2.79a.5.5 0 101 0v-2.8l1.15 1.15a.5.5 0 10.7-.7l-2-2z" fill={primaryFill} /></svg>;
}

const FolderArrowUpFilled = wrapIcon(rawSvg({}), 'FolderArrowUpFilled');
export default FolderArrowUpFilled;
      