import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 2a4.25 4.25 0 00-.75 8.43v3.07h-4.5c-1.24 0-2.25 1-2.25 2.25v1.82a4.25 4.25 0 101.5 0v-1.82c0-.41.34-.75.75-.75h10.5c.41 0 .75.34.75.75v1.82a4.25 4.25 0 101.5 0v-1.82c0-1.24-1-2.25-2.25-2.25h-4.5v-3.07A4.25 4.25 0 0014 2zm-2.75 4.25a2.75 2.75 0 115.5 0 2.75 2.75 0 01-5.5 0zM4.5 21.75a2.75 2.75 0 115.5 0 2.75 2.75 0 01-5.5 0zM20.75 19a2.75 2.75 0 110 5.5 2.75 2.75 0 010-5.5z" fill={primaryFill} /></svg>;
}

const Organization28Regular = wrapIcon(rawSvg({}), 'Organization28Regular');
export default Organization28Regular;
      