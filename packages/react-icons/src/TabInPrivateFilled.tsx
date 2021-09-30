import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.75 3A2.75 2.75 0 003 5.75v8.5A2.75 2.75 0 005.75 17h8.5A2.75 2.75 0 0017 14.25v-8.5A2.75 2.75 0 0014.25 3h-8.5zM4.5 5.75c0-.69.56-1.25 1.25-1.25h.31L4.5 6.36v-.61zm0 2.16L7.36 4.5h1.85L4.5 10.12v-2.2zm6.02-3.41h1.85L4.5 13.88v-2.2l6.02-7.18zm3.15 0h.58c.37 0 .7.16.93.41L6.29 15.5h-.54c-.38 0-.72-.17-.94-.43L13.67 4.5zm1.83 1.58v2.2L9.45 15.5H7.6l7.9-9.42zm0 3.76v2.2l-2.9 3.46h-1.85l4.75-5.66zm0 3.76v.65c0 .69-.56 1.25-1.25 1.25h-.34l1.59-1.9z" fill={primaryFill} /></svg>;
}

const TabInPrivateFilled = wrapIcon(rawSvg({}), 'TabInPrivateFilled');
export default TabInPrivateFilled;
      