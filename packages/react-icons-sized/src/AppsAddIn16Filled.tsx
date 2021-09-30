import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.25 1.75a.75.75 0 00-1.5 0v1h-1a.75.75 0 000 1.5h1v1a.75.75 0 001.5 0v-1h1a.75.75 0 000-1.5h-1v-1zM4 2a2 2 0 00-2 2v7.75c0 1.1.9 2 2 2h8a2 2 0 002-2v-2.5a2 2 0 00-2-2H8.75V4a2 2 0 00-2-2H4zm3.25 6.75v3.5H4a.5.5 0 01-.5-.5v-3h3.75zm0-4.75v3.25H3.5V4c0-.28.22-.5.5-.5h2.75c.28 0 .5.22.5.5zM12 12.25H8.75v-3.5H12c.28 0 .5.22.5.5v2.5a.5.5 0 01-.5.5z" fill={primaryFill} /></svg>;
}

const AppsAddIn16Filled = wrapIcon(rawSvg({}), 'AppsAddIn16Filled');
export default AppsAddIn16Filled;
      