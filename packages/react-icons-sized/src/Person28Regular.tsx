import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21 16a3 3 0 013 3v.71C24 23.3 19.79 26 14 26S4 23.43 4 19.71V19a3 3 0 013-3h14zm0 1.5H7c-.78 0-1.42.6-1.5 1.36v.85c0 2.68 3.39 4.79 8.5 4.79 4.93 0 8.35-2.1 8.5-4.62V19c0-.78-.6-1.42-1.36-1.5H21zM14 2a6 6 0 110 12 6 6 0 010-12zm0 1.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" fill={primaryFill} /></svg>;
}

const Person28Regular = wrapIcon(rawSvg({}), 'Person28Regular');
export default Person28Regular;
      