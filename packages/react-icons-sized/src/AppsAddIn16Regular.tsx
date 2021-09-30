import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 1.5a.5.5 0 00-1 0V3h-1.5a.5.5 0 000 1H12v1.5a.5.5 0 001 0V4h1.5a.5.5 0 000-1H13V1.5zM3.75 2C2.78 2 2 2.78 2 3.75v8.5c0 .97.78 1.75 1.75 1.75h8.5c.97 0 1.75-.78 1.75-1.75v-3c0-.97-.78-1.75-1.75-1.75H8.5V3.75C8.5 2.78 7.72 2 6.75 2h-3zM7.5 8.5V13H3.75a.75.75 0 01-.75-.75V8.5h4.5zm0-4.75V7.5H3V3.75c0-.41.34-.75.75-.75h3c.41 0 .75.34.75.75zM12.25 13H8.5V8.5h3.75c.41 0 .75.34.75.75v3c0 .41-.34.75-.75.75z" fill={primaryFill} /></svg>;
}

const AppsAddIn16Regular = wrapIcon(rawSvg({}), 'AppsAddIn16Regular');
export default AppsAddIn16Regular;
      