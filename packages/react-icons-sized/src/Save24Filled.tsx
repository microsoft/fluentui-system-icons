import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.75 3h-1A2.75 2.75 0 003 5.75v12.5A2.75 2.75 0 005.75 21H6v-6c0-1.24 1-2.25 2.25-2.25h7.5c1.24 0 2.25 1 2.25 2.25v6h.25A2.75 2.75 0 0021 18.25V8.29c0-.87-.34-1.7-.95-2.3L18 3.95c-.6-.6-1.41-.94-2.26-.95v4.5c0 1.24-1 2.25-2.25 2.25H9c-1.24 0-2.25-1-2.25-2.25V3z" fill={primaryFill} /><path d="M14.25 3v4.5c0 .41-.34.75-.75.75H9a.75.75 0 01-.75-.75V3h6z" fill={primaryFill} /><path d="M16.5 21v-6a.75.75 0 00-.75-.75h-7.5a.75.75 0 00-.75.75v6h9z" fill={primaryFill} /></svg>;
}

const Save24Filled = wrapIcon(rawSvg({}), 'Save24Filled');
export default Save24Filled;
      